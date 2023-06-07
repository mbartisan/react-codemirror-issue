import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from "./CodeMirrorExample"

function render() {
    const container = document.getElementById("app")
    const root = ReactDOM.createRoot(container)
    root.render(<App />)
}
render()
