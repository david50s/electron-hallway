var d = new Date();
var gfy = d.getFullYear();
var gd = d.getDate();
var gm = (d.getMonth()) + 1;
var todayDate = `${gm}/${gd}/${gfy}`;
for (x=0; x < openings.length; x++ ) {
    fileDate = openings[x].dte;
    if (todayDate === fileDate) {
        console.log(`${openings[x].dte} ${openings[x].openclose}`);
        console.log("yipee");
    }
}
