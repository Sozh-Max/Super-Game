import global from '../config.js';

export default function() {
	let damage = global.monster.damage;
	let fraction = global.monster.fraction;
	damage = Math.ceil(damage - damage * global.hero.defense[fraction]);
	damage = Math.ceil(_.random((damage * 0.8), (damage * 1.2)));
	if(global.hero.health > damage) {
		countingDamage();
	} else {
		damage = global.hero.health;
		countingDamage();
	}
	function countingDamage() {
		global.monsterAttackAudio.play();
		global.hero.health -= damage;
		global.globalDate.hero.classList.add('monster_attack');
		global.fightElement.heroHealth.innerHTML = global.hero.health;
		global.fightElement.heroRange.style.width = (100 / global.hero.healthMax * global.hero.health) + '%';
		let restore = Math.floor(global.monster.restore * damage);
		let health = global.monster.health + restore;
		let healthMax = global.monster.healthMax;
		if (health > healthMax) {
			health = healthMax;
		}
		global.monster.health = health;
		global.fightElement.monsterHealth.innerHTML = global.monster.health;
		global.fightElement.monsterRange.style.width = (100 / global.monster.healthMax * global.monster.health) + '%';

		setTimeout(() => {global.globalDate.hero.classList.remove('monster_attack')}, 2000);
	}
}