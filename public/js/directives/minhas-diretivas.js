angular
    .module('minhasDiretivas', [])
    .directive('minhaFoto', function (){
            var ddo = 
                {
                scope:  {
                        titulo: '@', /* copie o valor da expressao 'titulo' nesta variavel */
                        url: '@'
                        },
                restrict: 'AE',
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
                restrict: 'AE',
                /* restringe o uso do modulo como uma diretiva de 
                    A - Atributo
                    E - Elemento
                    C - comentario */
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
    .directive('meuBotaoPerigo', function (){
            var ddo = 
                {
                scope:  {
                        nome: '@', /* utilizado para fazer o encaminhamento da STRING informada */
                        acao: '&' /* utilizado para fazer o encaminhamento da FUNÇÃO informada */
                        },
                restrict: 'E',
                template: 
                         '<button class="btn btn-danger btn-block" '
                    +    '    ng-click="acao()">{{nome}}'
                    +    '</button>'
                };
        return ddo;
        })
    /**
    * Diretiva para permitir a utilização do datepicker do jquery no angular
    **/
    .directive('meuDatePicker', function($timeout){
            var ddo = 
                {
                scope:  {},
                restrict: 'E',
                link: /* será executada assim que a diretiva 'meuDatePicker' for carregada */
                    function(scope, element){
                        $(element).datepicker({
                            onSelect: function(date){
                                $timeout(function(){
                                    scope.date = date;
                                });
                            }});
                    }
                };
        return ddo;
    })
    .directive('meuFocus', function(){
        var ddo = {
            restrict: 'A',
            scope: {
                focado: '='  /* utilizado para fazer um BIND de uma variável */
            },
            link:
                    function (scope, element){
                        /* função $watch para acompanhar o valor da variável */
                        scope.$watch('focado', function(){
                            console.log('focando');
                            if(scope.focado){
                                element[0].focus();
                                scope.focado=false;
                            }
                        });
                    }

        };
        return ddo;
    })
;