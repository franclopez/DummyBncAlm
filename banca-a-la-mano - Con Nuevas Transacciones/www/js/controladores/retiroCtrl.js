angular.module('appalm.retiroCtrl', [])

//Controlador de la vista retiros para generar PIN
.controller('RetiroGenerarCtrl',function($scope, $state, $rootScope, Conexion, SolHeader, SolPinRetiro){

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
    $scope.mensaje = {};
    $scope.retiro = {};
    $scope.txts = RetiroFinalizarTxt.all();
    
    
    //Metodos del controlador
    
    if($rootScope.retiro.exito){
        //Transaccion exitosa. Recibe resumen desde controlador RetiroGenerarCtrl
        $scope.mensaje = {
            StatusDesc: $rootScope.retiro.res.headerRS.StatusDesc,
            icono: $scope.txts.cabezera.iconoExito,
            color: $scope.txts.cabezera.colorVerde
        };
        $scope.retiro.exito = true;
    }else{
        //Transaccion no exitosa
        $scope.mensaje = {
            StatusDesc: $rootScope.retiro.res.headerRS.StatusDesc,
            icono: $scope.txts.cabezera.iconoError,
            color: $scope.txts.cabezera.colorRojo
        };
        $scope.retiro.error = true;
    }
    console.log($scope.retiro);
    delete $rootScope.retiro;
    $scope.finalizar = function(estado) {
        $state.go(estado);
    };
});