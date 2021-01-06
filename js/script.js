var modal = document.getElementById("popup");
var btn = document.getElementById("popup-id");
var div = document.getElementsByClassName("popup__close")[0];

btn.onclick = function () {
	modal.style.visibility = "visible", modal.style.opacity = "1", modal.style.transition = "all 1s";
}

div.onclick = function () {
	modal.style.visibility = "hidden", modal.style.opacity = "0", modal.style.transition = "all .3s";
}

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.visibility = "hidden", modal.style.opacity = "0", modal.style.transition = "all .3s";
	}
}

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu ul').toggleClass('active');
		$('body').toggleClass('lock')
	});
});
