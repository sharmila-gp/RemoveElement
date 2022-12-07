
var c_btn = document.getElementById("btn1");

c_btn.addEventListener("click",createContent);

var i=1;
function createContent(){
	
	var a_input=document.getElementById("name");
	var b_input=document.getElementById("detail");

	var mainDiv = document.getElementById("maindiv");
	if((a_input.value =="")&&(b_input.value ==""))
	{
	alert("Enter a student name and collage name");
	}
	else if(a_input.value ==""){
	alert("Enter a student name ");
	}
	else if(b_input.value ==""){
	alert("Enter a collage name ");
	}
	else{
	var div1=document.createElement("div");
	div1.className="common";
	div1.setAttribute("id","std"+i);
	mainDiv.appendChild(div1);
	
	var para1=document.createElement("p");
	para1.setAttribute("id","name"+i);
	para1.className="stuName";
	para1.innerHTML=a_input.value;
	div1.appendChild(para1);
	
	var para2=document.createElement("p");
	para2.setAttribute("id","name"+i);
	para2.innerHTML=b_input.value;
	div1.appendChild(para2);
	a_input.value="";
	b_input.value="";
	
	var close = document.createElement("button");
	close.setAttribute("id","close"+i);
	close.className="closeBtn";
	close.innerHTML='<i class="icofont-close-line"></i>';
	div1.appendChild(close);
	
	var edit = document.createElement("button");
	edit.setAttribute("id","edit"+i);
	edit.className="editBtn";
	edit.innerHTML='<i class="icofont-pencil"></i>';
	div1.appendChild(edit);
	i++;
	}
}