import {createContext} from "react";
import type {todoAction} from "../../types/todo";


export const TodoActionContext= createContext<todoAction|null>(null);