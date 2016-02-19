angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter, $http, contatosAPI, operadorasAPI, serialGenerator){
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.operadoras = [];
	
	var carregarContatos = function () {
		contatosAPI.getContatos().success(function (data) {
			$scope.contatos = data;
		}).error(function (data, status) {
			$scope.error = "Aconteceu um problema: " + data;
		});
	};
	var carregarOperadoras = function () {
		operadorasAPI.getOperadoras().success(function (data) {
			$scope.operadoras = data;
		}).error(function (data, status) {
			$scope.error = "Aconteceu um problema: " + data;
		});
	};

	$scope.adicionarContato = function (contato) {
		contato.serial = serialGenerator.generate();
		contato.data = new Date();
		contatosAPI.saveContato().success(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	};
	$scope.apagarContatos = function (contatos){
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function (contatos) {
	    return contatos.some(function (contato) {
	        return contato.selecionado;
	    });
	};
	$scope.ordenarPor = function (campo) {
	    $scope.criterioDeOrdenacao = campo;
	    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	carregarContatos();
	carregarOperadoras();
});