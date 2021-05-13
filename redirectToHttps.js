/* Script to redirect browser to https */

function redirectToHttps() {
        if (window.location.protocol != "https:") {
            var oldURL = window.location.hostname + window.location.pathname + window.location.search + window.location.hash;
            var newURL = "https://" + oldURL;
            window.location = newURL;
         }
    }

redirectToHttps();
