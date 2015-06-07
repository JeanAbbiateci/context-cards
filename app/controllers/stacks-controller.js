contextCards.controller('decks', function ($scope, $http, $routeParams) {
    
    $http.get('app/data/data.json')
        .success(function (res) {
            var decks = res.decks;
        
            $scope.decks = decks;

            $scope.openDeck = function (id) {
                window.location.hash = '/deck/' + id;
            };

            if ($routeParams.deckId) {
                (function () {
                    decks.forEach(function (topic) {
                        if (topic.id == $routeParams.deckId) {
                            var deck = topic;
                            $scope.deck = deck;
                            
                            if ($routeParams.cardId) {
                                deck.cards.forEach(function (card) {
                                    if (card.id == $routeParams.cardId) {
                                        $scope.card = card;
                                    }
                                });
                            }
                        }
                    });
                }());
            }
        });
});