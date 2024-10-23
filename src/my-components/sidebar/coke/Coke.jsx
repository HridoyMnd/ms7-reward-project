
const Coke = ({ order, setOrder, setRemovedData }) => {
    const minus = (recipe) => {
        const newOrder = order.filter((item) => item.recipe_id !== recipe.recipe_id);
        setOrder(newOrder);
        setRemovedData(prev => [...prev, recipe]);
    };

    return (
        <div className="text-center border border-blue-500 rounded-md p-3">
            <h2 className="text-2xl font-semibold">Want to Coke:{order.length}</h2>
            <hr className="border mb-2 mt-3" />
            <div class="overflow-x-auto">
                <table class="">
                    <thead>
                        <tr class="bg-gray-100 text-gray-600 uppercase text-sm grid grid-cols-12 rounded-sm">
                            <th class="col-span-1 text-left"></th>
                            <th class="col-span-4 text-left">Name</th>
                            <th class="col-span-2 text-left">Time</th>
                            <th class="col-span-2 text-left">Calories</th>
                            <th class="ml-4 col-span-3 text-left">Button</th>
                        </tr>
                    </thead>
                </table>
            </div>

            {
                order.map((recipe, idx) => (
                    <div key={idx} className="overflow-x-auto bg-gray-100 py-3 hover:bg-gray-200">
                        <table className="table">
                            <tbody>
                                <tr className="grid grid-cols-12 items-center">
                                    <td className="col-span-1 p-0 text-[14px] text-center">{idx + 1}</td>
                                    <td className="col-span-4 p-0 text-[14px]">{recipe.recipe_name}</td>
                                    <td className="col-span-2 p-0 text-[14px]">{recipe.preparation_time}</td>
                                    <td className="col-span-2 p-0 text-[14px]">{recipe.calories}</td>
                                    <td className="col-span-3 p-0 text-center border">
                                        <button
                                            onClick={() => minus(recipe)}
                                            className="border border-green-600 w-full h-8 rounded-lg text-center">
                                            Minus
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))
            }

        </div>
    );
};

export default Coke;
