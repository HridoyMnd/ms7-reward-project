import { useState } from "react";
import Coke from "./coke/Coke";
import Coking from "./coking/Coking";

const Sidebar = ({order, setOrder}) => {
    const [data, setData] = useState({})
    const [removedData, setRemovedData] = useState([])
    return (
          <div className="border col-span-1 p-2">
           <Coke order = {order} setOrder = {setOrder} setRemovedData ={setRemovedData} setData = {setData}></Coke>
           <Coking removedData = {removedData} data = {data}></Coking>
          </div>
    );
};

export default Sidebar;