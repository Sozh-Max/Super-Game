export default function(fraction) {
	let heroImg = {
		life: 'img/life_pers.png',
		chaos: 'img/chaos_pers.png',
		shadow: 'img/shadow_pers.png',
	}
	let img = `<img src="${heroImg[fraction]}" alt="">`
	document.getElementById('hero').innerHTML = img;
}