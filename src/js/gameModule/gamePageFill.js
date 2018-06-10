import global from '../config.js';
import nameGenerator from '../generators/nameGenerator';

export default function(monster) {
	global.fightElement.monsterName.innerHTML = nameGenerator();
	global.fightElement.monsterHealth.innerHTML = monster.health;
	global.fightElement.monsterHealthMax.innerHTML = monster.health;
	global.fightElement.monsterName.classList.add(monster.fraction);
	global.fightElement.heroName.innerHTML = global.hero.nikneim;
	global.fightElement.heroHealth.innerHTML = global.hero.health;
	global.fightElement.heroHealthMax.innerHTML = global.hero.health;
	global.fightElement.heroName.classList.add(global.hero.fraction);
	global.fightElement.scoreTotal.innerHTML = 0;
}