(function () {

    function UserNameCtrl($uibModalInstance, Room, $scope, $cookies) {
        

        $scope.createUsername = function (username) {
            if ($cookies.blocChatCurrentUser === undefined) {
                Room.blocChatCookies();
            } else{
                $cookies.blocChatCurrentUser = username;
                $uibModalInstance.close();
            }

        };
        return ($cookies.blocChatCurrentUser)
    }

    angular
        .module('blocChat')
        .controller('UserNameCtrl', ['$uibModalInstance', '$scope', 'Room', '$cookies', UserNameCtrl])

})();