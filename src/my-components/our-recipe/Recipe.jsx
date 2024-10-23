
const Recipe = ({recipe, controlOrder}) => {
    const {recipe_img, recipe_name, description, preparation_time, calories, ingredients} = recipe;
    return (
        <div className="border p-3 rounded-md">
            <img src={recipe_img} alt=""  className="h-52 w-full rounded-md"/>
            <h2 className="text-xl font-semibold">{recipe_name}</h2>
            <p className="">{description}</p>
            <h2>ingredients:{ingredients.length}</h2>
            <ul className="ml-8">
                {recipe.ingredients.map((item, idx) => <li key={idx} className="list-disc">{item}</li> )}
            </ul>
            <p>{preparation_time}</p>
            <p>{calories}</p>
            <button className="border border-blue-600 rounded-lg py-2 px-8" onClick={() => controlOrder(recipe)}>Order Now</button>
        </div>
    );
};

export default Recipe;