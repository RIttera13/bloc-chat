
(function() {
    function ModalInstanceCtrl ($uibModalInstance, Room, $scope) {
        $scope.createRoom = function () {
            Room.add ($scope.newRoom);
            $uibModalInstance.close('closed');
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }
        
    angular 
        .module("blocChat")
        .controller("ModalInstanceCtrl", ['$uibModalInstance', 'Room', '$scope', ModalInstanceCtrl])
})();
