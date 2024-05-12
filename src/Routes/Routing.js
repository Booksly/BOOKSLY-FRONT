import React from "react";
import App from '../App';
import MyHomeMain from "../pages/MyHomeMainPage/MyHomeMain";
import StoreSearch from '../pages/StoreSearchPage/StoreSearchPage';
import DetailedStoreInfo from '../pages/DetailedStoreInfoPage/DetailedStoreInfo';
import Reservation from '../pages/ReservationPage/Reservation';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function Routing() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App/>}/>
                    <Route path='/MyHomeMain' element={<MyHomeMain/>}/>
                    <Route path='/StoreSearch' element={<StoreSearch/>}/>
                    <Route path='/DetailedStoreInfo' element={<DetailedStoreInfo/>}/>
                    <Route path='/Reservation' element={<Reservation/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing