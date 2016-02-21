angular.module("listaTelefonica").directive("uiAlert", function () {
	return{
		templateUrl: "view/alert.html",
		replace: true,		
		restrict: "AE",
		scope: {
			title: "@"
		},
		transclude: true
	};
});
/*======REPLACE======
	Substitui o elemento pelo template da diretiva.*/
/*======RESTRICT======
	Restringe o modo de utilização da diretiva ao atributo, elemento, classe e comentário, ou ainda uma combinação deles. 
	Caso não seja definido, o padrão é que a diretiva seja atribuída pelo atributo. 
	Os tipos de restrição são:
		A - Diretiva restrita ao atributo do elemento
		E - Diretiva restrita ao elemento
		C - Diretiva restrita a classe do elemento
		M - Diretiva restrita ao comentário do elemento
		Isso pode ser combinado

	A - Diretiva restrita ao atributo do elemento
		Ex.:
		<div ui-alert></div>

	E - Diretiva restrita ao elemento
		Ex.:
		<ui-alert></ui-alert>

	C - Diretiva restrita a classe do elemento
		Ex.:
		<div class="ui-alert"></div>

	M - Diretiva restrita ao comentário do elemento
		Ex.:
		<!-- directive:ui-alert-->
		<div></div>
*/
/*======SCOPE======
	Por padrão, uma diretiva compartilha o mesmo scope de onde é utilizada. 
	Para aumentar seu potencial de reuso, podemos isolar seu scope, passando os dados necessários por parâmetro.

	Prefixando a propriedade da diretiva:

	@ - Vincula o valor do atributo diretamente a uma propriedade do scope da diretiva.
	    Caso o atributo da diretiva seja igual ao valor do scope da diretiva,
	    é necessário apenas colocar @.
			Ex.1:
				 scope: {
					topic: "@title"
				}  
			Ex.2:
				 scope: {
					title: "@"
				}
	= - Cria um vínculo bi-direcional entre uma propriedade do scope do template
		a uma propriedade do scope da diretiva.
			Ex.1:
				 scope: {
					message: "=error"
				} 
			Ex.2:
				 scope: {
					message: "="
				}
	*/
/*======TRANSCLUDE======
	Encapsula elementos dentro de uma diretiva, criando um scope não isolado.
		Ex.: 
		<div class="ui-alert-message" ng-transclude></div>
	*/