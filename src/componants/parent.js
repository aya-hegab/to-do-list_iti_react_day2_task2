import React from "react";
import { useState } from "react";
import Child1 from "./child1";
import Child2 from "./child2";

function Parent() {
  const [msg, setMsge] = useState("");
  const [id, setId] = useState(0);
  const [mark] = useState(false);
  const [comp] = useState(false);
  const [tasklist, setTasklist] = useState([]);

  const tasktxt = function (e) {
    setMsge(e.target.value);
  };

  const addTask = function (e) {
    e.preventDefault();
    setId(id + 1);
    setTasklist([...tasklist, { msg, id, mark, comp }]);
  };

  const deleteTask = function (id) {
    const newList = tasklist.filter((task) => task.id !== id);
    setTasklist(newList);
  };

  const markCompeleted = function (compid) {
    const newList2 = tasklist.map((task) => {
      return task.id === compid
        ? {
            id: task.id,
            msg: task.msg,
            mark: task.mark ? false : true,
            comp: task.mark ? false : true,
          }
        : { id: task.id, msg: task.msg, mark: task.mark, comp: task.mark };
    });
    setTasklist(newList2);
  };

  return (
    <div className="container">
      <Child1 tasktxtFn={tasktxt} addTaskFn={addTask} />
      <Child2
        tasklistP={tasklist}
        deleteTaskFn={deleteTask}
        markCompeletedFn={markCompeleted}
      />
    </div>

    // <div className="container">
    //   <div className="child1">
    //     <form>
    //       <h1>To-Do-App</h1>
    //       <label>Add new To-Do</label>
    //       <input
    //         onChange={(e) => tasktxt(e)}
    //         type="text"
    //         id="to-do"
    //         placeholder="Enter new task"
    //       />
    //       <button onClick={(e) => addTask(e)}>Add</button>
    //     </form>
    //   </div>
    //   <div className="child2">
    //     <h2>Let's get some work done</h2>
    //     {tasklist.map((task) => {
    //       return (
    //         <div className="tasks" key={task.id}>
    //           <button onClick={() => markCompeleted(task.id)}>
    //             {task.mark ? "uncompelete" : "compelete"}
    //           </button>
    //           <p className={task.mark && "marked"}>{task.msg}</p>
    //           <button onClick={() => deleteTask(task.id)}>delete</button>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
}

export default Parent;
