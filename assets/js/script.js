//Moment JS variables
var dateTime = moment().format("MMM Do, YYYY"); 
var currentHour = moment().format("H");
console.log(currentHour)

//array hours slots
var timeSlots = [9, 10, 11, 12, 13, 14, 15, 16, 17]
console.log(timeSlots);

$("#currentDay").text(dateTime);

function timeColor() {
    for (var i = 0; i < timeSlots.length; i++) {

        var taskBlock = $(".container").children().eq(i).children().eq(1);

        if ((timeSlots[i]) < currentHour) {
            taskBlock.addClass("past")
        } else if ((timeSlots[i]) > currentHour) {
            taskBlock.addClass("future")
        } else {
            taskBlock.addClass("present")
        }
    };
};

timeColor();

//event and functions for task local storage

var containerEl = $(".container");

containerEl.on("click", ".saveBtn", function (event) {
    var inputClass = event.currentTarget.attributes[1].nodeValue;
    console.log(inputClass);
    var inputValue = $("."+ inputClass).val();
    console.log(inputValue);
    localStorage.setItem(inputClass, inputValue);
});

function displayTask() {
    $(".9am").val(localStorage.getItem("9am"));
    $(".10am").val(localStorage.getItem("10am"));
    $(".11am").val(localStorage.getItem("11am"));
    $(".12pm").val(localStorage.getItem("12pm"));
    $(".1pm").val(localStorage.getItem("1pm"));
    $(".2pm").val(localStorage.getItem("2pm"));
    $(".3pm").val(localStorage.getItem("3pm"));
    $(".4pm").val(localStorage.getItem("4pm"));
    $(".5pm").val(localStorage.getItem("5pm"))
};

displayTask();

//Button for clearing local storage

var clearBtn = $("#custom-clear");

clearBtn.on("click", function() {
    localStorage.clear();
    location.reload();
})

