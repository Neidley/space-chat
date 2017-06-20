(function() {
    function UsernameModalCtrl($uibModalInstance, $cookies) {
        this.setUsername = function () {
            if (this.username && this.username !== '') {
                $cookies.currentUser = this.username;
                $uibModalInstance.close();
            }
        console.log ('>>>>>currentUser', $cookies.currentUser);
        };
    }

    angular
        .module('blocChat')
        .controller('UsernameModalCtrl', ['$uibModalInstance', '$cookies', UsernameModalCtrl]);
})();
