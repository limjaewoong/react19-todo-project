import {useContext} from "react";
import {TodoContext} from "../../contexts/todo/TodoContext.ts";
import {TodoActionContext} from "../../contexts/todo/TodoContextAction.ts";

export function useTodo() {

    const todoContext = useContext(TodoContext)

    if(!todoContext){
        throw new Error("Todocontext를 찾을 수 없습니다.");
    }
    return todoContext;

}

export function useTodoAction() {
    const todoContext = useContext(TodoActionContext)

    if(!todoContext){
        throw new Error("Todocontext를 찾을 수 없습니다.");
    }
    return todoContext;
}