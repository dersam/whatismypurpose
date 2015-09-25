var butter = (function(){
    function onPurposeRequest() {

    }

    function init() {
        var $purpose = document.getElementById('purpose');
        $purpose.addEventListener('click', onPurposeRequest);
    }

    /**
     * fire the plasma cannon
     */
    (function __init(){
        if (document.readyState != 'loading'){
            init();
        } else {
            document.addEventListener('DOMContentLoaded', init);
        }
    })();
})();