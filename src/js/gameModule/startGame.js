import global from '../config.js';
import monster from '../generators/monsterGenerator';
import fractionHeroValue from '../fractionSetting/fractionHeroValue';
import heroFill from './heroFill.js';
import gamePageFill from './gamePageFill.js';
import modalAttack from './modalAttack.js';
import fight from './fight.js';
import heroView from '../generators/heroView.js';

import taskLoader from '../tasks/taskLoader.js';

export default function(){
	heroFill(fractionHeroValue[global.hero.fraction]);
	heroView(global.hero.fraction);
	gamePageFill(monster);
	//setTimeout(()=>{modalAttack('show')},1000);
	//fight();
	taskLoader();

}



