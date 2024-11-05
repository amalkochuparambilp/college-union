import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"
import Gallery from "./Pages/Gallery";

function Tapp() {
  return(
    <Router>
      <Routers>
        <Route path="/" element={ <App /> }/>
        <Route path="/gallery" element={ <Gallery /> }/>
      </Routers>
    </Router>
  )
}
