import React from 'react';
import './Layout.css'

type CuriosityPropsType = {
    curiosityLevel: number
    onClickHandler: ()=>void
}

const Curiosity = (props:CuriosityPropsType) => {
    if (props.curiosityLevel===0) {
        return <div className={'curiosity'} onClick={props.onClickHandler}>Не нажимать!</div>
    }
    if (props.curiosityLevel===1) {
        return <div className={'curiosity'} onClick={props.onClickHandler}>Не надо!</div>
    }
    if (props.curiosityLevel===2) {
        return <div className={'curiosity'} onClick={props.onClickHandler}>Ну я же просил!</div>
    }
    if (props.curiosityLevel===3) {
        return <div className={'curiosity'} onClick={props.onClickHandler}>Зачем ты это делаешь?!</div>
    }
    if (props.curiosityLevel===4) {
        return <div className={'curiosity'} onClick={props.onClickHandler}>Ты хочешь позлить меня?!</div>
    }
    if (props.curiosityLevel===5) {
        return <div className={'curiosity'} onClick={props.onClickHandler}>Советую прекратить!</div>
    }
    if (props.curiosityLevel===6) {
        return <div className={'curiosity'} onClick={props.onClickHandler}>Я начинаю терять терперие!</div>
    }
    if (props.curiosityLevel===7) {
        return <div className={'curiosity'} onClick={props.onClickHandler}>Ты играешь с огнем!</div>
    }
    if (props.curiosityLevel===8) {
        return <div className={'curiosity'} onClick={props.onClickHandler}>3...</div>
    }
    if (props.curiosityLevel===9) {
        return <div className={'curiosity'} onClick={props.onClickHandler}>2...</div>
    }
    if (props.curiosityLevel===10) {
        return <div className={'curiosity'} onClick={props.onClickHandler}>1...</div>
    }else {return <div>{null}</div>}
};

export default Curiosity;
