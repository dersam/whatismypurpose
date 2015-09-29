var chatbox = (function($) {
    var $history;

    function onPurposeResponse(event, verb, noun) {
        console.log(verb);
        console.log(noun);
        writeToChat('butterbot', 'what is my purpose');
        writeToChat('rick', 'you '+verb+' '+noun+'.');
    }

    function writeToChat(user, text) {
        $history.append('<div>'+user+': '+text+'</div>');
    }

    function init() {
        $history = $('#history');
        $('body').on('purposeResponse', onPurposeResponse);
    }

    (function __init(){
        $(document).ready(init);
    })();
})(jQuery);