import React from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import App from "./App";
import Dev from "./Pages/dev";
import ProgramUpdate from "./Pages/ProgramUpdate";
import Admin from "./Pages/Admin";
import Ambiora from "./Pages/Ambiora";
import ErrorPage from "./Pages/ErrorPage";

const Collagecu = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={ <ErrorPage /> } />
                <Route path="/" element={<App />} />
                <Route path="akpdevz" element={<Dev />} />
                <Route path="unionprogram" element={<ProgramUpdate />} />
                <Route path="admin" element={<Admin />} />
                <Route path="artsday" element={<Ambiora />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Collagecu;
