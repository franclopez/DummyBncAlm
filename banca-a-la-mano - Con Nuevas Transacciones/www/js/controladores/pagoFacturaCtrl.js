angular.module('appalm.pagoFacturaCtrl', [])

.controller('PagoFacturaRealizarCtrl',function($scope, $state, $ionicPopup, $rootScope, BncALMDatos, Conexion, SolHeader, PagoFacturaRealizarTxt, SolCuentaPago){
    
    var pagoFacturaSol = {};
    $scope.txts = PagoFacturaRealizarTxt.all();
    $scope.subtitulo = {
        subtitulo: 'Saldo disponible para transferencias',
        value: BncALMDatos.get_value()
    };
     $scope.acctDetl = {
        acctID: BncALMDatos.get_acctID_ultimos(4),
        acctIDOriginal: BncALMDatos.get_acctID()
    };
    $scope.mensaje = {
        titulo: '',
        contenido: $scope.txts.mensaje
    };
    $scope.botonPagar = {
        color: 'gris',
        contenido: 'Continuar'
    };
    $scope.botonCancelar = {
        color: 'azul',
        contenido: 'Cancelar'
    };
    $scope.pagoFactura= {
        numeroReferencia : '',
        codigoConvenio : '',
        numero: {
            minLength: '19',
            maxLength: '19'
        }
    };
    
    $scope.cancelar = function(estado){
        try{
            $state.go(estado);
        }catch(e){
            console.log(e);
        }
    };
    
    //Actualizar boton
    $scope.actualizarBoton = function(){  
        if($scope.pagoFactura.numeroReferencia != '' && $scope.pagoFactura.codigoConvenio != ''){ 
            $scope.botonPagar = {
                color: 'azul',
                contenido: 'Continuar'
            };           
        }else{
            $scope.botonPagar = {
                color: 'gris',
                contenido: 'Continuar'
            }; 
        }
    };
    
    $scope.validarCampos = function(estado){
        
        if($scope.pagoFactura.numeroReferencia != '' && $scope.pagoFactura.codigoConvenio != ''){
            
            pagoFacturaSol.headerRQ = SolHeader.header($rootScope.conf.SERVICIO_SOLICITUD_PAGO);            
            pagoFacturaSol = SolCuentaPago.solicitudPago(pagoFacturaSol,$scope.pagoFactura);
            
            conexion = Conexion.getDatos($rootScope.conf.SERVICIO_SOLICITUD_PAGO,pagoFacturaSol);
            conexion.then(
            function(respuesta){
                $rootScope.pagoFactura = {
                    res: respuesta,
                    form: pagoFacturaSol
                };
                $state.go(estado);
            },
            function(error){
                console.log(error);
            });
        }else{
            var confirmaSalir = $ionicPopup.alert({
                title: 'Ahorro a la Mano',
                template: 'Debes ingresar todos los campos.',
                buttons: [{
                    text: 'Aceptar',
                    type: 'button-positive'
                }]
            });
        }
        
        
    };
})


.controller('PagoFacturaConfirmarCtrl',function($scope, $state, $ionicPopup, $rootScope,  BncALMDatos, Conexion, SolHeader, PagoFacturaConfirmarTxt, SolPagoFactura, SolCuentaPago){
    
    $scope.txts = PagoFacturaConfirmarTxt.all();
    var pagoFacturaSol = {};
    
    $scope.mensaje = {
        titulo: $scope.txts.subtitulo.titulo,
        contenido: $scope.txts.subtitulo.parrafo
    };
    $scope.botonConfirmar = {
        color: 'azul',
        contenido: 'Confirmar'
    };
    $scope.botonCancelar = {
        color: 'azul',
        contenido: 'Cancelar'
    };
    $scope.encabezado = {
        colorIcono: 'energized',
        contenido: $scope.txts.cabezera
    };
    $scope.cancelar = function($event) {
        try{
            $scope.modal.show($event);
        }catch(e){
            console.log(e);  
        }
    };
    
    $scope.resumen = SolPagoFactura.mostrarResumen($rootScope.pagoFactura);
        
    $scope.confirmar = function(estado){
      
        pagoFacturaSol.headerRQ = SolHeader.header($rootScope.conf.SERVICIO_CONFIRMACION_PAGO);
        pagoFacturaSol = SolCuentaPago.solicitudPago(pagoFacturaSol,$rootScope.pagoFactura.form);

        conexion = Conexion.getDatos($rootScope.conf.SERVICIO_CONFIRMACION_PAGO,pagoFacturaSol);
        conexion.then(
        function(respuesta){
            $rootScope.pagoFactura = {
                res: respuesta,
                form: $rootScope.pagoFactura
            };
            $state.go(estado);
            
        },
        function(respuesta){
            $rootScope.pagoFactura = {
                res: respuesta
            };
            $state.go(estado);
        });
        
    };
       
})

.controller('PagoFacturaFinalizarCtrl',function($scope, $state, $ionicPopup, $rootScope, BncALMDatos, Conexion, SolHeader, PagoFacturaFinalizarTxt, pagoFacturaNoSol){
    
    $scope.txts = PagoFacturaFinalizarTxt.all();
    
    $scope.exito = '';
    $scope.botonFinalizar = {
        color: 'azul',
        contenido: 'Finalizar'
    };
    $scope.encabezado = {
        colorIcono: 'energized',
        contenido: 'Resumen de la transacción'
    };
    $scope.mensaje = {};
    $scope.finalizar = function(estado){
        try{
            $state.go(estado);
        }catch(e){
            console.log(e);
        }
    };
    
    if($rootScope.pagoFactura.form){
        //Transaccion exitosa. 
        $scope.resumen = pagoFacturaNoSol.mostrarResumen($rootScope.pagoFactura);
        console.log('confirmar root pafo fac YYY '+JSON.stringify($scope.resumen.form.form.numeroReferencia));
//        console.log('RESUMEN FORM: '+$scope.resumen.form.valor);
        $scope.mensaje = {
            titulo: $scope.resumen.res.headerRS.StatusDesc,
            subtitulo: $scope.txts.cabezera.subtitulo,
            contenido: $scope.resumen.res.confirm,
            icono: $scope.txts.cabezera.iconoExito,
            color: $scope.txts.cabezera.colorVerde
        };
    }else{
        //Transaccion no exitosa.
        $scope.mensaje = {
            titulo: $rootScope.pagoFactura.res.headerRS.StatusDesc,
            subtitulo: '',
            icono: $scope.txts.cabezera.iconoError,
            color: $scope.txts.cabezera.colorRojo
        };
    }
    
    delete $rootScope.pagoFactura;
});