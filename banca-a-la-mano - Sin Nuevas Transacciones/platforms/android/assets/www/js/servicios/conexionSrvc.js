angular.module('appalm.conexionSrvc', [])

.service("Conexion", function($http, $q, $rootScope, $ionicLoading){

    var servicio = {
        con: function(){
            var deferred = $q.defer();
            $http.post($rootScope.URL_BACKEND).success(function(datos){
                deferred.resolve(datos);
            }).error(function(e){
                deferred.reject(e);
            });
            return deferred.promise;
        },
        getDatos: function(servicio,datos){
            var deferred = $q.defer();
            var servicio = $rootScope.conf.URL_BACKEND+servicio;
            
            $ionicLoading.show({
                template: $rootScope.conf.MSJ_CARGA_SERVICIO
            });
            
            /*
            datos = {
                "userID":"25096",
                 "userPass":"2586",
                 "headerRQ": {
                     "trnUid":"582589151604",
                     "beanBusiness":"AuthRQ",
                     "clientIP":"172.0.0.1",
                     "namApp":"mov",//"namApp":"mov", 
                     "dateCreated":"20140929151604",
                     "appID":"ALM"
                 }
            };
            */
            
            datos = JSON.stringify(datos);
            
            alert('servicio y datos');
            alert(servicio);
            alert(datos);
            $http({
                url: servicio,
                //url: 'http://jsonstub.com/pruebaalm'
                method: 'POST',
                data: datos,         
                headers: {
                    'Content-Type': 'application/json'
                }}).success(function(datos){
                    alert('ok success');
                    alert(datos);
                    //alert(JSON.stringify(datos));
                    $ionicLoading.hide();
                    try{
                        alert(JSON.stringify(datos));
                        var datos = angular.fromJson(datos);
                        if(datos.headerRS.StatusCode == 000 || datos.headerRS.StatusCode == '000'){
                            deferred.resolve(datos);
                        }else{
                            alert('error dentro success');
                            deferred.reject(datos);
                        }
                    }catch(e){
                        alert('error success try');
                        alert(e);
                    }
                })
                .error(function(data, status, headers, config){
                    alert('error servicios');
                    $ionicLoading.hide();
                    try{
                        if(status == 0){
                            deferred.reject($rootScope.conf.MSJ_ERROR_CONEXION);
                        }else{
                            deferred.reject(data);
                        }
                    }catch(e){
                        alert(e);
                    }
                });
            return deferred.promise;
        }
    };

    return servicio;
});