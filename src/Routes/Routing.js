import React from "react";
import App from "../App";

// 로그인 페이지
import CustomerLogin from "../pages/LogInPage/CustomerLogInPage";
import StoreOwnerLogin from "../pages/LogInPage/StoreOwnerLogInPage";

// My Home 페이지
import MyHomeMain from "../pages/MyHomeMainPage/MyHomeMain";
import MyHomeAllReserv from "../pages/MyHomeAllReservPage/MyHomeAllReserv";
import MyHomeCurrReserv from "../pages/MyHomeCurrReservPage/MyHomeCurrReserv";
import MyHomeRegularShop from "../pages/MyHomeRegularShopPage/MyHomeRegularShop";

// 당일 예약 페이지
import TodayReserv from "../pages/TodayReservationPage/TodayReservationPage";

// 가게 페이지
import StoreSearch from "../pages/StoreSearchPage/StoreSearchPage";
import DetailedStoreInfo from "../pages/DetailedStoreInfoPage/DetailedStoreInfo";
import Reservation from "../pages/ReservationPage/Reservation";

// 가게 주인 페이지

import { BrowserRouter, Route, Routes } from "react-router-dom";
function Routing() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/*시작 메인 페이지*/}
          <Route path="/" element={<App />} />
          {/*로그인 페이지*/}
          <Route path="/CustomerLogin" element={<CustomerLogin />} />
          <Route path="/StoreOwnerLogin" element={<StoreOwnerLogin />} />
          {/*고객 My Home*/}
          <Route path="/MyHomeMain" element={<MyHomeMain />} />
          <Route path="/MyHomeAllReserv" element={<MyHomeAllReserv />} />
          <Route path="/MyHomeCurrReserv" element={<MyHomeCurrReserv />} />
          <Route path="/MyHomeRegularShop" element={<MyHomeRegularShop />} />
          {/*당일 예약 페이지*/}
          <Route path="/TodayReserv" element={<TodayReserv />} />
          {/*고객 가게 관련 페이지*/}
          <Route path="/StoreSearch" element={<StoreSearch />} />
          <Route path="/DetailedStoreInfo" element={<DetailedStoreInfo />} />
          <Route path="/Reservation" element={<Reservation />} />
          {/*가게주인용*/}
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
