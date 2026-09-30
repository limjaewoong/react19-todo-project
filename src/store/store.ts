import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice.ts";
import themeSlice from "./slice/themeSlice.ts";
import todoSlice from "./slice/todoSlice.ts";
import type {TodosProps} from "../types/todo";

const loadFromLocalStorage = ()=>{
    const todos = localStorage.getItem("todos");
    if(todos){
        return {todo: {todos: JSON.parse(todos)}}
    }

}

export const store = configureStore({
    reducer : {
        counter: counterSlice
        ,theme: themeSlice
        ,todo: todoSlice
    }
    ,preloadedState: loadFromLocalStorage()
});

const saveToLocalStorage = (todos : TodosProps[]) =>{
    localStorage.setItem("todos", JSON.stringify(todos));
}

let previousTodos = store.getState().todo.todos;
store.subscribe(()=>{
    const currentTodos = store.getState().todo.todos;
    if(previousTodos !== currentTodos){
        previousTodos = currentTodos;
        console.log(currentTodos);
        saveToLocalStorage(currentTodos);
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;