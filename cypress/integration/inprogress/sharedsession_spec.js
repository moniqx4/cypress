describe('Shared Session CORS Test', function() {  


    it('Check for CORS support', function() {

var createCORSRequest = function(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // Most browsers.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      // IE8 & IE9
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
  };
  
  var url = 'https://development-na-tqa5.tn.services/api/session/sessionkey/';
  var method = 'POST';
  var xhr = createCORSRequest(method, url);
  
  xhr.onload = function() {
    console.log("Everything is working as expected for CORS")
  };
  
  xhr.onerror = function() {
    console.log("There is a problem with CORS support")
  };
  
  xhr.withCredentials = true;
  xhr.send();

})
})