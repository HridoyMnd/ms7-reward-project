import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../our-recipe/Recipe";


const Recipes = ({controlOrder}) => {
    // set recipes data
    const [recipes, setRecipes] = useState([]);
    //fetch recipes data
    useEffect(() => {
        fetch('recipes.json')
        .then((res) => res.json())
        .then((data) => setRecipes(data))
        .catch(() => alert("Something went wrong"))
    }, [])

    return (
        <div className="grid grid-cols-2 col-span-2 gap-3">
            {
                recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe ={recipe} controlOrder = {controlOrder}></Recipe>)
            }
        </div>
    );
};
export default Recipes;