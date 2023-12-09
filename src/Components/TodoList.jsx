import TodoTile from "./TodoTile";
import { Todocontext } from "../Context/TodoContext";
import { useContext } from "react";
const TodoList = () => {
    const {data,reset} = useContext(Todocontext);
    return (
        <>
        
        <div className="Button-reset">
        {
            data.length > 0 ? <button onClick={reset}>Reset</button>:""
        }
        </div>
        
        <div className="TodoList">
              {
                data.length > 0 ? data.map((val)=>(<TodoTile taskDetails={val} key={val.id}/>)) : <h1>No Task Added</h1>
              }
        </div>
        </>
    );
}

export default TodoList;
