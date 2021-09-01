import React, {useState } from 'react';
import './Button.css'

    var result ;

    const Button = ({btn, setBtn, setIscalculated, setAns, setNumbers}) => {

        const Handler = (e) => {
            setIscalculated (false)
            if (btn.length === 0){
                if (/\d|\-/g .test(e.target.textContent)){
                    setBtn([e.target.textContent])
                }  
                else if (e.target.textContent === '.'){
                    setBtn([`0${e.target.textContent}`])
                }
            }

            else {
                
                if (/[\+\*\/\-]/g.test(e.target.textContent)){
                    if (/[\+\*\/\-\.]/g.test(btn[btn.length - 1])){
                        btn.splice(-1)
                        setBtn([...btn, e.target.textContent]) 
                    } 
                    else{
                        setBtn([...btn, e.target.textContent]) 
                    }
                }

                else if (/\d/g.test(e.target.textContent)){
                   if (btn[btn.length - 1] === '0' && (/[\+\-\*]/g.test(btn[btn.length - 2]) || btn[btn.length - 2] === undefined)){
                        btn.splice(-1)
                        setBtn([...btn, e.target.textContent]) 
                   }
                   else{
                    setBtn([...btn, e.target.textContent])
                   }
                }

                else if (e.target.textContent === '.'){
                    if (/[\+\-\*\/]/g.test(btn[btn.length - 1])){
                        setBtn([...btn, `0${e.target.textContent}`])
                    }
                    else if (btn[btn.length - 1] === '.') {
                        btn.splice(-1)
                        setBtn([...btn, e.target.textContent]) 
                    }
                    else{
                        setBtn([...btn, e.target.textContent]) 
                    }
                }

                else{
                    setBtn([...btn, e.target.textContent])
                }
            }
        }

        const clearHandler =(e) => {
            setIscalculated (false)
            if (e.target.textContent === 'Del'){
                btn.splice(-1)
                setBtn([...btn]) 
            }

            else if (e.target.textContent === 'C'){
                setBtn([])
            }
        }

        const Calculator = () => {
            setIscalculated(true)
            var arr = []
            setNumbers(btn)
            var stringBtn = btn.toString()
            for (let i in stringBtn){
                if (stringBtn[i] === ','){
                    var strBtn = stringBtn.replaceAll(',' , '')
                }
            }
            result = (eval(strBtn))
            result = result.toString()
            setAns(result)
            for (let i in result){
                arr.push(result[i])
            }
            setBtn(arr)
        }

        return (
            
            <div className='button-container'>
                <button className='silver-btn' onClick={clearHandler}>C</button>
                <button className='silver-btn' onClick={clearHandler}>Del</button>
                <button className='silver-btn' onClick={Handler}>/</button>
                <button className='orange-btn' onClick={Handler}>*</button>

                <button onClick={Handler}>7</button>
                <button onClick={Handler}>8</button>
                <button onClick={Handler}>9</button>
                <button className='orange-btn' onClick={Handler}>-</button>

                <button onClick={Handler}>4</button>
                <button onClick={Handler}>5</button>
                <button onClick={Handler}>6</button>
                <button className='orange-btn' onClick={Handler}>+</button>

                <button onClick={Handler}>1</button>
                <button onClick={Handler}>2</button>
                <button onClick={Handler}>3</button>
                <button className='orange-btn' onClick={Calculator}>=</button>

                <button id ='zero-btn' onClick={Handler}>0</button>
                <button id ='growing' className='orange-btn' onClick={Handler}>.</button>
            </div>
        )
    }

    export default Button
