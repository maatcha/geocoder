const autoCompleteList = document.getElementById('autocomplete-list');
const userEntry = document.querySelector('#adress');

const autoFillForm = (event) => {
	userEntry.value = event.currentTarget.innerText;
	autoCompleteList.innerHTML = '';
	autoCompleteList.style.border = '';
};

const displayAutoCompletion = (data) => {
	(data.hits).forEach((hit) => {
		if (hit.locale_names !== undefined && hit.postcode !== undefined && hit.city !== undefined) {
			const line = `<li>${hit.locale_names.default}, ${hit.postcode} ${hit.city.default}</li>`;
			autoCompleteList.insertAdjacentHTML('beforeend', line);
			autoCompleteList.style.border = '1px solid rgba(150,150,150,0.5)';
			const autocompleteListItems = document.querySelectorAll('#autocomplete-list li');
			autocompleteListItems.forEach((autocompleteListItem) => {
				autocompleteListItem.addEventListener('click', autoFillForm);
			});
		};
	});	
};

const searchForAutoComplete = (userEntry) => {
	const query = event.currentTarget.value;
	const url = 'https://places-dsn.algolia.net/1/places/query';
	fetch(url, {
		method: 'POST',
		body: JSON.stringify({ query: query })
	})
		.then(response => response.json())
		.then(displayAutoCompletion);
};

const adressAutoComplete = (event) => {
	autoCompleteList.innerHTML = '';
	searchForAutoComplete(userEntry.value);
}

export { adressAutoComplete };
			

//WAS IN displayAutoCompletion
				// const line = null;
				// if (hit.locale_names.default === undefined) {
				// 	const line = `<li>${hit.postcode} ${hit.city.default}</li>`;
				// 	autoCompleteList.insertAdjacentHTML('beforeend', line);
				// 	autoCompleteList.style.border = '1px solid rgba(150,150,150,0.5)';
				// } else 