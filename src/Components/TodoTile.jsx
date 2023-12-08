
import { Todocontext } from "../Context/TodoContext";
import { useContext, useState } from "react";
// eslint-disable-next-line react/prop-types
const TodoTile = ({taskDetails}) => {
    const {deleteTask,editTask,saveTask} = useContext(Todocontext);

    const [newTask,setnewTask] = useState("");


    function handelSave(e){

        if(newTask !== "")
        {
            saveTask(newTask,e.target.id);
            setnewTask("");

        }
    }

    return (
        <div className="TodoTile" >
            <p>ID : {taskDetails.id}</p>
            {
                taskDetails.edit ? <input type="text" value={newTask} onInput={(e)=>(setnewTask(e.target.value))}/> : <p>Task : {taskDetails.task}</p>
            }
            <div className="Button-container">
            {
                taskDetails.edit ?  <button id={taskDetails.id} onClick={handelSave}> Save</button> : <button id={taskDetails.id} onClick={(e)=>(editTask(e.target.id))}>Edit</button>
            }  
            <button id={taskDetails.id} onClick={(e)=>(deleteTask(e.target.id))} >Delete</button>
            </div>
          
        </div>
    );
}

export default TodoTile;
