angular.module('appalm.estadoCtrl', [])

.controller('EstadoCtrl',function($scope, $rootScope, $ionicScrollDelegate, $timeout, $state, $ionicModal, Credencial, consultaSaldoNoSol){//TimeOut
    
    Credencial.cred.autorizado = true;
    //TimeOut.muerte();
    $scope.botonTransaccion = {
        color: 'azul',
        contenido: 'Ir a Transacciones'
    };
    $scope.botonMovimiento = {
        color: 'azul',
        contenido: 'Movimientos'
    };
    $scope.encabezado = {
        colorIcono: 'energized',
        contenido: 'Últimos movimientos de tu cuenta'
    };
    var saldo = {};
    $ionicModal.fromTemplateUrl('templates/alm/alm-transacciones.html', function(modal){
        $scope.modal = modal;
    }, {
        animation: 'slide-in-up',
        focusFirstInput: true
    });
    
    //Metodos del controlador
    
    $scope.irATransacciones = function($event){
        try{
            $scope.modal.show($event);
        }catch(e){
            console.log(e);  
        }
    };
    
    saldo = consultaSaldoNoSol.consultaSaldo();
    
    $scope.movimientos = $rootScope.movimientos;
    $scope.acceso = {
        ipLastIn: saldo.ipLastIn,
        dateLastIn: saldo.dateLastIn 
    };
    $scope.subtitulo = {
        name: saldo.name,
        value: saldo.value,
        acctID: saldo.acctID
    };
    
    $scope.esconderBarra = function(){
        if($ionicScrollDelegate.getScrollPosition().top === 0){
            console.log('000');
        }else{
            $timeout(function(){
                $scope.muestraOcultaBars = false;
                $ionicScrollDelegate.resize();
            },200);    
        }
    };
    $scope.mostrarBarra = function(){
        $timeout(function(){
            $scope.muestraOcultaBars = false;
            $ionicScrollDelegate.resize();
        });
    };
});