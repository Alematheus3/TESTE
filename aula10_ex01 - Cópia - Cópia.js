function A(){
	document.getElementById('bairro').disabled = true;
	document.getElementById('endereco').disabled = true;
	document.getElementById('cidade').disabled = true;
}

function B(){
	document.getElementById('bairro').disabled = false;
	document.getElementById('endereco').disabled = false;
	document.getElementById('cidade').disabled = true;
}

function C(){
	document.getElementById('bairro').disabled = false;
	document.getElementById('endereco').disabled = false;
	document.getElementById('cidade').disabled = false;
}
function D(){
	document.getElementById('nome').disabled = true;
	document.getElementById('bairro').disabled = false;
	document.getElementById('endereco').disabled = false;
	document.getElementById('cidade').disabled = false;
}