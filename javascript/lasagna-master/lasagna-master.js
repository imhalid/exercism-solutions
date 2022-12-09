/// <reference path="./global.d.ts" />
// @ts-check
/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
/** Task 1 Determining wether the lasagna is done
 *
 * @param {number} timerVal
 *
 * @returns {string} Statement wether the lasagna is done cooking
 *
 */
export function cookingStatus(timerVal) {
  if (timerVal === undefined) {
    return "You forgot to set the timer.";
  }
  return timerVal === 0 ? "Lasagna is done." : "Not done, please wait.";
}

/** Task 2 Estimate preparation time
 *
 * @param {string[]} layer ingredients
 * @param {number} average preparation time
 *
 * @returns {number} preparation time required
 *
 */
export function preparationTime(layers, time = 2) {
  return layers.length * time;
}

/** Task 3 Determine the quantities of noodles and sauce required
 *
 * @param {string[]} layers
 *
 * @returns {Object} Quantity of noodles and sauce required
 *
 */
export function quantities(layers) {
  const Ammount = {
    noodles: 0,
    sauce: 0,
  };
  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === "noodles") {
      Ammount.noodles += 50;
    } else if (layers[i] === "sauce") {
      Ammount.sauce += 0.2;
    }
  }
  return Ammount;
}

/** Task 4 Add secret ingredient
 *
 * @param{string[]} Array containing friends list of ingredients
 * @param{string[]} Array containing my list of ingredients
 *
 * @returns[string[]] Array containing my list of ingredients + the last inredient from friends list
 *
 */
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

/** Task 5 Scale the recipe
 *
 * @param{Object} Object containing recipe ingredients for 2 lasagna portions
 * @param{number} Number of portions to cook
 *
 * @returns{Object} Quantity of ingredients required for set number of portions
 *
 */
export function scaleRecipe(recipe, portions = 2) {
  let totalQuantity = { ...recipe }; //shallow copy
  for (let ingredient in totalQuantity) {
    totalQuantity[ingredient] = (totalQuantity[ingredient] * portions) / 2;
  }
  return totalQuantity;
}
