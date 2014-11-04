angular.module('appalm.configuracion', [])

.factory("Configuracion", function($http, $q){

    var conf = {            
        ini: function(){
            ARCHIVO_PROPERTIES = 'alm.properties';
            REGEX = {
                comentario: /^#|^!/g,
                enter: /\r\n|\r|\n/g,
                separadorPropiedadValor: '='
            };
            MSJS_ERROR = {
                campoVacio: 'No agrega campos vacios',
                noArchivo: 'No se pueden iniciar los servicios.',
                noDivision: 'Hay un error en la lectura de archivos.',
                nuevoIntento: ' Por favor cierre la app y vuelva a intentarlo'
            };
            PRUEBA_DIVISION = '# Linea de verificacion. No modificar esta linea ni anterior';
            var deferred = $q.defer();
            var propiedades = {};
            
            if (window.File && window.FileReader && window.FileList && window.Blob){
                $http.get(ARCHIVO_PROPERTIES).success(function(archivo){        
                    
                    filas = archivo.split(REGEX.enter);
                    
                    filas = conf.eliminarComentarios(filas);
                    
                    angular.forEach(filas,function(fila){
                        fila = conf.eliminarVacios(fila.split(REGEX.separadorPropiedadValor));
                        if(fila[0] == undefined || fila[0] == 'undefined' || fila[0] == '' || 
                           fila[1] == undefined || fila[1] == 'undefined' || fila[1] == ''){
                            //console.log(MSJS_ERROR.campoVacio);
                        }else{
                            propiedades[fila[0]] = fila[1];
                        }
                    });
                    deferred.resolve(propiedades);
                }).error(function(e){
                    deferred.reject(MSJ_ERROR+':'+e);
                });
            }else{
                alert(MSJS_ERROR.noArchivo+MSJS_ERROR.nuevoIntento);
            }
            return deferred.promise;
        },
        eliminarVacios: function(registro){
            var objeto = [];
            if(registro[0] && registro[1]){
                objeto.push(registro[0].trim());
                objeto.push(registro[1].trim());
                return objeto;
            }else{
                return false;
            }
            return false;
        },
        eliminarComentarios: function(datos){
            var datosSinComentarios = [];
            angular.forEach(datos,function(fila){
                if(fila.match(REGEX.comentario)){
                   //console.log('Comentario'+fila);
                }else{
                    if(fila === '' || fila == undefined || fila.length === 0){
                        //console.log('');
                    }else{
                        datosSinComentarios.push(fila);
                    }
                }
            });
            return datosSinComentarios;
        }
    };
    return conf;
});
