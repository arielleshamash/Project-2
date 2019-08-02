// select elements
var clear = document.querySelector('.clear');
var dateElement = document.getElementById('date');
var list = document.getElementById('list');
var input = document.getElementById('input');

//select classes
var CHECK = 'fa-check-circle';
var UNCHECK = 'fa-circle-thin';
var LINE_THROUGH = 'lineThrough';


//variables
let LIST = [],
    id = 0;

//show today date
const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// add to do function
function addTODO(toDo, id, done, trash) {
    const position = 'beforeend';
    if (trash) {
        return;
    }

    var DONE = done ? CHECK : UNCHECK;
    var LINE = done ? LINE_THROUGH : "";
    const item =
        `
                    <li class="item">
                        <i class="fa ${DONE} co complete" job="complete" id="${id}"></i>
                        <p id="pId" class="text ${LINE} itemText" >${toDo}</p>
                        <i data-id="${id}" class="fa fa-trash-o de delete" job="delete"></i>
                    </li>
            `;

    list.insertAdjacentHTML(position, item);
}


// add item to the list when the user enters enter
document.getElementById('add').addEventListener('click', function (event) {
    // if (event.keyCode == 13) {
        var toDo = input.value;
        if (toDo) {
            addTODO(toDo, id, false, false);
            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            });
            id++;
        }
        input.value = '';

    // }
});


// complete todo
function completeTODO(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove todo

function removeTODO(element) {
    
    
    
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[0].id.trash = true;
}


list.addEventListener('click', function (event) {
    const element = event.target;
    const elementJob = element.attributes.job.value;
    var titleElement = document.getElementById('pId');
    console.log(titleElement);
    // var titleChild = titleElement.getElementsByTagName('p');
    
    
    // console.log(titleChild[0].innerhtml());
    var dateString= $(".itemText").val();
    var dateValues = dateString.split(" - ")
    
    var deleteEvent = {
        // eventName: $(`#item${id}`).text(),
        eventMonth: dateValues[0],
        eventDay: dateValues[1],
        eventYear: dateValues[2]
    }
    
    // console.log(deleteEvent);
    
    $.ajax({
        method: "POST",
        url: "/api/delete-event",
        data: deleteEvent
    }).then(function (data) {
        console.log("deleting "+data)
    }).then(function() {

        if (elementJob == 'complete') {
            completeTODO(element);
    
        } else if (elementJob == 'delete') {
            removeTODO(element);
        }
    });
    


});