import React from "react";

function BtnReset ({ text  , click }) {
    return (
        <button
            className="btnReset"
            onClick={click}
        >
            {text}
        </button>
    )
};

export default BtnReset;