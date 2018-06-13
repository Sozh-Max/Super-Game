import dataTasks from './dataTasks.js';
import tasksHandler from './tasksHandler.js';
export default function(name){
	if (name === undefined){
		let taskName = [];
		_.each(dataTasks, function(item, index){
			taskName.push(index);
		})
		name = taskName[_.random(taskName.length - 1)];
	}
	return tasksHandler(name).then(result => {
		return result;
	});
}