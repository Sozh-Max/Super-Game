import loadAudio from './audio/loadAudio.js';

let backgroundMusic = loadAudio('../../src/audio/background.mp3', '0.2');
let monsterAttackAudio = loadAudio('../../src/audio/monsterAttack.mp3', '1');
let heroAttackAudio = {
	life: loadAudio('../../src/audio/life.mp3', '1'),
	shadow: loadAudio('../../src/audio/shadow.mp3', '1'),
	chaos: loadAudio('../../src/audio/chaos.mp3', '1'),
}

backgroundMusic.dom.autoplay = true;
backgroundMusic.dom.loop = true;

let globalDate = {
	welcomePage: document.getElementById('welcome_section'),
	registrePage: document.getElementById('registre_section'),
	selectPage: document.getElementById('select_section'),
	gamePage: document.getElementById('game_section'),
	btnWelcome: document.getElementById('to_registre'),
	formPersonal: document.getElementById('personal_form'),
	btnStartGame: document.getElementById('start_game'),
	inputPerson: document.getElementById('input_person'),
	saluteName: document.getElementById('salute_name'),
	hero: document.getElementById('hero'),
	monster: document.getElementById('monster'),
	resultBlock: document.getElementById('result_block'),
	gameResult: document.getElementById('game_result'),
	toSelect: document.getElementById('to_select'),
	toResult: document.getElementById('to_result'),
	tableResult: document.getElementById('table_result'),
	resultCount: document.getElementById('result_count'),
};

let hero = {
	nikneim: 'none',
	fraction: document.querySelector('.fraction_block.active').getAttribute('data-fraction'),
};

let fightElement = {
	monsterName: document.getElementById('monster_name'),
	monsterHealth: document.getElementById('moster_health'),
	monsterHealthMax: document.getElementById('moster_health_max'),
	monsterRange: document.getElementById('monster_range'),
	heroName: document.getElementById('hero_name'),
	heroHealth: document.getElementById('hero_health'),
	heroHealthMax: document.getElementById('hero_health_max'),
	heroRange: document.getElementById('hero_range'),
	scoreTotal: document.getElementById('score_total'),
	btnsFight: document.querySelectorAll('.modal_attack .btn_fight'),
	tqName: document.getElementById('task_question_name'),
	taskContainer: document.getElementById('task_container'),
	taskAply: document.getElementById('task_apply'),
	reportQuest: document.getElementById('report_quest'),
};

let monster = {}

let templates = {
	resultBlock: function(arr){

		let str = ``
		arr.forEach(function(item, i, arr){
			let name = arr[i].name;
			let score = arr[i].score;
			str +=	`<li>
								<div class="li_wrap">
									<div class="name">${name}</div>
									<div class="result">${score}</div>
								</div>
							</li>`
		});
		return str;

	}
}

export default {globalDate, fightElement, hero, monster, templates, backgroundMusic, monsterAttackAudio, heroAttackAudio};