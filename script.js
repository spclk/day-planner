// Moment.js current day information added

var today = moment().format("dddd, MMMM Do YYYY");
var currentTime = document.querySelector("#currentDay");
currentTime.textContent = today;

// All "Save" buttons are stored into a variable

var saveButton = $(".btn")

// This function saves input value into local storage

saveButton.on("click", function(event){
    var clickedButton = $(event.target).attr("id");
    var siblingTextArea = $(event.target).prev().val();
    console.log(clickedButton);
    localStorage.setItem(clickedButton, siblingTextArea)
});

// Values entered are retrived from local storage

$("#9am-input").val(localStorage.getItem("9am"));
$("#10am-input").val(localStorage.getItem("10am"));
$("#11am-input").val(localStorage.getItem("11am"));
$("#12pm-input").val(localStorage.getItem("12pm"));
$("#1pm-input").val(localStorage.getItem("1pm"));
$("#2pm-input").val(localStorage.getItem("2pm"));
$("#3pm-input").val(localStorage.getItem("3pm"));
$("#4pm-input").val(localStorage.getItem("4pm"));
$("5pm-input").val(localStorage.getItem("5pm"));

