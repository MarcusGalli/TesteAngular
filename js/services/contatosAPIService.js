angular.module("listaTelefonica").factory("contatosAPI", function ($http) {
	var _getContatos = function () {
		return $http.get("http://localhost:1234/contatos");
	};

	var _saveContato = function () {
		return $http.post("http://localhost:1234/contatos");
	};

	return {
		getContatos: _getContatos,
		saveContato: _saveContato
	};
});