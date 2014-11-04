angular.module('appalm.contenedorSrvc', [])

.factory('Credencial', function() {
    return {
        cred: {}
    };
})

.factory('MenuPpal', function() {

  var menuppal = [
    {
        id: 0,
        titulo: 'Contáctenos',
        subtitulo: 'Chat en línea y listado de números de las sucursales',
        estado: 'contacto'
    },
    {
        id: 1,
        titulo: 'Redes Sociales',
        subtitulo: 'Comparte nuestra aplicación en redes sociales',
        estado: 'social'
    },
    {
        id: 2,
        titulo: 'Salir',
        subtitulo: 'Cerrar la aplicación',
        estado: 'cerrar'
    }
  ];

  return {
    all: function() {
      return menuppal;
    },
    get: function() {
      return menuppal[id];
    }
  }
})

.factory('MenuPpalIngresado', function() {

  var menuppal = [
    {
        id: 0,
        titulo: 'Transacciones',
        subtitulo: 'Despliega todas las operaciones disponibles de la aplicación',
        estado: 'transaccion'
    },
    {
        id: 1,
        titulo: 'Contáctenos',
        subtitulo: 'Chat en línea y listado de números telefónicos de las sucursales',
        estado: 'contacto'
    },
    {
        id: 2,
        titulo: 'Redes Sociales',
        subtitulo: 'Comparta nuestra aplicación en redes sociales',
        estado: 'socialOculto'
    },
    {
        id: 3,
        titulo: 'Salir',
        subtitulo: 'Salir del sistema y cerrar la aplicación',
        estado: 'cerrar'
    }
  ];

  return {
    all: function() {
      return menuppal;
    },
    get: function() {
      return menuppal[id];
    }
  }
})

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
            telefono: '5 361 88 88' 
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
});