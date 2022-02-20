import React from 'react';
import './Layout.css'

export type scoreboardPropsType = {
    count: number
    countLimit:number
}

export function Scoreboard(props: scoreboardPropsType) {
    if (props.count < props.countLimit) {
        return (
            <div className={'scoreBoardEdgeBlackCount'}>
                {props.count}
            </div>)
    } else {
        return (
            <div className={'scoreBoardEdgeRedCount'}>
                {props.count}
            </div>)
    }

}