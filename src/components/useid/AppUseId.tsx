import Checkbox from "../todo/html/Checkbox.tsx";

function AppUseId() {

    return (
        <div>
            <Checkbox
                parentClassName="todo__checkbox-group"
                type="checkbox"
                className="todo__checkbox"
            >사과</Checkbox>
            <Checkbox
                parentClassName="todo__checkbox-group"
                type="checkbox"
                className="todo__checkbox"
            >바나나</Checkbox>
        </div>
    );
}

export default AppUseId;