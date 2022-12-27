# [Pete, the baker](https://www.codewars.com/kata/525c65e51bf619685c000059) · 5 kyu

```javascript
const cakes = (recipe, available) => {
  const recipeIngredientsKeys = Object.keys(recipe)

  const result = []

  for (let i = 0; i < recipeIngredientsKeys.length; i++) {
    const ingredient = recipeIngredientsKeys[i]

    if (!available.hasOwnProperty(ingredient)) return 0

    const recipeIngredientAmount = recipe[ingredient]
    const availableIngredientAmount = available[ingredient]

    result.push(Math.trunc(availableIngredientAmount / recipeIngredientAmount))
  }

  return Math.min(...result)
}
```
