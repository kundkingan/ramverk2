let editId;

function remove(list) {
  window.location = window.location.href + '/delete/' + list['0'].classList[3];
}

function add() {
	let name = document.getElementById('name').value;
	if (name.length > 0) window.location = window.location.href + '/insert/' + name;
}

function edit() {
	let newName = document.getElementById('nameEdit').value;
	if (newName.length > 0) {
		window.location = window.location.href + '/edit/' + editId + '-' + newName;
		newName.addAttribute('disabled');
	}
}

function addToEdit(list) {
	let editInput = document.getElementById('nameEdit');
	editId = list['0'].classList[3];
	editInput.value = list['2']['children']['0']['children']['0'].innerText;
	editInput.removeAttribute('disabled');
}

