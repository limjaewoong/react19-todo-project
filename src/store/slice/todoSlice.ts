import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {TodosProps} from "../../types/todo";
import {v4 as uuidv4} from "uuid";

const initialData = {
    todos: [] as TodosProps[]
}


const todoSlice = createSlice({
    name: "todoSlice"
    ,initialState : initialData
    ,reducers: {
        addTodo: (state, action : PayloadAction<TodosProps["text"]>) => {
            state.todos.push({id: uuidv4(), text: action.payload, completed: false, updateMode: false});
        },
        completeTodo: (state, action : PayloadAction<TodosProps["id"]>) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        changeMode: (state, action : PayloadAction<TodosProps["id"]>) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.updateMode = !todo.updateMode;
            }
        },
        deleteTodo: (state, action : PayloadAction<TodosProps["id"]>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        updateTodo: (state, action : PayloadAction<{id: string, text: string}>) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text;
            }
        }
    }
})

export default todoSlice.reducer;
export const {addTodo, completeTodo, deleteTodo, updateTodo, changeMode} = todoSlice.actions;