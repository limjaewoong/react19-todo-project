import {useReducer} from 'react';
import { CounterCtx } from './CounterContext';

function CounterProvider({children} : {children: React.ReactNode}) {
    /*    const increment = () =>{
        setCount(count => count+1);
    }
    const decrement = () =>{
        setCount(count => count-1);
    }
    const reset = () =>{
        setCount(0);
    }*/

    const countReducer = (count : number, action : {type: string}) =>{
        switch(action.type){
            case 'INCREMENT' : return count+1;
            case 'DECREMENT' : return count-1;
            case 'RESET' : return 0;
            default : return count;
        }
    }

    const [count, dispatch] = useReducer(countReducer,0);
    return (
        <CounterCtx.Provider value={{count, dispatch}}>
            {children}
        </CounterCtx.Provider>
    );
}

export default CounterProvider;