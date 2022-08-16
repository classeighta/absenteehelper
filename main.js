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
var loggedin="false";
  function login(){
    
    password=document.getElementById("Pass").value;
    if(password=="Hello"){
      window.location="index.html";
      loggedin=true;
    }
}
function check(){
  if(loggedin="false"){
    window.location="login.html";
  }
}
function ListFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
