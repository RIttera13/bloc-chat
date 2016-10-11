(function() {
  function Room($firebaseArray, $uibModal) {
    var Room = {};
   
    var ref = firebase.database().ref();
    var rooms = $firebaseArray(ref.child("rooms"));
    var messages = $firebaseArray(ref.child('messages'));
    
    return {
            all: rooms,
            add: function (roomName) {
                rooms.$add({
                    $value: roomName
                })
            },
            getMessages: function (roomId) {
                return $firebaseArray(ref.child('messages').orderByChild('roomId').equalTo(roomId))
            },
            getRooms: function (roomId) {
                return $firebaseArray(ref.child('rooms').orderByChild('$id').equalTo(roomId));
            }
    }
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', '$uibModal', Room]);
})();