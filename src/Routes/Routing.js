import React from "react";
import main from '../App';
import DetailedStoreInfo from '../pages/DetailedStoreInfoPage/DetailedStoreInfo';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function Routing() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<main/>}/>
                    <Route path='/DetailedStoreInfo' element={<DetailedStoreInfo/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing