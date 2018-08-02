

https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808 15:00&end_date=20130808 15:06&station=8454000&product=water_temperature&units=english&time_zone=gmt&application=ports_screen&format=json 

$.getJSON("https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20171207 15:00&end_date=20171209 15:06&station=8454000&product=water_temperature&units=english&time_zone=gmt&application=ports_screen&format=json ",tidedata)

tidedata = $.getJSON("https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20171207 15:00&end_date=20171209 15:06&station=8454000&product=water_temperature&units=english&time_zone=gmt&application=ports_screen&format=json ")

tidedata = $.getJSON("https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20171207 15:00&end_date=20171209 15:06&station=8454000&product=water_level&datum=MTL&format=json ")

$.getJSON("https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20171207 15:00&end_date=20171209 15:06&station=8452660&product=water_level&datum=MTL&units=english&time_zone=gmt&application=ports_screen&format=json ")

$.getJSON("https://tidesandcurrents.noaa.gov/api/datagetter?date=today&station=8452660&product=water_level&datum=MLLW&units=english&time_zone=LST&interval=hilo&application=ports_screen&format=json ")

$.getJSON("https://tidesandcurrents.noaa.gov/api/datagetter?date=today&station=8452660&product=water_level&datum=MTL&units=english&time_zone=gmt&application=ports_screen&format=csv ")


BINGO
tides=$.getJSON("https://tidesandcurrents.noaa.gov/api/datagetter?date=today&station=8452660&product=predictions&datum=MLLW&units=english&time_zone=LST&interval=hilo&application=ports_screen&format=json ")
tides.responseJSON.predictions.length
tides.responseJSON.predictions[]
                        time - .t
                        height - .v
                        type - type - L or H

d = new Date()
Sat Dec 09 2017 06:25:15 GMT-0500 (Eastern Standard Time)
n = d.getFullYear()
2017
m=d.getMonth()
11
m=m+1
12
dy=d.getDate()
9

sh = new Date()
Sat Dec 09 2017 14:24:03 GMT-0500 (Eastern Standard Time)
sh.getHours()
14
sh.getMinutes()
24
Convert 24 hour display to 12 with ampm
t = "2017-12-10 20:16"
t.substr(11, 2) for the getHours
"20"
t.substr(14,2)
"16"