/**
 * Created by Atheesan on 4/02/14.
 */
function LoginController ($scope, $translate,Login) {
    $scope.username = "";
    $scope.password = "";


    var login = {"username":$scope.username,"password":$scope.password};
    Login.save(login);

}