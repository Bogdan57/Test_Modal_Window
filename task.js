let modal_main = document.querySelector('#modal_main');
let modal__close = document.querySelectorAll('div.modal__close');
let modal_success = document.querySelector('#modal_success');
modal_main.className = 'modal modal_active';

modal__close[0].onclick = function(){
    modal_main.className = 'modal'
}
show_success.onclick = function(){
    modal_main.className = 'modal'
    modal_success.className = 'modal modal_active';
}

show_success.onclick = function(){
	function showModal(id){
		$(document.body).addClass('is-open-modal');
		$(id).addClass('is-open');
		console.log(id);
	}
	function hideModals(){
		$(document.body).removeClass('is-open-modal');
		$('.modal').removeClass('is-open');
	}

	$(".modal-open").on('click', function(e){
		console.log(e);
		showModal('#modal');
 });
	
	$(document).on('click', function(e){
		if (!(
		($(e.target).parents('.modal__content').length)
		||	($(e.target).hasClass('modal__content'))
		||	($(e.target).hasClass('modal-open')))
		) {
			hideModals();
		}
	});
	
};