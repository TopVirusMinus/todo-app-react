import { FaPlusCircle } from "react-icons/fa";
import { Dropdown } from "./Dropdown";

export const TaskInput = ({setTextInput,currText, setItems, items})=>{
    const addTodo = (e)=>{
        e.preventDefault()
        setItems(
            [...items, {text: currText, completed:false, id:Math.random()}]
        );
        setTextInput("");
    }

    const updateText = (e)=>{
        setTextInput(e.target.value)
    }

    return (
        <div className="inputContainer">
            <div className="inpAdd">
                <input value={currText} className="taskInput" type="text" onChange={updateText}/>
                <FaPlusCircle onClick={addTodo} className="add"/>
            </div>
            <Dropdown/>
        </div>
    );
}