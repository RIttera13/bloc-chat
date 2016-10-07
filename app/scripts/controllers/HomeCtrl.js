(function() {
     function HomeCtrl(Room, Message, $uibModal) {
         var ctrl = this;
         ctrl.rooms = Room.all;
         ctrl.room = Room;
         
         
         ctrl.getRoom = function(room) {
			ctrl.currentRoom = room;
//            ctrl.messages = Message.all;
            ctrl.message = Message;
			ctrl.messages = Room.getMessages(ctrl.currentRoom.$id);
		 }
         
         ctrl.sendMessage = function() {
			Message.send(ctrl.newMessage, ctrl.getRoom.$id);
			ctrl.newMessage = "";
		 } 


         
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
         .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();