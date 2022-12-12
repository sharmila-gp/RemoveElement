var c_btn = document.getElementById("btn1");
var a_input = document.getElementById("name");
var b_input = document.getElementById("detail");
var arr=[];
c_btn.addEventListener("click", createContent);

var i = 1;
function createContent() {
	
  if (c_btn.innerHTML == "Submit") {
    var mainDiv = document.getElementById("maindiv");
    if (a_input.value == "" && b_input.value == "") {
      alert("Enter a student name and collage name");
    } else if (a_input.value == "") {
      alert("Enter a student name ");
    } else if (b_input.value == "") {
      alert("Enter a collage name ");
    } else {
      var div1 = document.createElement("div");
      div1.className = "common";
      div1.setAttribute("id", "std" + i);
      mainDiv.appendChild(div1);

      var para1 = document.createElement("p");
      para1.setAttribute("id", "st_name" + i);
      para1.className = "stuName";
      para1.innerHTML = a_input.value;
      div1.appendChild(para1);

      var para2 = document.createElement("p");
      para2.setAttribute("id", "col" + i);
      para2.innerHTML = b_input.value;
      div1.appendChild(para2);
      a_input.value = "";
      b_input.value = "";

      var close = document.createElement("button");
      close.setAttribute("id", "close" + i);
      close.onclick = function () {
        var idname = this.id;
        var arr = idname.split("e");
        var element = document.getElementById("std" + arr[1]);
        element.remove();
      };
      close.className = "closeBtn";
      close.innerHTML = '<i class="icofont-close-line"></i>';
      div1.appendChild(close);

      var edit = document.createElement("button");
      edit.setAttribute("id", "edit" + i);
      edit.className = "editBtn";
      edit.onclick = function () {
        c_btn.innerHTML = "Update";

        var idname = this.id;
        var arr = idname.split("t");
        var element1 = document.getElementById("st_name" + arr[1]);
        var element2 = document.getElementById("col" + arr[1]);
        a_input.value = element1.innerHTML;
        b_input.value = element2.innerHTML;
		a_input.setAttribute("data-temp",arr[1]);
      };
      edit.innerHTML = '<i class="icofont-pencil"></i>';
      div1.appendChild(edit);
      i++;
    }
  }
  else if(c_btn.innerHTML == "Update"){
	var j = a_input.getAttribute("data-temp"); 
	var elem1 = document.getElementById("st_name"+j);
	var elem2 = document.getElementById("col"+j);
	elem1.innerHTML = a_input.value;
	elem2.innerHTML = b_input.value;
	c_btn.innerHTML = "Submit";
	a_input.value = "";
	b_input.value = "";
	
  }
}
