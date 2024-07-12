import checkTextInputs from './modules/checkTextInputs';
import forms from './modules/forms';
import mask from './modules/mask';
import modals from './modules/modals';
import sliders from './modules/sliders';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/clac';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	modals();
	sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
	sliders('.main-slider-item', '.vertical');
	forms();
	mask('[name="phone"]');
	checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  showMoreStyles('.button-styles', '#styles .row');
  calc('#size', '#material', '#options', '.promocode', '.calc-price');
});