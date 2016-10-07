(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref();
    var messages = $firebaseArray(ref.child('messages'));

    return {
      send: function(newMessage) {
       messages.$add(newMessage)
       console.log(messages);
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();