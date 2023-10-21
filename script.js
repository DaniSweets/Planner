$(function () {

  var currentDay = document.getElementById("currentDay");
  currentDay.textContent = dayjs().format('dddd, MMMM D, YYYY');

  //save text to local storage
  function save(){
    console.log("saving");
  }

  //event listener for save button
  $(".saveBtn").click(save);

  setInterval($("article").each(function(){
    var currentHour = dayjs().hour();
    var plannerHour = $(this).attr("data-hour");

    if (plannerHour<currentHour){
        $(this).addClass("past");
    } else if (plannerHour==currentHour){
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }

  }), 300000);


});
