import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import './Layout.css'
import {Scoreboard2} from "./Scoreboard2";
import {UniversalButton} from "./UniversalButton";
import {DataInputBoard} from "./DataInputBoard";

export type SetValuesPropsType = {
    start: number
    limit: number
}

export function Counter() {
    const [typedStartValue, setTypedStartValue] = useState(0)
    const [typedLimitValue, setTypedLimitValue] = useState(5)
    const [startCount, setStartCount] = useState(typedStartValue)
    const [countLimit, setCountLimit] = useState(typedLimitValue)
    const [count, setCount] = useState(startCount)
    const [errorState, setErrorState] = useState(false)

    const onChangeHandlerStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setTypedStartValue(Math.round(Number(e.currentTarget.value)))
    }

    const onChangeHandlerLimitValue = (e: ChangeEvent<HTMLInputElement>) => {
        setTypedLimitValue(Math.round(Number(e.currentTarget.value)))
    }

    const setValues = () => {
        ((typedStartValue >= typedLimitValue) || (typedStartValue<0) || (typedLimitValue<0)) ?
            setErrorState(true) :
            setErrorState(false)
            setStartCount(typedStartValue)
            setCountLimit(typedLimitValue)
            setCount(typedStartValue)
    }

    const increaseCount = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(startCount)
    }

    return (
        <div className='App'>
            <div className={'motherDiv'}>
                <DataInputBoard onChangeStartHandler={onChangeHandlerStartValue} onChangeLimitHandler={onChangeHandlerLimitValue} error={errorState}/>
                <Scoreboard2 count={count} countLimit={countLimit} error={errorState}/>
            </div>

            <div>
                <UniversalButton buttonTitle={'set'} buttonCallBack={setValues} isDisabled={(startCount === typedStartValue) && (countLimit === typedLimitValue)}/>
                <UniversalButton buttonTitle={'inc'} buttonCallBack={increaseCount} isDisabled={(count === countLimit) || (errorState)}/>
                <UniversalButton buttonTitle={'reset'} buttonCallBack={resetCount} isDisabled={(count === typedStartValue) || (errorState)}/>
            </div>
            <div style={{color: '#61dafb'}}>
                При вводе дробных чисел значения округляются до ближайшего целого
            </div>
        </div>
    )
}


{/*<Buttons increaseFunction={increaseCount} resetFunction={resetCount} count={count} countLimit={countLimit}/>*/
}