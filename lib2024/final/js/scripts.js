window.onload = init;

function init() {

	
	
	document.querySelector('.ham').onclick = showHideMobileMenu;

	$('#submit').submit(function (e) {
		
   		 e.preventDefault();
   		 
   		 var form = this;
   		 
   		 $(".overlay-container").fadeIn(1000, function(){
   		 		
   		 		showformValues(form);
   		 		
   		 		createTableFromJSON();
		   		
   		 		$('.overlay-container').delay(500).fadeOut(500);
   		 });
	});

}

function showHideMobileMenu() {

	var mobileNav = document.querySelector('.mobile-nav');

	
	if(mobileNav.style.display=="block") {
		mobileNav.style.display="none";
	} else {
		mobileNav.style.display="block";
	}
}

function showformValues(form){
	
	var formValues = $(form).serializeArray(); 
	
		
	$.each(formValues, function(index, field){

		$("#results").find("#"+field.name+"_result").text(field.value);

		if(field.name=="email"){
			$("#results").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);
		}

        if(field.name=="name"){
            $("#results").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);
        }

        if(field.name=="city"){
            $("#results").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);
        }

        if(field.name=="Postalcode"){
            $("#results").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);
        }
	});				
}

 function createTableFromJSON() {
        var schedule = [
            {
                "Time": "09:00 - 11:00",
                "Monday": "Comunication I",
                "Tuesday": "Client Services",
                "Wednesday": "Speacial collections"
                "Thursday": "Research seminar"
                "Friday": "client services"
            },
            {
                "Time": "11:00 - 12:30",
                "Monday": "Refence",
                "Tuesday": "Internet app",
                "Wednesday": "Library software"
                "Thursday": "French"
                "Friday": "Refence"
            },
            {
                "Time": "14:00 - 15:00",
                "Monday": "Aqusitions",
                "Tuesday": "General Ed.",
                "Wednesday": "Marketing"
                "Thursday": "Library tech"
                "Friday": "Library software"
            },
            {
            	"Time": "15:30 - 17:30",
                "Monday": "French",
                "Tuesday": "Gen Ed.",
                "Wednesday": "Aqusitions"
                "Thursday": "Sunbject Anaysis"
                "Friday": "Internet app"
            }
        ]

        }

  
        var table = document.createElement("table");


        var tr = table.insertRow(-1);                  

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      
            th.innerHTML = col[i];
            tr.appendChild(th);
        }


        for (var i = 0; i < schedule; i++) {

        	
            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
				
                var tabCell = tr.insertCell(-1);
               
            }
        }

       