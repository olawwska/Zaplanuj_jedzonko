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

        numberOfRecipes.innerText = allRecipes.length

    });



















});