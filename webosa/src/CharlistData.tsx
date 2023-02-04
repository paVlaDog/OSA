import {useState} from "react";
import CharList from "./Interfaces/CharList";

interface ValueBlock {
    value: string[],
    setValue: (index: number) => (newVal: string) => void;
    name: string;
}

class CharlistData {
    private filling = (len: number, startValue: string, str: string) => {
        let array = Array(len).fill(startValue);
        for (let i = 0; i < array.length; i++) {
            if (localStorage.getItem(str + i) !== null) {
                array[i] = localStorage.getItem(str + i);
                console.log(localStorage.getItem(str + i))
            }
        }
        return array;
    }

    private changeStateArray = (state: any, name: string) => (index: number) => (newVal: string) => {
        const newStateValue = state[0].slice(0)
        newStateValue[index] = newVal
        state[1](newStateValue)
        for (let i = 0; i < newStateValue.length; i++) {
            localStorage.setItem(name + i, newStateValue[i]);
        }
    };

    private createStateArray = (name: string, len: number, startValue: string): ValueBlock => {
        const state = useState(this.filling(len, startValue, name));
        return {
            value: state[0],
            setValue: this.changeStateArray(state, name),
            name: name
        }
    }

    list: CharList = {
        charName: this.createStateArray("charName", 1, "Безымянный"),
        harks: this.createStateArray("harks", 6, "0"),
        naviks: this.createStateArray("naviks", 20, "0"),
        vladenia: this.createStateArray("vladenia", 99, "0"),
        things: this.createStateArray("naviks", 20, "0"),
        charClass: this.createStateArray("charClass", 1, ""),
        charRase: this.createStateArray("charRase", 1, ""),
        skills: this.createStateArray("skills", 1, ""),
        spells: this.createStateArray("spells", 1, ""),
        wounds: this.createStateArray("wounds", 1, ""),
        aspects: this.createStateArray("aspects", 1, ""),
    }
}

export default CharlistData