import global from '../config.js';
import damageExit from './damageExit.js';
// import taskloader from '../tasks/taskloader.js';
import modalAttack from './modalAttack.js';
import modalTask from './modalTask.js';


export default function() {
	let btnsKick = global.fightElement.btnsFight;
	let damage;
	btnsKick.forEach((elem)=>{
			elem.addEventListener('click', function(){
				if(!this.hasAttribute('data-stop')){
					damage = damageExit(this);
					console.log(damage);
					modalAttack('hide');
					setTimeout(()=>{modalTask('show')},500);
				}
				btnsKick.forEach((item)=>{
					item.setAttribute('data-stop', 'stop');
					setTimeout(()=>{item.removeAttribute('data-stop')},1500);
				})
			})
	});
	
}