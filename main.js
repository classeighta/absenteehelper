function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function home(){
    window.location="index.html";

  }
  function about(){
    window.location="about.html";

  }
  function classwork(){
    window.location="cw.html";

  }
  function Homework(){
    window.location="hw.html";

  }
  function suggest(){
    window.location="suggest.html";

  }
  function openwhatsapp(){

    window.open("https://wa.me/919999810031", "_blank");

  }
  function openmail(){
    window.open("mailto:shwaansgaba@gmail.com","Hi")
  }