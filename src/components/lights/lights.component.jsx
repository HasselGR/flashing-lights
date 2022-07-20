

import './lights.styles.css';



export const Lights = (props) => {
    console.log(props);
    const configs= props.configurations;

    return(
        <div className="lights-container">
            <div 
            style={{
                backgroundColor: (configs.color1 === '') ? 'lightblue' : configs.color1
              }}
            className={configs.counter !== 1?"light-1": "light-1-lit"}>{configs.counter}</div>
            <div className={configs.counter !== 2?"light-2": "light-2-lit"}></div>
            <div className={configs.counter !== 3?"light-3": "light-3-lit"}></div>
            <div className={configs.counter !== 4?"light-4": "light-4-lit"}></div>
            <div className={configs.counter !== 5?"light-5": "light-5-lit"}></div>
            <div className={configs.counter !== 6?"light-6": "light-6-lit"}></div>
            <div className={configs.counter !== 7?"light-7": "light-7-lit"}></div>
        </div>
    )
}
