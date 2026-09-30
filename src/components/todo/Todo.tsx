import TodoHeader from "./TodoHeader.tsx";
import TodoForm from "./TodoForm.tsx";
import TodoList from "./TodoList.tsx";

export default function Todo() {


    return (
        <>
            <div className="todo">
                <TodoHeader title={"Todo List"} message={"Please enter your details to continue."}/>
                <TodoForm/>
                <TodoList/>
            </div>
        </>
    );
}
