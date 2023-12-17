import { useContext } from "react";
import { Stack, NativeSelect } from "@mui/material";

import { LangContext } from "../../contexts/LangProvider";

const LangSwitcher = () => {
    const {lang, langs, setLang} = useContext(LangContext);

    const handleSwitch = (e) => {
        setLang(e.target.value);
    };

    return (
        <Stack
            direction='row'
            width='100%'
            spacing={1}
            justifyContent='end'
            alignItems='center'>
            <NativeSelect defaultValue='eng' onChange={handleSwitch}>
                <option value='eng'>{langs[lang].switchEng}</option>
                <option value='ukr'>{langs[lang].switchUkr}</option>
            </NativeSelect>
        </Stack>
    );
};

export default LangSwitcher;
