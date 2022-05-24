import React from "react";
import '../stylesheet/Counter.css'

function Counter({ count }) {

    return (
        <div className="counter">
            {count}
        </div>
    );
    
};


export default Counter;