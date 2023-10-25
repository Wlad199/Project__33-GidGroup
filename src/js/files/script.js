// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Функционал слайдера-слик (MW 3.2)
$(document).ready(function () {
	$('.comment__body').slick({
		dots: true,
		slidesToShow: 1,
		//autoplay: true, // автовоспроизведение (false)
		//autoplaySpeed: 1000, // скорость (3000)
	});
})

// Add class question #1 =================//

$('.body-one-question__item').click(function () {
	$('.body-one-question__item').removeClass('_active')
	$(this).addClass('_active')
})


// Add class question #2 =================//

$('.item-two-body__image').click(function () {
	$('.item-two-body__image').removeClass('_active')
	$(this).addClass('_active')
})
// Add class question #3 =================//

$('.item-body').click(function () {
	$('.item-body').removeClass('_active')
	$(this).addClass('_active')
})


// page-choice =================//

$('.button-description').click(function () {
	$('.button-process').removeClass('_active')
	$('.button-description').addClass('_active')
	$('.project').css('display', 'block')
	$('.process').css('display', 'none')
})

$('.button-process').click(function () {
	$('.button-description').removeClass('_active')
	$('.button-process').addClass('_active')
	$('.process').css('display', 'block')
	$('.project').css('display', 'none')
})