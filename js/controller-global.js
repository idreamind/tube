/**
 * Created by dreamind on 07.01.2015.
 */

(function() {

    'use strict';

    angular
        .module( 'tube' )
        .controller( 'Global', Global );

    function Global() {

        var vg   = this,
            body = $("html, body");

        vg.toTop = toTop;

        function toTop() {
            body.animate(  {scrollTop: 0 }, '500', 'swing' );
        }

        function resetToggle() {
            $('.dropdown').hover( function() {
                $(this).toggleClass('open');
            }).click( function( event ){
                event.stopPropagation();
                window.location = "#/works";
            });
        }
        resetToggle();
    }

})();