import dataTasks from './dataTasks.js';
import taskCreate from './taskCreate.js';
export default function(name){
	let data = dataTasks[name];
	let number = _.random(data.length - 1);
	let dataItem = _.clone(data[number]);
	return taskCreate[name](dataItem, name, number).then(result => {
			return result;
	});
}