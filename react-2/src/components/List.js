import ListItem from "./ListItem";

function List({ tasks, setTask, setTaskCount, taskCount }) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark All As Complete</label>
      <ul className="todo-list">
        {
          tasks.map((item, index) => {
            return (<ListItem key={index} id={index}
              task={item} setTask={setTask} tasksList={tasks} setTaskCount={setTaskCount} taskCount={taskCount}></ListItem>)
          })
        }
      </ul>
    </section>
  )
}

export default List;