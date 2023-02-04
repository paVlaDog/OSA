import './SimpleInput.css';
import React from "react";

interface ValueBlock {
    value: string[],
    setValue: (index: number) => (newVal: string) => void;
    name: string;
}

function SimpleInput({...props}) {
    return (
        <input {...props} className={"simple-input"}/>
    );
}

export default SimpleInput;