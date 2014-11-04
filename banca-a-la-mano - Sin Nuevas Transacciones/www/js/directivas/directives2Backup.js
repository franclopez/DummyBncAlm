angular.module('appalm.directives2', [])

.directive('almBotonCompartir',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-boton-compartir.html',
        scope: {
            botoncompartir: '=botoncompartir',  
            metodo: '&',
            metodoOpcion: '&'
        }
    };
});
