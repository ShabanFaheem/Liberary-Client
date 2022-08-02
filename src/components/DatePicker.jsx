import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const customStyle ={
    witdh: 30,
    margin: 1
}

function DatePicker(props) {
    const [date, setDate] = React.useState("");
    function handleChange(event){
        setDate(event.target.value);

        props.pickDate(event.target.value);
        
    }
  return (
    <Stack component="form" noValidate spacing={3} >
      <TextField
        onChange={handleChange}
        id="date"
        label={props.text}
        type="date"
        defaultValue={date}
        sx={customStyle}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack>
  );
}


export default DatePicker;