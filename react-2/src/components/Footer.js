
function Footer({taskCount}) {
  
  return(
  <footer className="footer">
    <span className="todo-count">
      <strong>{taskCount} </strong>
      items left
    </span>
  </footer>
  )
}

export default Footer;