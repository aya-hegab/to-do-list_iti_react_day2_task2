function Child2(props) {
  return (
    <div className="child2">
      <h2>Let's get some work done</h2>
      {props.tasklistP.map((task) => {
        return (
          <div className="tasks" key={task.id}>
            <button onClick={() => props.markCompeletedFn(task.id)}>
              {task.mark ? "uncompelete" : "compelete"}
            </button>
            <p className={task.mark && "marked"}>{task.msg}</p>
            <button onClick={() => props.deleteTaskFn(task.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Child2;
