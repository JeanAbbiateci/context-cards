contextCards.controller('stacks', function ($scope, $http) {
    $http.get('app/data/data.json')
        .success(function (res) {
        $scope.cards = res.cards;
    });
    
});