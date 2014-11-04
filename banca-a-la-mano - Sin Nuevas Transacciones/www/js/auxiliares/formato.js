angular.module('appalm.formatoPesosSrvc', [])

.directive('soloNumeros',function(){
    return {
        require: '?ngModel',
        scope: {
            min: '=?min',
            max: '=?max'
        },
        link: function (scope, elem, attrs, ctrl){
            ctrl.$parsers.push(function (val){
                if (val == undefined){
                    return '';
                }else{
                    var numeros = val.replace(/[^0-9]/g, ''); 
                    if (numeros != val) {
                        ctrl.$setViewValue(numeros);
                        ctrl.$render();
                    }else{
                        console.log('');
                    }
                    return numeros;
                }
            });
        }
    }
})

.directive('soloNumerosCantidad',function($rootScope){
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl){
            ctrl.$parsers.push(function (val){
                if (val == undefined){
                    return '';
                }else{
                    console.log('max: ');
                    var numeros = val.replace(/[^0-9]/g, '');// /^[0-9]{5,15}$/
                    if (numeros != val) {
                        ctrl.$setViewValue(numeros);
                        ctrl.$render();
                    }else{
                        console.log('');
                    }
                    return numeros;
                }
            });
        }
    }
})

.directive('numerosMiles', ['$filter', function ($filter){    
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;

            ctrl.$formatters.unshift(function (a) {
                return $filter(attrs.format)(ctrl.$modelValue)
            });

            ctrl.$parsers.unshift(function (viewValue) {
                var plainNumber = viewValue.replace(/[^\d|\-+|\.+]/g, '');
                elem.val($filter(attrs.format)(plainNumber));
                return plainNumber;
            });
        }
    };
}])

.directive('pesos', ['$filter', function ($filter) {
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;

            var format = {
                    prefix: '$',
                    centsSeparator: '.',
                    thousandsSeparator: ','
                };
            
            ctrl.$parsers.unshift(function (value) {
                $(elem).priceFormat(format);
                return elem[0].value;
            });
            
            //Modelvalue changes
            ctrl.$formatters.unshift(function (value) {
                elem[0].value = ctrl.$modelValue * 100;
                $(elem).priceFormat(format);
                return elem[0].value ;
            });
        }
    };
}])

.directive('pesosCo', function(){
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;

            var format = {
                prefix: '$',
                centsSeparator: '.',
                thousandsSeparator: ','
            };
/*            
//            ctrl.$parsers.unshift(function (value) {
//                $(elem).priceFormat(format);
//                return elem[0].value;
//            });
//
//            ctrl.$formatters.unshift(function (value) {
//                elem[0].value = ctrl.$modelValue * 100 ;
//                $(elem).priceFormat(format);
//                return elem[0].value ;
//            });
*/            
            ctrl.$parsers.push(function(val) {
                var clean = val.replace( /[^0-9]+/g, '');
                if (val !== clean) {
                    ctrl.$setViewValue(clean);
                    ctrl.$render();
                }
                return clean;
            });

            elem.bind('keypress', function(event) {
                if(event.keyCode === 32) {
                    event.preventDefault();
                }
            });
            elem.bind('focusout',function(event){});
            elem.bind('focusin',function(event){			
                var str = get();
                var typed = String.fromCharCode(event);
                price_format(str,typed);
            });
            elem.bind('keydown',function(event){});
            elem.bind('keyup',function(event){});
            
        }
    };
})

.directive('pesosAfter', function($filter){
    return {
        require: '?ngModel',
        link: function(scope,elem,attrs,modelo){
            elem.bind('focusout',function(){
                var valor = modelo.$modelValue;
                for(var i in modelo.$formatters){
                    valor = modelo.$formatters[i](valor);
                }
                valor = $filter('currency')(valor, '$');
                modelo.$setViewValue(valor);
                modelo.$render();
            });
        }
    };
});

function set(nvalue){
    if(obj.is('input')){
        obj.val(nvalue);
    }else{
        obj.html(nvalue);
    }
}

function get(){
    var value = '';
    try{
        value = $('#pesos');
        value = value.val();
    }catch(e){
        value = $('#pesos');
        value = value.html();
    }
    return value;
}

function price_format(str, ignore){
    var thousandsSeparator =  ',';
    var prefix = '$';
    if(!ignore && (str === '' || str == price_format('0', true))){
        return '';
    }
    // formatting settings
    var formatted = fill_with_zeroes(to_numbers(str));
    console.log(formatted);
    var thousandsFormatted = '';
    var thousandsCount = 0;
    var integerVal = formatted.substr(0,formatted.length);
    // apply thousands pontuation
    if (thousandsSeparator){
        for (var j=integerVal.length;j>0;j--){
            var char_ = integerVal.substr(j-1,1);
            thousandsCount++;
            if (thousandsCount%3==0){
                char_ = thousandsSeparator+char_;
            }
            thousandsFormatted = char_+thousandsFormatted;
        }

        if (thousandsFormatted.substr(0,1)==thousandsSeparator){
            thousandsFormatted = thousandsFormatted.substring(1,thousandsFormatted.length);
        }
        formatted = thousandsFormatted;
    }

    formatted = prefix+formatted;
    
    return formatted;
}

function fill_with_zeroes (str){
    while(str.length<(1)){
        str = '0'+str;
    }
    console.log(str);
    return str;
}

function to_numbers(str){
    var formatted = '';
    var is_number = /[0-9]/;
    for (var i=0;i<(str.length);i++){
        var char_ = str.charAt(i);
        if (formatted.length==0 && char_==0){
            char_ = false;
        }

        if (char_ && char_.match(is_number)){
            formatted = formatted+char_;
        }
    }
    console.log(formatted);
    return formatted;
}