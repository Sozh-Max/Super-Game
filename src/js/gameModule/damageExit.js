import global from '../config.js';
export default function(elem){
	let fraction = elem.getAttribute('data-fraction');
	let factorDamage = global.hero.damageFactor[fraction];
	let damage = global.hero.damage;
	let damageExit = factorDamage * damage;
	return Math.ceil(damageExit);
}