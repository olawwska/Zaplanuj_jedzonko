document.addEventListener("DOMContentLoaded", function () {



    var button = document.querySelector("button");
    var nameElement = document.querySelector(".header__name-element");

    var firstTimeInApp = document.querySelector(".section__background-img-first-time-in-app");
    var widgetRecipes = document.querySelector(".section__background-img-back-to-app-add-recipe");
    var widgetPlan = document.querySelector(".section__background-img-back-to-app-add-plan");
    var backToApp = document.querySelector(".section__background-img-back-to-app");



    button.addEventListener("click", function () {
        event.preventDefault();

        var userName = document.getElementById("name").value;
        //Tworzę event, w którym po kliknięciu guzika pobieram wpisane imię

        if (userName == 0) {
            event.preventDefault(); //walidacja formularza

        } else {

            localStorage.setItem("name", userName); // Zapisuję to imię w LocalStorage

            var savedData = localStorage.getItem("name"); // Pobieram to imię z Local Storage

            nameElement.innerText = savedData; // Zamieniam innerText "Imię" z elementu div .header__name-element na pobrane z Local Storage imię


            firstTimeInApp.style.display = "none";

            backToApp.style.display = "block" //po wykonaniu wszystkich wcześniejszych poleceń pierwsza strona logowania znika i pojawia się głowny widok

        }

    });

    //Poniżej widok główny

    widgetRecipes.addEventListener("click", function () {

            backToApp.style.display = "none";

    }); //po naciśnięciu widzetu dodaj przepis przenosimy się na odpowiednią stronę



    widgetPlan.addEventListener("click", function () {

            backToApp.style.display = "none";

    }); //po naciśnięciu widzetu dodaj plan,przenosimy się na odpowiednią stronę


/// pobrać element div recipes od zuzi i dodać do kliknięcia na display block
    /// pobrać element div schedules od Oli i dodać do kliknięcia na display block




});