import { useState } from "react";
import { createContext } from "react";

export const Todocontext = createContext();


// eslint-disable-next-line react/prop-types
const TodoContextProvider = ({children})=>{
    const [data,setData] = useState([]);
    console.log(data);

    function deleteTask(id)
    {
      const newData =  data.filter((val)=>(val.id !== Number(id)));

      setData(newData);
    }

    function editTask(id)
    {
        const newData = [...data];
       for(let i = 0 ; i < newData.length ;i++)
       {
        if(newData[i].id === Number(id))
        {
            newData[i].edit = true;
            break;
        }
       }

        setData(newData);
    }

    function saveTask(taskValue , id)
    {
        const newData = [...data];
        for(let i = 0 ; i < newData.length ;i++)
        {
         if(newData[i].id === Number(id))
         {
             newData[i].edit = false;
             newData[i].task = taskValue;
             break;
         }
        }
        
        setData(newData);
    }

    return (
        <Todocontext.Provider value={{data,setData , deleteTask , editTask,saveTask}}>{children}</Todocontext.Provider>
    )
}

export default TodoContextProvider;