import React from 'react'
import TextField from '@material-ui/core/TextField';

function InputElement(props) {

    return (
        <div>
            {/* <input name={props.name} type={props.type}/> */}
            <TextField label={props.label} name={props.name} type={props.type} 
            onChange={props.onChange} variant={props.variant} id={props.id} 
            onBlur={props.onBlur}
            // size={props.size}
            ></TextField>
        </div>
    )
}

export default InputElement
