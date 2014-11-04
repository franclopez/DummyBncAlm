angular.module('appalm.demoCtrl', [])

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate, localstorageDemo) {
    
    $scope.demoDespues = function() {
        localstorageDemo.set('bandera', true);
        $state.go('alm.ingreso-usuario');
    };
    
    $scope.demoSalir = function() {
        localstorageDemo.set('bandera', false);        
        $state.go('alm.ingreso-usuario');
    };
    
    $scope.anterior = function() {
        $ionicSlideBoxDelegate.previous();
    };
    
    $scope.siguiente = function() {
        $ionicSlideBoxDelegate.next();
    };
    
    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
        setTimeout(function(){
            $ionicSlideBoxDelegate.next();
        }, 10000);
    };
    
    setTimeout(function(){
        $ionicSlideBoxDelegate.next();
    }, 10000);
    
});

