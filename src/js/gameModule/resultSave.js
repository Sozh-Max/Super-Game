import global from '../config.js';
export default function() {
	let objParse = JSON.parse(localStorage.getItem('superGame'));
	let length = objParse.result.length;
	let that = this;

	for(let i = 0; i <= length; i++) {
		if(i === length){
			objParse.result[i] = addResult(this);
			break;
		}
		if(objParse.result[i].score <= global.hero.score) {
			objParse.result.splice(i, 0, addResult(this));
			break;
		}
	}

	objParse.result.splice(10, 5);
	
	let objJSON = JSON.stringify(objParse);
	localStorage.setItem('superGame', objJSON);
	
	function addResult(that){
		return {
			name: global.hero.nikneim,
			score: global.hero.score
		}
	}
}