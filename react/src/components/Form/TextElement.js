import React from 'react'
//import { TextField } from '@material-ui/core'


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


function TextElement(props) {
    const classes = useStyles();
    return (
        <div>
            <TextField className="classes.root" name={props.name} label={props.label} type={props.type}
            
            
            onChange={props.onChange} variant="standard" id={props.id} 
            onBlur={props.onBlur}
            
            ></TextField>
        </div>
    )
}

export default TextElement
