import global from '../config.js';
import selectFraction from './selectFraction.js';
import modalResult from '../gameModule/modalResult.js';
import generatorResult from '../generators/generatorResult.js';
import game from '../gameModule/startGame.js';

let elemsPage = global.globalDate;

selectFraction();

elemsPage.btnWelcome.addEventListener('click', ()=>{
	showAndHidePage(elemsPage.welcomePage, elemsPage.registrePage);
})

elemsPage.formPersonal.addEventListener('submit', (e)=>{
	e.preventDefault();
	let personName = elemsPage.inputPerson.value;
	global.hero.nikneim = personName;
	elemsPage.saluteName.innerHTML = personName;
	showAndHidePage(elemsPage.registrePage, elemsPage.selectPage);
});

elemsPage.toSelect.addEventListener('click', ()=>{
	showAndHidePage(elemsPage.gameResult, elemsPage.selectPage);
	setTimeout(() => {elemsPage.resultBlock.innerHTML = ''}, 1000);
});

elemsPage.toResult.addEventListener('click', ()=>{
	showAndHidePage(elemsPage.gamePage, elemsPage.gameResult);
	modalResult('hide');
	generatorResult();
});

elemsPage.tableResult.addEventListener('click', ()=>{
	showAndHidePage(elemsPage.selectPage, elemsPage.gameResult);
	generatorResult();
});


elemsPage.btnStartGame.addEventListener('click', ()=>{
	game();
	showAndHidePage(elemsPage.selectPage, elemsPage.gamePage);
});


function showAndHidePage(hide, show){
	hide.classList.remove('active');
	show.classList.add('active');
}