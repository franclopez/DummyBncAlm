angular.module('appalm.salidaSrvc', [])

.service('Salida', function($rootScope, $state, $ionicPopup, Credencial){
    
    var salida = {
        salir: function(){
            try{
                var confirmaSalir = $ionicPopup.confirm({
                    title: 'Ahorro a la Mano',
                    template: '¿Desea salir de la aplicación?',
                    cancelText: 'Aceptar',
                    cancelType: 'button-positive',
                    okText: 'Cancelar',
                    okType: 'button-positive'
                });
                confirmaSalir.then(function(res){
                    if(res){
                        console.log('Cancela salir');                                
                    }else{
                        salida.limpiarDatos();
                        salida.cerrarSesion();
                        Credencial.cred.autorizado = false;
                        if(ionic.Platform.isIOS()){
                            if($state.current.name === 'alm.ingreso-usuario'){
                                console.log('Ya esta en la pantalla inicial');
                                //No usar esto
                                //https://developer.apple.com/library/ios/qa/qa1561/_index.html
                                //exit(0);
                            }else{
                                $state.go('alm.ingreso-usuario');
                            }
                        }else{
                            ionic.Platform.exitApp();
                        }
                    }
                });
            }catch(e){
                console.log(e);
            }      
        },
        cerrarSesion: function(){
            console.log('cerrando sesion');
            //Cerrar sesion
        },
        limpiarDatos: function(){
            try{
                delete $rootScope;
            }catch(e){
                console.log(e);
            }
            //Limpiar datos de cada controlador
            //Limpiar datos guardados
            /*REMOVE
            Recibiendo store como objeto del store que iniializamos
            */
            /*
            var success = function(v){
                alert('limpiar stor: 'v);
            };
            var error = function(v){
                alert('limpiar stor: 'v);
            };
            if(ionic.Platform.isIOS()){
                var keys = ['userPass','userID'];//,'','',''];
                for(i = 0; i < keys.length, i++){
                    $rootScope.store.removeForKey(success, error, key[i], $rootScope.conf.STORAGE_NAME);
                }
            }else{
                $rootScope.store.clear(success, error);
            }
            */
        }
    };
    
    return salida;
});