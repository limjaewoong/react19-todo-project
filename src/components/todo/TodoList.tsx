import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";
import type { TodosProps} from "../../types/todo";
// import {useTodo} from "../../hooks/todo/useTodo.tsx";
// import {useSelector} from "react-redux";
// import type {RootState} from "../../store/store.ts";
import {todoStore} from "../../store/zustand/todoStore.ts";

export default function TodoList() {

    // const todos1 = useTodo();
    // const todos = useSelector((state: RootState) => state.todo.todos);
    const todos = todoStore(state=> state.todos);

    return (
        <>
            <ul className="todo__list">
                {
                    todos?.length === 0 ?
                        <TodoListEmpty/>
                        :
                        todos.map((todo: TodosProps) =>
                            <TodoListItem
                                todo={todo}
                                key={todo.id}
                            />)
                }
            </ul>
        </>
    );
}
