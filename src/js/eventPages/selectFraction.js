import global from '../config.js';
export default function (){
	let fractionIco = document.querySelectorAll('.select_section .fraction_block');
	let length = fractionIco.length;
	for	(let i = 0; i < length; i++){
		fractionIco[i].addEventListener('click', function(){
			if(!this.classList.contains('active')){
				document.querySelector('.fraction_block.active').classList.remove('active');
				this.classList.add('active');
				global.hero.fraction = this.getAttribute('data-fraction');
			}
		});
	}
};