/**
 * Created by dreamind on 09.01.2015.
 */

(function() {

    'use strict';

    angular
        .module( 'tube' )
        .controller( 'Author', Author );

    function Author() {

        var va = this,
            jman  = $('#man'),
            juser = $('#user'),
            jpass = $('#password'),
            sendState = undefined;

        // Models:
        va.user     = undefined;
        va.password = undefined;
        va.man      = false;

        // Functions:
        va.send =  send;
        va.clear = clear;
        va.clearUser = clearUser;
        va.clearPass = clearPass;

        function send() {
            sendState = true;

            if( !va.user || va.user.length < 5 || searcher( va.user ) ) {
                juser.removeClass('success').addClass('error');
                sendState = false;
            } else {
                juser.removeClass('error').addClass('success');
            }
            if( !va.password || va.password.length < 7 || searcher( va.user ) ) {
                jpass.removeClass('success').addClass('error');
                sendState = false;
            } else {
                jpass.removeClass('error').addClass('success');
            }
            if( !va.man ) {
                jman.removeClass('success').addClass('error');
                sendState = false;
            } else {
                jman.removeClass('error').addClass('success');
            }
        }

        function clear() {
            juser.removeClass('error').removeClass('success');
            jpass.removeClass('error').removeClass('success');
            jman.removeClass('error').removeClass('success');

            va.user     = undefined;
            va.password = undefined;
            va.man      = false;
        }

        function clearUser() {
            juser.removeClass('error').removeClass('success');
        }

        function clearPass() {
            jpass.removeClass('error').removeClass('success');
        }

        function searcher( str ) {
            return !!(str.search(/\s/) != -1 || str.search(/\'/) != -1 || str.search(/\"/) != -1);
        }

    }

})();