export default function(head, body, foot){
	let monsterOnMap = document.getElementById('monster');
	monsterOnMap.innerHTML = `
<div class="monster_head">
	<img src="${head}" alt="">
</div>
<div class="monster_body">
	<img src="${body}" alt="">
</div>
<div class="monster_foot">
	<img src="${foot}" alt="">
</div>`
}