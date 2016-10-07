(function() {
  function Room($firebaseArray) {
    var Room = {};
   
    var ref = firebase.database().ref();
    var rooms = $firebaseArray(ref.child("rooms"));
    var messages = $firebaseArray(ref.child('messages'));
    
    return {
            all: rooms,
            addRoom: function (anything) {
                rooms.$add({
                    $value: anything
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
    .factory('Room', ['$firebaseArray', Room]);
})();