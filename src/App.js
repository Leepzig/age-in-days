import { Button, TextField } from '@mui/material';
import { useState } from 'react'

function App() {
  const [birthday, setBirthday] = useState("")

  const handleChange = (e) => {
    setBirthday(e.target.value)
  }
  return (
    <div>
      <TextField id="outlined-basic" label="birthday" variant="outlined" onChange={handleChange}/>
      <Button>Get Day Age</Button>

    </div>
  );
}

export default App;
