import { Todocontext } from "../Context/TodoContext";
import { useContext } from "react";
import { useState ,useEffect} from "react";
const TodoForm = () => {
    const {data,setData} = useContext(Todocontext);

    const [task,setTask] = useState("");
   
    const [taskId, setId] = useState(1);
    

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem("todoList")).length > 0)
        {
            const list = JSON.parse(localStorage.getItem("todoList"));

            const id = list[list.length-1].id;
            setId(id+1);
        }
    },[])
    
 

    //Function to handel submit
    function handelSubmit(e)
    {
        e.preventDefault();

        if(task !== "" )
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
