//Moment JS
//var dateTime = now
var dateTime = moment().format("MMM Do, YYYY");
//var currentHOU 
var currentHour = moment().format("H");
console.log(currentHour)
//var past
//var future

//array hours slots
var hours = $(".container").children().children(".hour");

var timeBlock = $(".hour").html().trim()
console.log(hours.html().trim())
//array text slots
var tasks = $("#customTime")

console.log(hours)

var thisTimeEl = $(".thisTime")
console.log(thisTimeEl.html())

var timeSlots = [9, 10, 11, 12, 13, 14, 15, 16, 17]
console.log(timeSlots);

$("#currentDay").text(dateTime);

function timeColor() {
    
    
    for (var i = 0; i < timeSlots.length; i++) {

        var taskBlock = $(".container").children().eq(i).children().eq(1)
        
        if ((timeSlots[i]) < currentHour) {
            taskBlock.addClass("past")
        } else if ((timeSlots[i]) > currentHour) {
            taskBlock.addClass("future")
        } else {
            taskBlock.addClass("present")
        }
    }
};

timeColor()





// if($(".container").children().eq(0).children().eq(0) !== currentHOUR) {
//     $(".container").children().eq(0).children().eq(1).addClass("future")
// }


// if(9 < currentHour) {
//     $(".container").children().eq(0).children().eq(1).addClass("past");
// } else if (9 > currentHour) {
//     tasks.addClass("future");
// } else {
//     tasks.addClass("present");
// };

    


//For loop for checking hour

//call function

//local storage

//Clear local storage???