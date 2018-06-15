import global from '../config.js';
import nameGenerator from '../generators/nameGenerator';
import fractionHeroValue from '../fractionSetting/fractionHeroValue.js';

export default function(monster) {
	global.fightElement.monsterName.innerHTML = nameGenerator();
	global.fightElement.monsterHealth.innerHTML = monster.health;
	global.fightElement.monsterHealthMax.innerHTML = monster.health;
	global.fightElement.monsterName.setAttribute('class', '' + monster.fraction + ' monster_name');
	global.fightElement.heroName.innerHTML = global.hero.nikneim;
	global.fightElement.heroHealth.innerHTML = global.hero.health;
	global.fightElement.heroHealthMax.innerHTML = fractionHeroValue[global.hero.fraction].health;
	global.fightElement.heroName.setAttribute('class', '' + global.hero.fraction + ' hero_name');
}