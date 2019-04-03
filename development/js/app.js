document.addEventListener("DOMContentLoaded", function () {




    var button = document.querySelector("button");


    button.addEventListener("click", function () {
        event.preventDefault();

        var userName = document.getElementById("name").value;

        //Tworzę event, w którym po kliknięciu guzika pobieram wpisane imię

        localStorage.setItem("name", userName); // Zapisuję to imię w LocalStorage

        var savedData = localStorage.getItem("name"); // Pobieram to imię z Local Storage

        var nameElement = document.querySelector(".header__name-element");

        nameElement.innerText = savedData // Zamieniam innerText "Imię" z elementu div .header__name-element na pobrane z Local Storage imię


    });

















});