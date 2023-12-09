import Actions from './actions';

interface IActionBundle {
    increment: () => void,
    decrement: () => void,
    reset: () => void
}

const ActionBundle: IActionBundle = {
    "increment": () => ({
        type: Actions.INCREMENT
    }),
    "decrement": () => ({
        type: Actions.DECREMENT
    }),
    "reset": () => ({
        type: Actions.RESET
    }),
}

export default ActionBundle;