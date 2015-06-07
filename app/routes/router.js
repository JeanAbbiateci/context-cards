contextCards.config(function($routeProvider) {
    $routeProvider
    
    .when('/', {
        templateUrl: 'decks.html',
        controller: 'decks'
    })
    
    .when('/deck/:deckId', {
        templateUrl: 'deck.html',
        controller: 'decks'
    })
    
    .when('/deck/:deckId/:cardId', {
        templateUrl: 'card.html',
        controller: 'decks'
    })
    
    .otherwise({ redirectTo: '/'});
});