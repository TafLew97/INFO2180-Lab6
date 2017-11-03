"use strict";
function search()
{
    var query = document.getElementById("queryTxtBox").value.toLowerCase();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            document.getElementById("result").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "request.php?q="+ query, true);
    xhttp.send();
}

function searchall(def){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState === 4 && xhttp.status === 200){
            var result = "<ol>";
            var xml = xhttp.responseXML;
            var terms = xml.getElementsByTagName("definition");
            for(var index = 0; index < terms.length; index++){
                result+="<li><h3>"+terms[index].getAttribute("name")+"</h3><p>"+terms[index].childNodes[0].nodeValue+"</p><p> -"+terms[index].getAttribute("author")+"</p></li>";
            }
            result+="</ol>";
             document.getElementById("result").innerHTML = result;
        }
    };
    xhttp.open("GET","request.php?q=&all=true",true);
    xhttp.send();
}
