import {createContext} from "react";
import type {TodosProps} from "../../types/todo";

export const TodoContext= createContext<TodosProps[]|null>(null);