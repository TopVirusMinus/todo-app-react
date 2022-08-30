import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
export const Todo = ({todo})=>{
    return (
        <div class="todoContainer">
            <p className="todo" type="text">{todo}</p>
            <FaCheck className="check"/>
            <FaTrashAlt className="delete"/>
        </div>
    );
}