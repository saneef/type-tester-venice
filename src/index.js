import domready from 'domready';

import style from "./main.css";

const getAllValues = (elements) => elements.map(el => el.value);
const getArticleEl = () => document.querySelector('.article')

domready(() => {
	const buttons = Array.from(document.querySelectorAll('.style-selector__btn'));

	buttons.forEach(btn => {
		btn.addEventListener('click', e => {
			const articleEl = getArticleEl();
			getAllValues(buttons).forEach(name => articleEl.classList.remove(`article--type-${name}`));

			articleEl.classList.add(`article--type-${e.target.value}`)
		});
	});
});

