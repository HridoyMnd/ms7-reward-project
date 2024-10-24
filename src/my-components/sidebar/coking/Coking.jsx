
const Coking = ({ removedData, data }) => {
    return (
        <div className="border border-blue-300 rounded-md p-4 mt-3 text-center">
            <h2 className="text-2xl font-semibold">Preparaing:{removedData.length} </h2>
            <hr className="border mb-2 mt-3" />
            <div class="overflow-x-auto">
                <table class="">
                    <thead>
                        <tr class="bg-gray-100 text-gray-600 uppercase text-sm grid grid-cols-12 rounded-sm">
                            <th class="col-span-1 text-left"></th>
                            <th class="col-span-5 text-left ">Name</th>
                            <th class="col-span-3 text-left">Time</th>
                            <th class="col-span-2 text-left">Calories</th>
                            <th class="ml-4 col-span-1 text-left"></th>
                        </tr>
                    </thead>
                </table>

            </div>
            {
                removedData.map((accept, idx) =>
                    <div key={idx} className="overflow-x-auto bg-gray-100 hover:bg-gray-300 py-3">
                        <table className="">
                            <tbody>
                                <tr className="grid grid-cols-12 items-center">
                                    <td className="col-span-1 p-0 text-[14px] text-center">{idx + 1}</td>
                                    <td className="col-span-5 p-0 text-[14px] text-left">{accept.recipe_name}</td>
                                    <td className="col-span-3 p-0 text-[14px] text-left">{accept.preparation_time} Minutes</td>
                                    <td className="col-span-3 p-0 text-[14px] text-left">{accept.calories} Calories</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>

                )
            }
            <table class="bg-gray-300 w-full">
                <thead className="flex justify-end">
                    <tr class="text-left mr-3">
                        <th class="block">TOTAl TIME:</th>
                        <th class="block">TOTAL CALORIES:</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default Coking;