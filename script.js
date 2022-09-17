function mudaTema(){
  var dark = document.getElementById('dark').className;
  document.body.classList.toggle("dark");
  
  if (dark.indexOf('dark')  !== -1) {
      document.getElementById("tema").innerHTML = "Dark"
      }else{
        document.getElementById("tema").innerHTML = "Light"
      }
}