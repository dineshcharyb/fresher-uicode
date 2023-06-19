var select = document.getElementById("state1");
var options = [
 "Andhra Pradesh","Telangana",'Karnataka','TamilNadu',
 "Madhya Pradesh",
];

options.forEach(function(opt) {
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  });
  
 
