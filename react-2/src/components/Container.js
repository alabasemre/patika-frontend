import { useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import List from "./List";

const defaultTask = [{ task: "Complete Patika", complete: false }]

function Container() {
  const [tasks, setTask] = useState(defaultTask);
  const [taskCount, setTaskCount] = useState(1);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>To Do List</h1>
        <Form addTask={setTask} tasks={tasks} setTaskCount={setTaskCount} taskCount={taskCount}></Form>
        <List tasks={tasks} setTask={setTask} setTaskCount={setTaskCount} taskCount={taskCount}></List>
        <Footer taskCount={taskCount}></Footer>
      </header>
    </section>
  )
}

export default Container;