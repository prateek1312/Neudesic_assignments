document.getElementById("plus").onclick=function()
{  
    let a=document.getElementById("x").value;
    let b=document.getElementById("y").value;
    var z=+a + +b;
    document.getElementById("k").value=z;
}
document.getElementById("minus").onclick=function()
{  
    let a=document.getElementById("x").value;
    let b=document.getElementById("y").value;
    var z= a - b;
    document.getElementById("k").value=z;
}
document.getElementById("into").onclick=function()
{	  
    let a=document.getElementById("x").value;
    let b=document.getElementById("y").value;
    var z=a * b;
    document.getElementById("k").value=z;
}
document.getElementById("div").onclick=function()
{  
    let a=document.getElementById("x").value;
    let b=document.getElementById("y").value;
    var z=a / b;
    document.getElementById("k").value=z;
}