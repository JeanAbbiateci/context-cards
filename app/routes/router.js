contextCards.config(function($routeProvider) {
    $routeProvider
    
    .when('/', {
        templateUrl: 'decks.html',
        controller: 'decks'
    })
    
    .when('/deck/:id', {
        templateUrl: 'deck.html',
        controller: 'decks'
    })
    
    .when('/card', {
        templateUrl: 'card.html',
        controller: 'decks'
    })
    
    .otherwise({ redirectTo: '/'});
});