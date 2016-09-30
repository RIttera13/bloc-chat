(function() {
     function HomeCtrl(Room, $uibModal) {
         var ctrl = this;
         ctrl.rooms = Room.all;
         ctrl.room = Room;
         
         var newName = 'new';
         
         ctrl.open = function () {
            $uibModal.open({
                templateUrl: 'templates/modal.html',
                controller: 'ModalInstanceCtrl'
            });
         }
     }
        
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();