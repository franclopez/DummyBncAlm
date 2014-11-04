//Datos quemados de la app para pruebas de diseno y concepto
angular.module('appalm.factories', [])


.factory('Movimientos', function() {

    var movimientos = [
    {
        id: 0,
        informacion: 'Transaccion de Fulanito desde Medellin',
        concepto: 'Concepto',
        valor: '12,000.00',
        fecha: '08/04/2014'
    },
    {
        id: 1,
        informacion: 'Retiro desde el cajero Unicentro de Medellin',
        concepto: 'Concepto',
        valor: '10,000.00',
        fecha: '16/04/2014'
    },
    {
        id: 2,
        informacion: 'Retiro de dinero del cajero del hospital de Medellin',
        concepto: 'Concepto',
        valor: '60,000.00',
        fecha: '16/04/2014'
    },
    {
        id: 3,
        informacion: 'Transaccion de Fulanito desde Medellin',
        concepto: 'Concepto',
        valor: '42,000.00',
        fecha: '16/05/2014'
    }
  ];

    return {
        all: function() {
            return movimientos;
        },
        get: function(movimientoId) {
            return movimientos[movimientoIdid];
        }
    }
})

.factory('ResumenTransferencia', function() {

    var movimientos = {
        id: 0,
        cuentaOrigen:'1020',
        costoTransaccion:'100.00',
        cuentaDestino: '123-456-78901',
        tipoCuenta: 'Ahorros',
        valorTransferencia: '876,000.00'
    };

    return {
        all: function() {
            return movimientos;
        },
        get: function(movimientoId) {
            return movimientos[movimientoIdid];
        }
    }
});
