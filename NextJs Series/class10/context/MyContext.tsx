'use client'

import { createContext, useState, Dispatch, SetStateAction } from "react";

// Define the shape of the context state
interface MyContextType {
    nameState: string;
    setNameState: Dispatch<SetStateAction<string>>;
}

export const myContext = createContext<MyContextType | undefined>(undefined);

export function ContextProvider({ children }: any) {
    const [nameState, setNameState] = useState("Awais Akhter")

    return (
        <myContext.Provider value={{ nameState, setNameState }}>
            {children}
        </myContext.Provider>
    )
}