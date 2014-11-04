angular.module('appalm.recargaCtrl', [])

.controller('RecargaRealizarCtrl',function($scope, $state, $rootScope, $ionicPopup, BncALMDatos, Conexion, RecargaRealizarTxt, SolHeader, SolRecarga, SolCuentaRecarga){
    
    var recargaSol = {};
    $scope.txts = RecargaRealizarTxt.all();
    
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
    $scope.botonRecarga = {
        color: 'gris',
        contenido: 'Continuar'
    };
    $scope.botonCancelar = {
        color: 'azul',
        contenido: 'Cancelar'
    };
    $scope.recarga= {
        numeroCelular : '',
        valorRecarga : '',
        numero: {
            minLength: '10',
            maxLength: '10'
        }
    };
    
    $scope.cancelar = function(estado){
        try{
            $state.go(estado);
        }catch(e){
            console.log(e);
        }
    };
    
    //Activar boton continuar
    $scope.actualizarBoton = function(){  
        if($scope.recarga.numeroCelular != '' && $scope.recarga.valorRecarga != ''){ 
            $scope.botonRecarga = {
                color: 'azul',
                contenido: 'Continuar'
            };           
        }else{
            $scope.botonRecarga = {
                color: 'gris',
                contenido: 'Continuar'
            }; 
        }
    };    
    
    $scope.validarCampos = function(estado){
        
        if($scope.recarga.numeroCelular != '' && $scope.recarga.valorRecarga != ''){
            
            recargaSol.headerRQ = SolHeader.header($rootScope.conf.SERVICIO_SOLICITUD_RECARGA);            
            recargaSol = SolCuentaRecarga.solicitudRec(recargaSol,$scope.recarga);
            
            conexion = Conexion.getDatos($rootScope.conf.SERVICIO_SOLICITUD_RECARGA,recargaSol);
            conexion.then(
            function(respuesta){
                $rootScope.recarga = {
                    res: respuesta,
                    form: recargaSol
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

.controller('RecargaConfirmarCtrl',function($scope, $state, $rootScope, $ionicPopup, BncALMDatos, Conexion, RecargaConfirmarTxt, SolHeader, SolRecarga, SolCuentaRecarga){
    
    $scope.txts = RecargaConfirmarTxt.all();
    
    var recargaSol = {};
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
    $scope.botonConfirmar = {
        color: 'azul',
        contenido: 'Confirmar'
    };
    $scope.botonCancelar = {
        color: 'azul',
        contenido: 'Cancelar'
    };
    $scope.mensaje = {
        titulo: $scope.txts.subtitulo.titulo,
        contenido: $scope.txts.subtitulo.parrafo
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
    
    $scope.resumen = SolRecarga.mostrarResumen($rootScope.recarga);
        
    $scope.confirmar = function(estado){
      
        recargaSol.headerRQ = SolHeader.header($rootScope.conf.SERVICIO_CONFIRMACION_RECARGA);
        recargaSol = SolCuentaRecarga.solicitudRec(recargaSol,$rootScope.recarga.form);
//        console.log('confirmar root recarga XXX'+JSON.stringify($rootScope.recarga));
//        console.log('confirmar root recarga SSSS'+JSON.stringify(recargaSol));
        //delete $rootScope.recarga;

        conexion = Conexion.getDatos($rootScope.conf.SERVICIO_CONFIRMACION_RECARGA,recargaSol);
        conexion.then(
        function(respuesta){
            $rootScope.recarga = {
                res: respuesta,
                form: $rootScope.recarga
            };
            $state.go(estado);
            
        },
        function(respuesta){
            $rootScope.recarga = {
                res: respuesta
            };
            $state.go(estado);
        });
        
    };
})

.controller('RecargaFinalizarCtrl',function($scope, $state, $rootScope, $ionicPopup, BncALMDatos, Conexion, RecargaFinalizarTxt, SolHeader, SolRecarga, recargaNoSol){
    
    $scope.txts = RecargaFinalizarTxt.all();
    
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
    
    if($rootScope.recarga.form){
        //Transaccion exitosa. 
        $scope.resumen = recargaNoSol.mostrarResumen($rootScope.recarga);
        console.log('confirmar root recarga YYY '+JSON.stringify($scope.resumen.form.form.numCel));
        console.log('RESUMEN FORM: '+$scope.resumen.form.valor);
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
            titulo: $rootScope.recarga.res.headerRS.StatusDesc,
            subtitulo: '',
            icono: $scope.txts.cabezera.iconoError,
            color: $scope.txts.cabezera.colorRojo
        };
    }
    
    delete $rootScope.recarga;
});