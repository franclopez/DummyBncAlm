angular.module('appalm.conexionSrvc', [])

.service("Conexion", function($http, $q, $rootScope){

    var servicio = {
        con: function(){
            var deferred = $q.defer();
            $http.post($rootScope.URL_BACKEND).success(function(datos){
                deferred.resolve(datos);
            }).error(function(e){
                deferred.reject("Error en la solicitud. Codigo de error: "+e);
            });
            return deferred.promise;
        },
        getDatos: function(servicio,datos){
            console.log('entra a get');
            var deferred = $q.defer();
            var servicio = $rootScope.conf.URL_BACKEND+servicio;
            $http.post(servicio, datos)
                .success(function(datos){
                    console.log('entra a success');
                    if(datos.headerRS.statusCode == 000 || datos.headerRS.StatusCode == 000){
                        deferred.resolve(datos);
                    }else{
                        deferred.reject(datos);
                    }
                })
                .error(function(e){
                    console.log('entra a error');
                    deferred.reject("Error en la conexion. Codigo de error: "+e);
                });
            return deferred.promise;
        }
    };

    return servicio;
});