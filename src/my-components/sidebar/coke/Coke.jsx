/*
const Coke = ({ order }) => {
    const minus = () => {
        alert("hello")
    }
    return (
        <div className="text-center">
            <h2 className="text-2xl font-semibold">Want to Coke:{order.length} </h2>
            <hr className="border mt-3" />
            <table className="table mb-2">
               <thead>
                 <tr className="grid grid-cols-12 items-center text-sm" >
                    <th className="col-span-1 p-0"></th>
                     <th className="col-span-4 p-0">Name</th>
                    <th className="col-span-2 p-0">Time</th>
                    <th className="col-span-3 p-0">Calories</th>
                    <th></th>
                 </tr>
               </thead>
            </table>
            {
                order.map((recipe, idx) =>
                    // console.log(recipe)
                    <div key={idx} className="overflow-x-auto">
                        <table className="table mb-5 bg-gray-100 rounded-md">
                            <tbody className="">
                                <tr className="grid grid-cols-12 items-center">
                                    <td className="col-span-1 p-0 text-[14px] text-center">{idx}</td>
                                    <td className="col-span-4 p-0 text-[14px]">{recipe.recipe_name}</td>
                                    <td className="col-span-2 p-0 text-[14px]">{recipe.preparation_time}</td>
                                    <td className="col-span-3 p-0 text-[14px]">{recipe.calories}</td>
                                    <td className="col-span-2 p-0 text-center">
                                    <button onClick={() => minus ()} className="border border-green-600 w-14 h-8 rounded-lg text-center">click</button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                )
            }

        </div>
    );
};

export default Coke;
*/
import { useState } from 'react';

const Coke = ({ initialOrder }) => {
    // State to track order
    const [order, setOrder] = useState(initialOrder);

    const minus = (idx) => {
        // Remove the item at the clicked index
        const updatedOrder = order.filter((_, index) => index !== idx);
        setOrder(updatedOrder);
    };

    return (
        <div className="text-center">
            <h2 className="text-2xl font-semibold">Want to Coke: {order.length}</h2>
            <hr className="border mt-3" />
            <table className="table mb-2">
                <thead>
                    <tr className="grid grid-cols-12 items-center text-sm">
                        <th className="col-span-1 p-0"></th>
                        <th className="col-span-4 p-0">Name</th>
                        <th className="col-span-2 p-0">Time</th>
                        <th className="col-span-3 p-0">Calories</th>
                        <th className="col-span-2 p-0">Action</th>
                    </tr>
                </thead>
            </table>
            {
                order.map((recipe, idx) => (
                    <div key={idx} className="overflow-x-auto">
                        <table className="table mb-5 bg-gray-100 rounded-md">
                            <tbody>
                                <tr className="grid grid-cols-12 items-center">
                                    <td className="col-span-1 p-0 text-[14px] text-center">{idx + 1}</td>
                                    <td className="col-span-4 p-0 text-[14px]">{recipe.recipe_name}</td>
                                    <td className="col-span-2 p-0 text-[14px]">{recipe.preparation_time}</td>
                                    <td className="col-span-3 p-0 text-[14px]">{recipe.calories}</td>
                                    <td className="col-span-2 p-0 text-center">
                                        <button 
                                            onClick={() => minus(idx)} 
                                            className="border border-green-600 w-14 h-8 rounded-lg text-center">
                                            Remove
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
