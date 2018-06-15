import dataTasks from './dataTasks.js';
import taskCreate from './taskCreate.js';
export default function(name){
	let data = dataTasks[name];
	let number = _.random(data.length - 1);
	let dataItem = _.clone(data[number]);
	data.splice(number, 1);
	return taskCreate[name](dataItem).then(result => {
			return result;
	});
}