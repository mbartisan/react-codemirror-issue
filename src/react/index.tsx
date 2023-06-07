import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

const App = () => {
    return <>React</>
}

function render() {
    const container = document.getElementById("app")
    const root = ReactDOM.createRoot(container)
    root.render(<App />)
}
render()
