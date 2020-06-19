//  this single line of code saved my life 
$(document).ready(function () {

var now = moment().format('dddd, MMM Do YYYY');
$("#currentDay").text(now);


// I found this method in an example on github i was so confused how to approach this 
// and to be honest i would have never thought to put my active hours into an array 
// like this. i do understand the logic now but i dont get how "timeBlocks" is in local 
// storage already unless thats just part of bootstrap

function timeCheck() {
var timeBlocks = ["9am-events", "10am-events", "11am-events", "12pm-events", "1pm-events", "2pm-events", "3pm-events", "4pm-events", "5pm-events"],
    timeHours = [9, 10, 11, 12, 13, 14, 15, 16, 17],
    now = moment();

    for (var i = 0; i < 9; i++) {
        $("#" + timeBlocks[i]).val(localStorage.getItem(timeBlocks[i] + "-info"));
        if (timeHours[i] < now.hour()){
                $("#" + timeBlocks[i]).addClass("past");
            }
        else if (timeHours[i] === now.hour()) {
                $("#" + timeBlocks[i]).addClass("present");
            }
        else{
                $("#" + timeBlocks[i]).addClass("future");
            };
    };
};
timeCheck();


// i really dont understand the syntax for data- in my head its basically an array
// with names instead of numbers 
$(".local").on("click", function () {
var getTime = $(this).attr("data-id"); // i dont get this line at all but it works 
var comment = $("#" + getTime + "-events").val();

localStorage.setItem(getTime + "-events-info", comment);
    });
});
