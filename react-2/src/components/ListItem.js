import { useState } from "react";

function ListItem({ task, tasksList, setTask, id, setTaskCount, taskCount }) {

  const [checked, setCheck] = useState(task.complete)
  const check = (e) => {
    setCheck(!checked);
  }

  const destroy = () => {
    console.log(id);
    setTaskCount(taskCount - 1)
    let newTasks = tasksList.splice(id - 1, id);
    console.log(newTasks);
    setTask(newTasks);
  }

  return (

    <li className={checked ? "completed" : null}>
      <div className="view">
        <input type="checkbox" className="toggle" onChange={check} defaultChecked={checked} />
        <label>{task.task}</label>
        <button className="destroy" onClick={destroy}></button>
      </div>
    </li>
  )
}

export default ListItem;