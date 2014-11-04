angular.module('appalm.conexionSrvc', [])

.service("Conexion", function($http, $q, $rootScope){//, $resource , $httpProvider

    var servicio = {
        con: function(){
            var deferred = $q.defer();
            $http.post($rootScope.URL_BACKEND).success(function(datos){
                deferred.resolve(datos);
            }).error(function(e){
                deferred.reject("Error en la solicitud. Codigo de error: "+e);
            });
            return deferred.promise;
        },
        getDatos: function(servicio,datos){
            var deferred = $q.defer();
            var servicio = $rootScope.conf.URL_BACKEND+servicio;
            datos = {
                "userID":"42792090",
                 "userPass":"E3399335C6E9F098",
                 "headerRQ":
                     {"trnUid":"123456789012",
                         "beanBusiness":"AuthRQ",
                         "clientIP":"172.001.002.003",
                         "nomApp":"mov",
                         "dateCreated":"20130905101521",
                         "appID":"ALM"
                     }
            };
            //$http(servicio, datos)
            /*
            $.ajax({
					url: servicio,
					//dataType: 'json',
                    contentType:"application/json",
					type: 'post',
					data: datos})
            */
            
            datos = JSON.stringify(datos);
            config = {
                'content-type': 'application/json'
            };
            alert('seva x http');
            $http({
                url: servicio,//'http://jsonstub.com/pruebaalm'
                method: 'POST',
                data: datos,         
                headers: {
                    'Content-Type': 'application/json'
                }}).success(function(datos){
                    if(datos.headerRS.statusCode == 000 || datos.headerRS.StatusCode == 000){
                        alert('ok servicios');
                        try{
                            deferred.resolve(datos);
                        }catcht(e){
                            alert(e);
                        }
                    }else{
                        alert('error servicios');
                        try{
                            deferred.reject(datos);
                        }catcht(e){alert(e);}
                    }
                })
                .error(function(xhr){
                    alert('error http');
                    //alert(JSON.stringify(xhr));
                    try{
                        deferred.reject("Error en la conexion. Codigo de error: "+xhr);
                    }catcht(e){alert(e);}
                });
            return deferred.promise;
            
//            var xmlhttp;
//            if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
//                xmlhttp=new XMLHttpRequest();
//            }
//            servicio = 'http://www.w3schools.com/ajax/ajax_xmlhttprequest_send.asp';
//            xmlhttp.open("POST",servicio,true);
//            xmlhttp.setRequestHeader("Content-type","application/json");
//            xmlhttp.send(JSON.stringify(datos));//JSON.stringify(datos)
//            xmlhttp.onreadystatechange=function(){
//                if(xmlhttp.readyState==4 && xmlhttp.status==200){
//                    console.log(xmlhttp.responseText);
//                    deferred.resolve(xmlhttp.responseText);
//                }else{
//                    console.log(xmlhttp.responseText);
//                    if(xmlhttp.readyState==4 && xmlhttp.status!=200){
//                        deferred.reject(xmlhttp.responseText);
//                    }
//                }
//            }
//            return deferred.promise;
        }
    };

    return servicio;
});