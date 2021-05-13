/* Script to redirect browser from http to https

To reference this javascript file use the following in the <head> of your webpages

<script src="./redirectToHttps.js"></script> 

*/

function redirectToHttps() {
        if (window.location.protocol != "https:") {
            var oldURL = window.location.hostname + window.location.pathname + window.location.search + window.location.hash;
            var newURL = "https://" + oldURL;
            window.location = newURL;
         }
    }

redirectToHttps();
