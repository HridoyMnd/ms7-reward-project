import Coke from "./coke/Coke";
import Coking from "./coking/Coking";


const Sidebar = ({order}) => {
    return (
          <div className="border col-span-1 p-2">
           <Coke order = {order}></Coke>
           <Coking></Coking>
          </div>
    );
};

export default Sidebar;