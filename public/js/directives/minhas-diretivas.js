angular
    .module('minhasDiretivas', [])
    .directive('minhaFoto', function (){
            var ddo = 
                {
                scope:  {
                        titulo: '@', /* copie o valor da expressao 'titulo' nesta variavel */
                        url: '@'
                        },
                restrict: 'AE', /* restringe o uso do modulo como uma diretiva de A - Atributo e E - Elemento, nao foi marcada a C - comentario */
                template: ''
                    +   '       <img class="img-responsive center-block"  '
                    +   '         ng-src="{{url}}" alt="sem imagem" title="{{titulo}}"> '
                    +   '       </img>'
                };
                return ddo;
    })
    .directive('meuPainel', function (){
            var ddo = 
                {
                scope:  {
                        titulo: '@', /* copie o valor da expressao 'titulo' nesta variavel */
                        url: '@'
                        },
                restrict: 'AE', /* restringe o uso do modulo como uma diretiva de A - Atributo e E - Elemento, nao foi marcada a C - comentario */
                transclude: true,
                template: 
                        '<div class="panel panel-default">'
                    +   '   <div class="panel-heading">'
                    +   '       <h3 class="panel-title text-center">{{titulo}}</h3>'
                    +   '   </div>'
                    +   '   <div class="panel-body" ng-transclude>'
                    +   '   </div>'
                    +   '</div>'
                };
        return ddo;
        })
;