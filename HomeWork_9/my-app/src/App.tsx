import { useState, useContext } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import { Alert } from "@mui/material";

import { LangContext } from "./contexts/LangProvider";
import LangSwitcher from "./components/LangSwitcher/LangSwitcher";

function App() {
    const [isAlertShown, setAlertShown] = useState(false);
    const [alertText, setAlertText] = useState("");

    const lang = useContext(LangContext);
    const langs = lang.langs;
    const currLang = lang.lang;

    const [counterMin, counterMax] = [-3, 3];

    return (
        <>
            <LangSwitcher></LangSwitcher>
            <div className='counterBlock'>
                <Counter
                    counterMin={counterMin}
                    counterMax={counterMax}
                    callbacksForAlert={[setAlertShown, setAlertText]}
                />
                {isAlertShown ? (
                    <Alert className='alert' severity='info'>
                        {`${langs[currLang].alertPart} ${alertText}!`}
                    </Alert>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

export default App;
