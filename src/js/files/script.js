// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Функционал слайдера-слик (MW 3.2)
//$(document).ready(function () {
//	$('.comment__body').slick();
//})

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