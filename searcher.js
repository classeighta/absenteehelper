var input = document.getElementById("yearinput");
maxLength="2";
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    search();
  }
});

function search(){
    

    day=document.getElementById("dayinput").value;
    month=document.getElementById("monthinput").value;
    year=document.getElementById("yearinput").value;
    window.location.href="#"+day+month+year;
    document.getElementById("dayinput").innerHTML="";
    document.getElementById("monthinput").innerHTML="";
    document.getElementById("monthinput").innerHTML="";

    if(window.location.href=="#"){
        window.alert("Date Error.Check date")
    }
    
}
function move2(){
    
    if(document.getElementById("dayinput").value.length==maxLength){
        document.getElementById("monthinput").focus();
    }
}
function move3(){
    
    if(document.getElementById("monthinput").value.length==maxLength){
        document.getElementById("yearinput").focus();
    }
}
