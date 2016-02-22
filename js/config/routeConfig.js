angular.module("listaTelefonica").config(function ($routeProvider) {
	$routeProvider.when("/contatos", {
		templateUrl: "view/contatos.html",
		controller: "listaTelefonicaCtrl",
		resolve: {
			contatos: function (contatosAPI) {
				return contatosAPI.getContatos();
			},
			operadoras: function (operadorasAPI) {
				return operadorasAPI.getOperadoras();
			}
		}
	});
	$routeProvider.when("/novoContato", {
		templateUrl: "view/novoContato.html",
		controller: "novoContatoCtrl",
		resolve: {
			operadoras: function (operadorasAPI) {
				return operadorasAPI.getOperadoras();
			}
		}
	});
	$routeProvider.when("/detalheContato/:id", {
		templateUrl: "view/detalheContato.html",
		controller: "detalheContatoCtrl",
		resolve: {
			contato: function (contatosAPI, $route) {
				return contatosAPI.getOperadoras($route.current.params.id);
			}
		}
	});
	$routeProvider.otherwise({redirectTo: "/contatos"});
});

/*
	route object
		Objeto de configuração de cada rota, permite configurar diversos
		aspectos do roteamento.
*/