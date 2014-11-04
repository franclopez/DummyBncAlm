angular.module('appalm.inicioDemoSrv', [])

.factory('localstorageDemo', ['$window', function($window) {
    
    return {
        set: function(bandera, valor) {
            if($window.localStorage != undefined  || $window.localStorage != undefined) {
                $window.localStorage[bandera] = valor;
            } else {
                $window.localStorage[bandera] = true;
            }
          
        },
        get: function(bandera) {
          return $window.localStorage[bandera];
        }
    };
}]);
