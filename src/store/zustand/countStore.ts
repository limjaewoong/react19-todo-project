import { create } from "zustand";
import {createJSONStorage, devtools, persist, subscribeWithSelector} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

type countStore = {
    count: number;
    increment: (amount: number, amount2: number) => void;
    decrement: () => void;
    reset: () => void;
}

export const useCountStore = create<countStore>()(
    devtools(subscribeWithSelector(persist(immer(
        (set)=>({
            count: 0
            ,increment: async (amount:number, amount2:number)=>{
                await new Promise(resolve => setTimeout(resolve, 1000));
                set((state) => {state.count += (amount + amount2)});
            }
            ,decrement: () => set((state)=> {state.count -= 1})
            ,reset: () => set(state=>{state.count = 0})
        }))
        ,{
            name: "count-storage"
            ,storage: createJSONStorage(()=> localStorage)
        }
    )),{enabled: import.meta.env.DEV})
)