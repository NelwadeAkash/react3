import React from 'react'
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core'

export default function SelectElement(props) {
    var option =props.data.map((data,index)=>
    (
        <MenuItem key={index} value={data} > {data} </MenuItem>

    ));
 {/* 
                    <LabelElement name ="Select"/>
                    <SelectElement data={["java","react","angular","c++"]}/>

                    <LabelElement name ="Select"/>
                    <RadioElement></RadioElement> */}

    return (
        <div>
            <FormControl>
                <InputLabel> Skills </InputLabel>
                    <Select >
                        {option}
                    </Select>
            </FormControl>
            
        </div>
    )
}
