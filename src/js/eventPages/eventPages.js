import global from '../config.js';
import selectFraction from './selectFraction.js';
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
})

function showAndHidePage(hide, show){
	hide.classList.remove('active');
	show.classList.add('active');
}