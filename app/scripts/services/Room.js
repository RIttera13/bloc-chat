(function() {
  function Room($firebaseArray) {
    var Room = {};
   
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    
    var newRoom = function(roomName){
        Room.$add({roomName})()
    }; 
    //Public Methods
    Room.all = rooms;
      
    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();