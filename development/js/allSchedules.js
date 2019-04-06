
//zadanie 8.1 wyświetlanie listy planow
var allPlans = JSON.parse(localStorage.getItem("schedules"));
console.log(allPlans);
var allPlansTable = document.querySelector(".section__background-img-allSchedules-table");

//funkcja nadająca odpowiednie id planom
for (var i = 0; i < allPlans.length; i++) {
    allPlans[i].id = i + 1;
}

function renderAllPlans() {
    var allPlans = JSON.parse(localStorage.getItem("schedules"));
    var allPlansTable = document.querySelector(".section__background-img-allSchedules-table");
    //nadanie właściwego id planom
    for (var k = 0; k < allPlans.length;k++) {
        allPlans[k].id = k + 1;
    }
    //ustawienie planow w tabeli okna lista planow
    for (var i = 0; i < allPlans.length; i++) {
        var plan = allPlans[i];
        var row = document.createElement('tr');
        var properties = ['id', 'title', 'description', 'weekNumber'];
        for (var j = 0; j < properties.length; j++) {
            var cell = document.createElement('td');
            cell.innerText = plan[properties[j]];
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
        allPlansTable.appendChild(row);
    }

}
renderAllPlans();
