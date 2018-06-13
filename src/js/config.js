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
};

let hero = {
	nikneim: 'none',
	fraction: document.querySelector('.fraction_block.active').getAttribute('data-fraction'),
};

let fightElement = {
	monsterName: document.getElementById('monster_name'),
	monsterHealth: document.getElementById('moster_health'),
	monsterHealthMax: document.getElementById('moster_health_max'),
	monsterRange: document.getElementById('moster_range'),
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
}



export default {globalDate, fightElement, hero};