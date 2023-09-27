import React from "react";
import { increment, decrement, reset } from "../redux/actions/counterActions";
import { useSelector, useDispatch } from "react-redux"

const CounterApp = () => {

    const count = useSelector(state=>state.count);

    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increment())}>increase</button>
            <button onClick={()=>dispatch(decrement())}>decrease</button>
            <button onClick={()=>dispatch(reset())}>reset</button>
        </div>
    )

}

export default CounterApp;