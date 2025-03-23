import React from "react"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"


function App() {

  return (
    <>
      <div>
        <h1>Learn redux</h1>
        <AddTodo/>
        <Todos/>
      </div>
    </>
  )
}

export default App
