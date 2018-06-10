import global from '../config.js';
import damageExit from './damageExit.js';
// import taskloader from '../tasks/taskloader.js';
export default function() {
	let btnsKick = global.fightElement.btnsFight;
	btnsKick.forEach((elem)=>{
			elem.addEventListener('click', function(){
				let damage = damageExit(this);
				// let task = taskloader();
				
			})

	})
}