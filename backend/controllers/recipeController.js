
const crypto = require("crypto");
const { getData } = require("../utils/getData");
const { setData } = require("../utils/setData");

let data = getData();



exports.getAllRecipes = (req, res) => {
    let recipes=[...data];
    const searchTerm = req.query?.title?.trim()?.toLowerCase();
    const order = req.query.order;


    if (searchTerm) {
       recipes = data.filter((recipe) =>
            recipe.recipeName.toLowerCase().includes(searchTerm));

    }

    if (order) {
        recipes.sort((a, b) => 
        order ==='asc'? 
        a.recipeTime - b.recipeTime : 
        b.recipeTime-a.recipeTime
        );
        
    }

    res.status(200).json({
        message: "tarifler başarıyla gönderildi",
        results: data.length,
        recipes: recipes,
    })



};
exports.getRecipe = (req, res) => {

    //todo gelen id nin geçerliliğini kontrol et



    res.status(200).json({
        message: 'aradığınız tarif bulundu',
        recipe: req.recipe,
    });
};

exports.createRecipe = (req, res) =>{
    const newRecipe = req.body;
    if (
        !newRecipe.recipeName||
        !newRecipe.recipeTime||
        !newRecipe.category||
        !newRecipe.ingredients||
        !newRecipe.image||
        !newRecipe.instructions
        ) 
        {
        return res.status (400).json({message:'lütfen bütün değerleri tanımlayın'})
    }
    newRecipe.id= crypto.randomUUID()
    data.push(newRecipe)
    setData(data)
    res.status (200).json({message:'afiyet olsun', recipe:data})
}

exports.deleteRecipe = (req, res) =>{
    const index=data.findIndex((i)=>i.id==req.params.id)
    data.splice(index,1)
    setData(data)
    res.status(204).json({message:'deleted'})
}