import {useCountStore} from "../../store/zustand/countStore.ts";

export default function CountDisplay2() {
    const count = useCountStore(state => state.count);
    return (
        <>
            <h1>Count: {count}</h1>
            <h1>Theme: </h1>
        </>
    );
}
