(function() {
     function HomeCtrl(Room, Message, $uibModal, $cookies) {
         var ctrl = this;
         ctrl.rooms = Room.all;
         ctrl.room = Room;
         
         
         ctrl.getRoom = function(room) {
			ctrl.currentRoom = room;
            ctrl.message = Message;
			ctrl.messages = Room.getMessages(ctrl.currentRoom.$id);
		 }
         
         ctrl.sendMessage = function(newMessage) {
            console.log(newMessage);
			Message.send(newMessage, ctrl.currentRoom.$id);
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
         .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();