
//global variables to grab form data to use in post fetch request
let recipeName;
let description;
let ingredients;
let ingredientButton;
let ingredientTextArea;
let steps;
let stepButton;
let stepTextArea;
let category;
// let imgFileName;
let uploadButton;
let user;

let ingredientsArray = []; //stores ingredients to be converted into unordered list for textArea and string for database
let stepsArray = []; //stores steps to be converted into ordered list for textArea and string for database


    recipeName = document.getElementById("recipe-title");
    description = document.getElementById("description");
    ingredients = document.getElementById("add-ingredient");
    ingredientButton = document.getElementById("ingredient-button");
    ingredientTextArea = document.getElementById("ingredient-text-area");
    steps = document.getElementById("add-step");
    stepButton = document.getElementById("step-button");
    stepTextArea = document.getElementById("step-text-area");
    category = document.getElementById("category");
    // imgFileName = document.getElementById("image-file-name");
    uploadButton = document.getElementById("upload-button");
    user = document.getElementById("user");


const addIngredient = () => {
    ingredientsArray.push(ingredients.value);
    //append new unordered list item to ingredientTextArea.textContent
    let newIngredient = document.createElement("li");
    newIngredient.textContent = ingredients.value;
    ingredientTextArea.appendChild(newIngredient);
    console.log(newIngredient);

    // how do i make the input field clear once the ingredient is pushed so the user can add a new ingredient?
}

const addStep = () => { 
    stepsArray.push(steps.value);
    //append new ordered list item to stepTextArea.textContent
    let newStep = document.createElement("li");
    newStep.textContent = steps.value;
    stepTextArea.appendChild(newStep);
    //how do i make the input field clear once the step is pushed so the user can add a new step?
}


// const uploadRecipe = (recipe) => fetch("/recipes", { //we still need to make this POST route
//     method: 'POST',
//     body: JSON.stringify(recipe),
// });

const uploadRecipe = (recipe) => console.log(recipe);

const handleRecipeUpload = () => { 
    const newRecipe = {
        recipe_name: recipeName.value,
        description: description.value,
        ingredients: ingredientsArray.join(", "), 
        steps: stepsArray.join(", "), 
        category: category.value,
        // user: user.value //i have no idea how to get this
    }
    uploadRecipe(newRecipe);
}


// $(".dropdown-menu li a").click(function(){

//     $(this).parents(".btn-group").find('.selection').text($(this).text());
//     $(this).parents(".btn-group").find('.selection').val($(this).text());
  
//   });


//add event listener for addIngredient button that pushes ingredients.value to ingredientsArray
ingredientButton.addEventListener("click", addIngredient);

//add event listener for addStep button that pushes steps.value to stepsArray
stepButton.addEventListener("click", addStep);

//add event listener for uploadRecipe button that calls uploadRecipe function
uploadButton.addEventListener("click", handleRecipeUpload);