import React from 'react';
import OneHark from "./OneHark";
import CharList from "../Interfaces/CharList";

const Stats = (charList: CharList) => {
    let harksName = ["Сила", "Телосложение", "Ловкость", "Интеллект", "Мудрость", "Харизма"]

    return (
        <div>
            <OneHark name={harksName[0]} val={charList.harks.value[0]} setVal={charList.harks.setValue(0)}></OneHark>
        </div>
    );
};

export default Stats;