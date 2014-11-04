angular.module('appalm', ['ionic',
                            'ngCordova',
                            //'ngResource',
                            'appalm.configuracion',
                            'appalm.contenedorCtrl',
                            'appalm.demoCtrl',
                            'appalm.estadoCtrl',
                            'appalm.ingresoCtrl',
                            'appalm.modalCtrl',
                            'appalm.movimientoCtrl',
                            'appalm.retiroCtrl',
                            'appalm.transferenciaCtrl',
                            'appalm.directives',
                            'appalm.auxiliaresSrvc',
                            'appalm.contenedorSrvc',
                            'appalm.textos',
                            'appalm.conexionSrvc',
                            'appalm.solicitudSrvc',
                            'appalm.inicioDemoSrv',
                            'appalm.formatoPesosSrvc'//,
                            //'appalm.pruebasDatosServicio',//BORRAR EN PRODUCCION
                            //'ngMockE2E'//BORRAR EN PRODUCCION
                            //'appalm.timeoutSrvc',
                            //'appalm.factories',
                              ])

.run(function($ionicPlatform,
            $rootScope,
            $state,
            $window,
            Configuracion,
            localstorageDemo//,
            //$httpBackend,//BORRAR EN PRODUCCION
            //Servicio//BORRAR EN PRODUCCION
              ){    
    //servicioBack = Servicio.servicio();//BORRAR EN PRODUCCION
    inicializar = Configuracion.ini();
    inicializar.then(
    function(propiedades){
        $rootScope.conf = propiedades;
    },function(error){
        console.log(error);
    });

    //servicioBack = Servicio.servicio();//BORRAR EN PRODUCCION
    
    $ionicPlatform.ready(function() {
        
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
        
        try{
            valor = localstorageDemo.get('bandera');
        
            if(valor == 'true' || valor == undefined || valor == 'undefined'){
                $state.go('intro');         
            }else{
                $state.go('alm.ingreso-usuario');         
            }
        }catch(e){
            console.log(e);
            $state.go('alm.ingreso-usuario');
        }
        
      });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    //$httpProvider.defaults.headers.post['Content-Type'] = 'application/json';//'application/x-www-form-urlencoded';//'application/json; charset=utf-8';
    //$httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
    //$httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
    //$httpProvider.defaults.headers.common['Content-Type'] = 'application/json';//'application/x-www-form-urlencoded';//'application/json; charset=utf-8';
    //$httpProvider.defaults.useXDomain = true;
  $stateProvider
  
    .state('intro', {
        url: '/intro',
        templateUrl: 'templates/alm/intro.html',
        controller: 'IntroCtrl'
      })
        
    .state('alm',{
        abstract: true,
        controller: 'ALMCtrl',
        templateUrl: 'templates/alm/alm.html'
     })
    
    .state('alm.ingreso-usuario', {
        url: '/ingreso',
        views: {
            'alm': {
                templateUrl: 'templates/alm/ingreso-usuario.html',
                controller: 'IngresoUsuarioCtrl'  
            }
        }
    })
  
    .state('alm.ingreso-contrasenia', {
        views: {
            'alm': {
                templateUrl: 'templates/alm/ingreso-contrasenia.html',
                controller: 'IngresoContraseniaCtrl'        
            }
        }
        
    })

    .state('alm.contacto', {
        views: {
            'alm': {
                templateUrl: 'templates/alm/contacto.html',
                controller: 'ContactoCtrl'
            }
        }
    })

    .state('alm.estado', {
        views: {
            'alm': {
                templateUrl: 'templates/alm/estado.html',
                controller: 'EstadoCtrl'
            }
        }
    })
                          
    .state('alm.movimiento', {
        views: {
            'alm': {
                templateUrl: 'templates/alm/movimiento.html',
                controller: 'MovimientoCtrl'
            }
        }
    })
                          
    .state('alm.retiro-generar', {
        views: {
            'alm': {
                templateUrl: 'templates/alm/retiro-generar.html',
                controller: 'RetiroGenerarCtrl'
            }
        }
    })

    .state('alm.retiro-finalizar', {
        views: {
            'alm': {
            templateUrl: 'templates/alm/retiro-finalizar.html',
            controller: 'RetiroFinalizarCtrl'
            }
        }
    })
                          
    .state('alm.transferencia-realizar', {
        views: {
            'alm': {
            templateUrl: 'templates/alm/transferencia-realizar.html',
            controller: 'TransferenciaRealizarCtrl'
            }
        }
    })                    
    .state('alm.transferencia-confirmar', {
        views: {
            'alm': {
            templateUrl: 'templates/alm/transferencia-confirmar.html',
            controller: 'TransferenciaConfirmarCtrl'
            }
        }
    })
                          
    .state('alm.transferencia-finalizar', {
        views: {
            'alm': {
            templateUrl: 'templates/alm/transferencia-finalizar.html',
            controller: 'TransferenciaFinalizarCtrl'
            }
        }
    });
  
  $urlRouterProvider.otherwise('/ingreso');

});