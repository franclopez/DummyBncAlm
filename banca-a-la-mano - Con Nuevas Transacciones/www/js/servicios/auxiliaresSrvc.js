angular.module('appalm.auxiliaresSrvc', [])

.service('Navegacion', function($state, Salida){
    
    var metodos = {
        ir: function(estado){
            try{
                $state.go(estado);
            }catch(e){
                console.log(e);
            }      
        },
        backButton: function(){
            try{
                switch(true){
                    case $state.current.name === 'alm.ingreso-usuario':
                        Salida.salir();
                        break;
                    case $state.current.name === 'alm.ingreso-contrasenia':
                        $state.go('alm.ingreso-usuario');//backButton.ir('alm.ingreso-usuario');
                        break;
                    case $state.current.name === 'alm.contacto':
                        break;
                    case $state.current.name === 'alm.estado':
                        Salida.salir();
                        break;
                    case $state.current.name === 'alm.movimiento':
                        $state.go('alm.estado');
                        break;
                    case $state.current.name === 'alm.retiro-generar':
                        $state.go('alm.estado');
                        break;
                    case $state.current.name === 'alm.retiro-finalizar':
                        $state.go('alm.estado');
                        break;
                    case $state.current.name === 'alm.transferencia-realizar':
                        $state.go('alm.estado');//backButton.ir('alm.estado');
                        break;
                    case $state.current.name === 'alm.transferencia-confirmar':
                        try{
                            $scope.modal.show($event);
                        }catch(e){
                            console.log(e);
                        }
                        break;
                    case $state.current.name === 'alm.transferencia-finalizar':
                        $state.go('alm.transferencia-realizar');//backButton.ir('alm.transferencia-realizar');
                        break;
                    case $state.current.name === 'intro':
                        break;
                    case $state.current.name === 'alm.registro-generar':
                        $state.go('alm.ingreso-usuario');
                        break;
                    case $state.current.name === 'alm.registro-finalizar':
                        $state.go('alm.ingreso-usuario');
                        break;
                    default:
                        break;
                };
            }catch(e){
                console.log(e);
            }
        }
    };
    
    return metodos;
})

.factory('ModalTransacciones', function() {
    var modaltransacciones = {
        transacciones: [            
            {
                transaccion: 'Retirar dinero',
                descripcion: 'Generar pin para poder retirar dinero en cajeros automáticos.',
                estado: 'alm.retiro-generar'
            },
            {
                transaccion: 'Enviar dinero',
                descripcion: 'Enviar dinero a una cuenta de terceros.',
                estado: 'alm.transferencia-realizar'
            },
            {
                transaccion: 'Consultar movimientos',
                descripcion: 'Consultar los movimientos de la cuenta.',
                estado: 'alm.movimiento'
            },
            {
                transaccion: 'Recargar prepago',
                descripcion: 'Realizar regargas prepago a cualquier operador.',
                estado: 'alm.recarga-realizar'
            },
            {
                transaccion: 'Pagar facturas',
                descripcion: 'Pagar facturas de servicios públicos',
                estado: 'alm.pago-factura-realizar'
            }/*,
            {
                transaccion: 'Cambiar clave',
                descripcion: '',
                estado: ''
            }*/
        ]
    };
    
    return {
        all: function() {
          return modaltransacciones;
        },
        get: function(opcionId) {
          return modaltransacciones[id];
        }
    };
});

//.directive('formatoPesos', function($filter, $browser){
//    return {
//        require: 'ngModel',
//        link: function ($scope, $element, $attrs, ngModelCtrl) {
//            var listener = function () {
//                var value = $element.val().replace(/,/g, '')
//                $element.val($filter('number')(value, 0))
//            }
//
//            // This runs when we update the text field
//            ngModelCtrl.$parsers.push(function (viewValue) {
//                return viewValue.replace(/,/g, '');
//            })
//
//            // This runs when the model gets updated on the scope directly and keeps our view in sync
//            ngModelCtrl.$render = function () {
//                $element.val($filter('number')(ngModelCtrl.$viewValue, 0))
//            }
//
//            //$element.bind('change', listener)
//            $element.bind('keydown', function (event) {
//                var key = event.keyCode
//                // If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
//                // This lets us support copy and paste too
//                if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)) return
//                $browser.defer(listener)//listener // Have to do this or changes don't get picked up properly
//            })
//
////            $element.bind('paste cut', function () {
////                $browser.defer(listener)//
////            })
//        }
//
//    }
//});