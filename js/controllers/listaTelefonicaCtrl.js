angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter, $http, operadoras, contatos, serialGenerator){
	$scope.app = "Lista Telefonica";
	$scope.contatos = contatos.data;
	$scope.operadoras = operadoras.data;	
	
	var generateSerial = function (contatos) {
		contatos.forEach(function (item) {
			item.serial = serialGenerator.generate();
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

	generateSerial(contatos);
});