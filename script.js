var today = moment().format("dddd, MMMM Do YYYY");
var currentTime = document.querySelector("#currentDay");
currentTime.textContent = today;


var saveButton = $(".btn")


saveButton.on("click", function(event){
    var clickedButton = $(event.target).attr("id");
    var siblingTextArea = $(event.target).prev().val();
    console.log(clickedButton);
    localStorage.setItem(clickedButton, siblingTextArea)
});


$("#9am-input").val(localStorage.getItem("9am"));
$("#10am-input").val(localStorage.getItem("10am"));
$("#11am-input").val(localStorage.getItem("11am"));
$("#12pm-input").val(localStorage.getItem("12pm"));
$("#1pm-input").val(localStorage.getItem("1pm"));
$("#2pm-input").val(localStorage.getItem("2pm"));
$("#3pm-input").val(localStorage.getItem("3pm"));
$("#4pm-input").val(localStorage.getItem("4pm"));
$("5pm-input").val(localStorage.getItem("5pm"));

