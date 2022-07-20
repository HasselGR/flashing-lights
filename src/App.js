import { useState, useEffect, useCallback, useRef } from "react"
import { Lights } from "./components/lights/lights.component"
import "./App.css"

function App() {
  const intervalRef = useRef(null)
  const [counter, setCounter] = useState(1)
  const [color1, setColor1] = useState("")
  const [pause, setPause] = useState(false)
  const [color, setColor] = useState("")

  useEffect(() => {
    if (!pause) {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          setCounter((counter) => (counter === 7 ? 1 : counter + 1))
        }, 1000)
      }
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [pause])

  return (
    <>
      <div className="App">
        <h1>flashing-lights</h1>
        <h2>
          Here is a test of properties changing in React, a string of christmas
          lights which change in intensity and color
        </h2>
        <button
          onClick={() => {
            setPause(!pause)
          }}
        >
          Start/Stop
        </button>
      </div>
      <Lights counter={counter} color1={color1} />
      <div className="inputs-container">
        <div>
          Color: <br />
          <form
            onSubmit={() => {
              setColor1(color)
              setColor("")
            }}
          >
            <input onChange={(event) => setColor(event.target.value)}></input>
            <br />
            <button type="submit">Change Color</button>
          </form>
        </div>

        <div>
          Color: <br />
          <input></input>
          <br />
          <button>Change Color</button>
        </div>
        <div>
          Color: <br />
          <input></input>
          <br />
          <button>Change Color</button>
        </div>
        <div>
          Color: <br />
          <input></input>
          <br />
          <button>Change Color</button>
        </div>
        <div>
          Color: <br />
          <input></input>
          <br />
          <button>Change Color</button>
        </div>
        <div>
          Color: <br />
          <input></input>
          <br />
          <button>Change Color</button>
        </div>
        <div>
          Color: <br />
          <input></input>
          <br />
          <button>Change Color</button>
        </div>
      </div>
    </>
  )
}

export default App
