var butter=function(n){function u(){n("body").trigger("purposeResponse",[l(),c()])}function r(){n("#purpose").on("click",u)}function t(n,u){return Math.floor(Math.random()*(u-n+1))+n}function o(){var n=t(0,i.length-1);return n==s&&(n=o()),s=n,n}function e(){var n=t(0,f.length-1);return n==v&&(n=e()),v=n,n}function l(){var n="pass";return null!==i&&(n=i[o()]),n}function c(){var n="butter";return null!==f&&(n=f[e()]),n}function a(){n.getJSON("data/words.json",function(n){i=n.verbs,f=n.nouns})}var i=null,f=null,s=null,v=null;!function(){n(document).ready(r),a()}()}(jQuery);
var chatbox=function(o){function n(o,n,e){console.log(n),console.log(e),c("rick","you "+n+" "+e+".")}function c(o,n){i.append("<div>"+o+": "+n+"</div>")}function e(){i=o("#history"),o("body").on("purposeResponse",n)}var i;!function(){o(document).ready(e)}()}(jQuery);
//# sourceMappingURL=../app.js.map
