(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
             });
        
        $stateProvider
             .state('room', {
                 url: '/',
                 controller: 'RoomCtrl as roomCtrl',
                 templateUrl: '/templates/room.html'
             });
     }

     angular.module("blocChat", ["firebase", "ui.router"])
            .config(config);
 })();
