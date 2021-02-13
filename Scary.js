var jsontp = new XMLHttpRequest();
function evaluate(func) {
  eval(`(${func})`)
}
function change() {
  if (this.readyState == 4 && this.status == 200) {
    var code = JSON.parse(this.responseText);
  }
}
jsontp.onreadystatechange = change();
jsontp.open("GET", "codecontaiiner.json", true);
jsontp.send();
