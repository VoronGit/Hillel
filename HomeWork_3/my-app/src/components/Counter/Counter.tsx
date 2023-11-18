import { useState, useEffect } from 'react';
import styles from './Counter.module.scss';
import { Button } from '@mui/material';

interface ICounterProps {
    counterMin: number,
    counterStart: number,
    counterMax: number,
    callbacksForAlert: [(alertFlag: boolean) => void, (alertText: string) => void]
}

const Counter = ({ counterMin, counterStart, counterMax, callbacksForAlert }: ICounterProps) => {
    const [counter, setCounter] = useState(counterStart);
    const [isSubDisabled, setIsSubDisabled] = useState(false);
    const [isAddDisabled, setIsAddDisabled] = useState(false);
    const [setAlertShown, setAlertText] = callbacksForAlert;
    const [counterClass, setCounterClass] = useState('');
    const [isReadyNextStep, setReadyNextStep] = useState(true);


    const timer = 300;


    const handleSubsClick = () => {
        if (isReadyNextStep) {
            handleSlides('left');
            setReadyNextStepHandler();
        }
    };

    const handlePlusClick = () => {
        if (isReadyNextStep) {
            handleSlides('right');
            setReadyNextStepHandler();
        }
    };

    const setReadyNextStepHandler = () => {
        setReadyNextStep(false);
        setTimeout(() => {setReadyNextStep(true);}, timer * 2);
    };

    const handleSlides = (direction: string) => {
        let firstStep: string, secondStep: string, thirdStep: string, number: number;

        switch (direction) {
            case 'left':
                [firstStep, secondStep, thirdStep] = [styles.slideToTheRight, styles.resetPositionToTheLeft, styles.slideFromTheLeft];
                number = -1;
                break;
            case 'right':
                [firstStep, secondStep, thirdStep] = [styles.slideToTheLeft, styles.resetPositionToTheRight, styles.slideFromTheRight];
                number = 1;
                break;
            default:
                [firstStep, secondStep, thirdStep] = ['', '', '', ''];
        }
        setCounterClass(styles.setTransitionStart);
        setCounterClass(firstStep);
        const resetTimer = setTimeout(async () => {
            setCounterClass(secondStep);
            clearTimeout(resetTimer);
            setCounter(counter + number);
            setDisabledButtons(counter + number);
        }, timer);

        const slideInTimer = setTimeout(() => {
            setCounterClass(thirdStep);
            clearTimeout(slideInTimer);
        }, timer+100);
    }

    const setDisabledButtons = (newCounter: number) => {
        const isLowest = newCounter < counterMin + 1;
        const isHighest = newCounter > counterMax - 1;
        setIsSubDisabled(isLowest);
        setIsAddDisabled(isHighest);

        const alertFlag = isLowest || isHighest;
        setAlertShown(alertFlag);

        const alertText = `The limit is ${isLowest ? counterMin : counterMax}!`;
        setAlertText(alertText);
    };

    return (
        <div className={styles.mainBlock}>
            <p className={[styles.counter, counterClass].join(' ')}>{counter}</p>
            <div className={styles.buttonRow}>
                <Button
                    variant="contained"
                    size="large"
                    disabled={isSubDisabled}
                    onClick={handleSubsClick}
                >
                    Sub
                </Button>
                <Button
                    variant="contained"
                    size="large"
                    disabled={isAddDisabled}
                    onClick={handlePlusClick}
                >
                    Add
                </Button>
            </div>
        </div>
    );
};

export default Counter;