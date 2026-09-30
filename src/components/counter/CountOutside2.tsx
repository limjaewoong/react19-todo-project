import {useCountStore} from "../../store/zustand/countStore.ts";

export default function CountOutside2() {

    const count = useCountStore((state)=> state.count);
    return (
        <>
            <h1>CountOutside: {count}</h1>
        </>
    );
}
