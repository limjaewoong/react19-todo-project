import CountOutside2 from "./CountOutside2.tsx";
import {useCountStore} from "../../store/zustand/countStore.ts";


export default function CountButton2() {

    const increment = useCountStore(state => state.increment);
    const decrement = useCountStore(state => state.decrement);
    const reset = useCountStore(state => state.reset);

    return (
        <>
            <button onClick={decrement}>감소</button>
            <button onClick={reset}>리셋</button>
            <button onClick={()=>increment(3,1)}>증가</button>
            <button >테마</button>
            <CountOutside2/>
        </>

    );
}
