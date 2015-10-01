
var butter = (function($){
    var verbs = null;
    var nouns = null;

    var lastVerb = null;
    var lastNoun = null;
    var lastTag = null;

    /**
     * SHOW ME WHAT YOU GOT
     */
    function onPurposeRequest() {
        var verb = getVerbFromDictionary();

        $('body').trigger( "purposeResponse", [
            verb.verb,
            getNounFromDictionary(verb.tags)
        ]);
    }

    function init() {
        $('.purpose').on('click', onPurposeRequest);
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

    function getKindaRandomNounIndex(tag) {
        var n = getRandomInt(0, nouns[tag].words.length-1);

        if (tag != lastTag && n == lastNoun) {
            n = getKindaRandomNounIndex();
        }

        lastNoun = n;
        lastTag = tag;

        return n;
    }

    function getVerbFromDictionary() {
        var v = 'pass';

        if (verbs !== null) {
            v = verbs[getKindaRandomVerbIndex()];
        }

        return v;
    }

    function getNounFromDictionary(tags) {
        var n = 'butter';

        if (nouns !== null) {
            if (tags.forbid.length === 0) {
                var index = getKindaRandomNounIndex('global');
                n = nouns.global.words[index];
            } else {
                //if the list of tags doesn't exist, build it
                //then, pick from the tags that are not forbidden
                //always exclude global here
            }
        }

        return n;
    }

    function loadData()
    {
        $.getJSON('build/words.compiled.json', function(data) {
            verbs = data.verbs;
            nouns = data.tags;
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