var jsontp = new XMLHttpRequest();
function evaluate(func){
  var func = eval(`(code.${func})`);
}
function change() {
if (this.readyState == 4 && this.status == 200) {
    var code = JSON.parse(this.responseText);
    evaluate("out.print");
    evaluate("out.println");
    evaluate("elem.new");
    evaluate("elem.inner");
    evaluate("elem.outer");
    evaluate("looks.border.px")
  }
}
jsontp.onreadystatechange = change();
jsontp.open("GET", "codecontaiiner.json", true);
jsontp.send();
export code;
