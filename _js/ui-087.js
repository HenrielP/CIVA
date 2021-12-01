window.onload = function() {
	document.getElementById("cad").onsubmit = tratarCamposAvancado;
}



tratarCamposAvancado = function() {
	var temErro = false;
	var camposErro = "";
	var campos = new Array("nome", "identidade", "nascimento", "pais", "ponto", "crm", "email", "contato", "senha", "confirmacao");
		
	for(x = 0; x < campos.length; x++) {
		if (document.getElementById(campos[x]).value=="") {
			camposErro = camposErro + campos[x] + ",";
			temErro = true;
		}		
	}
	
	
	if (temErro) {
		camposErro = camposErro.substr(0,camposErro.length-1);
		alert("Todos os campos são obrigatórios!");
	}
  
    else{
		alert("Cadastro concluído com sucesso")
	}
	
	return !temErro;

}