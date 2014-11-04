//Los textos se dividen por pantallas y se escriben en formato JSON

angular.module('appalm.textos', [])

.factory('ALMTxt', function() {
    //Las opciones de los menu laterales son suministradas en el servicio contenedorSrvc.js que esta ubicado en el directorio js/servicios/
    var txt = {
        menuppal: {
            cabezera: {
                detalle: 'Cuenta *',
                noUsuario: 'Ingresa  tu información para acceder a tu cuenta Ahorro a la Mano.',
                usuario: ' '
            },
            contenido: {
                titulo: 'Menú'
            }
        }
    };

    return {
        all: function() {
            return txt;
        }
    }
})

.factory('ContrasenaTxt', function() {

    var txt = {
        cabezera: 'Envía dinero a otras cuentas Bancolombia, consulta el saldo y los movimientos de tu cuenta Ahorro a la Mano sin ningún costo desde tu celular.',
        placeholder: 'Digita tu clave'
    };

    return {
        all: function() {
            return txt;
        }
    }
})

.factory('EstadoTxt', function() {

    var txt = {
        cabezera: {
            acceso: {
                subtituloAcceso: 'Tu último ingreso fue el: ',
                contenidoAcceso: 'IP: '
            }
        }
    };

    return {
        all: function() {
            return txt;
        }
    }
})

.factory('IngresoTxt', function() {

    var txt = {
        cabezera: 'Comienza a ahorrar para alcanzar eso que tanto quieres en tu cuenta Ahorro a la Mano.',
        infoLegal: 'Información legal',
        placeholder: 'Ingresa tu documento de identidad'
    };

    return {
        all: function() {
            return txt;
        }
    }
})

.factory('MovimientosTxt', function() {

    var txt = {
        cabezera: {
            iconoError: 'alm-iconClose',
            iconoExito: 'alm-iconTick'
        }
    };

    return {
        all: function() {
            return txt;
        }
    }
})

.factory('RetiroGenerarTxt', function() {

    var txt = {
        cabezera: {
            iconoError: 'alm-iconClose',
            iconoExito: 'alm-iconTick'
        }
    };

    return {
        all: function() {
            return txt;
        }
    }
})

.factory('RetiroFinalizarTxt', function() {

    var txt = {
        cabezera: {
            iconoError: 'alm-iconClose',
            iconoExito: 'alm-iconTick'
        }
    };

    return {
        all: function() {
            return txt;
        }
    }
})

.factory('TransferenciaConfirmarTxt', function() {

    var txt = {
        cabezera: 'Resumen de la transacción',
        confirmacion:'Código para confirmar la transferencia',
        confirmacionPlaceholder:'Ingresa el código recibido',
        resumen:{
            costo: 'Costo de la transacción',
            cuentaOrigen: 'Cuenta origen',
            cuentaDestino: 'Cuenta que recibe el dinero',
            tipoCuenta: 'Tipo de cuenta',
            cantidadEnvio: 'Dinero a enviar'
        },
        subtitulo:{
            titulo:'Confirmar transferencia',
            parrafo: 'Verifica la siguiente información y luego ingresa el código recibido en el mensaje de texto que enviamos a tu celular.'
        }
    };

    return {
        all: function() {
            return txt;
        }
    }
})

.factory('TransferenciaFinalizarTxt', function() {

    var txt = {
        cabezera: {
            subtitulo: 'Número de confirmación:',
            iconoError: 'alm-iconClose',
            iconoExito: 'alm-iconTick'
        },
        resumen:{
            costo: 'Costo de la transacción',
            cuentaOrigen: 'Cuenta origen',
            cuentaDestino: 'Cuenta que recibe el dinero',
            tipoCuenta: 'Tipo de cuenta',
            cantidadEnvio: 'Dinero a enviar'
        }
    };

    return {
        all: function() {
            return txt;
        }
    }
})

.factory('TransferenciaRealizarTxt', function() {

    var txt = {
        babySteps:{
            cuentaOrigen: 'Cuenta origen',
            cuentaOrigenPlaceholder: '',
            cuentaDestino: 'Cuenta que recibe el dinero',
            cuentaDestinoPlaceholder: 'Ingresa el número de la cuenta',
            seleccionCuenta: 'Selecciona el tipo de cuenta a donde vas a enviar el dinero',
            valorTransferir: 'Valor a transferir',
            valorTransferirPlaceholder: 'Cuanto dinero vas a enviar'
        },
        mensaje: 'Completa los siguientes campos para enviar dinero a una cuenta de Ahorros, cuenta Ahorro a la Mano o cuenta Corriente Bancolombia.',
        subtitulo: 'Saldo disponible para transferencias'
    };

    return {
        all: function() {
            return txt;
        }
    }
})
//Parte de TransferenciaRealizarTxt
.factory('OpcionesTransaccionRadio', function($rootScope) {

    var opcionesTransaccionRadio = [
        {
            id: 0,
            contenido: $rootScope.conf.ACCTTYPETXT_AHORRO,
            valor: $rootScope.conf.ACCTTYPECODE_AHORROS,
            checked: false
        },
        {
            id: 1,
            contenido: $rootScope.conf.ACCTTYPETXT_CORRIENTE,
            valor: $rootScope.conf.ACCTTYPECODE_CORRIENTE,
            checked: false
        }   
    ]; 
  

  return {
    all: function() {
      return opcionesTransaccionRadio;
    }
  };
});
//Ingresa  tu información para acceder a tu cuenta Ahorro a la Mano.
