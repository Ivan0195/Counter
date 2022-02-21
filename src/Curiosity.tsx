import React from 'react';
import './Layout.css'

type CuriosityPropsType = {
    curiosityLevel: number
    onClickHandler: ()=>void
}

const messages = ['Не нажимать!', 'Не надо!', 'Ну я же просил!', 'Зачем ты это делаешь?!', 'Ты хочешь позлить меня?!', 'Советую прекратить!', 'Я начинаю терять терперие!',
'Ты играешь с огнем!', '3...', '2...', '1...']

const Curiosity = (props:CuriosityPropsType) => {
    return <div className={'curiosity'} onClick={props.onClickHandler}>{messages[props.curiosityLevel]}</div>
}

export default Curiosity;
