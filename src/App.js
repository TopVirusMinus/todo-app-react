import './App.css';
import {useState, useRef} from 'react';
import {TaskInput} from "./components/TaskInput";
import {Todo} from "./components/Todo";

function App() {
  const [textInput, setTextInput] = useState("");
  const [filter, setFilter] = useState("All");
  const [items, setItems] = useState([]);
  
  return (
    <div className='App'>
      <h1 style={{textAlign:'center'}}>Mustafa's Todolist</h1>
      <TaskInput setTextInput={setTextInput} setFilter={setFilter} currText={textInput} setItems={setItems} items={items}/>
      <div className="todos">
        { 
          items.map((item)=>{
            return <Todo todo={item.text} setItems={setItems} id={item.id} key={item.id}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
