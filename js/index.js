alert("Hello!");

var xhr = new XMLHttpRequest();

function Load() {
  xhr.onreadystatecange = function() {
    if (this.readyState == 4 && this.status == 200) {
      LoadPosts(this);
    }
  };
  
  xhr.open("GET", "channel/admin/posts.xml", true);
  xhr.send();
}

function LoadPosts(xml) {
  var card = document.createElement("div");
  var doc = xml.responseXML();
  
  card.className = "card-view";
  
  var post = doc.getElementsByTagName("post");
  
  for (var i = 0; i < post.length; i++) {
    card.innerHTML = "<img src\""
      + post[i].getElementsByTagName("cover")[0].childNode[0].nodeValue
      + "\"/><br/><h1>" + post[i].getElementsByTagName("title")[0].childNode[0].nodeValue
      + "</h1><p>" + post[i].getElementsByTagName("description")[0].childNode[0].nodeValue
      + "</p><a href=\"" + post[i].getElementsByTagName("link")[0].childNode[0].getAttribute("to")
      + "\">" + post[i].getElementsByTagName("link")[0].childNode[0].getAttribute("title") + "</a>";
    
    document.getElementById("content").appendChild(card);
  }
}
