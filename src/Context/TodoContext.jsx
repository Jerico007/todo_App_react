import { useState, useEffect } from "react";
import { createContext } from "react";

export const Todocontext = createContext();

// eslint-disable-next-line react/prop-types
const TodoContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  //useEffect to get data from local storage
  useEffect(() => {
    if (localStorage.getItem("todoList")) {
      setData(JSON.parse(localStorage.getItem("todoList")));
    }
  }, []);

  //useEffect to set data in local storage on change
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(data));
  }, [data]);

  function deleteTask(id) {
    const newData = data.filter((val) => val.id !== Number(id));

    setData(newData);
  }

  function editTask(id) {
    const newData = [...data];
    for (let i = 0; i < newData.length; i++) {
      if (newData[i].id === Number(id)) {
        newData[i].edit = true;
        break;
      }
    }

    setData(newData);
  }

  function saveTask(taskValue, id) {
    const newData = [...data];
    for (let i = 0; i < newData.length; i++) {
      if (newData[i].id === Number(id)) {
        newData[i].edit = false;
        newData[i].task = taskValue;
        break;
      }
    }

    setData(newData);
  }

  function reset(){
    setData([]);
    localStorage.clear();
  }

  return (
    <Todocontext.Provider
      value={{ data, setData, deleteTask, editTask, saveTask ,reset}}
    >
      {children}
    </Todocontext.Provider>
  );
};

export default TodoContextProvider;
