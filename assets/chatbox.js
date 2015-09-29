var chatbox = (function($){
    function onPurposeResponse() {

    }

    function init() {
        $(body).on('purposeResponse', function(e, verb, noun){
            console.log(e);
            console.log(noun);
            console.log(verb);
        });
    }

    (function __init(){
        $(document).ready(init);
    })();
})(jQuery);