function calc () {
  

var x = document.getElementById("num1").value;
var y = document.getElementById("num2").value;
var z = document.getElementById("num3").value;
var x1=parseInt(x);
var y1=parseInt(y); 
var z1=parseInt(z);
var p =document.getElementById("result");			
if((x1<y1)&&(x1<z1)&&(y1<z1)){
	p.innerHTML=[x1,y1,z1];
	}
else if((x1<y1)&&(x1<z1)&&(z1<y1)){
	p.innerHTML=[x1,z1,y1];
	}
else if((y1<x1)&&(y1<z1)&&(x1<z1)){
	p.innerHTML=[y1,x1,z1];
	}
else if((y1<x1)&&(y1<z1)&&(z1<x1)){
	p.innerHTML=[y1,z1,x1];
	}
else if((z1<x1)&&(z1<y1)&&(x1<y1)){
	p.innerHTML=[z1,x1,y1];
	}
else if((z1<x1)&&(z1<y1)&&(y1<x1)){
	p.innerHTML=[z1,y1,x1];
	}
}