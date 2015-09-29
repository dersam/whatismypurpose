var chatbox = (function($){
    function onPurposeResponse(event, verb, noun) {
        console.log(verb);
        console.log(noun);

        var $history = $('')
    }

    function init() {
        $('body').on('purposeResponse', onPurposeResponse);
    }

    (function __init(){
        $(document).ready(init);
    })();
})(jQuery);