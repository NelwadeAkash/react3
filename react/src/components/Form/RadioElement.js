import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';





export default function RadioElement(props) 
{
    var option=props.data.map((data,index) =>
    (
        console.log(data)
        //   <menuitem key={index} value={data}>{data} </menuitem>
    )

    )




    return (
        <div>
            {/* <input type="radio" value="option1" checked={true} /> */}
        <FormControl>
            <RadioGroup>
           
           <Radio>
               {option}
           </Radio>
        </RadioGroup>
        </FormControl>
        </div>
      )
    }
    
