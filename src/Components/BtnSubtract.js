import React from "react";

function BtnSubtract ({ text  , click }) {
    return (
        <button
            className="btnSubs"
            onClick={click}
        >
            {text}
        </button>
    )
};

export default BtnSubtract;