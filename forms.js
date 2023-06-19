
var select = document.getElementById("country");
var options = [
   "---SELECT---",
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
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
];

options.forEach(function(opt) {
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  });

  var select = document.getElementById("state");
var options = [
   "---SELECT---",
   "Andhra Pradesh",
   "Amaravati",
   "Arunachal Pradesh",	
   "Itanagar",
   "Assam",	
   "Dispur",
   "Bihar",	
   "Patna",
   "Chhattisgarh",	
  " Raipur"
    
];

options.forEach(function(opt) {
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  });

  var today=new Date().toISOString().split("T")[0];
  document.getElementById("date").value=today;




  



   
	