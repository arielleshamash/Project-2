$(document).ready(function(){

    console.log("running")

    $("#add").on("click", function () {

        var dateString= $("#date").html()
        var dateValues = dateString.split(" - ")
        
        var newEvent = {
            eventName: $("#input").val(),
            eventMonth: dateValues[0],
            eventDay: dateValues[1],
            eventYear: dateValues[2]
            // eventFinished: $("#...").val(),
            // eventImportnant: $("#...").val()
        }
        console.log("this is "+ JSON.stringify(newEvent));
        $.ajax({
            method: "POST",
            url: "/api/new-todo",
            data: newEvent
        }).then(function (data) {
            // console.log(data)
        });
        
    });

// delete function

    $(".delete").on("click", function(){
        $(this).attr("data-id");
        var dateString= $("#date").html()
        var dateValues = dateString.split(" - ")

        var deleteEvent = {
            eventName: $('#itemText').html(),
            eventMonth: dateValues[0],
            eventDay: dateValues[1],
            eventYear: dateValues[2]
        }

        console.log(deleteEvent);

        $.ajax({
            method: "POST",
            url: "/api/delete-event",
            data: deleteEvent
        }).then(function (data) {
            console.log("deleting "+data)
        });
    })

})