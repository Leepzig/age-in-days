import { Button, TextField, Box, Grid, FormControl } from '@mui/material';
import { useState } from 'react'
import Errors from './components/Errors';
import BirthdayList from './components/BirthdayList';

function App() {
  const [form, setForm] = useState("")
  const [birthday, setBirthday] = useState(null)
  const [errors, setErrors] = useState(null)

  const handleChange = (e) => {
    setForm(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(form)
    setBirthday(form)
  }
  return (
    <Box sx={{ mt: 20, mx: "auto", width: 200 }}>
      <Grid>
        {errors ? <Errors /> : null}
        <form onSubmit={handleSubmit}>
          <TextField id="outlined-basic" label="birthday" value={form} variant="outlined" onChange={handleChange}/>
          <Button onClick={handleSubmit}>Get Day Age</Button>
        </form>
        <BirthdayList birthday={birthday} />
      </Grid>
    </Box>
  );
}

export default App;
