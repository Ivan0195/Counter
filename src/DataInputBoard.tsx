import React, {ChangeEvent} from 'react';
import './Layout.css'
import TextField from '@material-ui/core/TextField';

type DataInputBoardPropsType = {
    onChangeStartHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeLimitHandler: (e: ChangeEvent<HTMLInputElement>) => void
    error: boolean
}

export function DataInputBoard(props: DataInputBoardPropsType) {
    return (
        <div className={'dataBoard'}>
            <div>
                <TextField
                    onChange={props.onChangeStartHandler}
                    type={"number"}
                    helperText={props.error && 'Incorrect Value'}
                    title={'Type Start Value'}
                    variant={'filled'}
                    label={'Type Start Count Value'}
                    size={'small'}
                    error={props.error}
                    color={'primary'}
                />
            </div>
            <div>
                <TextField
                    onChange={props.onChangeLimitHandler}
                    type={"number"}
                    helperText={props.error && 'Incorrect Value'}
                    title={'Type Start Value'}
                    variant={'filled'}
                    label={'Type Start Count Value'}
                    size={'small'}
                    error={props.error}
                    color={'primary'}
                    style={!props.error ? {marginTop:'50px'} : {marginTop: '0px'}}
                />
            </div>
        </div>
    )
}