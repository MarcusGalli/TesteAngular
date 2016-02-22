angular.module("listaTelefonica").controller("novoContatoCtrl", function($scope, contatosAPI, operadorasAPI, serialGenerator, $location, operadoras){
	$scope.operadoras = operadoras.data;

	$scope.adicionarContato = function (contato) {
		contato.serial = serialGenerator.generate();
		contato.data = new Date();
		contatosAPI.saveContato().success(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			location.path("/contatos");
		});
	};
});