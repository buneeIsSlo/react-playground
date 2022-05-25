import "./style.css";
import { useReducer } from "react";

export const ACTIONS = {
    ADD_DIGIT: "add-digit",
    CHOOSE_OPERATION: "choose-operation",
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    EVALUATE: "evaluate",
}

function App() {
    function reducer(state, { type, payload }) {

    }

    const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {});
    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">{"temp"}</div>
                <div className="current-operand">{"125"}</div>
            </div>
            <button className="span-two">AC</button>
            <button>DEL</button>
            <button>÷</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>*</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>-</button>
            <button>.</button>
            <button>0</button>
            <button className="span-two">=</button>
        </div>
    )
}

export default App;