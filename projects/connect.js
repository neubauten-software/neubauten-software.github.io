/** Connect.js - Ð²ÐµÑ€ÑÐ¸Ñ 1.0_preview
 *
 *  @author        { Neubauten Software }
 *  @version       { 1.0 }
 *  
 *  @constructor   { XMLParser }
 *
*/

function XMLParser(Url, Method) {
  var xhr = new XMLHttpRequest();
  
  xhr.onload = function() {
    var doc = this.responseXML,
        parseable = doc.getElementsByTagName("text"),
        text = "";
    
    for (var i = 0; i < parseable.length; i++) {
      text = parseable[i].childNodes.nodeValue;
    }
    
    console.log(text);
  };
  
  xhr.open(Method, Url, true);
  xhr.responseType = "document";
  xhr.send("");
}

XMLParser("my_first_xml.xml", "GET");
