import logo from './logo.svg';
import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import SaveIcon from '@mui/icons-material/AddAlert'
import DeleteIcon from '@mui/icons-material/AddAlert';
import { FormControlLabel } from '@mui/material';
import { TextField } from '@mui/material';
import { Container } from '@mui/material';
import { Paper } from '@mui/material';
import { Grid } from '@mui/material';

function CheckboxExample(){
  const{checked}=React.useState(true)
  return (
    <FormControlLabel
      control={
      <Checkbox
        icon={<SaveIcon></SaveIcon>}
        checkedIcon={<SaveIcon></SaveIcon>}
        defaultChecked={checked}
        color='primary'
        inputProps={{
          'aria-label':'secondary checkbox',
        }}>
      </Checkbox>}
      label='Testing Checkbox'>
    </FormControlLabel>
  );
}

function App() {
  return (
    <Container maxWidth='lg'>
      <div className='App'>
        <header className='App-header'>
          <TextField
          variant='outlined'
          type='email'
          label='Email'
          // placeholder='test@yourmail.com'
          ></TextField>
          <CheckboxExample></CheckboxExample>
          <ButtonGroup variant='outlined' color='primary'>
            <Button startIcon={<SaveIcon/>} onClick={()=>alert("Saved")} >Save</Button>
            <Button startIcon={<DeleteIcon/>} onClick={()=>alert("Delete")} >Delete</Button>
          </ButtonGroup>
          <img src={logo} classname='App-logo' alt='logo'></img>
        </header>
      </div>
    </Container>
  );
}

export default App;
