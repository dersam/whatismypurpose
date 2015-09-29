var chatbox = (function($){
    function onPurposeResponse() {

    }

    function init() {
        $('body').on('purposeResponse', function(e, verb, noun){
            console.log(verb);
            console.log(noun);

        });
    }

    (function __init(){
        $(document).ready(init);
    })();
})(jQuery);