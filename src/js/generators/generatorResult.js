import global from '../config.js';

export default function() {
	let ul = document.createElement('ul');
	let objParse = JSON.parse(localStorage.getItem('superGame'));
	let list = global.templates.resultBlock(objParse.result);
	ul.innerHTML = list;
	global.globalDate.resultBlock.appendChild(ul);
}