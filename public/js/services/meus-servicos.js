angular
        .module('meusServicos', ['ngResource'])
        .factory('recursoFoto', function($resource) {
                return $resource('/v1/fotos/:fotoId', null, {
                    'update': {
                        method: 'PUT'
                    }
                });
        })
        .factory('cadastroDeFotos', function(recursoFoto, $q){
                var service = {};
                service.cadastrar = function(foto){
                    return $q(function(resolve, reject){
                        if(foto._id){
                            recursoFoto
                                .update({fotoId: foto._id}, 
                                        foto,
                                        function(){ /* success */
                                            resolve({msg: 'Imagem salva - OK', inclusao: false});
                                        },
                                        function(erro){ /* error */
                                            reject({msg: 'Falha ao alterar foto.'});
                                        });
                        }else{
                            recursoFoto
                                .save(foto,
                                        function(){ /*on success*/
                                            resolve({msg: 'Imagem salva - OK', inclusao: true});
                                        },
                                        function(erro){ /* on error */
                                            reject({msg: 'Falha ao alterar foto.'});
                                        });
                        }
                    });
                };
                return service;
        });