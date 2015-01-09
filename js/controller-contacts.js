/**
 * Created by dreamind on 07.01.2015.
 */

(function() {

    'use strict';

    angular
        .module('tube')
        .controller( 'Contacts', Contacts );

    function Contacts() {

        var vc = this;

        vc.initialization = initialization;

        // On start:
        vc.initialization();

        function initialization() {
            var $pContacts = $('.row-contacts').eq(0),
                $pAbout = $('.row-about').eq(0);

            window.addEventListener('scroll', scrollHandler);
            // Scroll handler:
            function scrollHandler() {
                var scrolled = window.pageYOffset || document.documentElement.scrollTop,
                    sKDirect = scrolled / document.body.scrollHeight * 100,
                    sKRevers = 100 - sKDirect;

                $pContacts.css( 'background-position', "0% " + sKDirect + "%");
                $pAbout.css( 'background-position', "100% " + sKRevers + "%");
            }

            // Set qTip plugin for OUTSIDE plugins:
            $('.color-mail').qtip({
                position: {
                    my: 'left  top',
                    at: 'right center'
                },
                style: {
                    classes: 'qtip-red'
                }
            });

            $('.color-skype').qtip({
                position: {
                    my: 'left  top',
                    at: 'right center'
                },
                style: {
                    classes: 'qtip-blue'
                }
            });
        }


    }

})();