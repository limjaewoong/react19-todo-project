import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";
import Input from "./html/Input.tsx";
import * as React from "react";
// import {useTodoAction} from "../../hooks/todo/useTodo.tsx";
import type {TodosProps} from "../../types/todo";
// import {useDispatch} from "react-redux";
// import type {AppDispatch} from "../../store/store.ts";
// import {changeMode, completeTodo, deleteTodo, updateTodo} from "../../store/slice/todoSlice.ts";
import {todoStore} from "../../store/zustand/todoStore.ts";

export default React.memo(function TodoListItem({todo} : {todo: TodosProps}) {

    // const {completeTodo, deleteTodo, updateTodo, changeMode} = useTodoAction();
    // const dispatch = useDispatch<AppDispatch>();
    const completeTodo = todoStore(state=> state.completeTodo);
    const updateTodo = todoStore(state=> state.updateTodo);
    const changeMode = todoStore(state=> state.changeMode);
    const deleteTodo = todoStore(state=> state.deleteTodo);

    return (
            <li className={`todo__item ${todo.completed && "todo__item--complete"}`}>
                {
                    !todo.updateMode ?
                        <Checkbox
                            parentClassName="todo__checkbox-group"
                            type="checkbox"
                            className="todo__checkbox"
                            checked={todo.completed}
                            onChange={() => completeTodo(todo.id)}
                        >
                            {todo.text}
                        </Checkbox>
                        :
                        <Input type="text" className="todo__modify-input"
                            value={todo.text}
                            onChange={(e) => updateTodo(e.currentTarget.value, todo.id)}
                        />

                }
                <div className="todo__button-group">
                    <Button className="todo__action-button" onClick={() => changeMode(todo.id)}>
                        <SvgPencil />
                    </Button>
                    <Button className="todo__action-button" onClick={() => deleteTodo(todo.id)}>
                        <SvgClose />
                    </Button>
                </div>

            </li>
    );
})
