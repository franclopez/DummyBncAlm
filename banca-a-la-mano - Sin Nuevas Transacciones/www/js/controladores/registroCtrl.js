angular.module('appalm.registroCtrl', [])

.controller('RegistroGenerarCtrl',function($scope, $state, $rootScope, $ionicPopup, BncALMDatos, Conexion, RegistroGenerarTxt, OpcionesRegistroRadio, SolRegistro, SolCuentaRegistro, SolHeader){
    
    $scope.txts = RegistroGenerarTxt.all();
    $scope.formularioRadio = OpcionesRegistroRadio.all();
    $scope.formularioRadio[0].checked = false;
    $scope.formularioRadio[1].checked = false;
    
    $scope.botonRegistro = {
        color: 'gris',
        contenido: 'Continuar'
    };    
    $scope.botonCancelar = {
        color: 'azul',
        contenido: 'Cancelar'
    };    
    $scope.registro= {
        tipoDocumento : '',
        numeroDocumento : '',
        fechaExpedicion: '',
        fechaNacimiento: '',
        numeroClave: '',
        documento: {
            minLength: $rootScope.conf.INPUT_USUARIO_MIN,
            maxLength: $rootScope.conf.INPUT_USUARIO_MAX
        },
        clave: {
            minLength: $rootScope.conf.INPUT_PASSWORD_MIN,
            maxLength: $rootScope.conf.INPUT_PASSWORD_MAX
        }
    };    
    $scope.documento =[
        {tipo: 'TI'},
        {tipo: 'CC'}
    ];
    $scope.mensaje = {
        titulo: '',
        contenido: $scope.txts.mensaje
    };
    
    $scope.registro.tipoDocumento = $scope.documento[1];
    
    //Activar boton continuar
    $scope.actualizarBoton = function(){     
        if($scope.tipoDocumentoValido && $scope.registro.numeroDocumento != '' && $scope.registro.fechaExpedicion != '' && $scope.registro.fechaNacimiento != ''){
            $scope.botonRegistro = {
                color: 'azul',
                contenido: 'Continuar'
            };            
        }else{
            $scope.botonRegistro = {
                color: 'gris',
                contenido: 'Continuar'
            };            
        }
    };
    
    //Metodos controlador
    $scope.cancelar = function(estado){
        try{
            $state.go(estado);
        }catch(e){
            console.log(e);
        }
    };   
    
    $scope.validarCampos = function(){
        if($scope.tipoDocumentoValido && $scope.registro.numeroDocumento != '' && $scope.registro.fechaExpedicion != '' && $scope.registro.fechaNacimiento != ''){
            
            SolRegistro.headerRQ = SolHeader.headerReg($rootScope.conf.SERVICIO_REGISTRO);            
            SolRegistro = SolCuentaRegistro.solicitudReg(SolRegistro,$scope);
            conexion = Conexion.getDatos($rootScope.conf.SERVICIO_REGISTRO,SolRegistro);
            conexion.then(
            function(respuesta){
                console.log('respuesta datos');
                $rootScope.registro = {
                    res: respuesta,
                    form: SolRegistro
                };
                $state.go('alm.registro-finalizar');
            },
            function(error){
                console.log('nada datos');
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
    
    $scope.opcionar = function(opcion){
        if(opcion == 1) {
            $scope.formularioRadio[0].checked = false;
        }else {
           $scope.formularioRadio[1].checked = false;
        }
        $scope.tipoDocumentoValido = $scope.formularioRadio[opcion].checked;
    }; 

})

.controller('RegistroFinalizarCtrl',function($scope, $state, $rootScope, $ionicPopup, RegistroFinalizarTxt, SolRegistro, resgitroNoSol){
    
    $scope.exito = '';
    $scope.txts = RegistroFinalizarTxt.all();
    //$scope.resumen = SolRegistro.mostrarResumen($rootScope.registro);
    $scope.mensaje = {};
    $scope.encabezado = {
        colorIcono: 'energized',
        contenido: 'Cuenta creada con la siguiete información'
    };
    
    $scope.botonFinalizar = {
        color: 'azul',
        contenido: 'Finalizar'
    };
    
    //Metodos controlador
    $scope.finalizar = function(estado){
        try{
            $state.go(estado);
        }catch(e){
            console.log(e);
        }
    };
        
    if($rootScope.registro.form){
        //Transaccion exitosa.
        $scope.resumen = resgitroNoSol.mostrarResumen($rootScope.registro);
        console.log('resumen: '+ $scope.resumen.res.headerRS.StatusDesc);
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
            titulo: $rootScope.registro.res.headerRS.StatusDesc,
            subtitulo: '',
            icono: $scope.txts.cabezera.iconoError,
            color: $scope.txts.cabezera.colorRojo
        };
    }
    
    delete $rootScope.registro;
    
    
});
