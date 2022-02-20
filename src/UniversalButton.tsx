import React from 'react';
import './Layout.css'
export type buttonsPropsType = {
    buttonTitle:string
    buttonCallBack: () => void
    isDisabled: boolean
}

export function UniversalButton(props:buttonsPropsType) {
    return (
        <span>
            <button disabled={props.isDisabled} className={props.isDisabled ? 'disabledGradientButton' : 'gradientButton'} onClick={props.buttonCallBack}>{props.buttonTitle}</button>
        </span>
    )
}