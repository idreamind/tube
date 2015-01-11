/**
 * Created by home on 03.01.2015.
 */

(function() {

    angular
        .module( 'tube', [ 'ngRoute',
                            'ngCookies',
                            'ngAnimate' ] )
        .config( config );

    function config( $routeProvider, $locationProvider ) {

        var pageMain = {
                templateUrl:  'html/main.html',
                controller:   'Work',
                controllerAs: 'vw'
            },
            pageContacts = {
                templateUrl:  'html/contacts.html',
                controller:   'Contacts',
                controllerAs: 'vc'
            },
            pageAuthor = {
                templateUrl:  'html/author.html',
                controller:   'Author',
                controllerAs: 'va'
            };

        $routeProvider
            .when( '/',          pageMain )
            .when( '/works',     pageMain )
            .when( '/receivers', pageMain )
            .when( '/devices',   pageMain )
            .when( '/tesla',     pageMain )
            .when( '/contacts',  pageContacts )
            .when( '/author',    pageAuthor )
            .otherwise({
                redirectTo: '/'
            });
    }

})();