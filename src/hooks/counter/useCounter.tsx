import {useContext} from 'react';
import {CounterCtx} from "../../contexts/counter/CounterContext.ts";

function UseCounter() {

    const context = useContext(CounterCtx);
    if(!context) throw new Error("useCounter는 CounterProvider 안에서만 사용가능합니다.");
    return context;
}

export default UseCounter;