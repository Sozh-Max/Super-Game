import global from '../config.js';
import monsterCreate from '../generators/monsterCreate.js';
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
						
					}, 4300);
				}).then(() => {
					setTimeout(() => {
						if(global.hero.health <= 0){
							
						} else if(global.monster.health <= 0) {
							console.log(global.monster);
							monsterCreate();
							global.fightElement.monsterRange.style.width = 100 +'%';
							console.log(global.monster);
							setTimeout(()=>{modalAttack('show')},1000);
							
						} else {
							attackActive = true;
						}
					}, 4400);

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
			attackActive = false;
		}
	}, 500);
}