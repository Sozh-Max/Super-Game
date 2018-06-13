import global from '../config.js';

export default {
	translateEnglish: function(date){
		let word = date.word;
		let answer = date.translate;
		let finish;

		global.fightElement.tqName.innerHTML = 'Перевести с английского.';
		global.fightElement.taskContainer.innerHTML = templates(word);
		function taskDecision() {
			return new Promise((resolve, reject) => {
				global.fightElement.taskAply.addEventListener('click', function() {
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
							finish = result;
							resolve(result);
						} else {
							global.fightElement.reportQuest.setAttribute('class', 'report_quest false');
							setTimeout(() => {
								global.fightElement.reportQuest.setAttribute('class', 'report_quest');
							}, 5000);
							finish = result;
							resolve(result);
						}
					}
					function handlerEnter(info){
						return answer.indexOf(info.trim().toLowerCase());
					}
				});
			});
		}

		return taskDecision();
		

		
		
		function templates(word){
			return `<div class="translateEnglish_task" id="translateEnglish">
				<div class="word_text">
					Переведите с английского на русский слово:
				</div>
				<div class="word_block">${word}</div>
				<div class="word_input">
					<input type="text" class="word_answer">
				</div>
			</div>`
		};
	},

}