/* http://masscode.ru/index.php/k2/item/44-limarquee */

var idt = 60000; //60,000 = 1 min
var i;
var responseJSON;
var predictions;;
var tides;
var l;
var tday, tday_year, tday_month, tday_day, tday_formated;
var weatherurl;
//var vid = document.getElementById("vidinset");
$.idleTimer(idt);
$(document).ready(function () {
    //playthevideo();
    // vid.play();
    updateOpentimes();
    getWunderground(); 
    
    $(document).bind("idle.idleTimer", function () {
        $('#card01').animate({
            'top': '83vh'
        }, 1000);
        $('#card02').animate({
            'top': '83vh'
        }, 1000);
        $('#card03').animate({
            'top': '83vh'
        }, 1000);
        $('#card04').animate({
            'top': '83vh'
        }, 1000);
          
          
      });

    $('.wlcm').liMarquee( {
        direction: 'left',	
        loop:-1,			
        scrolldelay: 500,	
        scrollamount:90,	
        circular: true,
        hoverstop:false,	
        drag: false,
        runshort: true
    });
    /* $('.weathercrawl').liMarquee( {
        direction: 'left',	
        loop:-1,			
        scrolldelay: 500,	
        scrollamount:90,	
        circular: true,
        hoverstop:false,	
        drag: false,
        runshort: true
    }); */
    $('.tower').liMarquee( {
        direction: 'up',
        loop:-1,
        hoverstop:true,
        height: 100			
        /* scrolldelay: 500,	
        scrollamount:90,	
        hoverstop:false,	
        drag: false,
        runshort: true */
    });
    
    tday = new Date();
    tday_year = tday.getFullYear();
    tday_year = tday_year.toString();
    tday_month = tday.getMonth();
    tday_month = tday_month + 1;
    tday_month = tday_month.toString();
    if ((tday.getMonth() + 1) < 10) {
        tday_month = "0" + tday_month.toString();
    }
    tday_day = tday.getDate();
    tday_day = tday_day.toString();
    if (tday.getDate() < 10) {
        tday_day = "0" + tday_day.toString();
    }
    tday_formated = tday_year + tday_month + tday_day;
    /* alert(tday_formated); */
    /* $('#card01').hide(); */
    

    
    
    //getweather();
    //setInterval(getweather, 600000); //update the weather every 10 minutes
    // $('.weathercrawl').liMarquee( {
    //     direction: 'left',	
    //     loop:-1,		
    //     scrolldelay: 500,	
    //     scrollamount:90,	
    //     circular: true,
    //     hoverstop:false,	
    //     drag: false,
    //     runshort: false
    // });
    $('#clock_jt').jClocksGMT(
        {
            title: 'Jamestown,RI', 
            offset: '-5',
            date: true,
            dateformat:'DDD MMMM DD, YYYY'
        });

         
    setInterval(getWunderground, 600000); 
    // 600000 is 10 min
    // 120000 is 2 min
    // 300000 is 5 min
    updatetides();
    setInterval(updatetides, 600000);
});
// function getweather() {
//     $.simpleWeather({
//         location: 'Jamestown, RI',
//         woeid: '',
//         unit: 'f',
//         success: function (weather) {
//             html = '<ul><li><i class="icon-' + weather.code + '"></i><li> ' + weather.temp +
//                 '&deg;' + weather.units.temp + '</li>';
//             html += '<li>' + weather.city + ', ' + weather.region + '</li>';
//             html += '<li class="currently">' + weather.currently + '</li>';
//             html += '<li>' + weather.wind.direction + ' ' + weather.wind.speed + ' ' +
//                 weather.units.speed + '</li></ul>';
//             html2 = '<ul class="list-group border border-danger z-depth-5 rounded"><li><i class="icon-' + weather.forecast[1].code +
//                 '"></i> ' + weather.forecast[1].day + ' ' + weather.forecast[1].text +
//                 ' High: ' + weather.forecast[1].high + '</li>';
//             html2 += '<li><i class="icon-' + weather.forecast[2].code + '"></i> ' + weather
//                 .forecast[2].day + ': ' + weather.forecast[2].text + 'High: ' + weather.forecast[
//                     2].high + '</li>';
//             html2 += '<li><i class="icon-' + weather.forecast[3].code + '"></i> ' + weather
//                 .forecast[3].day + ': ' + weather.forecast[3].text + ' High: ' + weather.forecast[
//                     3].high + '</li>';
//                     html2 += '<li><i class="icon-' + weather.forecast[4].code + '"></i> ' + weather
//                     .forecast[4].day + ': ' + weather.forecast[4].text + ' High: ' + weather.forecast[
//                         4].high + '</li>';        
//             html2 += '<li><i class="icon-' + weather.forecast[5].code + '"></i> ' + weather
//                 .forecast[5].day + ': ' + weather.forecast[5].text + ' High: ' + weather.forecast[
//                     5].high + '</li></ul>';
//             html3 = '<h2 class="text-white display-2">Currently at Beavertail - The temperature is ' + weather.temp + '&deg;' + weather.units.temp + ' - it is ' + weather.currently + '  - The wind is from the ' + weather.wind.direction + ' at ' + weather.wind.speed + ' ' + weather.units.speed +  '</h2>';        

//             $("#weather").html(html);
//             $("#weather2").html(html2);
//             $("#wcrawl").html(html3);

//         },
//         error: function (error) {
//             $("#weather").html('<p>' + error + '</p>');
//             $("#weather2").html('<p>' + error + '</p>');
//             $(".weathercrawl").html('<p>' + error + '</p>');
//         }
//     });
// }

function getWunderground() {
    weatherurl ="http://api.wunderground.com/api/4a1f4522c9d05e8c/geolookup/forecast/conditions/tide/alerts/q/pws:KRIJAMES4.json"
    //weatherurl ="http://api.wunderground.com/api/4a1f4522c9d05e8c/geolookup/forecast/conditions/q/pws:KRIJAMES4.json"
    
    $.getJSON(weatherurl, function(weatherdata) {
        // console.log(weatherdata.current_observation);
        current_string = `Current Conditions: ${weatherdata.current_observation.weather}`;
        current_temp = `Current Temperature: ${weatherdata.current_observation.temp_f}&deg F`;
        current_wind = `Wind: ${weatherdata.current_observation.wind_string}`
        icon_url = `<img class="d-flex align-self-center mr-3" src="${weatherdata.current_observation.icon_url}">`;
        // console.log(weatherdata.current_observation.icon);
        // console.log(weatherdata.current_observation.icon_url);
        // console.log(icon_url);
        $("#current_string").html(current_string);
        $("#current_temp").html(current_temp);
        $("#current_icon").html(icon_url);
        $("#current_wind").html(current_wind);
        // console.log(weatherdata.forecast);
        // console.log(weatherdata.tide);
        // console.log(weatherdata);
        // console.log(weatherdata.conditions);
        ritenow = new Date();
        console.log('Getting Weather ' + ritenow.getHours() + ':' + ritenow.getMinutes());
        // forecast =  weatherdata.forecast;
        currentDay_forecast = `Today - ${weatherdata.forecast.txt_forecast.forecastday[0].fcttext}`;
        cDay_icon =
            `<img class="d-flex align-self-center mr-3" src="${weatherdata.forecast.txt_forecast.forecastday[0].icon_url}">`;
        currentNite_forecast = `Tonight - ${weatherdata.forecast.txt_forecast.forecastday[1].fcttext}`;
        cNite_icon = `<img class="d-flex align-self-center mr-3" src="${weatherdata.forecast.txt_forecast.forecastday[1].icon_url}">`;
        day2_forecast = `${weatherdata.forecast.txt_forecast.forecastday[2].title} - ${weatherdata.forecast.txt_forecast.forecastday[2].fcttext}`;
        day2_icon = `<img class="d-flex align-self-center mr-3" src="${weatherdata.forecast.txt_forecast.forecastday[2].icon_url}">`;
        nit2_forecast = `${weatherdata.forecast.txt_forecast.forecastday[3].title} - ${weatherdata.forecast.txt_forecast.forecastday[3].fcttext}`;
        nit2_icon = `<img class="d-flex align-self-center mr-3" src="${weatherdata.forecast.txt_forecast.forecastday[3].icon_url}">`;
        day3_forecast = `${weatherdata.forecast.txt_forecast.forecastday[4].title} - ${weatherdata.forecast.txt_forecast.forecastday[4].fcttext}`;
        day3_icon = `<img class="d-flex align-self-center mr-3" src="${weatherdata.forecast.txt_forecast.forecastday[4].icon_url}">`;
        nit3_forecast = `${weatherdata.forecast.txt_forecast.forecastday[5].title} - ${weatherdata.forecast.txt_forecast.forecastday[5].fcttext}`;
        nit3_icon = `<img class="d-flex align-self-center mr-3" src="${weatherdata.forecast.txt_forecast.forecastday[5].icon_url}">`;
        day4_forecast = `${weatherdata.forecast.txt_forecast.forecastday[6].title} - ${weatherdata.forecast.txt_forecast.forecastday[6].fcttext}`;
        day4_icon = `<img class="d-flex align-self-center mr-3" src="${weatherdata.forecast.txt_forecast.forecastday[6].icon_url}">`;
        nit4_forecast = `${weatherdata.forecast.txt_forecast.forecastday[7].title} - ${weatherdata.forecast.txt_forecast.forecastday[7].fcttext}`;
        nit4_icon =    `<img class="d-flex align-self-center mr-3" src="${weatherdata.forecast.txt_forecast.forecastday[7].icon_url}">`;
        $("#currentDay_forecast").html(currentDay_forecast);
        $("#currentNite_forecast").html(currentNite_forecast);
        $("#cDay_icon").html(cDay_icon);
        $("#cNite_icon").html(cNite_icon);
        $("#day2_forecast").html(day2_forecast);
        $("#day2_icon").html(day2_icon);
        $("#nit2_forecast").html(nit2_forecast);
        $("#nit2_icon").html(nit2_icon);
        $("#day3_forecast").html(day3_forecast);
        $("#day3_icon").html(day3_icon);
        $("#nit3_forecast").html(nit3_forecast);
        $("#nit3_icon").html(nit3_icon);
        $("#day4_forecast").html(day4_forecast);
        $("#day4_icon").html(day4_icon);
        $("#nit4_forecast").html(nit4_forecast);
        $("#nit4_icon").html(nit4_icon);
        $("#gettime").html(`Last Update: ${ritenow.getHours()}:${ritenow.getMinutes()}`)
         //error: function (error) {
         //    alert('no connection');
        //       $("#currentDay_forecast").html('<p>' + error + '</p>');
        //       //  $("#weather2").html('<p>' + error + '</p>');
        //       //  $(".weathercrawl").html('<p>' + error + '</p>');
         //       }

    });
}

function showcard01() {
    $('#card01').animate({
        'top': '15vh'
    }, 1000);
    $('#card02').animate({
        'top': '83vh'
    }, 1000);
    $('#card03').animate({
        'top': '83vh'
    }, 1000);
    $('#card04').animate({
        'top': '83vh'
    }, 1000);
}

function showcard02() {
    $('#card02').animate({
        'top': '15vh'
    }, 1000);
    $('#card01').animate({
        'top': '83vh'
    }, 1000);
    $('#card03').animate({
        'top': '83vh'
    }, 1000);
    $('#card04').animate({
        'top': '83vh'
    }, 1000);
}

function showcard03() {
    $('#card03').animate({
        'top': '15vh'
    }, 1000);
    $('#card02').animate({
        'top': '83vh'
    }, 1000);
    $('#card01').animate({
        'top': '83vh'
    }, 1000);
    $('#card04').animate({
        'top': '83vh'
    }, 1000);
}

function showcard04() {
    $('#card04').animate({
        'top': '15vh'
    }, 1000);
    $('#card02').animate({
        'top': '83vh'
    }, 1000);
    $('#card03').animate({
        'top': '83vh'
    }, 1000);
    $('#card01').animate({
        'top': '83vh'
    }, 1000);
}

function closecard01() {
    $('#card01').animate({
        'top': '83vh'
    }, 1000);
}

function closecard02() {
    $('#card02').animate({
        'top': '83vh'
    }, 1000);
}

function closecard03() {
    $('#card03').animate({
        'top': '83vh'
    }, 1000);
}

function closecard04() {
    $('#card04').animate({
        'top': '83vh'
    }, 1000);
}
var t, v, type, thours, tminutes, ritenow, ampm;
function updatetides() {
    var tideurl = "https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=" + tday_formated + "&range=48&station=8452660&product=predictions&datum=MLLW&units=english&time_zone=LST&interval=hilo&application=ports_screen&format=json";
    var tidetext = '<thead><tr><td>Date</td><td>Time</td><td>Height<br>In ft</td><td>High<br>Low</td></tr></thead>';
    $.getJSON( tideurl, function (tides) {
        ritenow = new Date();
        console.log('Getting Tides ' + ritenow.getHours() + ':' + ritenow.getMinutes());
        // console.log('Tides length' + tides.predictions.length);
        for (i = 0; i < tides.predictions.length; i++) {
            t = tides.predictions[i].t;
            thours = t.substr(11,2);
            if (thours > 12) {
                thours = thours - 12;
                ampm = "PM";
            } else {
                ampm = "AM";
            }
            // console.log( thours + " " + ampm)
            tminutes = t.substr(14,2);
            tdate = t.substr(5, 5) + "-" + t.substr(2,2);
            
            v = tides.predictions[i].v;
            type = tides.predictions[i].type;
            // console.log(t);
            // console.log(v);
            // console.log(type);
            tidetext += '<tr><td>' + tdate + '</td><td>' + thours + ":" + tminutes + " " + ampm + '</td><td>' + v + '</td><td>' + type + '</td></tr>';
        };
        $("#tidetable").html(tidetext);
    })
}

function updateOpentimes() {
    var opend = new Date();
    var gfy = opend.getFullYear();
    var gd = opend.getDate();
    var gm = (opend.getMonth()) + 1;
    // console.log("getMonth " + gm);
    // console.log("getDate " + gd);
    var gms = gm.toString();
    // console.log(gms.length);
    if (gms.length == 1) {
        gms = "0" + gms;
    }
    var gds = gd.toString();
    // console.log(gds.length);
    if (gds.length == 1) {
        gds = "0" + gds; 
    }
    var opentodayDate = `${gms}/${gds}/${gfy}`;
    console.log(opentodayDate);
    for (x=0; x < openings.length; x++ ) {
        fileDate = openings[x].dte;
        if (opentodayDate === fileDate) {
            // console.log(`${openings[x].dte} ${openings[x].openclose}`);
            // console.log("yipee");
            $("#opentimes").html(openings[x].openclose);
        }
    }
}
// function playthevideo() {
//     myvideo.play();
// }