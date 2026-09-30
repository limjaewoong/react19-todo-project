import {TodoContext} from "./TodoContext.ts";
import {useCallback, useEffect, useState} from "react";
import type {TodosProps} from "../../types/todo";
import {v4 as uuidv4} from "uuid";
import {TodoActionContext} from "./TodoContextAction.ts";

function TodoContextProvider({children}: { children: React.ReactNode }) {

    const [todos, setTodos] = useState<TodosProps[]>(JSON.parse(localStorage.getItem('todos')!) || []);

    const addTodo = (text: string) => {
        const newTodo = {
            id: uuidv4()
            , text: text
            , completed: false
            , updateMode: false

        }
        setTodos((prevState) => [...prevState, newTodo]);
        //console.log('todos: ',todos);
    }

    const completeTodo = useCallback((id: string) => {

        console.log('id: ', id);
        // 2. map을 사용해 새로운 배열 생성
        setTodos(todos.map(todo =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ));

    }, [todos]);

    const changeMode = useCallback((id: string) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id ? {...todo, updateMode: !todo.updateMode} : todo
            })
        )
    }, [todos])

    const deleteTodo = useCallback((id: string) => {
        setTodos(
            todos.filter(todo => todo.id !== id)
        );
    }, [todos])

    const updateTodo = useCallback((e: React.ChangeEvent<HTMLInputElement>, id: string) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id ? {...todo, text: e.currentTarget.value} : todo
            })
        )
    }, [todos])

    useEffect(() => {
        //console.log('useEffect')
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    return (
        <>
            <TodoActionContext.Provider value={{addTodo, completeTodo, deleteTodo, updateTodo, changeMode}}>
                <TodoContext.Provider value={todos}>
                    {children}
                </TodoContext.Provider>
            </TodoActionContext.Provider>
        </>
    );
}

export default TodoContextProvider;