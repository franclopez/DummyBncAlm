angular.module('appalm.movimientoCtrl', [])

.controller('MovimientoCtrl',function($scope, $rootScope, $state, $ionicModal, Credencial, Conexion, SolHeader, SolConsultaSaldo){//TimeOut
    
    var consultaSaldoSol = {};
    $scope.fechaInicial = '';    
    $scope.fechaFinal = '';
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

    /*
    $scope.subtitulo = {
        cuenta: '1020',
        titulo: 'eduardo perez fortich',
        tituloCuenta: 'Cuenta',
        tituloDetalle: 'Saldo disponible',
        valor: '450000'
    };
    */
    
    Credencial.cred.autorizado = true;
    //TimeOut.muerte();
    
    $ionicModal.fromTemplateUrl('templates/alm/alm-transacciones.html', function(modal) {
        $scope.modal = modal;
    }, {
        animation: 'slide-in-up',
        focusFirstInput: true
    });
    
    //Metodos del controlador
    $scope.irATransacciones = function($event) {
        try{
            $scope.modal.show($event);
        }catch(e){
            console.log(e);  
        } 
    };
    
    consultaSaldoSol.headerRQ = SolHeader.header($rootScope.conf.SERVICIO_CONSULTA_SALDO);
    consultaSaldoSol = SolConsultaSaldo.consultaSaldo(consultaSaldoSol);
    $scope.subtitulo = {
        name: consultaSaldoSol.name,
        value: consultaSaldoSol.value,
        acctID: consultaSaldoSol.acctID
    };
    delete consultaSaldoSol.value;
    
    conexion = Conexion.getDatos($rootScope.conf.SERVICIO_CONSULTA_SALDO,consultaSaldoSol);
    conexion.then(
    function(respuesta){
        $scope.movimientos = respuesta.acctHist;
    },
    function(error){
        console.log(error);
    });
});