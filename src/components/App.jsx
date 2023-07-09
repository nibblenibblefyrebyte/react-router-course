import Navbar from "./Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Players from "./Players";
import Teams from "./Teams";

export default function App () {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>

        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/players'} element={<Players/>}/>
          <Route path={'/teams'} element={<Teams/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}