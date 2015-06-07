contextCards.controller('decks', function ($scope, $http, $routeParams) {
    $http.get('app/data/data.json')
        .success(function (res) {
        var decks = res.decks
        
        $scope.decks = decks;
        
        $scope.openDeck = function (id) {
            window.location.hash = '/deck/' + id;
        };
        
        if ($routeParams.id) {
            (function () {
                decks.forEach(function (topic) {
                    if (topic.id == $routeParams.id) {
                        $scope.deck = topic;
                    }
                });
            })();
        }
        
    });
    
});