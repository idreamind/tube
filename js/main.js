/**
 * Created by dreamind on 07.01.2015.
 */

(function() {

    // Set qTip plugin for OUTSIDE plugins:
    $('.brand  [title!=""]').qtip({
        position: {
            my: 'left  top',
            at: 'right center'
        },
        style: {
            classes: 'qtip-red'
        }
    });

})();