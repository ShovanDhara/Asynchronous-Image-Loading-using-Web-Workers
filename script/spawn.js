
/*this will provide the image loading*/

var i = 0;
function timedCount()
{
    i++;
    if (i < 10) {
        setTimeout("timedCount()", 1000);
        postMessage(i);      
    }
}
timedCount();
