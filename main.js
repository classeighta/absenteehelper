function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function App(){
    window.location="app.html";

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

    window.open("https://api.whatsapp.com/send?phone=919999810031&text=Hello%20I%20want%20to%20volunteer%2F%20suggest%20something%20for%20the%20Absentee%20Helper%3A", "_blank");

  }
  function openmail(){
    window.open("mailto:shwaansgaba@gmail.com","Hi")
  }
