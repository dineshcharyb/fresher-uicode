var select = document.getElementById("country");
var options = [
  "india",
  "usa",
  "uk",t
];
var select = document.getElementById("states");
var options = [
  "telangana",
  "andhra",
];
options.forEach(function (opt) {
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  });
  const today=new Date();
const yyyy = today.getFullYear();
let mm=today.getMonth() +1;
let dd =today.getDate();
if(dd < 10) dd='0'+dd;
if(mm < 10)mm='0'+mm;
const Todaydate = dd+'/'+mm+'/'+yyyy;
document.getElementById('Date').value=Todaydate;