const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredList = document.querySelector('ul#ingredients')

const igredEl = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = `${ingredient}`;
  return li
})

ingredList.append(...igredEl);

console.log(igredEl);


