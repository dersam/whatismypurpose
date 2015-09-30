var chatbox = (function($) {
    var $history;

    function onPurposeResponse(event, verb, noun) {
        writeToChat('butterbot', 'what is my purpose?');
        writeToChat('bigrick69', 'you '+verb+' '+noun+'.');

        $history.scrollTop($history.prop('scrollHeight'));
    }

    function writeToChat(user, text) {
        $history.append('<div class="line">'+user+': '+text+'</div>');
    }

    function init() {
        $history = $('#history');
        $('body').on('purposeResponse', onPurposeResponse);
    }

    (function __init(){
        $(document).ready(init);
    })();
})(jQuery);