const today = new Date();
const yyyy =today.getFullYear();
let mm = today.getMonth() +1;
let dd = today.getDate();
if(dd <10)dd ='0'+dd;
if(mm <10)mm ='0'+mm;
const Todaydate = dd+ '/'+ mm + '/'+yyyy;
document.getElementById('todaydate').value=Todaydate;

var select = document.getElementById("inputCountry");
var options = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
];
options.forEach(function(opt){
    var el=document.createElement("option");
    el.textContent=opt;
    el.value=opt;
    select.appendChild(el);
});
