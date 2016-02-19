//filter com objetivo de colocar a primeira letra do nome em maiusculo e o resto em minusculo
angular.module("listaTelefonica").filter("name", function () {
	return function (input) {
		//Quebra o texto em um array separado pelo espaço
		var listaDeNomes = input.split(" ");
		//cria uma lista com o nome formatado
		var listaDeNomesFormatada = listaDeNomesmap(function (nome){
			//caso o texto seja "da" ou "de" não devemos aplicar a regra do upper case
			if (/(da|de)/.test(nome)) return nome;
			//mapeia o array colocar upperCase a primeira letra e lowerCase no resto
			return nome.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
		});
		//com o array formatado gera uma string separada por espaço e retorna no filter
		return listaDeNomesFormatada.join(" ");
	};
});