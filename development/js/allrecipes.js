//zadanie 5.1 wyświetlanie listy przepisów
var allRecipes = JSON.parse(localStorage.getItem("recipes"));
console.log(allRecipes);

//funkcja nadająca odpowiednie id przepisom
for (var i = 0; i < allRecipes.length; i++) {
    allRecipes[i].id = i + 1;
}
function renderAllRecipes() {
    // var allRecipes = JSON.parse(localStorage.getItem("recipes"));
    var allRecipesTable = document.querySelector(".section__background-img-allRecipes-table");
    //ustawienie przepisów w tabeli okna lista przepisów
    for (var i = 0; i < allRecipes.length; i++) {
        var recipe = allRecipes[i];
        var row = document.createElement('tr');
        var properties = ['id', 'recipeTitle', 'recipeDescription'];
        for (var j = 0; j < properties.length; j++) {
            var cell = document.createElement('td');
            cell.innerText = recipe[properties[j]];
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
        //próba dodania akcji do przycisków- jak???
        editIcon.addEventListener("click", function () {
            var toEditRecipeId = Number(this.parentElement.parentElement.firstElementChild.innerHTML);
            for(var i = 0; i < allRecipes.length; i++) {
                if(allRecipes[i].id === toEditRecipeId){
                    localStorage.setItem("toEdit", JSON.stringify(allRecipes[i]));
                    window.location= "recipes.html";
                    return
                }
            }
        });
        trashIcon.addEventListener("click", function () {
            var toDeleteRecipeId = Number(this.parentElement.parentElement.firstElementChild.innerHTML);
            for(var i = 0; i < allRecipes.length; i++) {
                if(allRecipes[i].id === toDeleteRecipeId){
                    allRecipes.splice(i, 1);
                    localStorage.setItem("recipes", JSON.stringify(allRecipes));
                    this.parentElement.parentElement.remove();
                    return
                }
            }
        });

        allRecipesTable.appendChild(row);
    }
}

window.addEventListener('load', renderAllRecipes ());