import React, { ReactElement } from "react";
import ReactDOM from "react-dom/client";

function App(): ReactElement {
    return <h1>Rick and Morty</h1>;
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
