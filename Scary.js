var jsontp = new XMLHttpRequest();
jsontp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var code = JSON.parse(this.responseText);
  }
};
jsontp.open("GET", "codecontaiiner.json", true);
jsontp.send();
