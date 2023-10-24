$(function () {

  var currentDay = document.getElementById("currentDay");
  currentDay.textContent = dayjs().format('dddd, MMMM D, YYYY');

  $(".saveBtn").on("click", save);

  function save(){
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".description").val();
    localStorage.setItem(time, plan);
  }

  function checkStorage(item){
    var currentPlan = localStorage.getItem(item.querySelector(".hour").textContent);
    item.querySelector("textarea").value = currentPlan;
  }

  var allBlocks = document.querySelectorAll(".time-block");
  allBlocks.forEach(checkStorage);

  setInterval($("article").each(function(){

    var currentHour = dayjs().hour();
    var plannerHour = $(this).attr("data-hour");

    if (plannerHour<currentHour){
        $(this).removeClass("present");
        $(this).addClass("past");
    } else if (plannerHour==currentHour){
        $(this).removeClass("future");
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }

  }), 300000);

});
