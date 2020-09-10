(function (window) {

    // set up a namespace for our utils
    var ajaxUtils = {};

    // returns an HTTP request object
    function getRequestObject() {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        } else {
            window.alert("Ajax is not supported!");
            return (null);
        }
    }

    // set up common parameters for requests
    ajaxUtils.sendGetRequest = 
        function (requestUrl, responseHandler) {
            var request = getRequestObject();
            request.onreadystatechange = function () {
                handleResponse(request, responseHandler);
            }
            request.open("GET", requestUrl, true);
            request.send(null);
        };

    // check response status before using it
    function handleResponse(request, responseHandler) {
        if ((request.readyState == 4) && (request.status == 200)) {
            responseHandler(request);
        }
    }

    // exposing utils to the global context
    window.$ajaxUtils = ajaxUtils;

})(window);