//选择栏的控制
var sel_acc = document.getElementsByClassName("sel-accordion");
var sel_i;

for (sel_i = 0; sel_i < sel_acc.length; sel_i++) {
  sel_acc[sel_i].addEventListener("click", function() {
    this.classList.toggle("sel-active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}