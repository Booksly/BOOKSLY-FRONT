import React from "react";
import App from "../App";

// 헤더 & 내비게이션
import LoginAfterMainHeader from "../pages/nav/LoginAfterMainHeader";
import LoginBeforeMainHeader from "../pages/nav/LoginBeforeMainHeader";
import LoginAfterTodayReservNav from "../pages/nav/LoginAfterTodayReservNav";
import MyHomeNavi from "../pages/nav/MyHomeNavi";
import MyHomeLeftNavi from "../pages/nav/MyHomeLeftNavi";
import MyHomeTopNavi from "../pages/nav/MyHomeTopNavi";
import StoreOwnerLeftNavi from "../pages/nav/StoreOwnerLeftNavi";
import StoreOwnerTopNavi from "../pages/nav/StoreOwnerTopNavi";
import StoreOwnerNavi from "../pages/nav/StoreOwnerNavi";
import LoginPageNav from "../pages/nav/LoginPageNav";

// Main Home 페이지
import Main from "../pages/MainPage/Main";
// 로그인 페이지
import CustomerLogin from "../pages/LogInPage/CustomerLogInPage";
import StoreOwnerLogin from "../pages/LogInPage/StoreOwnerLogInPage";
import StoreOwnerMemRegist from "../pages/LogInPage/StoreOwnerMemRegist";
import StoreRegist from "../pages/LogInPage/StoreRegist";

// My Home 페이지
import MyHomeMain from "../pages/MyHomeMainPage/MyHomeMain";
import MyHomeAllReserv from "../pages/MyHomeAllReservPage/MyHomeAllReserv";
import MyHomeCurrReserv from "../pages/MyHomeCurrReservPage/MyHomeCurrReserv";
import MyHomeRegularStore from "../pages/MyHomeRegularStorePage/MyHomeRegularStore";

// 당일 예약 페이지
import TodayReserv from "../pages/TodayReservationPage/TodayReservationPage";

// 가게 페이지
import StoreSearch from "../pages/StoreSearchPage/StoreSearchPage";
import DetailedStoreInfo from "../pages/DetailedStoreInfoPage/DetailedStoreInfo";
import Reservation from "../pages/ReservationPage/Reservation";

// 가게 주인 페이지
import StoreOwnerMain from "../pages/StoreOwnerMainPage/StoreOwnerMain";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function Routing() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/*시작 메인 페이지*/}
          <Route path="/" element={<App />} />
          {/*헤더 & 내비게이션*/}
          <Route path="/LoginAfterMainHeader" element={<LoginAfterMainHeader />}/>
          <Route path="/LoginBeforeMainHeader" element={<LoginBeforeMainHeader />}/>
          <Route path="/LoginAfterTodayReservNav" element={<LoginAfterTodayReservNav />}/>
          <Route path="/MyHomeNavi" element={<MyHomeNavi />} />
          <Route path="/MyHomeLeftNavi" element={<MyHomeLeftNavi />} />
          <Route path="/MyHomeTopNavi" element={<MyHomeTopNavi />} />
          <Route path="/StoreOwnerLeftNavi" element={<StoreOwnerLeftNavi />} />
          <Route path="/StoreOwnerTopNavi" element={<StoreOwnerTopNavi />} />
          <Route path="/StoreOwnerNavi" element={<StoreOwnerNavi />} />
          <Route path="/LoginPageNav" element={<LoginPageNav />} />
          {/*Main Home 페이지*/}
          <Route path="/MainHome" element={<Main />} />
          <Route path="login" element={<div>로그인</div>} />
          <Route path="logout" element={<div>로그아웃</div>} />
          {/*로그인 페이지*/}
          <Route path="/CustomerLogin" element={<CustomerLogin />} />
          <Route path="/StoreOwnerLogin" element={<StoreOwnerLogin />} />

          <Route path="/StoreOwnerMemRegist" element={<StoreOwnerMemRegist />}/>
          <Route path="/StoreRegist" element={<StoreRegist />} />
          {/*고객 My Home*/}
          <Route path="/MyHomeMain" element={<MyHomeMain />} />
          <Route path="/MyHomeAllReserv" element={<MyHomeAllReserv />} />
          <Route path="/MyHomeCurrReserv" element={<MyHomeCurrReserv />} />
          <Route path="/MyHomeRegularStore" element={<MyHomeRegularStore />} />
          {/*당일 예약 페이지*/}
          <Route path="/TodayReserv" element={<TodayReserv />} />
          {/*고객 가게 관련 페이지*/}
          <Route path="/StoreSearch" element={<StoreSearch />} />
          <Route path="/DetailedStoreInfo" element={<DetailedStoreInfo />} />
          <Route path="/Reservation" element={<Reservation />} />
          {/*가게주인용*/}
          <Route path="StoreOwnerMain" element={<StoreOwnerMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
