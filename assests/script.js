
$(function () {
 
  var saveBtn = $(".saveBtn");

  saveBtn.on("click", function(event) {
    event.preventDefault();
    var text = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    console.log($(".description"));
    console.log(text);
    console.log(hour);

    localStorage.setItem(hour, text);
  });

  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  function getTime(){
    var currentHour = dayjs().hour();
    console.log(currentHour);
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

      if (timeBlock < currentHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (timeBlock > currentHour) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
      else {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      }
    })
  }

  getTime();
 
  let today = dayjs();
  $('#currentDay').text(today.format("dddd, MMMM D, YYYY"));

});
