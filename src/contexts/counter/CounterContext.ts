import { createContext } from "react";

type counterType = {
    count: number;
    dispatch: React.ActionDispatch<[action: { type: string; }]>;
}

export const CounterCtx = createContext<counterType|null>(null);
