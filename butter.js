var butter = (function(){
    function onPurposeRequest() {

    }

    function init() {

    }

    (function __init(){
        if (document.readyState != 'loading'){
            init();
        } else {
            document.addEventListener('DOMContentLoaded', init);
        }
    })();
})();