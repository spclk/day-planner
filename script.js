var today = moment().format("dddd, MMMM Do YYYY");
var currentTime = document.querySelector("#currentDay");
//var jQueryTime = $("#currenDay");
currentTime.textContent = today;



var contant9AM = $("#9am-input");
var content10AM = $("#10am-input");
var content11AM = $("#11am-input");
var conent12PM = $("12pm-input");
var content1PM = $("1pm-input");
var content2PM = $("2pm-input");
var content3PM = $("3pm-input");
var content4PM = $("4pm-input");
var content5PM = $("5pm-input");

var saveButton = $(".btn")


saveButton.on("click", function(event){
    var clickedButton = $(event.target).attr("id");
    var siblingTextArea = $(event.target).prev().val();
    console.log(clickedButton);
    localStorage.setItem(clickedButton, siblingTextArea)
});


//for (var i = 0; i < allEvents.length; i++){
 //   if ()
//}






/* if one of the contents has an entry and a save button is clicked
    save contents to local storage
    else return
*/





// localStorage.setItem()
// localStorage.getItem()