app.controller('View1Ctrl', [function($scope,$q) {
    $scope.init = function(){
        var defer1 = $q.defer();
        var promise1 = defer1.promise;

        promise1
            .then(function(value){
                console.log("in promise1 ---- success");
                console.log(value);
            },function(value){
                console.log("in promise1 ---- error");
                console.log(value);
            },function(value){
                console.log("in promise1 ---- notify");
                console.log(value);
            })
            .catch(function(e){
                console.log("in promise1 ---- catch");
                console.log(e);
            })
            .finally(function(value){
                console.log('in promise1 ---- finally');
                console.log(value);
            });

        defer1.resolve("hello");

    }
    $scope.init();

}]);