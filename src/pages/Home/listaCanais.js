function httpGet() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "https://json-serverepw.herokuapp.com/canais", false);
  xmlHttp.send();
  return xmlHttp.responseText;
}

export default JSON.parse(httpGet());
