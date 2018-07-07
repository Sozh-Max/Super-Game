import global from '../config.js';
import monster from './monsterGenerator';
import gamePageFill from '../gameModule/gamePageFill.js';

export default function(){
	monster();
	gamePageFill(global.monster);
	global.fightElement.monsterRange.style.width = 100 +'%';
}