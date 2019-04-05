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
        console.log(allRecipes);

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



    //Zadanie 7.1 Zaciąganie nr tygodnia

        // var weekNumber = document.querySelector(".weekNumber");
        //
        // var LSweekNumber = localStorage.getItem("weekNumber");
        //
        // weekNumber.innerText = LSweekNumber;

        // var next = document.querySelector(".next");
        // var previous = document.querySelector(".previous");

});