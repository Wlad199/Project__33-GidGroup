// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Функционал слайдера-слик (MW 3.2)
//$(document).ready(function () {
//	$('.comment__body').slick();
//})

// Add class =================//

$('.body-one-question__item').click(function () {
	$('.body-one-question__item').removeClass('_active')
	$(this).addClass('_active')
})
