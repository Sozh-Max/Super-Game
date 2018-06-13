import dataTasks from './dataTasks.js';
import taskCreate from './taskCreate.js';
export default function(name){
	let data = dataTasks[name];
	let dataItem = data[_.random(data.length - 1)];
	return taskCreate[name](dataItem).then(result => {
			return result;
		}
	);
	
}