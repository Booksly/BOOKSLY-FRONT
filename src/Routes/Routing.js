import React from "react";
import App from "../App";
import MyHomeMain from "../pages/MyHomeMainPage/MyHomeMain";
import StoreSearch from "../pages/StoreSearchPage/StoreSearchPage";
import DetailedStoreInfo from "../pages/DetailedStoreInfoPage/DetailedStoreInfo";
import Reservation from "../pages/ReservationPage/Reservation";
import TodayReservation from "../pages/TodayReservationPage/TodayReservationPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyHomeAllReserv from "../pages/MyHomeAllReservPage/MyHomeAllReserv";
import MyHomeCurrReserv from "../pages/MyHomeCurrReservPage/MyHomeCurrReserv";
import MyHomeRegularShop from "../pages/MyHomeRegularShopPage/MyHomeRegularShop";
import StoreSearch from "../pages/StoreSearchPage/StoreSearchPage";
import DetailedStoreInfo from "../pages/DetailedStoreInfoPage/DetailedStoreInfo";
import Reservation from "../pages/ReservationPage/Reservation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function Routing() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/MyHomeMain" element={<MyHomeMain />} />
          <Route path="/StoreSearch" element={<StoreSearch />} />
          <Route path="/DetailedStoreInfo" element={<DetailedStoreInfo />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/TodayReservation" element={<TodayReservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/MyHomeMain" element={<MyHomeMain />} />
          <Route path="/MyHomeAllReserv" element={<MyHomeAllReserv />} />
          <Route path="/MyHomeCurrReserv" element={<MyHomeCurrReserv />} />
          <Route path="/MyHomeRegularShop" element={<MyHomeRegularShop />} />
          <Route path="/StoreSearch" element={<StoreSearch />} />
          <Route path="/DetailedStoreInfo" element={<DetailedStoreInfo />} />
          <Route path="/Reservation" element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
