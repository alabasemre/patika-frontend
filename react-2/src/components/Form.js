import { useState, useEffect } from 'react'

function Form({ addTask, tasks, taskCount, setTaskCount }) {
  const [text, setText] = useState("")

  useEffect(() => {
    setText("");
  }, [tasks]);

  const inputChange = (e) => {
    setText(e.target.value);
  }

  const submitForm = (e) => {
    e.preventDefault();
    addTask([...tasks, { task: text, complete: false }]);
    setTaskCount(taskCount + 1);
  }

  return (
    <form onSubmit={submitForm}>
      <input value={text} placeholder="Give me a task" className="new-todo" onChange={inputChange} />
    </form>
  )

}

export default Form;