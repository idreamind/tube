/**
 * Created by home on 03.01.2015.
 */
(function(){

    var $pContacts = $('.row-contacts').eq(0),
        $pAbout = $('.row-about').eq(0);

    function init() {
        $pContacts = $('.row-contacts').eq(0);
        $pAbout = $('.row-about').eq(0);

        window.addEventListener('scroll', scrollHandler);
    }

    function scrollHandler() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop,
            sKDirect = scrolled / document.body.scrollHeight * 100,
            sKRevers = 100 - sKDirect;

        $pContacts.css( 'background-position', "0% " + sKDirect + "%");
        $pAbout.css( 'background-position', "100% " + sKRevers + "%");
    }

    init();

})();