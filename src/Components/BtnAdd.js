import React from "react";
import '../stylesheet/Btn.css';

function BtnAdd ({ text  , click }) {
    return (
        <button
            className="BtnAdd"
            onClick={click}
        >
            {text}
        </button>
    )
};

export default BtnAdd;