"use strict";
function defAlert()
{
    var xhttp_req = new XMLHttpRequest();
    xhttp_req.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            alert(this.responseText);
        }
    };
    xhttp_req.open("GET", "request.php?q="+"definition", true);
    xhttp_req.send();
}