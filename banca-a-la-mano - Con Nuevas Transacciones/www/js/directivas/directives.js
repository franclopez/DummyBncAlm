angular.module('appalm.directives', [])

.directive('almMensaje',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-mensaje.html'
    };
})

.directive('almMensajeExito',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-mensaje-exito.html'
    };
})

.directive('almMensajeExitoSimple',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-mensaje-exito-simple.html'
    };
})

.directive('almSubtitulo',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-subtitulo.html'
    };
})

.directive('almSubtituloLimpio',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-subtitulo-limpio.html'
    };
})

.directive('almSubtituloMensaje',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-subtitulo-mensaje.html'
    };
})

.directive('almSubtituloSimple',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-subtitulo-simple.html'
    };
})

.directive('almSubtituloSemisimple',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-subtitulo-semisimple.html'
    };
})

.directive('almSeparador',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-separador.html'
    };
})

.directive('almEncabezado',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-encabezado.html'
    };
})

.directive('almBoton',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-boton.html',
        scope: {
            boton: '=boton',
            metodo: '&',
            metodoOpcion: '&'
        }
    };
})

.directive('almBotonIcono',function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/alm/directivas/alm-boton-icon.html',
        scope: {
            boton: '=boton',
            metodo: '&',
            metodoOpcion: '&'
        }
    };
})

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