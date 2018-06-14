import global from '../config.js';
import monster from '../generators/monsterGenerator';
import fractionHeroValue from '../fractionSetting/fractionHeroValue';
import heroFill from './heroFill.js';
import gamePageFill from './gamePageFill.js';
import modalAttack from './modalAttack.js';
import fight from './fight.js';
import heroView from '../generators/heroView.js';


export default function(){
	monster();
	heroFill(fractionHeroValue[global.hero.fraction]);
	heroView(global.hero.fraction);
	gamePageFill(global.monster);
	setTimeout(()=>{modalAttack('show')},1000);
	fight();

}



