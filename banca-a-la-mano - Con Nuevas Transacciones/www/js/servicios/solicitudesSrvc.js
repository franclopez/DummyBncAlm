angular.module('appalm.solicitudSrvc', [])

.service('SolHeader', function($rootScope, BncALMDatos){
    
    var solicitudHead = {
        header: function(beanBusiness){
            var completo = false;
            var headerRQ = {};
            
            headerRQ.appID = solicitudHead.appID();
            headerRQ.beanBusiness = beanBusiness;
            headerRQ.clientIP = solicitudHead.clientIP();
            headerRQ.dateCreated = solicitudHead.dateCreated();
            headerRQ.nameApp = solicitudHead.nameApp();
            headerRQ.userID = BncALMDatos.get_userID();
            headerRQ.userPass = BncALMDatos.get_userPass();
            headerRQ.trnUid = solicitudHead.trnUid(headerRQ.dateCreated,BncALMDatos.get_userID());
            
            if(solicitudHead.completos(headerRQ)){
                return headerRQ;
            }else{
                return false;
            }
            return headerRQ
        },
        headerReg: function(beanBusiness){
            var completo = false;
            var headerRQ = {};
            
            headerRQ.appID = solicitudHead.appID();
            headerRQ.beanBusiness = beanBusiness;
            headerRQ.clientIP = solicitudHead.clientIP();
            headerRQ.dateCreated = solicitudHead.dateCreated();
            headerRQ.nameApp = solicitudHead.nameApp();
            headerRQ.trnUid = solicitudHead.trnUid(headerRQ.dateCreated+'1');
            
            if(solicitudHead.completos(headerRQ)){
                return headerRQ;
            }else{
                return false;
            }
            return headerRQ
        },
        headerAuth: function(beanBusiness,credenciales){
            var completo = false;
            credenciales.headerRQ = {};
            
            credenciales.headerRQ.appID = solicitudHead.appID();
            credenciales.headerRQ.beanBusiness = beanBusiness;
            credenciales.headerRQ.clientIP = solicitudHead.clientIP();
            credenciales.headerRQ.dateCreated = solicitudHead.dateCreated();
            credenciales.headerRQ.nameApp = solicitudHead.nameApp();
            
            BncALMDatos.set_userID(credenciales.userID);
            BncALMDatos.set_userPass(credenciales.userPass);
            
            credenciales.headerRQ.trnUid = solicitudHead.trnUid(credenciales.headerRQ.dateCreated,BncALMDatos.get_userID());
            
            if(solicitudHead.completos(credenciales)){
                return credenciales;
            }else{
                return false;
            }
            return credenciales;
        },
        appID: function(){
            return $rootScope.conf.APP_ID;
        },
        clientIP: function(){
            //////////////////////QUEMADO///////////////////////////
            return '172.001.002.003';
        },
        completos: function(headerRQ){
            //////////////////////QUEMADO///////////////////////////
            return true;
        },
        dateCreated: function(){
            //return event.timeStamp;
            var ahora = new Date(); 
            var dateCreated = '' + ahora.getFullYear()+
                (ahora.getMonth() > 9 ? (Number(ahora.getMonth())+1) : '0'+ (Number(ahora.getMonth())+1)) + 
                (ahora.getUTCDate() > 9 ? (ahora.getUTCDate()) : '0' + (ahora.getUTCDate())) + 
                (ahora.getHours() > 9 ? ahora.getHours() : '0' + ahora.getHours()) + 
                (ahora.getMinutes() > 9 ? ahora.getMinutes() : '0' + ahora.getMinutes()) + 
                (ahora.getSeconds() > 9 ? ahora.getSeconds() : '0' + ahora.getSeconds());
            return (dateCreated);
        },
        nameApp: function(){
            return $rootScope.conf.NAM_APP;
        },
        trnUid: function(dateCreated,userID){
            //var userID = BncALMDatos.get_userID() + '';
            return dateCreated+userID;
        }
    };

    return solicitudHead;
})

.service('BncALMDatos',function($rootScope){
    
    var bncALMData = {
        iniciarBncALM: function(){
            $rootScope.bncALM = $rootScope.bncALM ? $rootScope.bncALM : {}; 
        },
        //*Getters
        get_acctDesc: function(){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            //return 'Ahorros';
            return $rootScope.bncALM.acctDesc;
        },
        get_acctID: function(){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            //return '12345678901';
            return $rootScope.bncALM.acctID;
        },
        //Returna solo la cantidad de digitos recibidos como parametros del valor acctID 
        get_acctID_ultimos: function(digitos){
            var ultimos = bncALMData.get_acctID();
            var tamano = ultimos.length;
            return ultimos.slice(tamano-digitos,tamano);
        },
        get_acctTypeCode: function(){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            //return '7';
            return $rootScope.bncALM.acctTypeCode;
        },
        get_dateLastIn: function(){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            //return '2014/01/22 07:58:55';
            return $rootScope.bncALM.dateLastIn;
        },
        get_ipLastIn: function(){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            //return '192.1.2.3';
            return $rootScope.bncALM.ipLastIn;
        },
        get_name: function(){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            //return 'GABRIEL J. VELEZ';
            return $rootScope.bncALM.name;
        },
        get_userID: function(){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            //return '98707028';
            return $rootScope.bncALM.userID;
        },
        get_userPass: function(){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            //return 'D1BB62E5116D0F8BRFGYUIKLIUYTRDFCGYUIOLIUYTRDSDFTYUI123123123JHGJKJUYTRDFTYUI';
            return $rootScope.bncALM.userPass;
        },
        get_userType: function(){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            //return 'CC';
            return $rootScope.bncALM.userType;
        },
        get_value: function(){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            //return '1,705,874.63';
            return $rootScope.bncALM.value;
        },
        //*Setters
        set_acctDesc: function(acctDesc){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            bncALMData.iniciarBncALM();
            $rootScope.bncALM.acctDesc = acctDesc;
        },
        set_acctID: function(acctID){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            bncALMData.iniciarBncALM();
            $rootScope.bncALM.acctID = acctID;
        },
        set_acctTypeCode: function(acctTypeCode){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            bncALMData.iniciarBncALM();
            $rootScope.bncALM.acctTypeCode = acctTypeCode;
        },
        set_dateLastIn: function(dateLastIn){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            bncALMData.iniciarBncALM();
            $rootScope.bncALM.dateLastIn = dateLastIn;
        },
        set_ipLastIn: function(ipLastIn){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            bncALMData.iniciarBncALM();
            $rootScope.bncALM.ipLastIn = ipLastIn;
        },
        set_name: function(name){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            bncALMData.iniciarBncALM();
            $rootScope.bncALM.name = name;
        },
        set_userID: function(userID){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            bncALMData.iniciarBncALM();
            $rootScope.bncALM.userID = userID;
        },
        set_userPass: function(userPass){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            bncALMData.iniciarBncALM();
            $rootScope.bncALM.userPass = userPass;
        },
        set_userType: function(userType){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            bncALMData.iniciarBncALM();
            $rootScope.bncALM.userType = userType;
        },
        set_value: function(value){
            //CAMBIAR PARA PRODUCCION CON CORDOVA, AHORA POR PRUEBAS CON ROOTSCOPE.bncALM
            bncALMData.iniciarBncALM();
            $rootScope.bncALM.value = value;
        }
    };
    
    return bncALMData;
})

//Consulta de informacion guardada en la transaccion de autenticacion
.service('consultaSaldoNoSol', function(BncALMDatos){
    
    var solicitud = {
        consultaSaldo: function(){
            var completo = false;
            var consulta = {};
            
            consulta.acctID = solicitud.acctID();
            consulta.dateLastIn = solicitud.dateLastIn();
            consulta.ipLastIn = solicitud.ipLastIn();
            consulta.name = solicitud.name();
            consulta.value = solicitud.value();
            
            if(solicitud.completos(consulta)){
                return consulta;
            }else{
                return false;
            }
            
            return consulta;
        },
        acctID: function(){
            return BncALMDatos.get_acctID_ultimos(4);
        },
        dateLastIn: function(){
            return BncALMDatos.get_dateLastIn();
        },
        ipLastIn: function(){
            return BncALMDatos.get_ipLastIn();
        },
        name: function(){
            return BncALMDatos.get_name();
        },
        value: function(){
            return BncALMDatos.get_value();
        },
        completos: function(consultaSaldo){
            //////////////////////QUEMADO///////////////////////////
            return true;
        }
    };

    return solicitud;
})

.service('SolAutenticacion', function($rootScope, BncALMDatos){

    var solicitud = {
        solicitudAuth: function(form){
            var consulta = {};
            var completo = false;
            
            consulta.userPass = form.userPass;
            consulta.userID = form.userID;
            
            if(solicitud.completos(consulta)){
                return consulta;
            }else{
                return false;
            }
            
            return consulta;
        },
        guardaCredencialesAuth: function(solicitud,respuesta){
            BncALMDatos.set_acctDesc(respuesta.acctDetl.acctDesc);
            BncALMDatos.set_acctID(respuesta.acctDetl.acctID);
            BncALMDatos.set_acctTypeCode(respuesta.acctDetl.acctTypeCode);
            BncALMDatos.set_dateLastIn(respuesta.customer.dateLastIn);
            BncALMDatos.set_ipLastIn(respuesta.customer.ipLastIn);
            BncALMDatos.set_name(respuesta.customer.name);
            BncALMDatos.set_userID(solicitud.userID);
            BncALMDatos.set_userPass(solicitud.userPass);
            BncALMDatos.set_userType(respuesta.customer.userType);
            BncALMDatos.set_value(respuesta.acctDetl.value);
        },
        obtenerCredencialesAuthMenu: function(menuPpal){
            menuPpal.usuario = BncALMDatos.get_name();
            menuPpal.detalleCuenta = BncALMDatos.get_acctID_ultimos(4);
            
            return menuPpal;
        },
        completos: function(consultaSaldo){
            //////////////////////QUEMADO///////////////////////////
            return true;
        }
    };

    return solicitud;
})

.service('SolConsultaSaldo', function($rootScope, BncALMDatos){
    
    var solicitud = {
        consultaSaldo: function(consulta){
            var completo = false;
            
            consulta.acctID = solicitud.acctID();
            consulta.acctTypeCode = solicitud.acctTypeCode();
            consulta.regIni = solicitud.regIni();
            consulta.regFin = solicitud.regFin();
            consulta.value = solicitud.value();
            
            if(solicitud.completos(consulta)){
                return consulta;
            }else{
                return false;
            }
            
            return consulta;
        },
        acctID: function(){
            return BncALMDatos.get_acctID_ultimos(4);
        },
        acctTypeCode: function(){
            return BncALMDatos.get_acctTypeCode();
        },
        completos: function(consultaSaldo){
            //////////////////////QUEMADO///////////////////////////
            return true;
        },
        regIni: function(){
            return $rootScope.conf.REG_INI;
        },
        regFin: function(){
            return $rootScope.conf.REG_FIN;
        },
        value: function(){
            return BncALMDatos.get_value();
        },
        completos: function(consultaSaldo){
            //////////////////////QUEMADO///////////////////////////
            return true;
        }
    };

    return solicitud;
})

.service('SolPinRetiro', function($rootScope, BncALMDatos){

    var solicitud = {
        solicitudPin: function(consulta){
            var completo = false;
            
            consulta.acctID = solicitud.acctID();
            consulta.acctTypeCode = solicitud.acctTypeCode();
            
            if(solicitud.completos(consulta)){
                return consulta;
            }else{
                return false;
            }
            
            return consulta;
        },
        acctID: function(){
            return BncALMDatos.get_acctID();
        },
        acctTypeCode: function(){
            return BncALMDatos.get_acctTypeCode();
        },
        completos: function(consultaSaldo){
            //////////////////////QUEMADO///////////////////////////
            return true;
        }
    };

    return solicitud;
})

.service('SolPinTransferencia', function($rootScope, BncALMDatos){

    var solicitud = {
        solicitudTrans: function(consulta,form){
            
            var completo = false;
            
            consulta.acctFrom = {
                acctId: form.acctDetl.acctIDOriginal,
                acctTypeCode: form.conf.ACCTTYPECODE_AHORROS
            };
            
            consulta.acctTo = {
                acctTypeCode: form.formularioRadio[0].checked ? form.formularioRadio[0].valor : form.formularioRadio[1].valor,
                acctId: form.envioDinero.cuentaDestino 
            };
            
            consulta.amount = form.envioDinero.valorTransferir;
            
            if(solicitud.completos(consulta)){
                return consulta;
            }else{
                return false;
            }
            
            return consulta;
        },
        completos: function(consultaSaldo){
            //////////////////////QUEMADO///////////////////////////
            return true;
        }
    };

    return solicitud;
})

.service('SolTransferencia', function($rootScope, BncALMDatos){
    
    var solicitud = {
        mostrarResumen: function(resumen){
            
            if(resumen.from.acctTo.acctTypeCode == $rootScope.conf.ACCTTYPECODE_CORRIENTE){
                resumen.from.acctTo.acctTypeCode = $rootScope.conf.ACCTTYPETXT_CORRIENTE;
            }else{
                resumen.from.acctTo.acctTypeCode = $rootScope.conf.ACCTTYPETXT_AHORRO;
                //CAMBIAR LUEGO QUEMADO PARA VER EN FORMATO PESOS
                resumen.from.acctTo.acctTypeCode = 'Corriente';
            }
            
            resumen.from.acctFrom.acctIdCorto = solicitud.acctID();
            
            return resumen;

        },
        acctID: function(){
            return BncALMDatos.get_acctID_ultimos(4);
        },
        completos: function(consultaSaldo){
            //////////////////////QUEMADO///////////////////////////
            return true;
        },
        solicitudTrans: function(consulta,costTransfer,pinTransferencia,resumen){
            
            var completo = false;
            
            consulta.acctFrom = {
                acctId: resumen.from.acctFrom.acctID || resumen.from.acctFrom.acctId,
                acctTypeCode: resumen.from.acctFrom.acctTypeCode,
                acctIdCorto: solicitud.acctID()
            };
            consulta.acctTo = {
                acctId: resumen.from.acctTo.acctId
            };
            
            if(resumen.from.acctTo.acctTypeCode == $rootScope.conf.ACCTTYPETXT_CORRIENTE){
                consulta.acctTo.acctTypeCode = $rootScope.conf.ACCTTYPECODE_CORRIENTE;
            }else{
                consulta.acctTo.acctTypeCode = $rootScope.conf.ACCTTYPECODE_AHORROS;
            }
            
            consulta.amount = resumen.from.amount;
            consulta.pinTransfer = pinTransferencia;
            consulta.costTransfer = costTransfer;
            
            if(solicitud.completos(consulta)){
                return consulta;
            }else{
                return false;
            }
            
            return consulta;
        }
    };

    return solicitud;
})

//Consulta de informacion guardada en la confirmacion de transferencias
.service('transferenciaNoSol', function($rootScope, BncALMDatos){
    
    var solicitud = {
        mostrarResumen: function(resumen){
            
            if(resumen.form.acctTo.acctTypeCode == $rootScope.conf.ACCTTYPECODE_CORRIENTE){
                resumen.form.acctTo.acctTypeCode = $rootScope.conf.ACCTTYPETXT_CORRIENTE;
            }else{
                resumen.form.acctTo.acctTypeCode = $rootScope.conf.ACCTTYPETXT_AHORRO;
                //CAMBIAR LUEGO QUEMADO PARA VER EN FORMATO PESOS
                resumen.form.acctTo.acctTypeCode = 'Corriente';
            }
            
            resumen.exito = true;
            
            return resumen;

        },
        acctID: function(){
            return BncALMDatos.get_acctID_ultimos(4);
        },
        completos: function(consultaSaldo){
            //////////////////////QUEMADO///////////////////////////
            return true;
        }
    };

    return solicitud;
})

.service('SolCuentaRegistro', function($rootScope, BncALMDatos){

    var solicitud = {
        solicitudReg: function(consulta,form){
            
            var completo = false;
            
            consulta.typeID = form.formularioRadio[0].checked ? form.formularioRadio[0].valor : form.formularioRadio[1].valor;
            consulta.numID = form.registro.numeroDocumento;            
            consulta.dateExp = form.registro.fechaExpedicion;
            consulta.dateBirth = form.registro.fechaNacimiento;
                        
            if(solicitud.completos(consulta)){
                return consulta;
            }else{
                return false;
            }
            
            return consulta;
        },
        completos: function(consultaSaldo){
            //////////////////////QUEMADO///////////////////////////
            return true;
        }
    };

    return solicitud;
})

.service('SolRegistro', function($rootScope, BncALMDatos){
    
    return solicitud;
    var solicitud = {
        mostrarResumen: function(resumen){                      
            return resumen;
        }
    };

    return solicitud;
})

.service('resgitroNoSol', function($rootScope, BncALMDatos){
    
    var solicitud = {
        mostrarResumen: function(resumen){                        
            resumen.exito = true;            
            return resumen;
        }
    };

    return solicitud;
})

.service('SolCuentaRecarga', function($rootScope, BncALMDatos){

    var solicitud = {
        solicitudRec: function(consulta,form){
            
            var completo = false;
            
            consulta.numCel = form.numeroCelular;
            consulta.valor = form.valorRecarga;    
                        
            if(solicitud.completos(consulta)){
                return consulta;
            }else{
                return false;
            }
            
            return consulta;
        },
        completos: function(consultaSaldo){
            //////////////////////QUEMADO///////////////////////////
            return true;
        }
    };

    return solicitud;
})

.service('SolRecarga', function($rootScope, BncALMDatos){
    
    var solicitud = {
        mostrarResumen: function(resumen){
            return resumen;
        }
    };

    return solicitud;
})

.service('recargaNoSol', function($rootScope, BncALMDatos){
    
    var solicitud = {
        mostrarResumen: function(resumen){                        
            resumen.exito = true;            
            return resumen;
        }
    };

    return solicitud;
})

.service('SolCuentaPago', function($rootScope, BncALMDatos){

    var solicitud = {
        solicitudPago: function(consulta,form){
            
            var completo = false;
            
            consulta.numeroReferencia = form.numeroReferencia;
            consulta.codigoConvenio = form.codigoConvenio; 
                        
            if(solicitud.completos(consulta)){
                return consulta;
            }else{
                return false;
            }
            
            return consulta;
        },
        completos: function(consultaSaldo){
            //////////////////////QUEMADO///////////////////////////
            return true;
        }
    };

    return solicitud;
})

.service('SolPagoFactura', function($rootScope, BncALMDatos){
    
    var solicitud = {
        mostrarResumen: function(resumen){
            return resumen;
        }
    };

    return solicitud;
})

.service('pagoFacturaNoSol', function($rootScope, BncALMDatos){
    
    var solicitud = {
        mostrarResumen: function(resumen){                        
            resumen.exito = true;            
            return resumen;
        }
    };

    return solicitud;
});















