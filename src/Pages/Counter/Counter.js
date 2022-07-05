import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from '../../redux/state/counter';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="rounded-3xl shadow-md w-[600px]">
            <div className="bg-slate-500 rounded-t-3xl py-3 px-1">
                <h1 className="text-4xl font-semibold text-white uppercase">
                    Counter app
                </h1>
            </div>
            <h2 className="text-3xl py-5 pl-5">{count}</h2>
            <div className="space-x-5 pl-5 pb-5">
                <button onClick={() => dispatch(increment())} className="bg-green-500 text-white px-4 py-1 rounded-md">
                    Increase
                </button>
                <button onClick={() => dispatch(decrement())} className="bg-red-500 text-white px-4 py-1 rounded-md">
                    Decrease
                </button>
            </div>
        </div>
    );
};

export default Counter;
