import {useDispatch} from "react-redux";
import { incrementAsync} from "../../store/slice/counterSlice.ts";
import type {AppDispatch} from "../../store/store.ts";
import {updateTheme} from "../../store/slice/themeSlice.ts";

export default function CountButton() {
    const dispatch = useDispatch<AppDispatch>();
    return (
        <>
            <button onClick={()=> dispatch({type: "counterSlice/decrement"})}>감소</button>
            <button onClick={()=> dispatch({type: "counterSlice/reset"})}>리셋</button>
            <button onClick={()=> dispatch(incrementAsync(4))}>증가</button>
            <button onClick={()=> dispatch(updateTheme({theme: "dark"}))}>테마</button>
        </>
    );
}
