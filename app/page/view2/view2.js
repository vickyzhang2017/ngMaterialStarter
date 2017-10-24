app.controller('View2Ctrl', function($scope, $q, $http) {

    $scope.init = function() {
        $scope.getData().then(function(data){
            console.log(JSON.stringify(data));
        }, function (err) {
            console.log(JSON.stringify(err));
        });
    };

    $scope.getData = function() {
        var defer = $q.defer();
        $http({
            method: 'GET',
            url: '/page/view2/view2.json'
        }).then(function(data){
            defer.resolve(data);
        }, function(err){
            defer.reject(err);
        });
        return defer.promise;
    };

    $scope.init();

});