import { Todocontext } from "../Context/TodoContext";
import { useContext } from "react";
import { useState } from "react";
const TodoForm = () => {
    const {data,setData} = useContext(Todocontext);

    const [task,setTask] = useState("");
   
    const [taskId, setId] = useState(1);
    //Function to handel submit
    function handelSubmit(e)
    {
        e.preventDefault();

        if(task !== "")
        {
            setData([...data,{id:taskId,task:task,edit:false}]);
            setId(taskId+1);
            setTask("");
        }
    }

    return (
        <div className="TodoForm">
               <h1>Todo App</h1>
            <form onSubmit={handelSubmit}>
                <input value={task} type="text" onInput={(e)=>(setTask(e.target.value))} placeholder="Enter task.."/>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default TodoForm;
