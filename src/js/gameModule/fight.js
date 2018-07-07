import global from '../config.js';
import monsterCreate from '../generators/monsterCreate.js';
import taskloader from '../tasks/taskloader.js';
import modalAttack from './modalAttack.js';
import modalResult from './modalResult.js';
import modalTask from './modalTask.js';
import heroAttack from './heroAttack.js';
import monsterAttack from './monsterAttack.js';
import resultSave from './resultSave.js';

let modalAnimationTime = 1000;
let monsterAttackTime = 1500;
let btnFightPauseTime = 1500;
let checkingLivePersonsTime = 500;

const pause = async (time) => {
	return new Promise((resolve) => {
			setTimeout(resolve, time);
	});
};


export default function() {
	let btnsKick = global.fightElement.btnsFight;
	let damage;
	let attackActive = false;
	btnsKick.forEach(elem => {
		elem.addEventListener('click', function(){
			let that = this;
			if(!that.hasAttribute('data-stop')){
				modalAttack('hide');
				setTimeout(()=>{modalTask('show')}, modalAnimationTime);
				taskloader().then(result => {
					return result;
				}).then(async function(result) {
					let heroAttackTime = 0;
					if(result){
						heroAttackTime = 1500;
						setTimeout(() => {heroAttack(that);}, heroAttackTime);
					}
					await pause(heroAttackTime);
				}).then(async function() {
					setTimeout(() => {
						if( global.monster.state ) {
							monsterAttack();
						}
					}, monsterAttackTime);
					console.log(monsterAttackTime);
					await pause(monsterAttackTime);
				}).then(() => {
					console.log('test');
					if(global.hero.health <= 0){
						resultSave();
						global.globalDate.resultCount.innerHTML = global.hero.score;
						setTimeout(()=>{modalResult('show')}, modalAnimationTime);
					} else if (global.monster.health <= 0) {
						monsterCreate();
						setTimeout(()=>{modalAttack('show')}, modalAnimationTime);
					} else {
						console.log(modalAnimationTime);
						attackActive = true;
					}
				});
			}
			btnsKick.forEach(item => {
				item.setAttribute('data-stop', 'stop');
				setTimeout(()=>{item.removeAttribute('data-stop')}, btnFightPauseTime);
			})
		});
	});
	
	setInterval(() => {
		if(attackActive){
			setTimeout(()=>{modalAttack('show')}, modalAnimationTime);
			attackActive = false;
		}
	}, checkingLivePersonsTime);
}