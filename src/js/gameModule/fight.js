import global from '../config.js';
import taskloader from '../tasks/taskloader.js';
import modalAttack from './modalAttack.js';
import modalTask from './modalTask.js';
import heroAttack from './heroAttack.js';
import monsterAttack from './monsterAttack.js';


export default function() {
	let btnsKick = global.fightElement.btnsFight;
	let damage;
	let attackActive = false;
	btnsKick.forEach(elem => {
		elem.addEventListener('click', function(){
			if(!this.hasAttribute('data-stop')){
				modalAttack('hide');
				setTimeout(()=>{modalTask('show')},1000);
				taskloader().then(result => {
					return result;
				}).then(result => {
					if(result){
						setTimeout(() => {heroAttack(this)}, 1500);
					}
					return result;
				}).then(result => {
					if(result){
						setTimeout(() => {
							if( global.monster.state ) {
								monsterAttack();
							}
						}, 4000);
					} else {
						setTimeout(() => {
							if( global.monster.state ) {
								monsterAttack();
							}
						}, 1500);
					}
				}).then(() => {
					setTimeout(() => {
						attackActive = true;
					}, 4000);
				});
			}
			btnsKick.forEach(item => {
				item.setAttribute('data-stop', 'stop');
				setTimeout(()=>{item.removeAttribute('data-stop')}, 1500);
			})
		});
	});
	
	setInterval(() => {
		if(attackActive){
			setTimeout(()=>{modalAttack('show')},1000);
		}
	}, 500);
}