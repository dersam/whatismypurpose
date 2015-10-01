
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
                var index = getRandomInt(0, nouns.global.words.length-1);
                n = nouns.global.words[index];
            } else {
                //if the list of tags doesn't exist, build it
                //then, pick from the tags that are not forbidden
                //always exclude global here

                var nounClone = clone(nouns);

                tags.forbid.forEach(function(tagName){
                    delete nounClone[tagName];
                });

                var result;
                var count = 0;
                for (var prop in nounClone) {
                    if (Math.random() < 1 / ++count) {
                        result = prop;
                    }
                }
                n = result.words[getRandomInt(0, result.words.length-1)];
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