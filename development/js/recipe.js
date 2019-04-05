//pola input
var recipeName = document.getElementById("recipe-name");
var desciption = document.getElementById("recipe-description");
var ingredient = document.getElementById("ingredients");
var method = document.getElementById("method");

//lista nowych
var newIngredientsList = document.querySelector(".section__background-img-new__recipes__ingredients-list");
var newMethodList = document.querySelector(".section__background-img-new__recipes__method-list");

//przyciski
var addIngredientBtn = document.querySelector(".addIngredient");
var addMethodBtn = document.querySelector(".addMethod");
var saveRecipeBtn = document.querySelector(".section__background-img-new__recipes__recipe-header-button");

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
    newLi.innerText = ingredient.value;
    var editIconIngredient = document.createElement("span");
    var trashIconIngredient = document.createElement("span");
    editIconIngredient.classList.add("fas");
    editIconIngredient.classList.add("fa-edit");
    editIconIngredient.style.color = '#E58A20';
    editIconIngredient.style.paddingLeft = '8px';
    trashIconIngredient.classList.add("far");
    trashIconIngredient.classList.add("fa-trash-alt");
    trashIconIngredient.style.color = '#BD4932';
    trashIconIngredient.style.paddingLeft = '8px';
    newLi.appendChild(editIconIngredient);
    newLi.appendChild(trashIconIngredient);

    editIconIngredient.addEventListener("click", function () {
        this.parentElement.setAttribute("contenteditable", "true")
    });

    trashIconIngredient.addEventListener("click", function () {
        this.parentElement.remove();
    });


    newIngredientsList.appendChild(newLi);
}
//guzik dodawania nowego składnika
addIngredientBtn.addEventListener("click", function(e) {
    e.preventDefault();
    //zapisanie składnika do tablicy w obiekcie całego przepisu -zrobiłam inaczej, przeniosłam do całego guzika saveRecipeBtn
    // newRecipe.ingredients.push(ingredient.value);
    // renderowanie elementu na liście
    renderSingleIngredient(ingredient);
    ingredient.value = "";
});

//to samo dla methods
//renderowanie nowych instrukcji na liście
function renderSingleMethod(method) {
    var newLi = document.createElement("Li");
    newLi.innerText = method.value;
    var editIconMethod = document.createElement("span");
    var trashIconMethod = document.createElement("span");
    editIconMethod.classList.add("fas");
    editIconMethod.classList.add("fa-edit");
    editIconMethod.style.color = '#E58A20';
    editIconMethod.style.paddingLeft = '8px';
    trashIconMethod.classList.add("far");
    trashIconMethod.classList.add("fa-trash-alt");
    trashIconMethod.style.color = '#BD4932';
    trashIconMethod.style.paddingLeft = '8px';
    newLi.appendChild(editIconMethod);
    newLi.appendChild(trashIconMethod);

    editIconMethod.addEventListener("click", function () {
        this.parentElement.setAttribute("contenteditable", "true")
    });

    trashIconMethod.addEventListener("click", function () {
        this.parentElement.remove();
    });

    newMethodList.appendChild(newLi);
}
//guzik dodawania nowej instrukcji
addMethodBtn.addEventListener("click", function (e) {
    e.preventDefault();
    // zapisanie instrukcji do tablicy w obiekcie całego przepisu -zrobiłam inaczej, przeniosłam do całego guzika saveRecipeBtn
    // newRecipe.methods.push(method.value);
    // renderujemy element na liście
    renderSingleMethod(method);
    method.value = "";
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
    Array.from(newMethodList.children).forEach(function(li){
        newRecipe.methods.push(li.innerText);
        li.remove();
    });
    Array.from(newIngredientsList.children).forEach(function(li){
        newRecipe.ingredients.push(li.innerText);
        li.remove();
    });
    saveRecipeToLocalStorage(newRecipe);
    
    recipeName.value = "";
    desciption.value = "";
    window.location= "allRecipes.html";
});
