angular.module('appalm.contenedorCtrl', [])

.controller('ALMCtrl', function($scope, $rootScope, $state, $ionicSideMenuDelegate, $ionicPopover, $ionicPopup, $ionicModal, $cordovaSocialSharing, MenuPpal, MenuPpalIngresado, MenuDerecho, Compartir, Credencial, SolAutenticacion, Salida){
    
    $scope.menuderecho = MenuDerecho.all();
    $scope.menucompartir = Compartir.all();
    $scope.menuppal = MenuPpal.all();
    
    $ionicPopover.fromTemplateUrl('templates/alm/directivas/alm-menu-derecho.html',  {
        scope: $scope
    }).then(function(popover){
        $scope.popover = popover;
    });
    $ionicPopover.fromTemplateUrl('templates/alm/directivas/alm-compartir.html',  {
        scope: $scope
    }).then(function(menucompartir){
        $scope.menuC = menucompartir;
    });
    $ionicModal.fromTemplateUrl('templates/alm/alm-transacciones.html', function(modal) {
        $scope.modal = modal;
    }, {
        animation: 'slide-in-up',
        focusFirstInput: true
    });
        
    
    //Metodos del controlador
                    
    $scope.$watch(function(){
        return Credencial.cred.autorizado;
    },function(aut){
        if(typeof aut === 'undefined' || typeof aut === undefined){
            $scope.autorizado = aut;
        }else{
            if(aut){
                $scope.menuppal = SolAutenticacion.obtenerCredencialesAuthMenu(MenuPpalIngresado.all());
            }else{
                $scope.menuppal = MenuPpal.all();
            }
            $scope.autorizado = aut;
        }
    });
    
    $scope.ir = function(estado){
        try{
            if(estado){
                switch (estado){
                    case 'cerrar': 
                        Salida.salir();
                        break;
                    case 'contacto': 
                        try{
                            $scope.popover.show(document.getElementById('btn-bancolombia'));
                        }catch(e){
                            console.log(e);
                        }
                        break;
                    case 'social':
                        try{
                            $scope.menuC.show(document.getElementById('btn-compartir'));
                        }catch(e){
                            console.log(e);  
                        }
                        break;
                    case 'socialOculto':
                        try{
                            $scope.menuC.show(document.getElementById('btn-bancolombia'));
                        }catch(e){
                            console.log(e);  
                        }
                        break;
                    case 'transaccion':
                        try{
                            $scope.modal.show();
                        }catch(e){
                            console.log(e);
                        }   
                        //cerrar
                        break;
                    default:
                        try{
                            $state.go(estado);
                        }catch(e){
                            console.log(e);
                        }
                        break;
                }
            }else{
                estado = null;
            }
        }catch(e){
            console.log(e);
        }
    };
    
    $scope.salir = function(){    
       /* var confirmaSalir = $ionicPopup.confirm({
            title: 'Ahorro a la Mano',
            template: '¿Desea salir de la aplicación?',
            cancelText: 'Aceptar',
            cancelType: 'button-positive',
            okText: 'Cancelar',
            okType: 'button-positive'
        });
        confirmaSalir.then(
            function(res){
            if(res){
                console.log('Sigue en app');
            }else{
                //Metodo limpiar datos
                //Metodo cierre sesion
                Credencial.cred.autorizado = false;
                if(ionic.Platform.isIOS){
                    if($state.current.name === 'alm.ingreso-usuario'){
                        try{
                            ionic.Platform.exitApp();
                        }catch(e){
                            //No usar esto
                            //https://developer.apple.com/library/ios/qa/qa1561/_index.html
                            //exit(0);
                        }
                    }else{
                        $state.go('alm.ingreso-usuario');
                    }
                }else{
                    ionic.Platform.exitApp();
                }
            }
        });*/
        Salida.salir();
    };
    
    $scope.abrirMenuDerecho = function($event){
        try{
            $scope.popover.show($event);
        }catch(e){
            console.log(e);
        }
    };
    
    $scope.compartir = function ($event) {
        try{
            $scope.menuC.show($event);
        }catch(e){
            console.log(e);  
        }
    }
    
    //No usado en el momento, cierra con opcion por defecto backdropClickToClose
    $scope.cerrarMenuDerecho = function() {    
        $scope.popover.hide();
    };
    
    $scope.abrirMenuPpal = function(){
        $ionicSideMenuDelegate.toggleLeft();
    };
    
    $scope.compartirFacebook = function(){
        //alert('va a compartir con fc');
        var linkTienda = ionic.Platform.isIOS ? $rootScope.conf.TIENDA_LINK_IOS : $rootScope.conf.TIENDA_LINK_ANDROID;
        $cordovaSocialSharing
        .shareViaFacebook($rootScope.conf.MENSAJE_ESPECIFICO, '', linkTienda)
        .then(function(result) {
            console.log(result);
        }, function(err) {
            console.log(err);
        });  
    };
    
    $scope.compartirTwitter = function(){
        //alert('va a compartir con tw');
        var linkTienda = ionic.Platform.isIOS ? $rootScope.conf.TIENDA_LINK_IOS : $rootScope.conf.TIENDA_LINK_ANDROID;
        $cordovaSocialSharing
        .shareViaTwitter($rootScope.conf.MENSAJE_ESPECIFICO, '', linkTienda)
        .then(function(result) {
            console.log(result);
        }, function(err) {
            console.log(err);
        });
    };
    
    $scope.irAchat = function() {
        //var ref = window.open($rootScope.conf.LINK_CHAT_LINEA, '_blank', 'location=yes');
        window.open($rootScope.conf.LINK_CHAT_LINEA, '_blank', 'location=no');
    };

});
