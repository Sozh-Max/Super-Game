export default function(fraction) {
	let heroImg = {
		life: 'src/img/life_pers.png',
		chaos: 'src/img/chaos_pers.png',
		shadow: 'src/img/shadow_pers.png',
	}
	let img = `<img src="${heroImg[fraction]}" alt="">`
	document.getElementById('hero').innerHTML = img;
}