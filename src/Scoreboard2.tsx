import React from 'react';
import './Layout.css'

export type scoreboardPropsType = {
    count: number
    countLimit: number
    error: boolean
}

export function Scoreboard2(props: scoreboardPropsType) {
    if (props.error){
        return <div className={'scoreBoardRed'}>Incorrect Values!</div>
    } else {
        return (props.count < props.countLimit) ?
            (<div className={'scoreBoard'}>{props.count}</div>) :
            (<div className={'scoreBoardRed'}>{props.count}</div>)
    }
}