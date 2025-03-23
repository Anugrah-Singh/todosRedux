import { createSlice, nanoid } from "@reduxjs/toolkit";
//we are importing createSlice and nanoid(for unique ids)

//now we have to give the initial state of the store

const initialState = {
    todos: [{id : 1, text: "Hello world"}]
}

//now we'll create todoSlice which is a reducer (reducer is a functionality)

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // inside redusers we write properties
        //action is used to make changes in state like add, remove, etc.
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload //payload is an object (it could be anything -> id, name, date, etc.)
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        // updateTodo: (state, action) => {
        //     state.todos = state.todos.map((prevTodo) => (prevTodo.id === action.payload ? ))
        // }
    },
})

//exporting all the individual reducers to use in components 
export const {addTodo, removeTodo} = todoSlice.actions

//store also wants knowledge of all the reducers so we'll export thet as well
export default todoSlice.reducer