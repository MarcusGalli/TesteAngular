angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
	var _getContatos = function () {
		return $http.get(config.baseUrl + "/contatos");
	};

	var _saveContato = function () {
		return $http.post(config.baseUrl + "/contatos");
	};

	return {
		getContatos: _getContatos,
		saveContato: _saveContato
	};
});