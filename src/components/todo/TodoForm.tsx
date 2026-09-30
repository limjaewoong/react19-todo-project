import {useRef} from "react";
// import {useTodoAction} from "../../hooks/todo/useTodo.tsx";
// import {useDispatch} from "react-redux";
// import type {AppDispatch} from "../../store/store.ts";
// import {addTodo} from "../../store/slice/todoSlice.ts";
import {todoStore} from "../../store/zustand/todoStore.ts";

function TodoForm() {

    // const {addTodo} = useTodoAction();
    // const dispatch = useDispatch<AppDispatch>();
    const addTodo = todoStore(state=> state.addTodo);

    const inputRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(inputRef.current){
            const text = inputRef.current.value;
            if (!text.trim()) {
                return;
            }
            addTodo(text);
            inputRef.current.value = '';
        }

    }
    return (
        <form className="todo__form" onSubmit={handleSubmit}>
            <div className="todo__editor">
                <input
                    type="text"
                    name="todo-text"
                    className="todo__input"
                    placeholder="Enter Todo List"
                    ref={inputRef}
                    required
                />
                <button className="todo__button" type="submit">Add</button>
            </div>
        </form>
    );
}

export default TodoForm;