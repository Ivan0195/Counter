import React from 'react';
import './Layout.css'
export type buttonsPropsType = {
    increaseFunction: ()=>void
    resetFunction: ()=>void
    count: number
    countLimit:number
}

export function Buttons(props:buttonsPropsType) {
    return (
        <div>
            <button disabled={props.count===props.countLimit} className='gradientButton' onClick={props.increaseFunction}>inc</button>
            <button disabled={props.count===0} className='gradientButton' onClick={props.resetFunction}>reset</button>
        </div>
    )
}