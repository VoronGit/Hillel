import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import LangProvider from "./contexts/LangProvider";
import ReducerProvider from "./contexts/ReducerProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ReducerProvider>
            <LangProvider>
                <App />
            </LangProvider>
        </ReducerProvider>
    </React.StrictMode>
);
