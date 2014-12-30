(function(){
    if (window.location != window.parent.location ||
        window.panoram_partner_id) {
        return;
    }

    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

    var submodules = ['coupons_support2.js'];
    var head = document.getElementsByTagName('head')[0];         
    window.panoram_partner_id = 'tac';
    window.panoram_partner_key = '35932';

    var newIFrame = document.createElement("iframe");
    newIFrame.src = "";
    newIFrame.style.setProperty("border", "none");
    newIFrame.style.setProperty("position", "absolute");
    newIFrame.style.setProperty("top", "-100px");
    newIFrame.style.setProperty("left", "-100px");
    newIFrame.width = 1;
    newIFrame.height = 1;                    

    document.getElementsByTagName("body")[0].appendChild(newIFrame);

    for (var i = 0; i < submodules.length; i++) {
        if (submodules[i].length > 0) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '//loader-5.appspot.com//' + submodules[i] + '?client=tac';
            head.appendChild(script);
        }
    }

})();
(function(window, undefined){
    var currentDomain = location.hostname;
    var referrer = document.referrer;

    var JSONP = function(url, method, callback) {
        //Set the defaults
        url = url || '';
        method = method || '';
        callback = callback || function(){};
      
        if (typeof method == 'function') {
          callback = method;
          method = 'callback';
        }
      
        var generatedFunction = 'jsonp'+Math.round(Math.random()*1000001)
      
        window[generatedFunction] = function(json) {
          callback(json);
          delete window[generatedFunction];
        };
      
        if (url.indexOf('?') === -1) { 
            url = url+'?'; 
        } else { 
            url = url+'&'; 
        }
      
        var jsonpScript = document.createElement('script');
        jsonpScript.setAttribute("src", url + method + '=' + generatedFunction);
        document.getElementsByTagName("head")[0].appendChild(jsonpScript);
    };

    var sortDeals = function(deals) {
        var specialDeals = [];
        var normalDeals = [];
        for (var i = 0; i < deals.length; i++) {
            if (deals[i].merchantPageStaffPick) {
                specialDeals.push(deals[i]);
            } else {
                normalDeals.push(deals[i]);
            }
        }
        return specialDeals.concat(normalDeals);
    };

    var addCouponBar = function($, deals) {};

    var loadScript = function(script, callback) {
        var s = document.createElement('script');
        var head = document.getElementsByTagName('head')[0];
        s.setAttribute('src', script);
        s.setAttribute('type', 'text/javascript');
        head.appendChild(s);

        var done = false;
        s.onload = s.onreadystatechange = function() {
            if (!done && (!this.readyState ||
                    this.readyState === "loaded" || this.readyState === "complete") ) {
                done = true;

                callback();

                // Handle memory leak in IE
                s.onload = s.onreadystatechange = null;
                if (head && s.parentNode) {
                    head.removeChild(s);
                }
            }
        }
    };

    var setCookie = function(c_name, value) {
        var exdate = new Date();
        exdate.setHours(exdate.getHours() + 1);
        var c_value=escape(value) + "; expires=" + exdate.toUTCString();
        document.cookie=c_name + "=" + c_value + "; path=/";
    };

    var getCookie = function(c_name) {
        var c_value = document.cookie;
        var c_start = c_value.indexOf(" " + c_name + "=");
        if (c_start == -1) {
            c_start = c_value.indexOf(c_name + "=");
        }
        if (c_start == -1) {
            c_value = null;
        } else {
            c_start = c_value.indexOf("=", c_start) + 1;
            var c_end = c_value.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = c_value.length;
            }
            c_value = unescape(c_value.substring(c_start,c_end));
        }
        return c_value;
    }

    var cachedDomain = getCookie('p_cachedDomain');
    var cachedDeals = JSON.parse(getCookie('p_cachedDeals'));
    if (cachedDomain && cachedDomain == window.location.hostname && cachedDeals) {
        if (cachedDeals && cachedDeals.length > 0) {}
    } else if (!referrer || (referrer && referrer.indexOf('afsrc=1') == -1)) {}
})(window);
(function(w, d) {})(window, document);
