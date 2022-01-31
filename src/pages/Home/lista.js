  function httpGet() {
  const xmlHttp =  new XMLHttpRequest();
    xmlHttp.open("GET", "https://json-serverepw.herokuapp.com/lista", false);
    xmlHttp.send();
  return xmlHttp.responseText;
}

export default JSON.parse(httpGet())