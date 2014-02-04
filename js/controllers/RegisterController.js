/**
 * Created by Atheesan on 4/02/14.
 */
function RegisterController($scope, Register) {
    $scope.registerData = {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: ""
    };

    $scope.register = function () {
//        alert($scope.registerData.firstname + ' ' + $scope.registerData.lastname + ' ' + $scope.registerData.email + ' ' + $scope.registerData.username + ' ' + $scope.registerData.password);
        Register.save($scope.registerData);
    }


}