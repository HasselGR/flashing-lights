import {useState, useEffect} from 'react';
import { Lights } from './components/lights/lights.component';
import './App.css';

function App() {
  const [counter, setCounter] = useState(1);
  const [pause, setPause] =useState(false);
  const [color, setColor] =useState('');
  const [color1, setColor1]=useState('');
  const [color2, setColor2]=useState('');
  const [color3, setColor3]=useState('');
  const [color4, setColor4]=useState('');
  const [color5, setColor5]=useState('');
  const [color6, setColor6]=useState('');
  const [color7, setColor7]=useState('');

  const configurations = {
    counter,
    color1,
    color2,
    color3,
    color4,
    color5,
    color6,
    color7
  }

  useEffect(() => {
    let index = 1
    const interval = setInterval(() => {
        if(index < 7){
          setCounter(counter => counter + 1)
          index++;
        }
        else{
          setCounter(counter => counter ** 0)
          index = 1;
        }
      
    }, 1000);
      return () => clearInterval(interval);
  }, []);



  return (
    <>
      <div className="App">
        <h1>flashing-lights</h1>
        <h2>Here is a test of properties changing in React, a string of christmas lights which change in intensity and color</h2>
        <button onClick={()=>{setPause(!pause); console.log(pause)}}>Start/Stop</button>
      </div>
      <Lights configurations={configurations} />
      <div className="inputs-container">
        <div>Color: <br/>
          <form onSubmit={() => {
            setColor1(color)
            setColor('')
          }}>
          <input onChange={(event) => setColor(event.target.value)}></input>
          <br/>
          <button type="submit">Change Color</button>
          </form>
        </div>

        <div>Color: <br/><input></input><br/><button>Change Color</button></div>
        <div>Color: <br/><input></input><br/><button>Change Color</button></div>
        <div>Color: <br/><input></input><br/><button>Change Color</button></div>
        <div>Color: <br/><input></input><br/><button>Change Color</button></div>
        <div>Color: <br/><input></input><br/><button>Change Color</button></div>
        <div>Color: <br/><input></input><br/><button>Change Color</button></div>
      </div>


    </>
  );
}

export default App;
