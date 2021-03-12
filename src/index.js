import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div style={{backgroundColor: 'lightblue', display: "grid", minHeight:"100vh", placeContent: "center"}}>
            <h1>Hello React</h1>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));
