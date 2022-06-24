console.log('this is main.js')
const ingredientsContainer = document.getElementById('ingredients');

async function getData() {
    // specify where to get the data from
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    console.log('The response is', response.data.meals[0])
    console.log(response.data.meals[0])
    addImage(response.data.meals[0].strMealThumb)
    addIngredients(response.data.meals[0])



}
// console.log(response.data.meals[0].strIngredient1)




// async function getDataFetch() {
//     try {
//         const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
//         const data = await response.json()
//         console.log('response is', data)

//     } catch (error) {
//         console.log('Error:', error.message)
//         alert('Error getting data!')
//     }
// }

// function getDataThenCatch() {
//     return fetch('https://www.themealdb.com/api/json/v1/1/random.php')
//         .then(response => {
//             console.log('response is', response)
//             return response.json()
//         })
//         .then(data => console.log('data are', data))
//         .catch(error => console.log('error:', error))
// }

getData()

function addImage(src) {
    const img = document.getElementById('image')
    img.src = src
}
function addIngredients(ingredients) {

    // all the ingredients
    let ingredientsArray = [];
    for (let i = 1; i <= 20; i++) {
        for (const key in ingredients) {
            // strMeasure3
            if (key === (`strIngredient${i}`) && (ingredients[`strIngredient${i}`]) !== '' && (ingredients[`strIngredient${i}`]) !== null) {
                ingredientsArray.push([ingredients[`strIngredient${i}`], ingredients[`strMeasure${i}`]])
                // if (key === (`strMeasure${i}`) && (ingredients[`strMeasure${i}`]) !== '' && (ingredients[`strMeasure${i}`]) !== null) {

            }
        }
    }
    console.log(ingredientsArray)
    // all the measure
    ingredientsContainer.innerHTML += `<ul id='stats'> 
   ${(ingredientsArray).map(item => {
        return `<li><div>${item[0]}</div><div>${item[1]}</div></li>`
    }).join(' ')}
    </ul>`
}

