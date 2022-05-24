import './App.css';
import BtnAdd from './Components/BtnAdd';
import BtnReset from './Components/BtnReset';
import BtnSubtract from './Components/BtnSubtract';
import Counter from './Components/Counter';
import { useState } from 'react';


function App() {

    const [count , setCount] = useState(0);


    const handleClickAdd = () => {
        setCount(count + 1);
    }

    const handleClickSubstract = () => {
        setCount(count - 1);
    }
    
    const handleClickReset = () => {
        setCount(0);
    }

    return (
        <div className="App">
           
            <h1>COUNTER APP</h1>
            <Counter
                count = {count} />
            <div className="main-container">
                <BtnAdd 
                    text="+"
                    btnClick = {true}
                    click= {handleClickAdd} />

                <BtnReset 
                    text="RESET"
                    btnClick = {true}
                    click= {handleClickReset} />

                <BtnSubtract 
                    text="-"
                    btnClick = {true}
                    click= {handleClickSubstract} />

            </div>

        </div>
    )

};


export default App;