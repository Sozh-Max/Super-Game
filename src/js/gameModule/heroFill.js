import global from '../config.js';
import fractionHeroValue from '../fractionSetting/fractionHeroValue.js';

export default function(heroValue){
	global.hero.health = heroValue.health;
	global.hero.healthMax = fractionHeroValue[global.hero.fraction].health;
	global.hero.damage = heroValue.damage;
	global.hero.restore = heroValue.restore;
	global.hero.damageFactor = _.clone(heroValue.damageFactor);
	global.hero.defense = _.clone(heroValue.defense);
	global.hero.score = 0;
	global.hero.state = true;
	global.fightElement.scoreTotal.innerHTML = 0;
	global.fightElement.heroRange.style.width = 100 + '%';
}