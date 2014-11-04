//importScripts('salirApp.js');

/*var Timeout = (function(){
    
    var instance;
    
    function init(){
        var _muerte = function(){
            console.log('adios');          
            self.postMessage();
        };
        
        return {
            terminar: function(){
                this._muerte;
            }
        };
    }
    
    return{
        getInstance: function(){
            if(!instance){
                instance = init();
            }
            
            return{
                instance: instance
            };
        },
        tiempo: setInterval(function(){
            this._muerte;
        },10000),
        vida: function(){
            clearInterval(this.tiempo);
            tiempo = setInterval(this._muerte, 10000);
        }
    };

}());
*/

/*
//timeout = (function(){
//
//	var timeout = function(){
//		filaSeleccionada = -1;
//		this.init = init;
//	};
//	
//	timeout.prototype = {
//        muerte: function(){
//            if(vida){
//                if(tiempo){
//                    clearInterval(tiempo);
//                }else{
//                    console.log('No hay cuenta');
//                }
//            }else{
//                console.log('continua disminuyendo');
//            }
//
//            var tiempo = setInterval(function(){
//                //console.log('salio de la app');
//                vida('salio de la app');
//                self.postMessage();//(datos)
//            },10000);
//        }
//    }
//    
//	return {
//		timeout: timeout
//	}
//})();
*/

self.addEventListener('message',function(e){
    self.postMessage(muerte(e));
},false);

var tiempo = setInterval(cerrar, 1000000);

function muerte(e){
    if(tiempo != undefined){
        console.log('Limpiando timeout');
        clearInterval(tiempo);
    }else{
        console.log('No hay timeout');
    }
    if(tiempo != undefined){
        tiempo = setInterval(cerrar, 1000000);
    }else{
        console.log('No hay timeout');
    }
}

function cerrar() {
    setTimeout(function(){
        postMessage('fin');//muerte
    },1);
}