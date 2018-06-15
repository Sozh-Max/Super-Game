export default function(tumbler) {
	let modal = document.getElementById('modal_result');
	if(tumbler === 'show'){
		modal.classList.add('active');
		setTimeout(()=>{modal.classList.add('show')},50);
	}
	if(tumbler === 'hide'){
		modal.classList.remove('show');
		setTimeout(()=>{modal.classList.remove('active')},400);
	}
}