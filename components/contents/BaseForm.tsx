import {NumericFormat} from "react-number-format";
import {Box, Button, TextField} from "@mui/material";

export default function BaseForm() {
  return (
    <Box component="form">
      <NumericFormat thousandSeparator={","}
                     label="Required"
                     inputProps={{maxLength: 12}}
                     defaultValue="Hello World"
                     customInput={TextField}
      ></NumericFormat>
      <Button variant="contained" onClick={e => onClick(e)}>고고</Button>
    </Box>
  )
}

const onClick = (e) => {

}
