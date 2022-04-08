var letsCook = document.querySelector('.cook');
var options = document.querySelectorAll('input');
var makeThis = document.querySelector('h2')
var showMeal = document.querySelector('.show-meal')
var hideIcon = document.querySelector('.icon')


var foods = {
  desserts:[
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Chocolate Cupcakes',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
  ],
  mains: [
    'Spaghetti',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza',
  ],
  sides:[
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies',
  ]
}


letsCook.addEventListener('click', getInput)


function getRandomIndex(selection){
  return Math.floor(Math.random() * selection.length);
}

function getInput(){
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
     var meal = options[i].value;
     console.log("meal", meal);
    }
  }

  suggestMeal(meal);
}


function toggle(){
  showMeal.classList.remove('hidden')
  hideIcon.classList.add('hidden')
}

function suggestMeal(meal) {
    if (meal === 'entire-meal'){
      makeThis.innerText = `${foods.mains[getRandomIndex(foods.mains)]} with a side
      of ${foods.sides[getRandomIndex(foods.sides)]} and
      ${foods.desserts[getRandomIndex(foods.desserts)]} for dessert!`
    } else {
      makeThis.innerText = foods[meal][getRandomIndex(foods[meal])]
    }
    toggle()
}
