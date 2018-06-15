import global from '../config.js';
import fractionHeroValue from '../fractionSetting/fractionHeroValue';
import heroFill from './heroFill.js';
import modalAttack from './modalAttack.js';
import fight from './fight.js';
import heroView from '../generators/heroView.js';
import monsterCreate from '../generators/monsterCreate.js';


export default function(){
	
	heroFill(fractionHeroValue[global.hero.fraction]);
	heroView(global.hero.fraction);
	monsterCreate();
	setTimeout(()=>{modalAttack('show')},1000);
	fight();

}



