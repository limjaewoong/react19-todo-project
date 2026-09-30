import * as React from "react";

type TodosProps = {
    id: string;
    text: string;
    completed: boolean;
    updateMode : boolean;
}

interface todoAction {
    addTodo : (text: string) => void;
    completeTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
    updateTodo : (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    changeMode: (id: string) => void;
}

type todoTotalType = {
    todos : TodosProps[]
    addTodo : (text: string) => void;
    completeTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
    updateTodo : (e: string, id: string) => void;
    changeMode: (id: string) => void;
}