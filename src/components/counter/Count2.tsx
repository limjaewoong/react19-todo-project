import CountGroup2 from "./CountGroup2";
import {useEffect} from "react";
import {useCountStore} from "../../store/zustand/countStore.ts";

export default function Count() {

    const callbackFunc = (newCount: number) =>{
        console.log('newCount:', newCount);
    }

    useEffect(()=>{

        useCountStore.subscribe(state => state.count , (newCount)=> callbackFunc(newCount))
        return()=>{
            console.log("unmount");
        }
    },[])


    return (
        <>
            <CountGroup2/>
        </>
    );
}
