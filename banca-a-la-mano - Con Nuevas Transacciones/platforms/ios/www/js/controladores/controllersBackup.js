angular.module('appalm.controllers', [])

.controller('EstadoCtrl',function($scope, $rootScope, $ionicScrollDelegate, $timeout, $state, $ionicModal, Movimientos, Credencial){//TimeOut

    //$rootScope.muestraOcultaBars = true;
    //$scope.muestraOcultaBars = true;
    
    $scope.esconderBarra = function(){
        if($ionicScrollDelegate.getScrollPosition().top === 0){
            console.log('000');
        }else{
            $timeout(function(){
    //            $rootScope.muestraOcultaBars = false;    
    //            $rootScope.$apply();
                $scope.muestraOcultaBars = false;
                $ionicScrollDelegate.resize();
            },200);    
        }
//        $timeout(function(){
////            $rootScope.muestraOcultaBars = false;    
////            $rootScope.$apply();
//            $scope.muestraOcultaBars = false;
//            $ionicScrollDelegate.resize();
//        },200);
    };
    $scope.mostrarBarra = function(){
        $timeout(function(){
//            $rootScope.muestraOcultaBars = true;
//            $rootScope.$apply();
            $scope.muestraOcultaBars = false;
            $ionicScrollDelegate.resize();
        });
    };
    
//    $rootScope.$watch('muestraOcultaBars',function(){
//        var d = new Date();
//        var n = d.getTime();
//        console.log('cambiado: '+n);
//    });   

Credencial.cred.autorizado = true;
    
$ionicModal.fromTemplateUrl('templates/alm/alm-transacciones.html', function(modal) {
        $scope.modal = modal;
    }, {
        animation: 'slide-in-up',
        focusFirstInput: true
    });
    
    //TimeOut.muerte();
    
    $scope.movimientos = Movimientos.all();
    
    $scope.ir = function($event) {
        try{
            $scope.modal.show($event);
        }catch(e){
            console.log(e);  
        } 
    };
    
    /*$scope.ir = function(estado){
        try{
            $state.go(estado);
        }catch(e){
            console.log(e);
        }
    };*/
    
    $scope.botonTransaccion = {
        color: 'azul',
        contenido: 'Ir a Transacciones'
    };
    
    $scope.botonMovimiento = {
        color: 'azul',
        contenido: 'Movimientos'
    };
    
    /*
    $scope.mensaje = {
        titulo: 'titulo mensaje',
        contenido: 'CONTENIDO mensajes aalalallalaala'
    };
    */
    
    $scope.acceso = {
        hora: '11:25:09',
        fecha: '07/08/2014',
        direccionIP: '200.110.108.168'
    };
    
    $scope.encabezado = {
        colorIcono: 'energized',
        contenido: 'Últimos movimientos de tu cuenta'
    };
    
    $scope.subtitulo = {
        titulo: 'eduardo perez fortich',
        valor: '450000',
        cuenta: '1020'
    };
    
    /*
    $scope.subtitulo = {
        cuenta: '1020',
        titulo: 'eduardo perez fortich',
        tituloCuenta: 'Cuenta',
        tituloDetalle: 'Saldo disponible',
        valor: '450000'
    };
    */
})

.controller('MovimientoCtrl',function($scope, $state, $ionicModal, Movimientos, Credencial){//TimeOut
    
    Credencial.cred.autorizado = true;
    $ionicModal.fromTemplateUrl('templates/alm/alm-transacciones.html', function(modal) {
        $scope.modal = modal;
    }, {
        animation: 'slide-in-up',
        focusFirstInput: true
    });

    //TimeOut.muerte();
    
    $scope.movimientos = Movimientos.all();
    
    $scope.ir = function($event) {
        try{
            $scope.modal.show($event);
        }catch(e){
            console.log(e);  
        } 
    };
    
    /*$scope.ir = function(estado){
        try{
            $state.go(estado);
        }catch(e){
            console.log(e);
        }
    };*/
    
    $scope.fechaInicial = new Date(2013, 9, 22);    
    $scope.fechaFinal = new Date(2014, 9, 22);
    
    $scope.botonConsultar = {
        color: 'azul',
        contenido: 'Consultar'
    };
    
    $scope.botonTransaccion = {
        color: 'azul',
        contenido: 'Ir a Transacciones'
    };
    
    $scope.encabezado = {
        colorIcono: 'energized',
        contenido: 'Movimientos de la cuenta'
    };
    
    $scope.subtitulo = {
        titulo: 'eduardo perez fortich',
        valor: '450000',
        cuenta: '1020'
    };
    
    /*
    $scope.subtitulo = {
        cuenta: '1020',
        titulo: 'eduardo perez fortich',
        tituloCuenta: 'Cuenta',
        tituloDetalle: 'Saldo disponible',
        valor: '450000'
    };
    */
})

.controller('TransferenciaRealizarCtrl',function($scope, $state, OpcionesTransaccionRadio){    //TimeOut
    
    //TimeOut.muerte();
    
    $scope.ir = function(estado){
        try{
            $state.go(estado);
        }catch(e){
            console.log(e);
        }
    };
    
    $scope.botonTransaccion = {
        color: 'gris',
        contenido: 'Continuar'
    };
    
    $scope.botonCancelar = {
        color: 'azul',
        contenido: 'Cancelar'
    };
    
    $scope.formularioRadio = OpcionesTransaccionRadio.all();
    
//    $scope.encabezado = {
//        colorIcono: 'energized',
//        contenido: 'Últimos movimientos de la cuenta'
//    };
    
    $scope.subtitulo = {
        titulo: 'Transferencia de dinero',
        //tituloFuerte: 'Retire dinero en cajeros',
        subtitulo: 'Saldo disponible para transferencias',
        contenidoFuerte: '$440000',
        //contenidoSuave: 'Este texto se ve suave si hay',
        //imagenUrl: 'img/ionic.png',
        //imagenLeyenda: 'alguna leyend'
    };
    
    //valor quemado, eliminar en produccion
    $scope.cuenta = {
        numero: '1020'
    };
    
    $scope.mensaje = {
        titulo: '',
        contenido: 'Completa los siguientes campos para enviar dinero a una cuenta de Ahorros o cuenta Corriente.'
    };
    
    $scope.patronValidacion = /^[0-9]+$/;
    
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

.controller('TransferenciaConfirmarCtrl',function($scope, $state, ResumenTransferencia){//TimeOut
    
    //TimeOut.muerte();
    
    $scope.resumen = ResumenTransferencia.all();
    
    $scope.ir = function(estado){
        try{
            $state.go(estado);
        }catch(e){
            console.log(e);
        }
    };
    
    $scope.botonCancelar = {
        color: 'azul',
        contenido: 'Cancelar'
    };
    
    $scope.botonConfirmar = {
        color: 'gris',
        contenido: 'Confirmar'
    };
    
    $scope.mensaje = {
        titulo: 'Confirmar transferencia',
        contenido: 'Verifica la siguiente Información y luego ingresa el código recibido en el mensaje de texto que enviamos a tu celular'
    };
    
    $scope.encabezado = {
        colorIcono: 'energized',
        contenido: 'Resumen de la transacción'
    };
    
    $scope.patronValidacion = /^[0-9]+$/;
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

.controller('TransferenciaFinalizarCtrl',function($scope, $state, $ionicModal, ResumenTransferencia){//TimeOut
    
    $scope.exito = true;
    
    $ionicModal.fromTemplateUrl('templates/alm/alm-transacciones.html', function(modal) {
        $scope.modal = modal;
    }, {
        animation: 'slide-in-up',
        focusFirstInput: true
    });
    //TimeOut.muerte();
    
    $scope.resumen = ResumenTransferencia.all();
    
    $scope.ir = function($event) {
        try{
            $scope.modal.show($event);
        }catch(e){
            console.log(e);  
        } 
    };
    
    $scope.navegar = function(estado){
        try{
            $state.go(estado);
        }catch(e){
            console.log(e);
        }
    };
    
    $scope.botonTransacciones = {
        color: 'azul',
        contenido: 'Ir a Transacciones'
    };
    
    $scope.botonFinalizar = {
        color: 'azul',
        contenido: 'Finalizar'
    };
    
    $scope.encabezado = {
        colorIcono: 'energized',
        contenido: 'Resumen de la transacción'
    };
    
    $scope.mensaje = {
        titulo: 'Envío de dinero exitoso',
        subtitulo: 'Número de confirmación:',
        contenido: '2535665',
        icono: 'ion-checkmark-circled'
    };
    
});