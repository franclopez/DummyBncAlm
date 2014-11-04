angular.module('appalm.timeoutSrvc', [])

.factory('TimeOut', function($q,$state){
    var worker = '';
    try{
        var worker = new Worker('js/timeout.js');
    }catch(e){
        console.log(e);
    }
    var defer;
    console.log('servicio worker');
    worker.addEventListener('message', function(e){
        if(e['data'] != undefined){
            if(e['data'] === 'fin'){
                console.log('Salida de la App');
                try{
                    if(navigator.app){
                        navigator.app.exitApp();
                    }else{
                        if(navigator.device){
                            navigator.device.exitApp();
                        }else{
                            if(ionic.Platform.isWebView()){
                                navigator.app.exitApp();
                            }else{
                                console.log('No se detecta el dispositivo');
                                $state.go('alm.ingreso-usuario');
                            }
                        }
                    }
                    //worker.close();
                }catch(e){
                    console.log(e);
                }
            }
            defer.resolve(e['data']);
        }
    },false);
    
    return{
        muerte: function(data){
            defer = $q.defer();
            worker.postMessage({
                'myData': data
            });
            return defer.promise;
        },
        cerrar: function(data){
            defer = $q.defer();
            worker.postMessage({
                'myData': data
            });
            return defer.promise;
        }
    };
})

.factory('TimeOutTiempos', function(){
    var timeouts = [
        {
            id: 0,
            nombre: '5min',
            valor: '300000'
        },
        {
            id: 1,
            contenido: '2min',
            valor: '120000'
        },
        {
            id: 2,
            contenido: '10seg',
            valor: '10000'
        }
    ];

    return {
        all: function() {
            return timeouts;
        },
        get: function(opcionId) {
            return timeouts[opcionId];
        }
    };
})

.factory('Muerte', function(e){
    var data = e.data;
    var tiempo = setInterval(cerrar, 20000);

    switch(data.cmd){
        case 'muerte':
            console.log('otra vida');
            if(tiempo != undefined){
                console.log('vida sin tiempo');
                clearInterval(tiempo);
            }else{
                console.log('no se termina el tiempo');
            }
            if(tiempo != undefined){
                tiempo = setInterval(cerrar, 20000);
            }else{
                console.log('nueva vida');
            }
            break;
        default:
            break;
    }

    function cerrar() {
        console.log('adiosito');
        setTimeout(function(){
            //app.close();
            console.log('se va');
            self.postMessage('x');
        },1000);
    }
})

.service('TimeOutS', function(Muerte,$q){
    console.log('servicio worker');
    
    return{
        muerte: function(data){
            var defer = $q.defer();
            Muerte.send({'cmd': 'muerte'},function(res){
                defer.resolve(res);
            });
            return defer.promise;
        }
    };
});