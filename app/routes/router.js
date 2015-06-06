contextCards.config(function($routeProvider) {
    $routeProvider
    
    .when('/', {
        templateUrl: 'cards.html',
        controller: 'stacks'
    })
    
    .when('/content', {
        templateUrl: 'content-list.html',
        controller: 'stacks'
    });
});