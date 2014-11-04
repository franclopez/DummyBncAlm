angular.module('appalm', ['ionic',
                            'ngCordova',
                            'appalm.configuracion',
                            'appalm.contenedorCtrl',
                            'appalm.demoCtrl',
                            'appalm.estadoCtrl',
                            'appalm.ingresoCtrl',
                            'appalm.modalCtrl',
                            'appalm.movimientoCtrl',
                            'appalm.recargaCtrl',
                            'appalm.registroCtrl',
                            'appalm.retiroCtrl',
                            'appalm.pagoFacturaCtrl',
                            'appalm.transferenciaCtrl',
                            'appalm.directives',
                            'appalm.auxiliaresSrvc',
                            'appalm.contenedorSrvc',
                            'appalm.textos',
                            'appalm.conexionSrvc',
                            'appalm.solicitudSrvc',
                            'appalm.inicioDemoSrv',
                            'appalm.pruebasDatosServicio',//BORRAR EN PRODUCCION
                            'ngMockE2E',//BORRAR EN PRODUCCION
                            'appalm.formatoPesosSrvc',
                            'appalm.salidaSrvc'
                            //'appalm.timeoutSrvc',
                            //'appalm.factories',
                              ])

.run(function($ionicPlatform,
            $rootScope,
            $state,
            $window,
            Configuracion,
            localstorageDemo,
            $httpBackend,//BORRAR EN PRODUCCION
            Servicio,//BORRAR EN PRODUCCION
            Navegacion
              ){    
    servicioBack = Servicio.servicio();//BORRAR EN PRODUCCION
    inicializar = Configuracion.ini();
    inicializar.then(
    function(propiedades){
        $rootScope.conf = propiedades;
    },function(error){
        console.log(error);
    });
    
    try{
        $ionicPlatform.registerBackButtonAction(function(e){
            Navegacion.backButton();
            e.preventDefault();
            return false;
        }, 101);
    }catch(e){
        console.log(e);
    }
    
    servicioBack = Servicio.servicio();//BORRAR EN PRODUCCION
    
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
                    
//        try{
//            valor = localstorageDemo.get('bandera');    
//        
//            if(valor == 'true' || valor == undefined || valor == 'undefined' || valor == Null){
//                $state.go('intro'); 
//            }else{
//                $state.go('alm.ingreso-usuario');  
//            }
//        }catch(e){
//            console.log(e);
//            $state.go('alm.ingreso-usuario'); 
//        }        
      });
    
    valor = localstorageDemo.get('bandera');
    if(valor == 'true' || valor == undefined || valor == 'undefined'){
        $state.go('intro'); 
    }else{
        $state.go('alm.ingreso-usuario'); 
    }
    //$state.go('intro');
    
})

.config(function($stateProvider, $urlRouterProvider) {

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
    })
  
    .state('alm.registro-generar', {
        views: {
            'alm': {
            templateUrl: 'templates/alm/registro-generar.html',
            controller: 'RegistroGenerarCtrl'
            }
        }
    })
    
    .state('alm.registro-finalizar', {
        views: {
            'alm': {
            templateUrl: 'templates/alm/registro-finalizar.html',
            controller: 'RegistroFinalizarCtrl'
            }
        }
    })
  
    .state('alm.recarga-realizar', {
        views: {
            'alm': {
            templateUrl: 'templates/alm/recarga-realizar.html',
            controller: 'RecargaRealizarCtrl'
            }
        }
    })
    .state('alm.recarga-confirmar', {
        views: {
            'alm': {
            templateUrl: 'templates/alm/recarga-confirmar.html',
            controller: 'RecargaConfirmarCtrl'
            }
        }
    })
  
    .state('alm.recarga-finalizar', {
        views: {
            'alm': {
            templateUrl: 'templates/alm/recarga-finalizar.html',
            controller: 'RecargaFinalizarCtrl'
            }
        }
    })
    .state('alm.pago-factura-realizar', {
        views: {
            'alm': {
            templateUrl: 'templates/alm/pago-factura-realizar.html',
            controller: 'PagoFacturaRealizarCtrl'
            }
        }
    })
    .state('alm.pago-factura-confirmar', {
        views: {
            'alm': {
            templateUrl: 'templates/alm/pago-factura-confirmar.html',
            controller: 'PagoFacturaConfirmarCtrl'
            }
        }
    })
    .state('alm.pago-factura-finalizar', {
        views: {
            'alm': {
            templateUrl: 'templates/alm/pago-factura-finalizar.html',
            controller: 'PagoFacturaFinalizarCtrl'
            }
        }
    })
  ;
  
  //$urlRouterProvider.otherwise('/ingreso');

});