import './App.css';
import {useState, useRef} from 'react';
import {TaskInput} from "./components/TaskInput";
import {Todo} from "./components/Todo";

function App() {
  const [textInput, setTextInput] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div className='App'>
      <h1 style={{textAlign:'center'}}>Mustafa's Todolist</h1>
      <TaskInput setTextInput={setTextInput} currText={textInput} setItems={setItems} items={items}/>
      <div className="todos">
        { 
          items.map((item)=>{
            return <Todo todo={item.text} key={item.id}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
