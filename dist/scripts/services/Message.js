(function() {
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
      send: function(newMessage, roomId) {
        var message = {
					username: $cookies.get('blocChatCurrentUser'),
					content: newMessage,
					sentAt: firebase.database.ServerValue.TIMESTAMP,
					roomId: roomId
				}
                messages.$add(message);
        }
      };
  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();