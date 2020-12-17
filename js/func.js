document.addEventListener("DOMContentLoaded", () => {


	/* Показать номер телефона при клике на кнопку */
	if (screen.width > 767) {
		function _callClick(event) {
			callToPhone.removeEventListener("click", _callClick);
			let d = this.children[0];
			d.innerText = d.getAttribute('data-calltophone');
		}

		let callToPhone = document.getElementById('callToPhone');
		callToPhone.addEventListener("click", _callClick);
	}


});