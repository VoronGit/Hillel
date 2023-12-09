import { createContext, useState } from "react";

import { langs } from "../langSetup";

export const LangContext = createContext(null);
LangContext.displayName = "LangContext";

type LangProviderProps = {
    children: string | JSX.Element | JSX.Element[]
}

const LangProvider = ({ children } : LangProviderProps) => {
    const [lang, setLang] = useState("eng");

    return (
        <LangContext.Provider value={{ lang, langs, setLang }}>
            {children}
        </LangContext.Provider>
    );
};

export default LangProvider;
