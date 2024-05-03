import React from "react";
import App from '../App';
import StoreSearch from '../pages/StoreSearchPage/StoreSearchPage';
import DetailedStoreInfo from '../pages/DetailedStoreInfoPage/DetailedStoreInfo';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function Routing() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App/>}/>
                    <Route path='/StoreSearch' element={<StoreSearch/>}/>
                    <Route path='/DetailedStoreInfo' element={<DetailedStoreInfo/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing