//Los textos se dividen por pantallas y se escriben en formato JSON

angular.module('appalm.textos', [])


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
        },
        get: function(txtId){
            return txt[txtId];
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
    },
    get: function(opcionId) {
      return opcionesTransaccionRadio[opcionId];
    }
  };
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
        },
        get: function(txtId){
            return txt[txtId];
        }
    }
})

.factory('TransferenciaFinalizarTxt', function() {

    var txt = {
        cabezera: {
            subtitulo: 'Número de confirmación:',
            iconoError: 'alm-iconClose',
            iconoExito: 'alm-iconTick',
            colorRojo: 'rojo',
            colorVerde: 'verde'
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
        },
        get: function(txtId){
            return txt[txtId];
        }
    }
})

.factory('RetiroFinalizarTxt', function() {

    var txt = {
        cabezera: {
            iconoError: 'alm-iconClose',
            iconoExito: 'alm-iconTick',
            colorVerde: 'verde',
            colorRojo: 'rojo'
        }
    };

    return {
        all: function() {
            return txt;
        },
        get: function(txtId){
            return txt[txtId];
        }
    }
})

.factory('RegistroGenerarTxt', function() {

    var txt = {
        babySteps:{
            tipoDocumento: 'Tipo de documento',
            numeroDocumento: 'Digita tu número  de documento',
            fechaExpedicion: 'Digita la fecha de expedición de tu documento',
            fechaNacimiento: 'Digita tu fecha de nacimiento',
            clave: 'Digita una nueva clave si NO eres cliente Bancolombia'
        },
        mensaje: 'Completa los siguientes campos para crear una cuenta de  Ahorro a la Mano o cuenta.'
    };

    return {
        all: function() {
            return txt;
        },
        get: function(txtId){
            return txt[txtId];
        }
    }
})

.factory('OpcionesRegistroRadio', function($rootScope) {

    var opcionesRegistroRadio = [
        {
            id: 0,
            contenido: 'TI',
            valor: 'TI',
            checked: false
        },
        {
            id: 1,
            contenido: 'CC',
            valor: 'CC',
            checked: false
        }   
    ]; 
  

  return {
    all: function() {
      return opcionesRegistroRadio;
    },
    get: function(opcionId) {
      return opcionesRegistroRadio[opcionId];
    }
  };
})

.factory('RegistroFinalizarTxt', function() {

    var txt = {
        cabezera: {
            subtitulo: 'Número de confirmación:',
            iconoError: 'alm-iconClose',
            iconoExito: 'alm-iconTick',
            colorRojo: 'rojo',
            colorVerde: 'verde'
        },
        resumen:{
            tipoDocumento: 'Tipo de documento',
            numeroDocumento: 'Número de documento',
            fechaExpedicion: 'Fecha de expedición',
            fechaNacimiento: 'Fecha de Nacimiento',
        }
    };

    return {
        all: function() {
            return txt;
        },
        get: function(txtId){
            return txt[txtId];
        }
    }
})

.factory('RecargaRealizarTxt', function() {

    var txt = {
        babySteps:{
            numeroCelular: 'Número de celular',
            valorRecargar: 'Valor a recargar'
        },
        mensaje: 'Completa los siguientes campos para realizar recargas prepago a cualquier operador celular.',
    };

    return {
        all: function() {
            return txt;
        },
        get: function(txtId){
            return txt[txtId];
        }
    }
})

.factory('RecargaConfirmarTxt', function() {

    var txt = {
        cabezera: 'Resumen de la recarga',
        confirmacion:'Código para confirmar la recarga',
        resumen:{
            costo: 'Costo de la transacción',
            numeroCelular: 'Número de celular',
            cantidadRecarga: 'Valor a recargar'
        },
        subtitulo:{
            titulo:'Confirmar recarga',
            parrafo: 'Verifica la siguiente información y luego confirma la recarga.'
        }
    };

    return {
        all: function() {
            return txt;
        },
        get: function(txtId){
            return txt[txtId];
        }
    }
})

.factory('RecargaFinalizarTxt', function() {

    var txt = {
        cabezera: {
            subtitulo: 'Número de confirmación:',
            iconoError: 'alm-iconClose',
            iconoExito: 'alm-iconTick',
            colorRojo: 'rojo',
            colorVerde: 'verde'
        },
        resumen:{
            costo: 'Costo de la transacción',
            numeroCelular: 'Número de celular',
            valorRecargar: 'Valor recargado',
        }
    };

    return {
        all: function() {
            return txt;
        },
        get: function(txtId){
            return txt[txtId];
        }
    }
})

.factory('PagoFacturaRealizarTxt', function() {

    var txt = {
        babySteps:{
            numeroReferencia: 'Número de referencia',
            codigoConvenio: 'Código del convenio',
            valorPagar: 'Valor a pagar'
        },
        mensaje: 'Completa los siguientes campos para realizar pagos de facturas de servicios públicos.',
    };

    return {
        all: function() {
            return txt;
        },
        get: function(txtId){
            return txt[txtId];
        }
    }
})

.factory('PagoFacturaConfirmarTxt', function() {

    var txt = {
        cabezera: 'Resumen del pago',
        confirmacion:'Código para confirmar el pago',
        resumen:{
            costo: 'Costo de la transacción',
            numeroReferencia: 'Número de referencia',
            codigoConvenio: 'Codigo del convenio',
            valorPagar: 'Valor a pagar',
        },
        subtitulo:{
            titulo:'Confirmar pago',
            parrafo: 'Verifica la siguiente información y luego confirma el pago de la factura.'
        }
    };

    return {
        all: function() {
            return txt;
        },
        get: function(txtId){
            return txt[txtId];
        }
    }
})

.factory('PagoFacturaFinalizarTxt', function() {

    var txt = {
        cabezera: {
            subtitulo: 'Número de confirmación:',
            iconoError: 'alm-iconClose',
            iconoExito: 'alm-iconTick',
            colorRojo: 'rojo',
            colorVerde: 'verde'
        },
        resumen:{
            costo: 'Costo de la transacción',
            numeroReferencia: 'Número de referencia',
            codigoConvenio: 'Código de convenio',
            valorPagar: 'Valor pagado'
        }
    };

    return {
        all: function() {
            return txt;
        },
        get: function(txtId){
            return txt[txtId];
        }
    }
});

