import React from "react";
// import { useState } from "react";

function Child1(props) {
  return (
    <div className="child1">
      <form>
        <h1>To-Do-App</h1>
        <label>Add new To-Do</label>
        <input
          onChange={(e) => props.tasktxtFn(e)}
          type="text"
          id="to-do"
          placeholder="Enter new task"
        />
        <button onClick={(e) => props.addTaskFn(e)}>Add</button>
      </form>
    </div>
  );
}

export default Child1;
