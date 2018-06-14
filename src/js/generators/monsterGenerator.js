import global from '../config.js';
import monsterPuzzle from '../fractionSetting/monstersPuzzle.js';
import monsterView from './monsterView.js';
let monsterHead = monsterPuzzle.monsterHead[_.random(0, monsterPuzzle.monsterHead.length -1)];
let monsterBody = monsterPuzzle.monsterBody[_.random(0, monsterPuzzle.monsterBody.length -1)];
let monsterFoot = monsterPuzzle.monsterFoot[_.random(0, monsterPuzzle.monsterFoot.length -1)];
monsterView(monsterHead.img, monsterBody.img, monsterFoot.img);
export default function() {
	global.monster.fraction = monsterBody.fraction;
	global.monster.health = monsterHead.health + monsterBody.health + monsterFoot.health;
	global.monster.healthMax = monsterHead.health + monsterBody.health + monsterFoot.health;
	global.monster.defense = {
		life: Number((monsterHead.defense.life + monsterBody.defense.life + monsterFoot.defense.life).toFixed(3)),
		chaos: Number((monsterHead.defense.chaos + monsterBody.defense.chaos + monsterFoot.defense.chaos).toFixed(3)),
		shadow: Number((monsterHead.defense.shadow + monsterBody.defense.shadow + monsterFoot.defense.shadow).toFixed(3)),
	};
	global.monster.restore = Number((monsterHead.restore + monsterBody.restore + monsterFoot.restore).toFixed(3));
	global.monster.damage = monsterHead.damage + monsterBody.damage + monsterFoot.damage;
	global.monster.state = true;
}