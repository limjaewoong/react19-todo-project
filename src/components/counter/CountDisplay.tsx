import {useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";

export default function CountDisplay() {
    const count = useSelector((state: RootState) => state.counter.count);
    const theme = useSelector((state: RootState)=>state.theme.theme);
    return (
        <>
            <h1>Count: {count}</h1>
            <h1>Theme: {theme}</h1>
        </>
    );
}
