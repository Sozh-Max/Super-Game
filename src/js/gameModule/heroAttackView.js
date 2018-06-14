import global from '../config.js';

export default function(damage, fraction){
	if(global.monster.health > damage){
		countingDamage();
	} else {
		damage = global.monster.health;
		countingDamage();
		global.monster.state = false;
	}
	function countingDamage(){
		global.globalDate.monster.classList.add(fraction);
		global.monster.health -= damage;
		global.hero.score += damage;
		global.fightElement.scoreTotal.innerHTML = global.hero.score;
		global.fightElement.monsterHealth.innerHTML = global.monster.health;
		global.fightElement.monsterRange.style.width = (100 / global.monster.healthMax * global.monster.health) + '%';
		let restore = Math.floor(global.hero.restore * damage);
		let health = global.hero.health + restore;
		let healthMax = global.hero.healthMax;
		if (health > healthMax) {
			health = healthMax;
		}
		global.hero.health = health;
		global.fightElement.heroHealth.innerHTML = global.hero.health;
		global.fightElement.heroRange.style.width = (100 / global.hero.healthMax * global.hero.health) + '%';
		setTimeout(() => {global.globalDate.monster.classList.remove(fraction)}, 2000);
	}
}