angular.module('appalm.retiroCtrl', [])

//Controlador de la vista retiros para generar PIN
.controller('RetiroGenerarCtrl',function($scope, $state, $rootScope, mensajeRetiroSrv, Conexion, SolHeader, SolPinRetiro){

    var generacionPinSol = {};
    $scope.pin = {
        color: 'azul',
        contenido: 'Generar PIN'
    };
    
    //Metodos del controlador
    $scope.generarPin = function(){
        generacionPinSol.headerRQ = SolHeader.header($rootScope.conf.SERVICIO_GENERACION_PIN);
        generacionPinSol = SolPinRetiro.solicitudPin(generacionPinSol);

        conexion = Conexion.getDatos($rootScope.conf.SERVICIO_GENERACION_PIN,generacionPinSol);
        conexion.then(
        function(respuesta){
            $rootScope.retiro = {
                res: respuesta,
                exito: true
            };
            $state.go('alm.retiro-finalizar');
        },
        function(respuesta){
            $rootScope.retiro = {
                res: respuesta
            };        
            $state.go('alm.retiro-finalizar');
        });
    }
})

//Controlador de la vista final del retiro exitoso
.controller('RetiroFinalizarCtrl',function($rootScope, $scope, $state, $ionicModal, RetiroFinalizarTxt){
    
    $scope.btnFinalizar = {
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
    $scope.mensaje = {};
    $scope.retiro = {};
    $scope.txts = RetiroFinalizarTxt.all();
    
    
    //Metodos del controlador
    
    if($rootScope.retiro.exito){
        //Transaccion exitosa. Recibe resumen desde controlador RetiroGenerarCtrl
        $scope.mensaje = {
            StatusDesc: $rootScope.retiro.res.headerRS.StatusDesc,
            icono: $scope.txts.cabezera.iconoExito
        };
        $scope.retiro.exito = true;
    }else{
        //Transaccion no exitosa
        $scope.mensaje = {
            StatusDesc: $rootScope.retiro.res.headerRS.StatusDesc,
            icono: $scope.txts.cabezera.iconoError
        };
    }
    console.log($scope.retiro);
    delete $rootScope.retiro;
    $scope.finalizar = function(estado) {
        $state.go(estado);
    };
})

//Creacion del mensaje para retirar dinero
.service('mensajeRetiroSrv', function(){
    var mensaje = {
        headerRQ :  {
            trnUid : "",
            appID : "alm",
            dateCreated : "",
            namApp : "mov",
            clientIP : "",
            beanBusiness : "debitAcctRq",
            userID : "",
            userPass : ""
        },
        acctId: "",
        accTypeCode: ""           
    } 
    var obtenerMensaje = function() {
        return mensaje;
    };
    
    return {
        mensaje: mensaje,
        obtenerMensaje : obtenerMensaje
    };
    
});