/**
 * Made without jQuery because arbitrary restrictions
 * are fun. I guess.
 */
var butter = (function(){
    /**
     * SHOW ME WHAT YOU GOT
     */
    function onPurposeRequest() {
        var $verb = document.getElementById('verb');
        var $noun = document.getElementById('noun');

        $noun.innerHTML = getNounFromDictionary();
        $verb.innerHTML = getVerbFromDictionary();
    }

    function init() {
        var $purpose = document.getElementById('purpose');
        $purpose.addEventListener('click', onPurposeRequest);
    }

    function getNounFromDictionary() {
        return 'butter';
    }

    function getVerbFromDictionary() {
        return 'pass';
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