import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import { doc, getFirestore, getDoc, DocumentData, DocumentSnapshot}  from 'firebase/firestore'

import app from './fireapp'
import CharlistData from "./CharlistData";
import firebase from "firebase/compat";
import SimpleInput from "./UI/SimpleInput";
import Stats from "./Components/Stats";

// const store = getFirestore(app);
// const goshaRef = doc(store, "/heroes/zp7p5EAxt05GmY2C3bQt")

function App() {
  // const [gosha, setGosha] = useState<DocumentSnapshot<DocumentData> | null>(null);
  // useEffect(() => {
  //   const inner = async () => {
  //     const doc_ = await getDoc(goshaRef);
  //     setGosha(doc_);
  //   }
  //   inner()
  // }, [])

    const charListData: any = new CharlistData();
    const charList = charListData.list;
    const [location, setLocation] = useState("stats");

    return (
    <div className="App">
        <header className={"htmlHeader"}>
            <nav>
                <h3>Главная</h3>
                <h3>Персонаж</h3>
                <h3>Справочник</h3>
            </nav>
        </header>
        <div className={"middle"}>
            <aside>
                <div className={"aside-information-block"}>
                    <header className={"char-name"}>
                        <SimpleInput placeholder={"Потерявший имя"} value={charList.charName.value[0]} onChange={(e:ChangeEvent<HTMLInputElement>) => {charList.charName.setValue(0)(e.target.value)}}/>
                    </header>
                </div>
            </aside>
            <main>
                <nav>
                    <h4 onClick={() => {setLocation("stats")}} className={location === "stats" ? "active" : "nonactive"}>Характеристики и навыки</h4>
                    <h4 onClick={() => {setLocation("equip")}} className={location === "equip" ? "active" : "nonactive"}>Экипировка</h4>
                    <h4 onClick={() => {setLocation("skills")}} className={location === "skills" ? "active" : "nonactive"}>Умения</h4>
                    <h4 onClick={() => {setLocation("spells")}} className={location === "spells" ? "active" : "nonactive"}>Заклинания</h4>
                    <h4 onClick={() => {setLocation("aspects")}} className={location === "aspects" ? "active" : "nonactive"}>История</h4>
                </nav>
                <div className={"main-information-block"}>
                    {location === "stats" && <Stats charList={charList}/>}
                    {location === "equip" && <div>Экипировка</div>}
                    {location === "skills" && <div>Умения</div>}
                    {location === "spells" && <div>Заклинания</div>}
                    {location === "aspects" && <div>Аспекты</div>}
                </div>
            </main>
        </div>
        <footer>Footer</footer>
    </div>
    );
}

export default App;
