/**
 * Made without jQuery because arbitrary restrictions
 * are fun. I guess.
 *
 * @author Sam Schmidt
 */
var butter = (function(){
    var verbs;
    var nouns;

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

    function getVerbFromDictionary() {
        return 'pass';
    }

    function getNounFromDictionary() {
        return 'butter';
    }

    function loadData()
    {
        fetchJson('data/verbs.json', function(response) {
            verbs = JSON.parse(response);
        });

        fetchJson('data/nouns.json', function(response) {
            nouns = JSON.parse(response);
        });
    }

    function fetchJson(url, onLoad)
    {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                onLoad(this.response);
            } else {
                //error
            }
        };

        request.onerror = function() {
            // There was a connection error of some sort
        };

        request.send();
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

        //Load files
        loadData();
    })();
})();