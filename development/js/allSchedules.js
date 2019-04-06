
//zadanie 8.1 wyświetlanie listy planow
var allSchedules = JSON.parse(localStorage.getItem("schedules"));
console.log(allSchedules);
console.log(allSchedules[1].id);
var allSchedulesTable = document.querySelector(".section__background-img-allSchedules-table");


function renderAllSchedules() {
    var allSchedules = JSON.parse(localStorage.getItem("schedules"));
    var allSchedulesTable = document.querySelector(".section__background-img-allSchedules-table");
    //ustawienie planow w tabeli okna lista przepisów
    for (var i = 0; i < allSchedules.length; i++) {
        var schedule = allSchedules[i];
        var row = document.createElement('tr');
        var properties = ['id', 'title', 'description', 'weekNumber'];
        for (var j = 0; j < properties.length; j++) {
            var cell = document.createElement('td');
            cell.innerText = schedule[properties[j]];
            row.appendChild(cell);
        }
        var editIcon = document.createElement('span');
        var trashIcon = document.createElement('span');
        editIcon.classList.add("fas");
        editIcon.classList.add("fa-edit");
        editIcon.style.color = '#E58A20';
        editIcon.style.paddingLeft = '8px';
        trashIcon.classList.add("far");
        trashIcon.classList.add("fa-trash-alt");
        trashIcon.style.color = '#BD4932';
        trashIcon.style.paddingLeft = '8px';
        var cellIcon = document.createElement('td');
        cellIcon.appendChild(editIcon);
        cellIcon.appendChild(trashIcon);
        row.appendChild(cellIcon);
        allSchedulesTable.appendChild(row);
    }

}
renderAllSchedules();
