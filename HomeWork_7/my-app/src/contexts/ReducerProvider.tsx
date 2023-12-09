import { Reducer, createContext, useReducer, useState } from "react";
import Actions from '../reducer/actions';
import ActionBundle from "../reducer/actionCreators";

export const ReducerContext = createContext(null);
ReducerContext.displayName = "ReducerContext";

type ReducerProviderProps = {
    children: string | JSX.Element | JSX.Element[]
}

const ReducerProvider = ({ children }: ReducerProviderProps) => {
    const initialState = {
        counter: 0,
    };

    const reducer = (store, action) => {
        switch (action.type) {
            case Actions.INCREMENT:
                return {
                    ...store,
                    counter: store.counter + 1,
                };
            case Actions.DECREMENT:
                return {
                    ...store,
                    counter: store.counter - 1,
                };
            case Actions.RESET:
                return {
                    ...store,
                    counter: 0,
                };
            default:
                return store;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const increaseCounter = () => {
        dispatch(ActionBundle.increment());
    };

    const decreaseCounter = () => {
        dispatch(ActionBundle.decrement());
    };

    const resetCounter = () => {
        dispatch(ActionBundle.reset());
    };

    const providedValue = {
        state,
        onIncrement: increaseCounter,
        onDecrement: decreaseCounter,
        onReset: resetCounter,
    };

    return (
        <ReducerContext.Provider value={providedValue}>
            {children}
        </ReducerContext.Provider>
    );
};

export default ReducerProvider;
