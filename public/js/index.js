$(document).ready(function(){

    console.log("running")

    $("#add").on("click", function () {
        var newEvent = {
            eventName: $("#input").val(),
            // eventYear: $("#...").val(),
            // eventMonth: $("#...").val(),
            eventDay: $("#date").html(),
            // eventFinished: $("#...").val(),
            // eventImportnant: $("#...").val()
        }
        console.log("this is "+ newEvent.eventDay);
        
    });

    $.ajax({
        method: "POST",
        url: "/api/new-todo",
        data: "payload"
    }).then(function (data) {
        // console.log(data)
    });
})