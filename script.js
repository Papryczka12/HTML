function display1(){
    document.getElementById("blok1").style.visibility = "hidden";
    document.getElementById("blok2").style.visibility = "visible";
};

function display2(){
    document.getElementById("blok2").style.visibility = "hidden";
    document.getElementById("blok3").style.visibility = "visible";
};

var pass = document.getElementById("pwd").value;
var pass2 = document.getElementById("pwd2").value;

function buttonclick(){
if (document.getElementById("pwd").value != document.getElementById("pwd2").value) {
    alert("Podane hasła różnią się")
}
else{
    console.log
}
}