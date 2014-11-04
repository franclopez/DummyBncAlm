angular.module('appalm.modalCtrl', [])

//Controlador modal transacciones
.controller('ModalTransaccionesCtrl', function($scope, $state, ModalTransacciones, $rootScope) {
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

//Controlador modal informacion legal
.controller('ModalInformacion', function($scope, $state, $rootScope){
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
    
    $scope.irALinkBancolombia = function() {
        //var ref = window.open($rootScope.conf.LINK_INFO_LEGAL, '_blank', 'location=yes');
        window.open($rootScope.conf.LINK_INFO_LEGAL,  '_blank', 'location=no');
    };
});