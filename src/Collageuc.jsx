import React from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import App from "./App";
import Gallery from "./Pages/Gallery";

const Collagecu = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </HashRouter>
    );
};
export default Collagecu;
