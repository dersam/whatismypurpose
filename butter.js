
var butter = (function($){
    var verbs = null;
    var nouns = null;

    /**
     * SHOW ME WHAT YOU GOT
     */
    function onPurposeRequest() {
        $('#verb').html(getVerbFromDictionary());
        $('#noun').html(getNounFromDictionary());
    }

    function init() {
        $('#purpose').on('click', onPurposeRequest);
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getVerbFromDictionary() {
        var v = 'pass';

        if (verbs != null) {
            v = verbs[getRandomInt(0, verbs.length-1)];
        }

        return v;
    }

    function getNounFromDictionary() {
        var n = 'butter';

        if (nouns != null) {
            n = nouns[getRandomInt(0, verbs.length-1)];
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