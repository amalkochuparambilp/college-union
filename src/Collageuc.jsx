import React from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import App from "./App";
import Dev from "./Pages/dev";
import ProgramUpdate from "./Pages/ProgramUpdate";

const Collagecu = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="akpdevz" element={<Dev />} />
                <Route path="unionprogram" element={<ProgramUpdate />} />
            </Routes>
        </HashRouter>
    );
};
export default Collagecu;
