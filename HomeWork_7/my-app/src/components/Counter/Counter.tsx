import { useState, useContext, useEffect } from "react";
import styles from "./Counter.module.scss";
import { Button } from "@mui/material";

import { LangContext } from "../../contexts/LangProvider";
import { ReducerContext } from "../../contexts/ReducerProvider";

interface ICounterProps {
    counterMin: number;
    counterMax: number;
    callbacksForAlert: [
        (alertFlag: boolean) => void,
        (alertText: string) => void
    ];
}

const Counter = ({
    counterMin,
    counterMax,
    callbacksForAlert,
}: ICounterProps) => {
    const [isSubDisabled, setIsSubDisabled] = useState(false);
    const [isResDisabled, setIsResDisabled] = useState(true);
    const [isAddDisabled, setIsAddDisabled] = useState(false);
    const [setAlertShown, setAlertText] = callbacksForAlert;
    const [counterClass, setCounterClass] = useState("");
    const [isReadyNextStep, setReadyNextStep] = useState(true);

    const { lang, langs } = useContext(LangContext);
    const { state, onIncrement, onDecrement, onReset } = useContext(ReducerContext);

    const timer = 300;

    const handleSubsClick = () => {
        if (isReadyNextStep) {
            handleSlides("left", onDecrement);
            setReadyNextStepHandler();
        }
    };

    const handleResetClick = () => {
        if (isReadyNextStep) {
            handleSlides(state.counter > 0 ? "left" : "right", onReset);
            setReadyNextStepHandler();
        }
    };

    const handlePlusClick = () => {
        if (isReadyNextStep) {
            handleSlides("right", onIncrement);
            setReadyNextStepHandler();
        }
    };

    const setReadyNextStepHandler = () => {
        setReadyNextStep(false);
        setTimeout(() => {
            setReadyNextStep(true);
        }, timer * 2);
    };

    const handleSlides = (direction: string, callback: () => void) => {
        let firstStep: string,
            secondStep: string,
            thirdStep: string;

        switch (direction) {
            case "left":
                [firstStep, secondStep, thirdStep] = [
                    styles.slideToTheRight,
                    styles.resetPositionToTheLeft,
                    styles.slideFromTheLeft,
                ];
                break;
            case "right":
                [firstStep, secondStep, thirdStep] = [
                    styles.slideToTheLeft,
                    styles.resetPositionToTheRight,
                    styles.slideFromTheRight,
                ];
                break;
            default:
                [firstStep, secondStep, thirdStep] = ["", "", "", ""];
        }
        setCounterClass(styles.setTransitionStart);
        setCounterClass(firstStep);
        const resetTimer = setTimeout(async () => {
            setCounterClass(secondStep);
            clearTimeout(resetTimer);
            callback();
        }, timer);

        const slideInTimer = setTimeout(() => {
            setCounterClass(thirdStep);
            clearTimeout(slideInTimer);
        }, timer + 100);
    };

    const setDisabledButtons = (newCounter: number) => {
        const isLowest = newCounter < counterMin + 1;
        const isHighest = newCounter > counterMax - 1;
        setIsSubDisabled(isLowest);
        setIsResDisabled(newCounter === 0);
        setIsAddDisabled(isHighest);

        const alertText = `${isLowest ? counterMin : counterMax}`;
        setAlertText(alertText);

        const alertFlag = isLowest || isHighest;
        setAlertShown(alertFlag);
    };

    useEffect(() => {
        setDisabledButtons(state.counter);
    }, [state.counter]);

    return (
        <div className={styles.mainBlock}>
            <p className={[styles.counter, counterClass].join(" ")}>
                {state.counter}
            </p>
            <div className={styles.buttonRow}>
                <Button
                    variant='contained'
                    size='large'
                    disabled={isSubDisabled}
                    onClick={handleSubsClick}>
                    {langs[lang].subButton}
                </Button>
                <Button
                    variant='contained'
                    size='large'
                    disabled={isResDisabled}
                    onClick={handleResetClick}>
                    {langs[lang].resetButton}
                </Button>
                <Button
                    variant='contained'
                    size='large'
                    disabled={isAddDisabled}
                    onClick={handlePlusClick}>
                    {langs[lang].addButton}
                </Button>
            </div>
        </div>
    );
};

export default Counter;
