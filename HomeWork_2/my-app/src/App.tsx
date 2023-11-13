import './App.css'
import {v4 as uuidv4} from 'uuid';

import {cources} from './mocks/courcesDataTS.ts';

import Card from './component/Card.tsx';

function App() {
  return (
    <div className='mainBody'>
      {cources.map(e => <Card key={uuidv4()} course={e}></Card>)}
    </div>
  )
}

export default App