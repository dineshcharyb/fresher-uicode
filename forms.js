
var select = document.getElementById("inputState1");
var options = [
   ' Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh'
 ,'Goa'
    ,'Gujarat'
    ,'Haryana'
    ,'Himachal Pradesh'
    ,'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu'
  ,  'Telangana'
   , 'Tripura'
    ,'Uttar Pradesh'
    ,'Uttarakhand'
    ,'West Bengal'
];

options.forEach(function(opt) {
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  });


  var today = new Date().toISOString().split("T")[0];
  document.getElementById("date").value = today;

  
 