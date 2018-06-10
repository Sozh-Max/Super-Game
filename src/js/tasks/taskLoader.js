import dataTasks from './dataTasks.js';
import tasksHundler from './tasksHundler.js';
export default function(name){
	if (name === undefined){
		let taskName = [];
		_.each(dataTasks, function(item, index){
			taskName.push(index);
		})
		name = taskName[_.random(taskName.length - 1)];
		tasksHundler(name);
	} else {
		tasksHundler(name);
	}
}