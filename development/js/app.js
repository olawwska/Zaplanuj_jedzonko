document.addEventListener("DOMContentLoaded", function () {



    var button = document.querySelector("button");
    var nameElement = document.querySelector(".header__name-element");
    var firstTimeInApp = document.querySelector(".section__background-img-first-time-in-app");
    var backToApp = document.querySelector(".section__background-img-back-to-app");




    button.addEventListener("click", function () {
        event.preventDefault();

        var userName = document.getElementById("name").value;
        //Tworzę event, w którym po kliknięciu guzika pobieram wpisane imię

        if (userName == 0) {
            event.preventDefault(); //walidacja formularza

            alert("wpisz swoje imię");

        } else {

            localStorage.setItem("name", userName); // Zapisuję to imię w LocalStorage

            var savedData = localStorage.getItem("name"); // Pobieram to imię z Local Storage

            nameElement.innerText = savedData; // Zamieniam innerText "Imię" z elementu div .header__name-element na pobrane z Local Storage imię

            firstTimeInApp.style.display = "none";

            backToApp.style.display = "block" //po wykonaniu wszystkich wcześniejszych poleceń pierwsza strona logowania znika i pojawia się głowny widok

        }


    });

    window.addEventListener('load', function() {

        var savedData = localStorage.getItem("name"); // Pobieram to imię z Local Storage

        nameElement.innerText = savedData; // Zamieniam innerText "Imię" z elementu div .header__name-element na pobrane z Local Storage imię

        firstTimeInApp.style.display = "none";

        backToApp.style.display = "block";



        //Zadanie 3.3 Zaciąganie liczby przepisów do niebieskiego widżetu strony głównej

        var numberOfRecipes = document.querySelector(".numberOfRecipes");

        var allRecipes = JSON.parse(localStorage.getItem("recipes"));

        numberOfRecipes.innerText = allRecipes.length;

    });


    //Zadanie 3.3 znikanie widzetów po naciśnięciu krzyżyka

        var infoWidget = document.querySelector(".section__background-img-back-to-app-info-widget");
        var warningWidget = document.querySelector(".section__background-img-back-to-app-warning-widget");
        var successWidget = document.querySelector(".section__background-img-back-to-app-success-widget");
        var deleteIcon = document.querySelectorAll(".font-awsome");

        deleteIcon[0].addEventListener('click', function (){

            infoWidget.style.display = "none";
        });

        deleteIcon[1].addEventListener('click', function (){

            warningWidget.style.display = "none";
        });

        deleteIcon[2].addEventListener('click', function (){

            successWidget.style.display = "none";
        });



    // Zadanie 7.1 Zaciąganie nr tygodnia i planów

        var weekNr = document.querySelector(".weekNumber");
        var Monday = document.querySelectorAll(".monday");
        var Tuesday = document.querySelectorAll(".tuesday");
        var Wednesday = document.querySelectorAll(".wednesday");
        var Thursday = document.querySelectorAll(".thursday");
        var Friday = document.querySelectorAll(".friday");
        var Saturday = document.querySelectorAll(".saturday");
        var Sunday = document.querySelectorAll(".sunday");
        var next = document.querySelector(".next");
        var previous = document.querySelector(".previous");

        var schedules = JSON.parse(localStorage.getItem("schedules"));
        console.log(schedules);


        for (var i = 0; i < schedules.length; i++) { //dla każdego planu

            weekNr.innerText = schedules[i].weekNumber;//zaciągm nr tygodnia widocznego planu

            if (schedules[i].monday) { //jeśli to poniedziałek

                for (var j = 0; j < Monday.length; j++) { //to dla każdego posiłku w poniedziałek
                    Monday[j].innerText = schedules[i].monday[j] //posiłek = posiłek z planu
                    }
               }

            //analogicznie dla każdego dnia tygodnia


            if (schedules[i].tuesday) {

                for (var j = 0; j < Tuesday.length; j++) {
                    Tuesday[j].innerText = schedules[i].tuesday[j]
                }

            }

            if (schedules[i].wednesday) {

                for (var j = 0; j < Wednesday.length; j++) {
                    Wednesday[j].innerText = schedules[i].wednesday[j]
                }

            }

            if (schedules[i].thursday) {

                for (var j = 0; j < Thursday.length; j++) {
                    Thursday[j].innerText = schedules[i].thursday[j]
                }

            }

            if (schedules[i].friday) {

                for (var j = 0; j < Friday.length; j++) {
                    Friday[j].innerText = schedules[i].monday[j]
                }

            }

            if (schedules[i].saturday) {

                for (var j = 0; j < Saturday.length; j++) {
                    Saturday[j].innerText = schedules[i].saturday[j]
                }

            }

            if (schedules[i].sunday) {

                for (var j = 0; j < Sunday.length; j++) {
                    Sunday[j].innerText = schedules[i].sunday[j]
                }
            }

        }







});