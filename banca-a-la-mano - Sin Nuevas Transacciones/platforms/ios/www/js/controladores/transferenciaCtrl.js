angular.module('appalm.transferenciaCtrl', [])

.controller('TransferenciaRealizarCtrl',function($scope, $state, $ionicPopup, $rootScope, OpcionesTransaccionRadio, TransferenciaRealizarTxt, BncALMDatos, Conexion, SolHeader, SolPinTransferencia){//TimeOut
    
    //TimeOut.muerte();
    var transferenciaSol = {};
    $scope.txts = TransferenciaRealizarTxt.all();
    $scope.formularioRadio = OpcionesTransaccionRadio.all();
    $scope.formularioRadio[0].checked = false;
    $scope.formularioRadio[1].checked = false;
    $scope.subtitulo = {
        subtitulo: 'Saldo disponible para transferencias',
        value: BncALMDatos.get_value()
        //contenidoSuave: 'Este texto se ve suave si hay',
        //imagenUrl: 'img/ionic.png',
        //imagenLeyenda: 'alguna leyend',
        //titulo: 'Transferencia de dinero',
        //tituloFuerte: 'Retire dinero en cajeros',
    };
    $scope.acctDetl = {
        acctID: BncALMDatos.get_acctID_ultimos(4),
        acctIDOriginal: BncALMDatos.get_acctID()
    };
    $scope.mensaje = {
        titulo: '',
        contenido: $scope.txts.mensaje
    };
    $scope.patronValidacion = /^[0-9]+$/;
    $scope.botonTransaccion = {
        color: 'gris',
        contenido: 'Continuar'
    };
    $scope.botonCancelar = {
        color: 'azul',
        contenido: 'Cancelar'
    };
    $scope.envioDinero= {
        cuentaDestino : '',
        valorTransferir : ''
    };
    /*
//    $scope.encabezado = {
//        colorIcono: 'energized',
//        contenido: 'Últimos movimientos de la cuenta'
//    };
    */
    
    //Metodos del controlador
    $scope.opcionar = function(opcion){
        if(opcion == 1) {
            $scope.formularioRadio[0].checked = false;
        }else {
           $scope.formularioRadio[1].checked = false;
        }
        $scope.tipoCuentaValido = $scope.formularioRadio[opcion].checked;
    }; 
    
    $scope.cancelar = function(estado){
        try{
            $state.go(estado);
        }catch(e){
            console.log(e);
        }
    };
    
    $scope.validarCampos = function(estado){
        if($scope.tipoCuentaValido && $scope.envioDinero.valorTransferir != '' && $scope.envioDinero.cuentaDestino != ''){
            
            transferenciaSol.headerRQ = SolHeader.header($rootScope.conf.SERVICIO_SOLICITUD_ENVIO_DINERO);            
            transferenciaSol = SolPinTransferencia.solicitudTrans(transferenciaSol,$scope);
            
            conexion = Conexion.getDatos($rootScope.conf.SERVICIO_SOLICITUD_ENVIO_DINERO,transferenciaSol);
            conexion.then(
            function(respuesta){
                $rootScope.transferencia = {
                    res: respuesta,
                    from: transferenciaSol
                };
                $state.go(estado);
            },
            function(error){
                console.log(error);
            });
        }else{
            var confirmaSalir = $ionicPopup.alert({
                title: 'Ahorro a la Mano',
                template: 'Debes ingresar todos los campos'
            });
        }
    }
    
    $scope.validarNumeros = function() {
        var e = event || window.event;
        var tecla = e.keyCode || e.which;
        if(tecla == 46 || tecla == 8){
            return;
        }
        if((tecla < 47 || tecla>58)){
            if (e.preventDefault){
                try{
                    e.preventDefault();
                }catch(e){
                    console.log(e);
                }
                try{
                    e.stopPropagation();
                }catch(e){
                    console.log(e);
                }
            }else{
                    e.returnValue = false;
            }
        }
    };
    
})

.controller('TransferenciaConfirmarCtrl',function($state, $scope, $rootScope, $ionicPopup, TransferenciaConfirmarTxt, SolHeader, SolTransferencia, Conexion){//TimeOut
    
    var transferenciaSol = {};
    $scope.form = {};
    $scope.txts = TransferenciaConfirmarTxt.all();
    $scope.botonCancelar = {
        color: 'azul',
        contenido: 'Cancelar'
    };
    $scope.botonConfirmar = {
        color: 'gris',
        contenido: 'Confirmar'
    };
    $scope.mensaje = {
        titulo: $scope.txts.subtitulo.titulo,
        contenido: $scope.txts.subtitulo.parrafo
    };
    $scope.encabezado = {
        colorIcono: 'energized',
        contenido: $scope.txts.cabezera
    };
    $scope.patronValidacion = /^[0-9]+$/;
    
    //TimeOut.muerte();
    
    $scope.resumen = SolTransferencia.mostrarResumen($rootScope.transferencia);
    
    $scope.cancelar = function($event) {
        try{
            $scope.modal.show($event);
        }catch(e){
            console.log(e);  
        }
    };
    
    $scope.confirmar = function(estado){
        try{
            if($scope.form.pin != undefined){
                transferenciaSol.headerRQ = SolHeader.header($rootScope.conf.SERVICIO_CONFIRMACION_ENVIO_DINERO);
                transferenciaSol = SolTransferencia.solicitudTrans(transferenciaSol,$scope.resumen.res.costTransfer,$scope.form.pin,$rootScope.transferencia);
                delete $rootScope.transferencia;

                conexion = Conexion.getDatos($rootScope.conf.SERVICIO_CONFIRMACION_ENVIO_DINERO,transferenciaSol);
                conexion.then(
                function(respuesta){
                    $rootScope.transferencia = {
                        res: respuesta,
                        form: transferenciaSol
                    };
                    $state.go(estado);
                },
                function(respuesta){
                    $rootScope.transferencia = {
                        res: respuesta
                    };
                    $state.go(estado);
                });
            }else{
               var ingresoPin = $ionicPopup.alert({
                title: 'Ahorro a la Mano',
                template: 'Debes ingresar el pin'
            }); 
            }
        }catch(e){
            console.log(e);
        }
    };
    
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

.controller('TransferenciaFinalizarCtrl',function($scope, $state, $rootScope, $ionicModal, TransferenciaFinalizarTxt, transferenciaNoSol){//TimeOut
    
    $scope.exito = '';
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
    $scope.mensaje = {};
    $scope.txts = TransferenciaFinalizarTxt.all();
    $ionicModal.fromTemplateUrl('templates/alm/alm-transacciones.html', function(modal) {
        $scope.modal = modal;
    }, {
        animation: 'slide-in-up',
        focusFirstInput: true
    });
    //TimeOut.muerte();
    

    //Metodos del controlador
    
    if($rootScope.transferencia.form){
        //Transaccion exitosa. Recibe resumen en form desde controlador TransferenciaConfirmarCtrl
        $scope.resumen = transferenciaNoSol.mostrarResumen($rootScope.transferencia);
        $scope.mensaje = {
            titulo: $scope.resumen.res.headerRS.StatusDesc,
            subtitulo: $scope.txts.cabezera.subtitulo,
            contenido: $scope.resumen.res.confirm,
            icono: $scope.txts.cabezera.iconoExito
        };
    }else{
        //Transaccion no exitosa.
        $scope.mensaje = {
            titulo: $rootScope.transferencia.res.headerRS.StatusDesc,
            subtitulo: '',
            contenido: $rootScope.transferencia.res.confirm,//,//
            icono: $scope.txts.cabezera.iconoError
        };
    }
    
    delete $rootScope.transferencia;
    
    $scope.finalizar = function(estado){
        try{
            $state.go(estado);
        }catch(e){
            console.log(e);
        }
    };
    
});