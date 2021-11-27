import { Button, TextField, Box, Grid } from '@mui/material';
import { useState } from 'react'
import Errors from './components/Errors';
import BirthdayList from './components/BirthdayList';

function App() {
  const [birthday, setBirthday] = useState("")

  const handleChange = (e) => {
    setBirthday(e.target.value)
  }
  return (
    <Box sx={{ mt: 20, mx: "auto", width: 200 }}>
      <Grid>
        <Errors />
        <TextField id="outlined-basic" label="birthday" value={birthday} variant="outlined" onChange={handleChange}/>
        <Button>Get Day Age</Button>

      </Grid>
    </Box>
  );
}

export default App;
