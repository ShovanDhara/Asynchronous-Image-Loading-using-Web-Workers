/*this will provide fading*/
var i = 0;
function fading() {
    i++;
    if (i < 10) {
        setTimeout("fading()", 200);
        var x = (i / 10).toString();
        var y = "opacity:".concat(x);
        postMessage(y);
    }
}
fading();
