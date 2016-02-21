angular.module("listaTelefonica").directive("uiDate", function ($filter) {
	return {
		require: "ngModel",
		link: function (scope, element, attrs, ctrl) {
			var _formatDate = function (date) {
				//troca tudo que não for numero por string vazia.
				date = date.replace(/[^0-9]+/g, "");
				if (date.length > 2) {
					date = date.substring(0,2) + "/" + date.substring(2);
				}
				if (date.length > 5) {
					date = date.substring(0,5) + "/" + date.substring(5,9);
				}
				return date;
			};

			element.bind("keyup", function () {
				ctrl.$setViewValue(_formatDate(ctr.$viewValue));
				ctrl.render();
			});

			//Para interseptar o valor do bind que será adicionado ao $scope
			//e manipulalo de acordo com a regra necessária.
			ctrl.$parsers.push( function (value) {
				/*APENAS PARA EXEMPLO
					Caso queira que o valor exibido em tela seja a data, devidamente formatada por essa diretiva.
					Mas que o valor que aparecerá no $scope seja a data em milisegundos, 
					faremos o segunite código no $parsers:*/
				if (value.length === 10) {
					var dateArray = value.split("/");
					return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime();
				}
			});

			ctrl.$formatters.push( function (value) {
				/*APENAS PARA EXEMPLO
					Caso contrario ao anterior onde o valor que temos no $scope seja por padrão em milisegundos
					mas o valor que será apresentado no campo deve ser no formato de data literal.
					Faremos então o seguinte código no $formatters:*/

				//Importamos $filter e utilizando um filtro padrão do angular convertemos a data.
				return $filter("date")(value, "dd/MM/yyyy");
			});
		}
	};
});
/*======REQUIRED====== 
	Estabelece um vinculo com outra diretiva, interagindo por meio do controller,
	que é um dos parâmetros da função link, será o quarto parâmetro.
*/
/*======LINK====== 
	Executada depois do template ter sido compilado, podemos utilizá-la para interagir com o DOM, 
	trabalhando eventos ou mesmo para definir o comportamento associado com a lógica da diretiva.
	Parâmetros:
		scope:
			É passivel trabalhar com o $scope, se a diretiva não for isolada será o mesmo $scope da tela.
		element:
			É o angular.element, ver na documentação do angular.
			http://docs.angularjs.org/api/ng/function/angular.element
		attrs:
			São os atributos desse elemento.
		ctrl: 
			Referência para o controle especificado no required.
			Neste exemplo se refere ao ngModel.


	Nesta diretiva temos como objetivo formatar a data digitada em um campo do formulário.
	Para isso foi criada uma função privada que formata a data (_formatDate).

	element.bind
		Utilizado para determinar a execução de uma função em um determinado evento.
		Com o ngModel capturamos o valor digitado, passamos pelo metodo que formata
		a data (_formatDate) e renderizamos isso no controle.

	ctrl.$parsers		
		Array de funções para execução, tal como uma pilha, sempre que o controlo lê o valor do DOM . 
		As funções são chamadas na ordem do array, cada um passando o valor de retorno para a próxima. 
		O último valor de retorno é encaminhado para o array de validadores ($validators).

		Com ele podemos determinar se o valor ira ou não para o $scope.

	ctrl.$formatters
		Array de funções para execução, tal como uma pilha, sempre que hover alterações de valor do modelo. 
		As funções são chamadas na ordem contraria do array, cada um passando o valor de retorno para a próxima. 
		O último valor de retorno é utilizada como o valor do DOM. 
		Usado para formatar / converter valores para exibição no controle.

	Para ver os metodos disponiveis no ngModel acesse o link:
		https://docs.angularjs.org/api/ng/type/ngModel.NgModelController
	Para ver os metodos disponiveis no element acesse o link:
		https://docs.angularjs.org/api/ng/function/angular.element
*/