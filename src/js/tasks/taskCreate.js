import $ from 'jquery';
import global from '../config.js';
import modalTask from '../gameModule/modalTask.js';
import dataTasks from './dataTasks.js';


function returnResult(result, resolve) {
	if (result){
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

function templateTranslateEnglish(word) {
	return `<div class="translateEnglish_task">
		<div class="word_text">
			Переведите с английского на русский слово:
		</div>
		<div class="word_block">${word}</div>
		<div class="word_input">
			<input type="text" class="word_answer">
		</div>
	</div>`;
};

function templateMathematicalOperations(count) {
	return `<div class="mathematicalOperations">
		<div class="math_text">
			Запишите результат целым числом, округленным до ближайшего целого.
		</div>
		<div class="math_block">${count}</div>
		<div class="math_input">
			<input type="text" class="math_answer">
		</div>
	</div>`;
};

function templateSortable(word) {
	let str = `<div class="sortable_task">
		<ul>`;
		word.forEach(function(item, i, arr){
			let letter = word[i];
			str += `<li data-letter="${letter}">${letter}</li>`
		});
str +=	`</ul>
			</div>`;
	return str;
}

function templateJavaScript(image, array) {
	let str = `<div class="javascript">
	<div class="js_text">
		Что покажет console.log() в данном случае:
	</div>
	<div class="js_img">
		<img src="${image}" alt="">
	</div>
	<div class="js_variants">`
	array.forEach(function(item, i, arr){
		let letter = array[i];
		
	str += `<div class="radio_block">
			<label>
				<input type="radio" name="js" value="${letter}"` 
				if(i===0){
					str += ` checked `
				}; 
				str += `>
				<span>${letter}</span>
			</label>
		</div>`
		});
	str += `</div>
	</div>`
	return str;
}

function templateGeometry(text) {
	return `<div class="geometry">
						<div class="geometry_text">${text}</div>
						<div class="geometry_text">
							Запишите результат целым числом, округленным до ближайшего целого.
						</div>
						<div class="geometry_input">
							<input type="text" class="geometry_answer">
						</div>
					</div>`;
}

function removeEvents() {
	global.fightElement.taskAply.removeEventListener('click', window.clickHandlerTranslate);
	global.fightElement.taskAply.removeEventListener('click', window.clickHandlerSortable);
	global.fightElement.taskAply.removeEventListener('click', window.clickHandlerMathem);
	global.fightElement.taskAply.removeEventListener('click', window.clickHandlerJavaScript);
	global.fightElement.taskAply.removeEventListener('click', window.clickHandlerGeometry);
}


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
				removeEvents();
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
						returnResult(result, resolve);
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

				removeEvents();
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
						returnResult(result, resolve);
					}
				};

				global.fightElement.taskAply.addEventListener('click', window.clickHandlerMathem);
			});
		}
		return taskDecision();	
	},

	sortable: function(data) {
		let word = data.word;
		let arrView = data.arr;
		global.fightElement.tqName.innerHTML = 'Соберите слово на английском языке:';
		
		function taskDecision() {
			let result;
			return new Promise((resolve, reject) => {
				
				global.fightElement.taskContainer.innerHTML = templateSortable(arrView);
				$('.sortable_task ul').sortable();

				removeEvents();
				window.clickHandlerSortable = function() {
					if(!this.hasAttribute('data-stop')) {
						this.setAttribute('data-stop', 'stop');
						setTimeout(() => { this.removeAttribute('data-stop') }, 5000);
						let list = document.querySelectorAll('.sortable_task li');
						let length = list.length;
						let value = '';
						for (let i = 0; i < length; i++) {
							value += list[i].getAttribute('data-letter');
						}
						result = (word === value) ? true : false;
						returnResult(result, resolve);
					}
				};

				global.fightElement.taskAply.addEventListener('click', window.clickHandlerSortable);
			});
		}
		return taskDecision();
	},

	javaScript: function(data) {
		let rightResult = data.res;
		let image = data.img;
		let variants = data.variants;
		global.fightElement.tqName.innerHTML = 'JavaScript';
		
		function taskDecision() {
			let result;
			return new Promise((resolve, reject) => {
				
				global.fightElement.taskContainer.innerHTML = templateJavaScript(image, variants);

				removeEvents();
				window.clickHandlerJavaScript = function() {
					if(!this.hasAttribute('data-stop')) {
						this.setAttribute('data-stop', 'stop');
						setTimeout(() => { this.removeAttribute('data-stop') }, 5000);

						let value = document.querySelector('input[name="js"]:checked').value;
						
						result = (rightResult === value) ? true : false;
						returnResult(result, resolve);
					}
				};

				global.fightElement.taskAply.addEventListener('click', window.clickHandlerJavaScript);
			});
		}
		return taskDecision();
	},

	geometry: function(data) {
		global.fightElement.tqName.innerHTML = data.name;
		console.log(data);


		function taskDecision() {
			return new Promise((resolve, reject) => {
				let result;
				let number = _.random(1, 10);
				let text = data.condition(number);
				let count = Math.round(data.formula(number));
				global.fightElement.taskContainer.innerHTML = templateGeometry(text);
				console.log(count);
				removeEvents();
				window.clickHandlerGeometry = function() {
					if(!this.hasAttribute('data-stop')) {
						let value = Number(document.querySelector('.geometry .geometry_answer').value);
						if(value.length < 1){
							global.fightElement.reportQuest.setAttribute('class', 'report_quest empty');
							return false;
						}
						this.setAttribute('data-stop', 'stop');
						setTimeout(() => { this.removeAttribute('data-stop') }, 5000);
						console.log(value);
						result = (count === value) ? true : false;
						returnResult(result, resolve);
					}
				};

				global.fightElement.taskAply.addEventListener('click', window.clickHandlerGeometry);
			});
		}
		return taskDecision();	
	}
}