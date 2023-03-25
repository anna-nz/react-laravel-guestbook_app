import React, { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultView from "./Views/DefaultView";

function App() {
    return (
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DefaultView />} />
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
}

export default App;
