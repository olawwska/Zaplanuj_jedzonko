//pola input
var recipeName = document.getElementById("recipe-name");
var desciption = document.getElementById("recipe-description");
var ingredient = document.getElementById("ingredients");
var method = document.getElementById("method");

//lista nowych
var newIngredientsList = document.querySelector(".new__recipes__ingredients-list");
var newMethodList = document.querySelector(".new__recipes__method-list");

//przyciski
var addIngredientBtn = document.querySelector(".addIngredient");
var addMethodBtn = document.querySelector(".addMethod");
var saveRecipeBtn = document.querySelector(".new__recipes__recipe-header-button");

//obiekt przepisu
var newRecipe = {
    recipeTitle: "",
    recipeDescription: "",
    ingredients: [],
    methods: []
};

//renderowanie nowych składników na liście
function renderSingleIngredient(ingredient) {
    var newLi = document.createElement("Li");
    newLi.innerText = ingredient;
    newIngredientsList.appendChild(newLi);
}
//guzik dodawania nowego składnika
addIngredientBtn.addEventListener("click", function(e) {
    e.preventDefault();
    //zapisanie składnika do tablicy w obiekcie całego przepisu
    newRecipe.ingredients.push(ingredient.value);
    // renderowanie elementu na liście
    renderSingleIngredient(ingredient.value);
});

//to samo dla methods
//renderowanie nowych instrukcji na liście
function renderSingleMethod(method) {
    var newLi = document.createElement("Li");
    newLi.innerText = method;
    newMethodList.appendChild(newLi);
}
//guzik dodawania nowej instrukcji
addMethodBtn.addEventListener("click", function (e) {
    e.preventDefault();
    // zapisanie instrukcji do tablicy w obiekcie całego przepisu
    newRecipe.methods.push(method.value);
    // renderujemy element na liście
    renderSingleMethod(method.value);
});

//funkcja pomocnicza- odbiera obiekt newRecipe i dodaje go do localStorage
function saveRecipeToLocalStorage(newObject) {
    var dataFromLocalStorage = [];
    // czy localStorage posiada dane
    // jeśli są to z getItem dostaniemy wartość w postaci JSON
    if (localStorage.getItem("recipes") != null){
        // dlatego konwertujemy do obiektu lub tablicy  i zapisujemy do zmiennej
        dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
        // dodajemy nowy obiekt
        dataFromLocalStorage.push(newObject);
        // zapisanie do LS w formie stringa
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    } else {
        // jeśli nie ma, to tworzymy nową wartość w localStorage i dodajemy dane
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    }
    //wyświetlamy komunikat ze przepis zapisany
    alert("przepis zapisano");
}

saveRecipeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    newRecipe.recipeTitle = recipeName.value;
    newRecipe.recipeDescription = desciption.value;
    saveRecipeToLocalStorage(newRecipe);
});