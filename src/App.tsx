import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import Curiosity from "./Curiosity";

function App() {

    const [curiosityLevel, setCuriosityLevel] = useState(0)

    const onClickHandler = () =>{
        setCuriosityLevel(curiosityLevel+1)
    }


    return (
        (curiosityLevel<11) ?
            (<div className='App'>
                <Counter/>
                <Curiosity curiosityLevel={curiosityLevel} onClickHandler={onClickHandler}/>
        </div>) :
            (<div className={'curiosity'}>
                <div>Поздравляю! Ты самый любопытный Кликер! Держи медальку ☻</div>
                <img style={{width: '20%'}} src={'https://avatanplus.com/files/resources/original/578497ae7464d155ddf0818d.png'}/>
            </div>)
    );
}

export default App;
