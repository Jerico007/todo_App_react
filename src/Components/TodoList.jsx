import TodoTile from "./TodoTile";
import { Todocontext } from "../Context/TodoContext";
import { useContext } from "react";
const TodoList = () => {
    const {data} = useContext(Todocontext);
    return (
        <div className="TodoList">
              {
                data.length > 0 ? data.map((val)=>(<TodoTile taskDetails={val} key={val.id}/>)) : <h1>No Task Added</h1>
              }
        </div>
    );
}

export default TodoList;
