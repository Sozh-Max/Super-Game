export default function() {
	let nameArrays = {
		startName: ['Добрый', 'Злой', 'Гнустный', 'Мирный', 'Вежливый','Мерзкий', 'Сиплый', 'Кровожадный', 'Наглый', 'Светлый', 'Чудо', 'Славный', 'Отвратный'],
		centerName: ['мясник', 'сисадмин', 'разбойник', 'живодер', 'дворник', 'программист', 'строитель', 'сторож', 'солдат', 'директор', 'президент'],
		lastName: ['Коля', 'Вася', 'Петя', 'Дима', 'Боря', 'Толя', 'Вова', 'Ваня', 'Женя', 'Витя', 'Саша', 'Жорж']
	};
	let startNameGen = nameArrays.startName[_.random(0, nameArrays.startName.length - 1)];
	let centerNameGen = nameArrays.centerName[_.random(0, nameArrays.centerName.length - 1)];
	let lastNameGen = nameArrays.lastName[_.random(0, nameArrays.lastName.length - 1)];
	let nameMonster = `${startNameGen} ${centerNameGen} ${lastNameGen}`;
	return nameMonster;
}