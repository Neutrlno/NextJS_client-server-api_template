'use client'
import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children, dataFromServer }) {
    const [data, setData] = useState(dataFromServer);

    return (
        <Context.Provider value={{ data, setData }}>
            {children}
        </Context.Provider>
    );
};
