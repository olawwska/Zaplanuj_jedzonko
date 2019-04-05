document.addEventListener('DOMContentLoaded', function () {


    // pola input
    var planName = document.getElementById("plan-name");
    var planDescription = document.getElementById("plan-description");
    var weekNumber = document.getElementById('week-number');
    console.log(weekNumber);
    var id = 1;

    //button
    var addPlanButton = document.getElementById('savePlan');

    //selecty odpowiadające za dany dzień tygodnia
    var weekDays = document.querySelectorAll('tr');
    var monday = weekDays[1].querySelectorAll('td > select');
    var tuesday = weekDays[2].querySelectorAll('td > select');
    var wednesday = weekDays[3].querySelectorAll('td > select');
    var thursday = weekDays[4].querySelectorAll('td > select');
    var friday = weekDays[5].querySelectorAll('td > select');
    var saturday = weekDays[6].querySelectorAll('td > select');
    var sunday = weekDays[7].querySelectorAll('td > select');
    var selects = document.querySelectorAll('td > select');


    var recipesLocalStorage = localStorage.getItem('recipes');
    var  recipesLocalStorageObject = JSON.parse(localStorage.getItem('recipes'));

    var listOfRecipeTitles = [];
    for (var i = 0; i < recipesLocalStorageObject.length; i++) {
            listOfRecipeTitles.push(recipesLocalStorageObject[i].recipeTitle);
    }

    //funkcja pobierajaca nazwy przepisow i wypychajaca je do listy rozwijanej w selectcie

    for (var i = 0; i < selects.length; i++) {
        for (var j = 0; j < listOfRecipeTitles.length; j++) {
            var option = document.createElement('option');
            option.innerText = listOfRecipeTitles[j];
            selects[i].appendChild(option);
        }
    }

    // window.addEventListener('load', function() {
    //     for (var i = 0; i < selects.length; i++) {
    //         for (var j = 0; j < listOfRecipeTitles.length; j++) {
    //             var option = document.createElement('option');
    //             option.innerText = listOfRecipeTitles[j];
    //             selects[i].appendChild(option);
    //         }
    //     }
    // });


    // reference to selected option CZĘŚC POMOCNICZA
    console.log(monday[1].options);
    // odwołuję się do listy rozwijanej opcji dla śniadania w poniedziałek
    console.log(monday[1].options[monday[1].selectedIndex]);

    // odwołuję się do WYBRANEJ OPCJI z listy rozwijanej dla śniadania (bo od 1) w poniedziałek

    console.log(monday[1].options[monday[1].selectedIndex].innerText);
    //3. odwołuję się do wartości inner text dla elementu określonego w poprzednim kroku, czyli wybranej opcji z listy rozwijanej dla - poniedziałek śniadanie

    //4. tworzę funkcję, ktora dla kazdego dnia tygodnia (przekazywanego jako argument) iteruje przez kolejne elementy tablicy (w ktorej trzymam referencje do selektow-czyli list rozwijanych) i wypycham do wczesniej zadeklarowanej pustej tablicy wartosci inner text od selected item (czyli elementu wybranego z listy przez uzytkownika)

    function getSelected(dayOfWeek) {
        var recipesOfDayTab = [];   //tablica musi byc zadeklarowana przed pętlą bo inaczej wartości nie będą się nadpisywac i powstanie tablica jednoelementowa
        for (var i = 0; i < dayOfWeek.length; i++) {
            recipesOfDayTab.push(monday[i].options[monday[i].selectedIndex].innerText);
        }return(recipesOfDayTab);
    }

    //przypisuje wynik funkcji dla kazdego z tygodni do zmiennej
    var recipesOfMonday = getSelected(monday);
    var recipesOfTuesday = getSelected(tuesday);
    var recipesOfWednesday = getSelected(wednesday);
    var recipesOfThursday = getSelected(thursday);
    var recipesOfFriday = getSelected(friday);
    var recipesOfSaturday = getSelected(saturday);
    var recipesOfSunday = getSelected(sunday);

    // tworzę konstruktor Schedule, do ktorego przekazuję jako argumenty id i referencje do inputow z nazwa planu numerem tygodnia i opisem planu, w ciele tworze pary klucz-wartosc gdzie - klucz id ma przekazana wartosc zmiennej id, klucz title description i week number maja przypisane wartosci inputow a klucz monday-sunday maja przypisane tablice z selectami danych dni tygodnia (czyli posilkami wybranymi na dany dzien)


    function Schedule(id, weekNumber, planName, planDescription) {
        this.id = id;
        this.title = planName;
        this.description = planDescription;
        this.weekNumber = weekNumber;
        this.monday = [];
        this.tuesday = [];
        this.wednesday = [];
        this.thursday = [];
        this.friday = [];
        this.saturday = [];
        this.sunday = [];
    }

    Schedule.prototype.showInfo = function() {
        console.warn("ID: ", this.id, "TYTUŁ: ", this.title);
        console.warn("OPIS: ",this.description);
        console.warn("Poniedziałek:");
        this.monday.forEach(function(elem, i) {
            console.warn(i, elem);
        })
    };

    Schedule.prototype.saveToLocalStorage = function(newObject) {
        var dataFromLocalStorage = [];
        if (localStorage.getItem('schedules') != null){
            dataFromLocalStorage = JSON.parse(localStorage.getItem('schedules'));
            dataFromLocalStorage.push(newObject);
            localStorage.setItem('schedules', JSON.stringify(dataFromLocalStorage));
        }
        else {
            dataFromLocalStorage.push(newObject);
            localStorage.setItem('schedules', JSON.stringify(dataFromLocalStorage));
        }
    };

    addPlanButton.addEventListener('click', function (e) {
        e.preventDefault();
        var allPlans = [];
        var newPlan = new Schedule(allPlans.length + 1, weekNumber.value, planName.value, planDescription.value);
        newPlan.monday = recipesOfMonday;
        newPlan.tuesday = recipesOfTuesday;
        newPlan.wednesday = recipesOfWednesday;
        newPlan.thursday = recipesOfThursday;
        newPlan.friday = recipesOfFriday;
        newPlan.saturday = recipesOfSaturday;
        newPlan.sunday = recipesOfSunday;
        allPlans.push(newPlan);
        for (var i = 0; i < allPlans.length; i++) {
            allPlans[i].showInfo();
            allPlans[i].saveToLocalStorage(newPlan);
        }
    })
});