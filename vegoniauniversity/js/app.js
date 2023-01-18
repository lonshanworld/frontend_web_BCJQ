// Start jQuery Area
$(document).ready(function(){
    // Start Header 
        // Start Nav bar 
        $(".navbuttons").click(function(){
            $(this).toggleClass("crossxs");
        });
        // End Nav Bar
    // End Header


        // Start Login Box 
        $("#open-btn").click(function(){
          document.getElementById("form-popup").style.display= "block";
        });

        $("#formclose-btn").click(function(){
          document.getElementById("form-popup").style.display = "none";
        });
        // End Login Box

});
// End jQuery Area

// Start Javascript Area 

// Start Student Counter Section 
var getcountervalues = document.querySelectorAll(".countervalue");
// console.log(getcountervalues);
getcountervalues.forEach(function(getcountervalue){
    getcountervalue.textContent = 0;

    const updatecounter = function(){
        // console.log("I am working");

        const getcttarget = +getcountervalue.getAttribute("data-target");
        // console.log(getcttarget);
        // console.log(typeof getcttarget, getcttarget);

        const getctcontent = +getcountervalue.innerText;
        // console.log(getctcontent);
        // console.log(typeof getctcontent, getctcontent);

        const incnumber = getcttarget / 100;

        if(getctcontent < getcttarget){
            getcountervalue.textContent = getctcontent + incnumber;
            setTimeout(updatecounter,20);
        }
    }

    updatecounter();
});
// End Student Counter Section


// Start Rating Section 

// start google code for chart 
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Myanmar',     8],
    ['Thailand',      2],
    ['Singapore',  4],
    ['Indonesia', 2],
    ['Srilanke',    8]
  ]);

  var options = {
    title: 'International Students',
    // is3D : true,
    width : 500,
    height : 500,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}
// end google code for chart

// End Rating Section

// End Javascript Area 
const getyear = document.getElementById("getyear");
const getfullyear = new Date().getUTCFullYear();
getyear.innerText = getfullyear;

// 25CT