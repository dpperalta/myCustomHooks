// import { useState } from "react";

// export const useCouter = (initialState = 10) => {
//     const [state, setState] = useState(initialState);

//     const increment = ( factor = 1 ) => {
//         setState(state + factor);
//     }

//     const decrement = ( factor = 1 ) => {
//         setState(state - factor);
//     }

//     const reset = () => {
//         setState(initialState);
//     }

//     return {
//         state,
//         increment,
//         decrement,
//         reset
//     }
// }

import { useState } from "react";

export const useCouter = (initialState = 1) => {
    const [counter, setCounter] = useState(initialState);

    const increment = ( ) => {
        setCounter(counter + 1);
    }

    const decrement = ( ) => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
