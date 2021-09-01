import React , {useState} from 'react';
import Button from './components/Button';
import Display from './components/Display';
import './App.css'

const App = () => {

    const [btn, setBtn] = useState([]);
    const [isCalculated, setIscalculated] = useState(false)
    const [numbers, setNumbers] = useState('')
    const [ans, setAns] = useState('')

    return (
      <div className='container'>
         <div className='app-container'>
          <Display btn={btn} isCalculated={isCalculated} ans={ans} numbers={numbers}/>
          <Button btn={btn} setBtn={setBtn} setIscalculated={setIscalculated}
           setNumbers={setNumbers} setAns={setAns} />
        </div>
      </div>
     
    )
  }

export default App
