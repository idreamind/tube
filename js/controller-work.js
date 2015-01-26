/**
 * Created by dreamind on 07.01.2015.
 */

(function(){

    'use strict';

    angular
        .module( 'tube' )
        .controller( 'Work', Work );

    function Work( $location, filterFilter ) {

        var vw = this,
            viewState = $location.path().replace( "/", "" );

        // Temporary files:
        var collection = [
            {
                type: 'device',
                title: 'Фонограф',
                description: 'Так звучала первая механическая речь',
                src: "img/radio/radio-(1).png"
            },
            {
                type: 'receiver',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                src: "img/radio/radio-(2).png"
            },
            {
                type: 'receiver',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                src: "img/radio/radio-(3).png"
            },
            {
                type: 'receiver',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                src: "img/radio/radio-(4).png"
            },
            {
                type: 'receiver',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                src: "img/radio/radio-(5).png"
            },
            {
                type: 'receiver',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                src: "img/radio/radio-(6).png"
            },
            {
                type: 'tesla',
                title: 'Катушка Тесла',
                description: 'Легендарный прибор легендарного изобретателя',
                src: "img/radio/radio-(7).png"
            },
            {
                type: 'receiver',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                src: "img/radio/radio-(8).png"
            },
            {
                type: 'receiver',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                src: "img/radio/radio-(9).png"
            }
        ];

        // Set collection to view:
        vw.itemsToView = ( viewState && viewState !== 'works'  ) ? filterFilter(collection, viewState) : collection;
    }

})();