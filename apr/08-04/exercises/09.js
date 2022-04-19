/**
 * 09 easy
 * Create an object to hold information on your favorite recipe. 
 * It should have properties for title (a string), servings (a number), 
 * and ingredients (an array of strings).
 * On separate lines (one console.log statement for each), 
 * log the recipe information so it looks like:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
 */

let recipe = {
    title: 'Cheeseburger',
    servings: 4,
    ingredients: ['patty', 'beef', 'mayo', 'tomato', 'lettuce']
}

console.log(recipe.title);
console.log(`Servings: ${recipe.servings}`);
console.log('Ingredients:')
for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}