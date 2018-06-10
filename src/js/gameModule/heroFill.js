import global from '../config.js';
export default function(heroValue){
	global.hero.health = heroValue.health;
	global.hero.healthMax = heroValue.health;
	global.hero.damage = heroValue.damage;
	global.hero.restore = heroValue.restore;
	global.hero.damageFactor = _.clone(heroValue.damageFactor);
	global.hero.defense = _.clone(heroValue.defense);
	global.hero.score = 0;
}