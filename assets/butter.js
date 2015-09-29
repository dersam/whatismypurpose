
var butter = (function($){
    var verbs = null;
    var nouns = null;

    var lastVerb = null;
    var lastNoun = null;

    /**
     * SHOW ME WHAT YOU GOT
     */
    function onPurposeRequest() {
        $(body).trigger( "purposeResponse", [
            getVerbFromDictionary,
            getNounFromDictionary
        ]);
    }

    function init() {
        $('#purpose').on('click', onPurposeRequest);
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Recursion for kicks.

    function getKindaRandomVerbIndex() {
        var v = getRandomInt(0, verbs.length-1);

        if (v == lastVerb) {
            v = getKindaRandomVerbIndex();
        }

        lastVerb = v;

        return v;
    }

    function getKindaRandomNounIndex() {
        var n = getRandomInt(0, nouns.length-1);

        if (n == lastNoun) {
            n = getKindaRandomNounIndex();
        }

        lastNoun = n;

        return n;
    }

    function getVerbFromDictionary() {
        var v = 'pass';

        if (verbs !== null) {
            v = verbs[getKindaRandomVerbIndex()];
        }

        return v;
    }

    function getNounFromDictionary() {
        var n = 'butter';

        if (nouns !== null) {
            n = nouns[getKindaRandomNounIndex()];
        }

        return n;
    }

    function loadData()
    {
        $.getJSON('words.json', function(data) {
            verbs = data.verbs;
            nouns = data.nouns;
        });
    }

    /**
     * fire the plasma cannon
     */
    (function __init(){
        $(document).ready(init);

        //Load files
        loadData();
    })();
})(jQuery);