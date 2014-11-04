angular.module('appalm.controllers2', [])


.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
    
    $scope.iniciarALM = function(){
        $state.go('alm.ingreso-usuario');
    };
    
    $scope.anterior = function() {
        $ionicSlideBoxDelegate.previous();
    };
    
    $scope.siguiente = function() {
        $ionicSlideBoxDelegate.next();
    };
    
    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
        setTimeout(function(){
            $ionicSlideBoxDelegate.next();
        }, 10000);
    };
    
    setTimeout(function(){
        $ionicSlideBoxDelegate.next();
    }, 10000);
    
})

.controller('IngresoUsuarioCtrl',function($scope, $state, $ionicSlideBoxDelegate, $ionicModal, $ionicPopup, Credencial){
    
    Credencial.cred.autorizado = false;
    
    $ionicModal.fromTemplateUrl('templates/alm/directivas/alm-informacion-legal.html', function(modal) {
        $scope.modalInformacion = modal;
    }, {
        animation: 'slide-in-up',
        focusFirstInput: true
    });

    $scope.validar = function(usuario) {
        if(usuario != undefined){
            $state.go('alm.ingreso-contrasenia');
        }
        else{
            var alertPopup = $ionicPopup.alert({
                 title: 'Usuario o clave inválida, por favor intente de nuevo.',
                buttons: [{
                    text: 'Aceptar',
                    type: 'button-positive'
                }]
               });
               alertPopup.then(function(res) {
                 $state.go('alm.ingreso-usuario');
               });
        }
    };
    
    $scope.validarUsuario = {
        color: 'azul',
        contenido: 'Continuar'
    };
    
    $scope.slideChanged = function(index) {        
        $scope.slideIndex = index;
        setTimeout(function(){
            $ionicSlideBoxDelegate.next();
        }, 10000);
    };
    setTimeout(function(){
            $ionicSlideBoxDelegate.next();
        }, 10000);
    
    $scope.mostrarModalInformacion = function ($event) {
        try{
            $scope.modalInformacion.show($event);
        }catch(e){
            console.log(e);  
        }        
    };
    
    $scope.patronValidacion = /^[0-9]{0,15}$/;
    $scope.validarNumeros = function() {
        var e = event || window.event;
        var tecla = e.keyCode || e.which;
        if(tecla == 46 || tecla == 8){
            return;
        }
        if((tecla < 47 || tecla>58)){
            if (e.preventDefault) {
                e.preventDefault();
            }
            else{
                e.returnValue = false;
            }
        }
    };

})

.controller('IngresoContraseniaCtrl',function($scope, $state, $ionicSlideBoxDelegate, $ionicPopup, Credencial){
    
    Credencial.cred.autorizado = false;
    
    $scope.validar = function(clave) {
        if(clave != undefined){
            $state.go('alm.estado');
        }
        else{
            var alertPopup = $ionicPopup.alert({
                 title: 'Usuario o clave inválida, por favor intente de nuevo.',
                buttons: [{
                    text: 'Aceptar',
                    type: 'button-positive'
                }]
               });
               alertPopup.then(function(res) {
                 $state.go('alm.ingreso-contrasenia');
               });
        }
    };
    
    $scope.validarContrasenia = {
        color: 'azul',
        contenido: 'Ingresar'
    };
    
    $scope.slideChanged = function(index) {        
        $scope.slideIndex = index;
    };
    
    $scope.patronValidacion = /^[0-9]{0,4}$/;
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

})

.controller('RetiroGenerarCtrl',function($scope, $state){
    $scope.ir = function(estado) {
        $state.go(estado);
    }
    
    $scope.generarPin = {
        color: 'azul',
        contenido: 'Generar PIN'
    };
})

.controller('RetiroFinalizarCtrl',function($scope, $state, $ionicModal){
            
    $scope.ir = function(estado) {
        $state.go(estado);
    };
    
    $scope.finalizar = {
        color: 'azul',
        contenido: 'Finalizar'
    };
    
    $scope.transacciones = {
        color: 'azul',
        contenido: 'Ir a Transacciones'
    };
    
    $scope.cancelarPin = {
        color: 'rojo',
        contenido: 'Cancelar Pin'
    };
    
    $scope.mensaje = {
        titulo: 'PIN generado correctamente',
        icono: 'alm-iconTick'
    };
    //PIN generado correctamente.
})

.controller('ModalTransaccionesCtrl', function($scope, $state, ModalTransacciones) {
    $scope.modaltransacciones = ModalTransacciones.all();
    
    $scope.ir = function(estado) {
        $state.go(estado);
        $scope.modal.hide();
    };
    
    $scope.encabezado = {
        colorIcono: 'energized',
        contenido: 'Transacciones'
    };
})

.controller('ModalInformacion', function($scope, $state){
    $scope.encabezado = {
        colorIcono: 'energized',
        contenido: 'Información Legal'
    };
    
    $scope.boton = {
        color: 'azul',
        contenido: 'Aceptar'
    };
    
    $scope.aceptar = function() {
        $scope.modal.hide();
    };
    
    $scope.ir = function(e) {
        e.preventDefault();
        window.open('http://www.grupobancolombia.com',  '_system', 'location=no');
    };
});