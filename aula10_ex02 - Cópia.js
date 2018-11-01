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
function verifica(){
	email = document.getElementById('email').value;
	Nome = document.getElementById('Nome').value;
	if((email=="")||(Nome=="")){
		alert("campo(s) vazio(s)!!!");
	}else{
		if((email=="ramonoliveira0273@gmail.com")&&(Nome=="ramon de oliveira furtado")){
			window.location.href = "new 1.html";
		}else{
			alert("Usuário e/ou senha Inválido(s)!!!");
			LimparCampos();
		}
	}				
}