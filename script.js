
function getWeather(pos) {
	$.ajax( {
        //get current position
	      url: "https://freegeoip.net/json/",
        dataType:"jsonp",
	      success: function(data) {
        //store coordinates in variables
			  var lat 	=	  data.latitude;
			  var lon 	= 	data.longitude;
        var city  =   data.city;
        //get weather
			  $.ajax( {
	      url: 'https://cors.now.sh/http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&APPID=f6e93916dc3b4a9c1b77dafabc91290a&units=metric',
	      success: function(data) {
          //store weather data in variables
	        var temp      = Math.round(Number(data.main.temp));
          var weather   = data.weather[0].main;
          $("body").addClass(weather);
	        $(".weather").html("<strong><span id=\"temp\">" +temp+"</span>º<span id=\"unit\">C</span><p>"+city);
	      },
	      cache: false
	    })
	      },
	    })
	};


getWeather();


$(document).on("click","#unit",function(){
  if($("#unit").text()=="C"){         
    $("#temp").text(Math.round((Number($("#temp").text())*1.8)+32));
    $("#unit").text("F");
  }
  else{
    $("#temp").text(Math.round((Number($("#temp").text()) - 32) / 1.8))
    $("#unit").text("C")
  }
})
