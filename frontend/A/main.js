const request = new XMLHttpRequest();
request.open("GET", "https://catfact.ninja/fact");

request.send(function buttonClick(){
  alert('Click');
});

request.addEventListener("load", function () {
  const apiData = JSON.parse(this.responseText);

});
