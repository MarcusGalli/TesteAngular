angular.module("listaTelefonica").controller("detalhesContatoCtrl", function($scope, $routeParams, contatosAPI, contato){
	$scope.contato = contato.data;
});