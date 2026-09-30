import {useEffect, useState} from "react";

function AppUseEffect() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('useEffect 실행')
        return () =>{
            console.log('useEffect 종료')
        }
    },[]);

    useEffect(()=>{
        console.log('count:', count)
    },[count]);


    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>증가</button>
        </div>
    );
}

export default AppUseEffect;