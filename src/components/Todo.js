import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

export const Todo = ({todo,id, items, setItems})=>{
    const [isChecked, setIsChecked] = useState(false);
    
    const check = ()=>{
        setIsChecked((prev)=>prev = !prev);
    }

    const handleDelete = ()=>{
        setItems((prev)=>{
            prev = prev.filter((p)=>{console.log(p); return p.id !== id})
            console.log("filtered", prev);
            return prev;
        })
    }

    return (
        <div className="todoContainer">
            <p className="todo" type="text" style={isChecked?{textDecorationLine:"line-through"}:{}}>{todo}</p>
            <FaCheck className="check" onClick={check}/>
            <FaTrashAlt className="delete" onClick={handleDelete}/>
        </div>
    );
}