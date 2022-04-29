import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Header from "./components/Header";
import './App.css';
import PageNotFound from "./components/PageNotFound";
import Bibliotheque from "./components/Bibliotheque";

function App() {
    return (
        <div >
            <header >
                <h1>Header Demo Router</h1>
                <Header/>
            </header>

            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/bibliotheque" element={<Bibliotheque/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </div>
    );
}

export default App;
