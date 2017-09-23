console.log("Hello!");

  var xhr = new XMLHttpRequest(),
      xhr_2 = new XMLHttpRequest();

document.addEventListener("DOMContentLoaded", function () {
  xhr.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
      var card = "";
      var doc = this.responseXML;
      var post = doc.getElementsByTagName("post");

      for (var i = 0; i < post.length; i++) {
        card += "<div class=\"card-view\">"
          + "  <img src=\""
          + post[i].getElementsByTagName("cover")[0].childNodes[0].nodeValue
          + "\"/><br/>"
          + "  <h1>" + post[i].getElementsByTagName("title")[0].childNodes[0].nodeValue
          + "</h1>"
          + "  <p>" + post[i].getElementsByTagName("description")[0].childNodes[0].nodeValue
          + "</p>"
          + "  <a href=\"" + post[i].getElementsByTagName("link")[0].getAttribute("to")
          + "\">" + post[i].getElementsByTagName("link")[0].getAttribute("title") + "</a><br/>"
          + "  <font color=\"#949494\">" + post[i].getElementsByTagName("id")[0].childNodes[0].nodeValue + "</font>"
          + "</div>";
      }

      document.getElementById("content").innerHTML += (card);
    }
  };
  
  xhr.open("GET", "channel/admin/posts.xml");
  xhr.rersponseType = "document";
  xhr.send();
  
  xhr_2.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
      var sidebar_content = "";
      var doc = this.responseXML;
      var logo = doc.getElementsByTagName("logo")[0],
          cover = doc.getElementsByTagName("cover")[0],
          name = doc.getElementsByTagName("name")[0],
          id = doc.getElementsByTagName("id")[0],
          description = doc.getElementsByTagName("description")[0],
          vk_link = doc.getElementsByTagName("vk_link")[0];
      
      sidebar_content = "<img src=\"" + cover.childNodes[0].nodeValue + "\"/>"
        + "<img src=\"" + logo.childNodes[0].nodeValue + "\"/>"
        + "<h1>" + name.childNodes[0].nodeValue + "</h1>"
        + "<h5>" + id.childNodes[0].nodeValue + "</h5>"
        + "<p>" + description.childNodes[0].nodeValue + "</p>"
        + "<a href=\"https://vk.com/" + vk_link.getAttribute("to") + "\">" + vk_link.getAttribute("title") + "</a>";
      
      document.getElementById("sidebar").innerHTML = sidebar_content;
    }
  };
  
  xhr_2.open("GET", "channel/admin/info.xml");
  xhr_2.responseType = "document";
  xhr_2.send();
});
