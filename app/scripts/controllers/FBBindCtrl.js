(function () {
    var blocChat = angular.module("blocChat", ["firebase"]);
    
    blocChat.controller("FBBindCtrl", function($scope, $firebaseObject) {
      var ref = firebase.database().ref().child("rooms");
      // download the data into a local object
      var syncObject = $firebaseObject(ref);
      // synchronize the object with a three-way data binding
      // click on `index.html` above to see it used in the DOM!
      syncObject.$bindTo($scope, "rooms");
    });
    
    blocChat.controller("FBAuthCtrl", function($scope, $firebaseAuth) {
      var auth = $firebaseAuth();

      // login with Facebook
      auth.$signInWithPopup("facebook").then(function(firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
      }).catch(function(error) {
        console.log("Authentication failed:", error);
      });
    });

})();
