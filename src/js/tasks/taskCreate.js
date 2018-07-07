import $ from 'jquery';
import global from '../config.js';
import modalTask from '../gameModule/modalTask.js';
import dataTasks from './dataTasks.js';
import templateTaskModal from './templateTaskModal.js';


function returnResult(result, resolve) {
	let animationTime = 1000;
	let beforeAnimationTime = 5000;
	if (result){
		global.fightElement.reportQuest.setAttribute('class', 'report_quest true');
	} else {
		global.fightElement.reportQuest.setAttribute('class', 'report_quest false');
	}
	setTimeout(() => {
		global.fightElement.reportQuest.setAttribute('class', 'report_quest');
	}, beforeAnimationTime);
	setTimeout(() => {
		modalTask('hide');
		global.fightElement.taskContainer.innerHTML = '';
		global.fightElement.tqName.innerHTML = '';
	}, animationTime);
	resolve(result);
}

function removeEvents() {
	global.fightElement.taskAply.removeEventListener('click', window.clickHandlerTranslate);
	global.fightElement.taskAply.removeEventListener('click', window.clickHandlerSortable);
	global.fightElement.taskAply.removeEventListener('click', window.clickHandlerMathem);
	global.fightElement.taskAply.removeEventListener('click', window.clickHandlerJavaScript);
	global.fightElement.taskAply.removeEventListener('click', window.clickHandlerGeometry);
	global.fightElement.taskAply.removeEventListener('click', window.clickHandlerPuzzles);
	global.fightElement.taskAply.removeEventListener('click', window.clickHandlerEmpty);
	global.fightElement.taskAply.removeEventListener('click', window.clickHandlerComparison);
	global.fightElement.taskAply.removeEventListener('click', window.clickHandlerSpeech);
}

let buttonDisableTime = 5000;


export default {
	translateEnglish: function(data, name, number){
		let word = data.word;
		let answer = data.translate;
		global.fightElement.tqName.innerHTML = 'Перевести с английского.';
		global.fightElement.taskContainer.innerHTML = templateTaskModal.templateTranslateEnglish(word);
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
						setTimeout(() => { this.removeAttribute('data-stop') }, buttonDisableTime);
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
				global.fightElement.taskContainer.innerHTML = templateTaskModal.templateMathematicalOperations(str);
				removeEvents();
				window.clickHandlerMathem = function() {
					if(!this.hasAttribute('data-stop')) {
						let value = Number(document.querySelector('.mathematicalOperations .math_answer').value);
						if(value.length < 1){
							global.fightElement.reportQuest.setAttribute('class', 'report_quest empty');
							return false;
						}
						this.setAttribute('data-stop', 'stop');
						setTimeout(() => { this.removeAttribute('data-stop') }, buttonDisableTime);
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
		global.fightElement.tqName.innerHTML = 'Соберите слово на английском, или русском языке:';
		function taskDecision() {
			let result;
			return new Promise((resolve, reject) => {
				global.fightElement.taskContainer.innerHTML = templateTaskModal.templateSortable(arrView);
				$('.sortable_task ul').sortable();
				removeEvents();
				window.clickHandlerSortable = function() {
					if(!this.hasAttribute('data-stop')) {
						this.setAttribute('data-stop', 'stop');
						setTimeout(() => { this.removeAttribute('data-stop') }, buttonDisableTime);
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
				global.fightElement.taskContainer.innerHTML = templateTaskModal.templateJavaScript(image, variants);
				removeEvents();
				window.clickHandlerJavaScript = function() {
					if(!this.hasAttribute('data-stop')) {
						this.setAttribute('data-stop', 'stop');
						setTimeout(() => { this.removeAttribute('data-stop') }, buttonDisableTime);
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
		function taskDecision() {
			return new Promise((resolve, reject) => {
				let result;
				let number = _.random(1, 10);
				let text = data.condition(number);
				let count = Math.round(data.formula(number));
				global.fightElement.taskContainer.innerHTML = templateTaskModal.templateGeometry(text);
				removeEvents();
				window.clickHandlerGeometry = function() {
					if(!this.hasAttribute('data-stop')) {
						let value = Number(document.querySelector('.geometry .geometry_answer').value);
						if(value.length < 1){
							global.fightElement.reportQuest.setAttribute('class', 'report_quest empty');
							return false;
						}
						this.setAttribute('data-stop', 'stop');
						setTimeout(() => { this.removeAttribute('data-stop') }, buttonDisableTime);
						result = (count === value) ? true : false;
						returnResult(result, resolve);
					}
				};
				global.fightElement.taskAply.addEventListener('click', window.clickHandlerGeometry);
			});
		}
		return taskDecision();	
	},

	puzzles: function(data) {
		global.fightElement.tqName.innerHTML = 'Отгадайте загадку.';
		global.fightElement.taskContainer.innerHTML = templateTaskModal.templatePuzzles(data.question);
		function taskDecision() {
			let value;
			let result;
			let inputEnter;
			return new Promise((resolve, reject) => {
				removeEvents();
				window.clickHandlerPuzzles = function() {
					if(!this.hasAttribute('data-stop')) {
						let value = document.querySelector('.puzzles .puzzles_answer').value;
						let result;
						let inputEnter;
						if(value.length < 1){
							global.fightElement.reportQuest.setAttribute('class', 'report_quest empty');
							return false;
						}
						this.setAttribute('data-stop', 'stop');
						setTimeout(() => { this.removeAttribute('data-stop') }, buttonDisableTime);
						inputEnter = handlerEnter(value);
						result = (inputEnter >= 0) ? true : false;
						returnResult(result, resolve);
					}
					function handlerEnter(info){
						return data.answer.indexOf(info.trim().toLowerCase());
					}
				};
				global.fightElement.taskAply.addEventListener('click', window.clickHandlerPuzzles);
			});
		}
		return taskDecision();
	},

	emptyString: function(data) {
		global.fightElement.tqName.innerHTML = 'Вставьте недостающую букву, или буквы.';
		global.fightElement.taskContainer.innerHTML = templateTaskModal.templateEmptyString(data.word);
		function taskDecision() {
			let value;
			let result;
			let inputEnter;
			return new Promise((resolve, reject) => {
				removeEvents();
				window.clickHandlerEmpty = function() {
					if(!this.hasAttribute('data-stop')) {
						let value = document.querySelector('.empty .empty_answer').value;
						let result;
						let inputEnter;
						if(value.length < 1){
							global.fightElement.reportQuest.setAttribute('class', 'report_quest empty');
							return false;
						}
						this.setAttribute('data-stop', 'stop');
						setTimeout(() => { this.removeAttribute('data-stop') }, buttonDisableTime);
						inputEnter = data.handler(value);
						result = (inputEnter === data.wordRes) ? true : false;
						returnResult(result, resolve);
					}
				};
				global.fightElement.taskAply.addEventListener('click', window.clickHandlerEmpty);
			});
		}
		return taskDecision();
	},

	comparison: function() {
		global.fightElement.tqName.innerHTML = 'Выполните задание';
		let numbLeft = _.random(20);
		let numbRight = _.random(20);
		global.fightElement.taskContainer.innerHTML = templateTaskModal.templateComparison(numbLeft, numbRight);
		function taskDecision() {
			let result;
			return new Promise((resolve, reject) => {
				removeEvents();
				window.clickHandlerComparison = function() {
					if(!this.hasAttribute('data-stop')) {
						let value = document.querySelector('.comparison .input_symbol').value;
						if(value.length < 1){
							global.fightElement.reportQuest.setAttribute('class', 'report_quest empty');
							return false;
						}
						if (value === '=' || value === '>' || value === '<') {
							if (value === '='){
								value = '==='
							}
							this.setAttribute('data-stop', 'stop');
							setTimeout(() => { this.removeAttribute('data-stop') }, buttonDisableTime);
							result = handlerEnter(numbLeft, value, numbRight);
							returnResult(result, resolve);
						} else {
							global.fightElement.reportQuest.setAttribute('class', 'report_quest empty');
							return false;
						}
					}
					function handlerEnter(numbLeft, value, numbRight){
						return eval(`${numbLeft} ${value} ${numbRight}`);
					}
				};
				global.fightElement.taskAply.addEventListener('click', window.clickHandlerComparison);
			});
		}
		return taskDecision();
	},

	speech: function(data) {
		global.fightElement.tqName.innerHTML = 'Запишите, что Вы слышите:';
		let text = new SpeechSynthesisUtterance(data.text);
		function taskDecision() {
			return new Promise((resolve, reject) => {
				let result;
				global.fightElement.taskContainer.innerHTML = templateTaskModal.templateSpeech();
				document.querySelector('.speech .btn_speech').addEventListener('click', () => {
					speechSynthesis.speak(text);
				});
				removeEvents();
				window.clickHandlerSpeech = function() {
					if(!this.hasAttribute('data-stop')) {
						let value = document.querySelector('.speech_answer').value;
						value = value.trim().toLowerCase();
						if(value.length < 1){
							global.fightElement.reportQuest.setAttribute('class', 'report_quest empty');
							return false;
						}
						this.setAttribute('data-stop', 'stop');
						setTimeout(() => { this.removeAttribute('data-stop') }, buttonDisableTime);
						result = (data.text === value) ? true : false;
						returnResult(result, resolve);
					}
				};
				global.fightElement.taskAply.addEventListener('click', window.clickHandlerSpeech);
			});
		}
		return taskDecision();
	},



}