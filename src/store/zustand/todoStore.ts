import {create} from "zustand";
import type {TodosProps, todoTotalType} from "../../types/todo";
import {v4 as uuidv4} from "uuid";
import {immer} from "zustand/middleware/immer";
import {createJSONStorage, devtools, persist, subscribeWithSelector} from "zustand/middleware";


const initialData = {
    todos: [] as TodosProps[]
}

export const todoStore = create<todoTotalType>()(
    devtools(
        subscribeWithSelector(
            persist(
                immer(
                    (set) => ({
                    ...initialData
                    ,addTodo: (text: string) => set((state)=>{
                        state.todos.push({id: uuidv4(), text: text, completed: false, updateMode: false})
                    })
                    ,completeTodo: (id: string) => set((state)=>{
                        const todo = state.todos.find(todo => todo.id === id);
                        if (todo) {
                            todo.completed = !todo.completed;
                        }
                    })
                    ,changeMode: (id: string) => set((state)=>{
                        const todo = state.todos.find(todo => todo.id === id);
                        if (todo) {
                            todo.updateMode = !todo.updateMode;
                        }
                    })
                    ,deleteTodo: (id: string) => set((state) =>{
                        state.todos = state.todos.filter(todo => todo.id !== id)
                    })
                    ,updateTodo: (e: string, id: string) => set(state => {
                        const todo = state.todos.find(todo => todo.id === id);
                        if (todo) {
                            todo.text = e;
                        }
                    })
                }))
            ,{name: "todo-storage", storage: createJSONStorage(()=> localStorage)}
        )
    ),{enabled: import.meta.env.DEV})
);