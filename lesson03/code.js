const dinnerFoods = ['fish curry', 'Steam white rice', 'stir fried vegetables', 'apple pie', 'candy'];
console.log(dinnerFoods);

dinnerFoods.push('bread');
console.log(dinnerFoods);
dinnerFoods.splice(2, 1);
console.log(dinnerFoods);
const foodString = dinnerFoods.join(", ");
console.log(foodString);
