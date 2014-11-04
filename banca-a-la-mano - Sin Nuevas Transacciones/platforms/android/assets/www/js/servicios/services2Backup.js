angular.module('appalm.services2', [])

.factory('MenuDerecho', function() {

  var menuderecho = {
    chat: {
        color: 'azul',
        contenido: 'Chat'
    },
    contactos: [
        {
            sucursal: 'Bogotá',
            telefono: '1 343 0000'
        },
        {
            sucursal: 'Medellín',
            telefono: '4 510 9000'
        },
        {
            sucursal: 'Cali',
            telefono: '2 554 0505'
        },
        {
            sucursal: 'Barranquilla',
            telefono: '5 693 4400'
        },
        {
            sucursal: 'Cartagena',
            telefono: '5 693 4400'
        },
        {
            sucursal: 'Cali',
            telefono: '2 554 0505'
        },
        {
            sucursal: 'Barranquilla',
            telefono: '5 693 4400'
        },
        {
            sucursal: 'Cartagena',
            telefono: '5 693 4400'
        },
        {
            sucursal: 'Bucaramanga',
            telefono: '7 697 2525'
        },
        {
            sucursal: 'Resto del País',
            telefono: '01 8000 912345'
        }
    ]
  };

  return {
    all: function() {
      return menuderecho;
    },
    get: function() {
      return menuderecho[id];
    }
  }
})

.factory('Compartir', function() {
    var contenidocompartir = {
        facebook: {
            color: 'azul',
            icono: 'alm-iconFB',
            contenido: 'Compartir'
        },
        twiter: {
            color: 'azul',
            icono: 'alm-iconTW',
            contenido: 'Compartir'
        },
        facebook2: {
            color: 'azul',
            icono: 'alm-iconFB',
            contenido: 'Compartir'
        }
    };
    
    return {
        all: function() {
          return contenidocompartir;
        },
        get: function(opcionId) {
          return contenidocompartir[id];
        }
    };
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
            }
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
