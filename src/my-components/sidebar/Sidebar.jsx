import { useState } from "react";
import Coke from "./coke/Coke";
import Coking from "./coking/Coking";

const Sidebar = ({order, setOrder}) => {
    const [removedData, setRemovedData] = useState([])
    return (
          <div className="border col-span-1 p-2">
           <Coke order = {order} setOrder = {setOrder} setRemovedData ={setRemovedData}></Coke>
           <Coking removedData = {removedData}></Coking>
          </div>
    );
};

export default Sidebar;