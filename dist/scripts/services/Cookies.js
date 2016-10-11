(function () {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
                animation: false,
                templateUrl: '/templates/userNameModal.html',
                controller: function($uibModalInstance, Room, $scope, $cookies) {
//                $scope.username.$setValidity("minLegth", $scope.username.length > 0),
                    $scope.createUsername = function() {                        
                        $cookies.put('blocChatCurrentUser', $scope.username)
                        $uibModalInstance.close();

                        return ($cookies.blocChatCurrentUser)
                    }
                },
                size: 'sm',
                backdrop: 'static',
                keyboard: false,
            })
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();