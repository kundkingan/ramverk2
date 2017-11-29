let editId = null;

function save() {
	let inputs = getInputs();
	let path = inputs.name  + '-' + inputs.address + '-' + inputs.city + '-' + editId;
	if (inputs.name.length > 0 && inputs.address.length > 0 && inputs.city.length > 0) {
		window.location = window.location.href + '/save/' + path
		editId = null;
		document.getElementById('edit').addAttribute('disabled');
	}
}

function remove(list) {
  window.location = window.location.href + '/delete/' + list['0'].classList[3];
}

function fillInputs(event) {
	editId = event['0'].classList[3];
	document.getElementById('name').value = event['2']['children']['0']['children']['0'].innerText;
	document.getElementById('address').value = event['2']['children']['1']['children']['0'].innerText;
	document.getElementById('city').value = event['2']['children']['2']['children']['0'].innerText;
}

function getInputs() {
	return {
		name: document.getElementById('name').value,
		address: document.getElementById('address').value,
		city: document.getElementById('city').value,
	}
}

