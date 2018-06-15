import global from '../config.js';
import modalTask from '../gameModule/modalTask.js';
import dataTasks from './dataTasks.js';

function templateTranslateEnglish(word){
	return `<div class="translateEnglish_task">
		<div class="word_text">
			Переведите с английского на русский слово:
		</div>
		<div class="word_block">${word}</div>
		<div class="word_input">
			<input type="text" class="word_answer">
		</div>
	</div>`
};

function templateMathematicalOperations(count){
	return `<div class="mathematicalOperations">
	<div class="math_text">
		Запишите результат целым числом, округленным до ближайшего целого.
	</div>
	<div class="math_block">${count}</div>
	<div class="math_input">
		<input type="text" class="math_answer">
	</div>
</div>`
};


export default {
	translateEnglish: function(data, name, number){
		dataTasks[name].splice(number, 1);
		let word = data.word;
		let answer = data.translate;
		global.fightElement.tqName.innerHTML = 'Перевести с английского.';
		global.fightElement.taskContainer.innerHTML = templateTranslateEnglish(word);
		function taskDecision() {
				let value;
				let result;
				let inputEnter;
				return new Promise((resolve, reject) => {
					if ( window.clickHandlerTranslate ) {
						global.fightElement.taskAply.removeEventListener('click', window.clickHandlerTranslate);
					}
					window.clickHandlerTranslate = function() {
						if(!this.hasAttribute('data-stop')) {
							let value = document.querySelector('.translateEnglish_task .word_answer').value;
							let result;
							let inputEnter;
							if(value.length < 1){
								global.fightElement.reportQuest.setAttribute('class', 'report_quest empty');
								return false;
							}
							this.setAttribute('data-stop', 'stop');
							setTimeout(() => { this.removeAttribute('data-stop') }, 5000);
							inputEnter = handlerEnter(value);

							result = (inputEnter >= 0) ? true : false;
							if(result){
								global.fightElement.reportQuest.setAttribute('class', 'report_quest true');
								setTimeout(() => {
									global.fightElement.reportQuest.setAttribute('class', 'report_quest');
								}, 5000);
								setTimeout(() => {
									modalTask('hide');
									global.fightElement.taskContainer.innerHTML = '';
									global.fightElement.tqName.innerHTML = '';
								}, 1000);
								resolve(result);
							} else {
								global.fightElement.reportQuest.setAttribute('class', 'report_quest false');
								setTimeout(() => {
									global.fightElement.reportQuest.setAttribute('class', 'report_quest');
								}, 5000);
								setTimeout(()=>{
									modalTask('hide');
									global.fightElement.taskContainer.innerHTML = '';
									global.fightElement.tqName.innerHTML = '';
								},1000);
								resolve(result);
							}
						}
						function handlerEnter(info){
							return answer.indexOf(info.trim().toLowerCase());
						}
					};

					global.fightElement.taskAply.addEventListener('click', window.clickHandlerTranslate);
			});

		}
		return taskDecision();
	},

	mathematicalOperations: function(data) {
		global.fightElement.tqName.innerHTML = 'Посчитайте данное выражение.';
		function taskDecision() {
			return new Promise((resolve, reject) => {
				let result;
				let number = data.number;
				let symbolArray = ['+', '-', '*', '/'];
				let str = '';
				let count;
				for (let i = 0; i < number; i++) {
					if(i === 0){
						str += _.random(10);
					} else {
						let symbol = symbolArray[_.random(3)];
						str = str + ' ' + symbol + ' ';
						(symbol === '/') ? str += _.random(1, 10) : str += _.random(10);
					}
				}
				count = Math.round(eval(str));
				global.fightElement.taskContainer.innerHTML = templateMathematicalOperations(str);

				if ( window.clickHandlerMathem ) {
					global.fightElement.taskAply.removeEventListener('click', window.clickHandlerMathem);
				}
				window.clickHandlerMathem = function() {
					if(!this.hasAttribute('data-stop')) {
						let value = Number(document.querySelector('.mathematicalOperations .math_answer').value);
						if(value.length < 1){
							global.fightElement.reportQuest.setAttribute('class', 'report_quest empty');
							return false;
						}
						this.setAttribute('data-stop', 'stop');
						setTimeout(() => { this.removeAttribute('data-stop') }, 5000);

						result = (count === value) ? true : false;
						if(result){
							global.fightElement.reportQuest.setAttribute('class', 'report_quest true');
							setTimeout(() => {
								global.fightElement.reportQuest.setAttribute('class', 'report_quest');
							}, 5000);
							setTimeout(() => {
								modalTask('hide');
								global.fightElement.taskContainer.innerHTML = '';
								global.fightElement.tqName.innerHTML = '';
							}, 1000);
							resolve(result);
						} else {
							global.fightElement.reportQuest.setAttribute('class', 'report_quest false');
							setTimeout(() => {
								global.fightElement.reportQuest.setAttribute('class', 'report_quest');
							}, 5000);
							setTimeout(()=>{
								modalTask('hide');
								global.fightElement.taskContainer.innerHTML = '';
								global.fightElement.tqName.innerHTML = '';
							},1000);
							resolve(result);
						}


					}
				};

				global.fightElement.taskAply.addEventListener('click', window.clickHandlerMathem);
			});

	}
	return taskDecision();

		
	},
}