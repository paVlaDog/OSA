import React from 'react';

type oneHarkProps = {
    name: string, val: string, setVal: (newVal: string) => void
};

const OneHark = (props: oneHarkProps) => {
    let {name, val, setVal} = props;
    return (
        <div>
            <div>{name}</div>
            <div>{val}</div>
        </div>
    );
};

export default OneHark;