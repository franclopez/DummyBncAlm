//Solicitud para AuthRQ -Inicio sesion-
/*
var autenticacionSol = {
    headerRQ:{
        "trnUid":"123456789012", 
         "appID":"alm", 
         "dateCreated":"20130905101521", 
         "namApp":"mov", 
         "clientIP":"172.001.002.003", 
         "beanBusiness":"AuthRQ"
    },
    "userID":"98707028",
    "userPass":"D1BB62E5116D0F8BRFGYUIKLIUYTRDFCGYUIOLIUYTRDSDFTYUI123123123JHGJKJUYTRDFTYUI"
}
*/
var autenticacionRes = {
    "headerRS":{
        "trnUid":"123456789012", 
        "appID":"alm", 
         "dateResolve":"20130905101521", 
         "namApp":"mov", 
         "clientIP":"172.001.002.003", 
         "statusCode":"000", 
         "userID":"999999999", 
         "severity":"TRANSACCION EXITOSA", 
         "statusDesc":"TRANSACCION EXITOSA"
    },
    "confirm":"12345",
    "customer":{
        "name":"GABRIEL J. VELEZ",
        "userType":"CC",
        "dateLastIn":"2014/01/22 07:58:55",
        "ipLastIn":"200.200.200.2"
    },
    "acctDetl":{
        "acctID":"3333333333",
        "acctTypeCode":"7",
        "acctDesc":"Ahorros",
        "value":"1,705,874.63"
    }, 
    "acctHist":[
        {"date":"15/07/2014","description":"TRASLADO DE CUENTA AHORRO","amount":"15,874.66"}, 
        {"date":"15/07/2014","description":"TRASLADO DE CUENTA AHORRO","amount":"17,550.25"}, 
        {"date":"15/07/2014","description":"TRASLADO DE CUENTA AHORRO","amount":"1,900.63"}, 
        {"date":"15/07/2014","description":"TRASLADO DE CUENTA AHORRO","amount":"5,874.00"},
        {"date":"15/07/2014","description":"TRASLADO DE CUENTA AHORRO","amount":"2,000.00"}
    ]
}

//Solicitud para DetlRQ -Movimientos- ERROR JSON TIENE
/*
var consultaSaldoSol = {
    headerRQ:{
        "trnUid":"123456789012", 
        "appID":"ALM", 
        "dateCreated":"20130905101521", 
        "namApp":"mov", 
        "clientIP":"172.001.002.003", 
        "beanBusiness":"DetlRQ", 
        "userID":"98707028", 
        "userPass":"D1BB62E5116D0F8BRFGYUIKLIUYTRDFCGYUIOLIUYTRDSDFTYUI123123123JHGJKJUYTRDFTYUI"
    },
    "acctID":"00970342168",
    "acctTypeCode":"7",
    "regIni":"1",
    "regFin":"5"
}
*/
var consultaSaldoRes = {
    "headerRS":{
        "trnUid":"123456789012", 
         "appID":"alm", 
         "dateResolve":"20130905101521", 
         "namApp":"mov", 
         "clientIP":"172.001.002.003", 
         "statusCode":"000", 
         "userID":"98707028", 
         "severity":"TRANSACCIÓN EXITOSA", 
         "statusDesc":"TRANSACCIÓN EXITOSA"
    },
    "confirm":"12345",
    "acctDetl":{
        "acctID":"12345678901",
        "acctTypeCode":"7",
        "acctDesc":"Ahorros",
        "value":"1,705,874.63"
    },
    "acctHist":[
                {"date":"15/07/2014","description":"TRASLADO DE CUENTA AHORRO","amount":"15,874.66"}, 
        {"date":"15/07/2014","description":"TRASLADO DE CUENTA AHORRO","amount":"17,550.25"}, 
        {"date":"15/07/2014","description":"TRASLADO DE CUENTA AHORRO","amount":"1,900.63"}, 
        {"date":"15/07/2014","description":"TRASLADO DE CUENTA AHORRO","amount":"5,874.00"},
        {"date":"15/07/2014","description":"TRASLADO DE CUENTA AHORRO","amount":"2,000.00"}
    ],
    "regIni":"1",
    "regFin":"5",
    "regTotal":"16"
}
var consultaSaldoRes2 = {
    "headerRS":{
         "trnUid":"123456789013", 
         "appID":"alm", 
         "dateResolve":"20130905101523", 
         "namApp":"mov", 
         "clientIP":"172.001.002.003", 
         "statusCode":"000", 
         "userID":"103607023", 
         "severity":"TRANSACCIÓN EXITOSA", 
         "statusDesc":"TRANSACCIÓN EXITOSA"
    }, 
    "confirm":"12345",
    "acctDetl":{
        "acctID":"12345678901",
        "acctTypeCode":"7",
        "acctDesc":"Ahorros",
        "value":"1,705,874.63"
    }, 
    "acctHist":[
        {"date":"15/07/2014","description":"TRASLADO DE CUENTA AHORRO","amount":"15,874.66"}, 
        {"date":"15/07/2014","description":"TRASLADO DE CUENTA AHORRO","amount":"17,550.25"}, 
        {"date":"15/07/2014","description":"TRASLADO DE CUENTA AHORRO","amount":"1,900.63"}, 
        {"date":"15/07/2014","description":"TRASLADO DE CUENTA AHORRO","amount":"5,874.00"},
        {"date":"15/07/2014","description":"TRASLADO DE CUENTA AHORRO","amount":"2,000.00"}
    ],
    "regIni":"1",
    "regFin":"5",
    "regTotal":"16"
}

//Solicitud para GenPinRQ -Envio de dinero solicitud-
/*
var envioDineroSolicitudPinSol = {
    "headerRQ":{
        "trnUid":"123456789012", 
        "appID":"alm", 
        "dateCreated":"20130905101521", 
        "namApp":"mov", 
        "clientIP":"172.001.002.003", 
        "beanBusiness":"GenPinRQ",
        "userID":"98707028"
    }, 
    "acctFrom":{
        "acctId":"00970342168",
        "acctTypeCode":"7"
    },
    "acctTo":{
        "acctId":"00170342167",
        "acctTypeCode":"1"
    },
    "amount":"50000.00"
}
*/
var envioDineroSolicitudPinRes = {
    "headerRS":{
        "trnUid":"123456789012", 
        "appID":"alm", 
        "dateResolve":"20130905101521", 
        "namApp":"mov", 
        "clientIP":"172.001.002.003", 
        "StatusCode":"000", 
        "userID":"98707028", 
        "Severity":"TRANSACCION EXITOSA", 
        "StatusDesc":"TRANSACCION EXITOSA"
    },
    "confirm":"12345",
    "costTransfer":"500.00"
} 

//Solicitud para TransferRQ -Envio de dinero Confirmacion-
/*
var envioDineroConfirmacionSol = {
    headerRQ:{
        "trnUid":"123456789012", 
        "appID":"alm", 
        "dateCreated":"20130905101521", 
        "namApp":"mov", 
        "clientIP":"172.001.002.003", 
        "beanBusiness":"TransferRQ", 
        "userID":"98707028",
        "userPass":"D1BB62E5116D0F8BRFGYUIKLIUYTRDFCGYUIOLIUYTRDSDFTYUI123123123JHGJKJUYTRDFTYUI"
    },
    "acctFrom":{
        "acctID":"00970342168",
        "acctTypeCode":"7"
    },
    "acctTo":{
        "acctID":"00170342167",
        "acctTypeCode":"1"
    },
    "amount":"50000.00",
    "pinTransfer":"123456"
 }
*/
var envioDineroConfirmacionRes = {
    "headerRS":{
         "trnUid":"123456789012", 
         "appID":"alm", 
         "dateResolve":"20130905101521", 
         "namApp":"mov", 
         "clientIP":"172.001.002.003", 
         "StatusCode":"000", 
         "userID":"98707028", 
         "Severity":"TRANSACCION EXITOSA", 
         "StatusDesc":"TRANSACCION EXITOSA"
    },
    "confirm":"12345"
}
var envioDineroConfirmacionRes2 = {
    "headerRS":{
         "trnUid":"123456789012", 
         "appID":"alm", 
         "dateResolve":"20130905101521", 
         "namApp":"mov", 
         "clientIP":"172.001.002.003", 
         "StatusCode":"009", 
         "userID":"98707028", 
         "Severity":"TRANSACCION EXITOSA", 
         "StatusDesc":"TRANSACCION NO EXITOSA"
    },
    "confirm":"12345"
}

//Solicitud para debitAcctRq -Generacion Pin-
/*
var generacionPinSol = {
    headerRQ:{
        "trnUid":"123456789012", 
        "appID":"alm", 
        "dateCreated":"20130905101521", 
        "namApp":"mov", 
        "clientIP":"172.001.002.003", 
        "beanBusiness":"debitAcctRq", 
        "userID":"98707028", 
        "userPass":"D1BB62E5116D0F8BRFGYUIKLIUYTRDFCGYUIOLIUYTRDSDFTYUI123123123JHGJKJUYTRDFTYUI"
    }, 
    "acctId":"00970342168",
    "acctTypeCode":"7"
}
*/
var generacionPinRes = {
    "headerRS":{
        "trnUid":"123456789012", 
        "appID":"alm", 
        "dateResolve":"20130905101521", 
        "namApp":"mov", 
        "clientIP":"172.001.002.003", 
        "StatusCode":"001", 
        "userID":"98707028", 
        "Severity":"TRANSACCION ERROR", 
        "StatusDesc":"TRANSACCION erronea debido a...."
    },
    "Confirm":"12345"
}

var generacionPinRes2 = {
    "headerRS":{
        "trnUid":"123456789012", 
        "appID":"alm", 
        "dateResolve":"20130905101521", 
        "namApp":"mov", 
        "clientIP":"172.001.002.003", 
        "StatusCode":"000", 
        "userID":"98707029", 
        "Severity":"TRANSACCION EXITOSA", 
        "StatusDesc":"TRANSACCION EXITOSA"
    },
    "Confirm":"12345"
}

angular.module('appalm.pruebasDatosServicio', [])

.factory("Servicio", function($httpBackend){
    var servicio = {
        servicio: function(){
            
            $httpBackend.whenPOST('/').respond(function(method, url, data){
                return [200];
            });

            $httpBackend.whenPOST('/AuthRQ').respond(function(method, url, data){
                console.log('solicitud /AuthRQ');
                console.log(data);
                var data = autenticacionRes;
                console.log('resuestas');
                console.log(data);
                return [200, data];
            });

            $httpBackend.whenPOST('/DetlRQ').respond(function(method, url, data){
                console.log('solicitud /DetlRQ');
                console.log(data);
                var res = {};
                var data = JSON.parse(data);
                if(data.headerRQ.userID == '98707028'){
                    data = consultaSaldoRes;
                }else{
                    data = consultaSaldoRes2;
                }
                console.log('resuestas');
                console.log(data);
                return [200, data];
            });
            
            $httpBackend.whenPOST('/debitAcctRq').respond(function(method, url, data){
                console.log('solicitud /debitAcctRq');
                console.log(data);
                var res = {};
                var data = JSON.parse(data);
                var random = Math.floor(Math.random() * (3));
                if(random % 2 == 0){
                    data = generacionPinRes;
                }else{
                    data = generacionPinRes2;
                }
                console.log('resuestas');
                console.log(data);
                return [200, data];
            });
            
            $httpBackend.whenPOST('/GenPinRQ').respond(function(method, url, data){
                console.log('solicitud /GenPinRQ');
                console.log(data);
                var data = envioDineroSolicitudPinRes;
                console.log('resuestas');
                console.log(data);
                return [200, data];
            });

            $httpBackend.whenPOST('/TransferRQ').respond(function(method, url, data){
                console.log('solicitud /TransferRQ');
                console.log(data);
                var data = envioDineroConfirmacionRes;
                var random = Math.floor(Math.random() * (4 - 1 +1));
                if(random % 2 == 0){
                    data = envioDineroConfirmacionRes;
                }else{
                    data = envioDineroConfirmacionRes2;
                }
                console.log('respuestas');
                console.log(data);
                return [200, data];
            });

            $httpBackend.whenGET(/\/*/).passThrough();
            $httpBackend.whenPOST(/\/*/).passThrough();

        }
    };
    return servicio;
});
