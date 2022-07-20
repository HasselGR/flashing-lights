import "./lights.styles.css"

export const Lights = (props) => {
  const { color1, counter } = props

  return (
    <div className="lights-container">
      <div
        style={{
          backgroundColor: color1 === "" ? "lightblue" : color1,
        }}
        className={counter !== 1 ? "light-1" : "light-1-lit"}
      >
        {counter}
      </div>
      <div className={counter !== 2 ? "light-2" : "light-2-lit"}></div>
      <div className={counter !== 3 ? "light-3" : "light-3-lit"}></div>
      <div className={counter !== 4 ? "light-4" : "light-4-lit"}></div>
      <div className={counter !== 5 ? "light-5" : "light-5-lit"}></div>
      <div className={counter !== 6 ? "light-6" : "light-6-lit"}></div>
      <div className={counter !== 7 ? "light-7" : "light-7-lit"}></div>
    </div>
  )
}
