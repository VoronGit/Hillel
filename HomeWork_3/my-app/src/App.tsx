import { useState } from 'react';
import './App.css'
import Counter from './components/Counter/Counter';
import { Alert } from '@mui/material';

function App() {
  const [isAlertShown, setAlertShown] = useState(false);
  const [alertText, setAlertText] = useState('');

  const [counterMin, counterStart, counterMax] = [-3,0,3];

  return (
    <div className='counterBlock'>
      <Counter counterMin={counterMin} counterStart={counterStart} counterMax={counterMax} callbacksForAlert={[setAlertShown, setAlertText]} />
      {isAlertShown ? <Alert className='alert' severity="info">{alertText}</Alert> : <></>}
    </div>
  )
}

export default App