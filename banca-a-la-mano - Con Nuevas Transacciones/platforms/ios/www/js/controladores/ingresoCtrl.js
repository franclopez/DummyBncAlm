angular.module('appalm.ingresoCtrl', [])

//Controlador de la vista ingreso de documento de identidad
.controller('IngresoUsuarioCtrl',function($scope, $state, $rootScope, $ionicSlideBoxDelegate, $ionicModal, $ionicPopup, $timeout, Credencial){
    //usuario //clave
    
    Credencial.cred.autorizado = false;
    $scope.credencial = {};
    //$scope.patronValidacion = /^[0-9]{5,15}$/;
    $scope.botonContinuar = {
        color: 'azul',
        contenido: 'Continuar'
    };
    //Movimiento de imagenes
    $scope.slideChanged = function(index) {        
        $scope.slideIndex = index;
    };
    $timeout(function() {
        $ionicSlideBoxDelegate.next();
    }, 5000);
    $ionicModal.fromTemplateUrl('templates/alm/directivas/alm-informacion-legal.html', function(modal) {
        $scope.modalInformacion = modal;
    }, {
        animation: 'slide-in-up',
        focusFirstInput: true
    });
    
    //Metodos del controlador
    
    $scope.credencial = {
        minLength: $rootScope.conf.INPUT_USUARIO_MIN,
        maxLength: $rootScope.conf.INPUT_USUARIO_MAX,
    };
    
    //Modal de informacion legal
    $scope.mostrarModalInformacion = function($event){
        try{
            $scope.modalInformacion.show($event);
        }catch(e){
            console.log(e);  
        }        
    };
    //Validar usuario
    $scope.continuar = function(estado){
        
        if($scope.credencial.usuario != undefined){            
            $rootScope.credenciales = {
                userID: $scope.credencial.usuario
            };
            $state.go(estado);
        }else{
            var alertPopup = $ionicPopup.alert({
                title: 'Usuario o clave inválida, por favor intente de nuevo.',
                buttons: [{
                    text: 'Aceptar',
                    type: 'button-positive'
                }]
            });
            alertPopup.then(function(res) {
                console.log('alm.ingreso-usuario');
            });
        }
    };
    
    /*
    $scope.validarNumeros = function(){
        
        var e = event || window.event;
        var tecla = e.keyCode || e.which;
        
        if(tecla == 46 || tecla == 8){
            return;
        }
        if(tecla < 48 || tecla > 57){
            if (e.preventDefault) {
                e.preventDefault();
            }
            else{
                e.returnValue = false;
            }
        }
    };
    */
})

//Controlador de la vista ingreso de clave del usuario
.controller('IngresoContraseniaCtrl',function($scope, $state, $rootScope, $ionicSlideBoxDelegate, $ionicPopup, $timeout, Credencial, Conexion, SolHeader, SolAutenticacion){    
    
    Credencial.cred.autorizado = false;
    $scope.credencial = {};
    var autenticacionSol = {};
    //boton ingresar
    $scope.ingresar = {
        color: 'azul',
        contenido: 'Ingresar'
    };
    $scope.patronValidacion = /^[0-9]{4}$/; 
    //Movimiento de imagenes
    
    $scope.slideChanged = function(index) {        
        $scope.slideIndex = index;
        $timeout(function() {
            $ionicSlideBoxDelegate.next();
        }, 10000); 
    };
    $timeout(function() {
        $ionicSlideBoxDelegate.next();
    }, 10000);
    
    
    //Metodos del controlador
    
    $scope.credencial = {
        minLength: $rootScope.conf.INPUT_PASSWORD_MIN,
        maxLength: $rootScope.conf.INPUT_PASSWORD_MAX,
    };
    $scope.userID = $rootScope.credenciales.userID;
    delete $rootScope.credenciales.userID;
    //Validar clave
    $scope.autenticar = function(estado){
        
        if($scope.credencial.clave != undefined){
            var credenciales = {};
            var error = false;
            credenciales = {
                userPass: $scope.credencial.clave,
                userID: $scope.userID
            };
            
            //Es importante mantener el orden de asignacion que se esta utilizando con el objeto autenticacionSol
            autenticacionSol = SolAutenticacion.solicitudAuth(credenciales);

            autenticacionSol = SolHeader.headerAuth($rootScope.conf.SERVICIO_AUTENTICACION,autenticacionSol);

            conexion = Conexion.getDatos($rootScope.conf.SERVICIO_AUTENTICACION,autenticacionSol);
            alert('se va..');
            conexion.then(
            function(respuesta){
                alert('respuesta');
                //alert(JSON.stringify(respuesta));
                try{
                    SolAutenticacion.guardaCredencialesAuth(autenticacionSol,JSON.stringify(respuesta));
                    $rootScope.movimientos = respuesta.acctHist;
                }catch(e){alert(e);}
                $state.go(estado);
            },
            function(error){
                alert('error en ingreso');
                //alert(JSON.stringify(error));
                delete $rootScope.credenciales;
                var alertPopup = $ionicPopup.alert({
                    title: $rootScope.conf.MSJ_INGRESO_ERROR,
                    buttons: [{
                        text: 'Aceptar',
                        type: 'button-positive'
                    }]
                });
                alertPopup.then(function(res){
                    $state.go('alm.ingreso-usuario');
                });
            });
        }else{
            var alertPopup = $ionicPopup.alert({
                title: $rootScope.conf.MSJ_INGRESO_ERROR,
                buttons: [{
                    text: 'Aceptar',
                    type: 'button-positive'
                }]
            });
            alertPopup.then(function(res){
                $state.go('alm.ingreso-usuario');
            });
        }
    };
    
    /*
    $scope.validarNumeros = function(){
        var e = event || window.event;
        var tecla = e.keyCode || e.which;
        if(tecla == 46 || tecla == 8){
            return;
        }
        if(tecla < 48 || tecla > 57){
            if (e.preventDefault) {
                e.preventDefault();
            }
            else{
                e.returnValue = false;
            }
        }
    };
    */

});