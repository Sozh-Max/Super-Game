import global from '../config.js';
import heroAttackView from './heroAttackView.js';
export default function(elem){
	let fraction = elem.getAttribute('data-fraction');
	let factorDamage = global.hero.damageFactor[fraction];
	let damage = global.hero.damage;
	let factorDefence = global.monster.defense[fraction];
	let damageExit = factorDamage * damage;
	damageExit = damageExit - damageExit * factorDefence;
	let damageTotal = Math.ceil(_.random((damageExit * 0.8), (damageExit * 1.2)));
	heroAttackView(damageTotal, fraction);
}