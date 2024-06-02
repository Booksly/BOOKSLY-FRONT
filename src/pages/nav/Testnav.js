import React, { useState } from "react";
import "./LoginAfterMainHeader.css";
import searchbar from "../../assets/search_button.png";
import home from "../../assets/home_button.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function Testnav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
  const navigate = useNavigate();
  const location = useLocation();
  
  const goToMainHomePage = () => {
    navigate("/login");
  };
  const goToStoreSearchPage = () => {
    navigate("/StoreSearch");
  };
  const goToTodayReservPage = () => {
    navigate("/TodayReserv");
  };
  const goToMyHomeAllReservPage = () => {
    navigate("/MyHomeAllReserv");
  };
  const goToMyHomeMainPage = () => {
    navigate("/MyHomeMain");
  };
  const goToMain = () => {
    navigate("/");
  };
  const goTologin = () => {
    navigate("/login");
  };

  return (
    <div className="back">
      <div className="LoginAfterMainHeader">
        <div className="header-inner">
          <div className="header-inner-left">
            <button className="frame-MainHomeButton" onClick={goToMainHomePage}>
              <div className="logo-goto-home">
                <div className="booksly-logo"></div>
              </div>
            </button>
            <div className="header-buttons">
              <div className={location.pathname === "/StoreSearch" ? "currentNav" : ""}>
                <div className={location.pathname === "/StoreSearch" ? "currentPageBar" : ""}>
                  <button
                    className="frame-StoreSearchButton"
                    onClick={goToStoreSearchPage}
                  >
                    <div className={location.pathname !== "/StoreSearch" ? "nav-box" : ""}>
                      <span className="PageName">가게조회</span>
                    </div>
                  </button>
                </div>
              </div>
              <div className={location.pathname === "/TodayReserv" ? "currentNav" : ""}>
                <div className={location.pathname === "/TodayReserv" ? "currentPageBar" : ""}>
                  <button
                    className="frame-TodayReservButton"
                    onClick={goToTodayReservPage}
                  >
                    <div className={location.pathname !== "/TodayReserv" ? "nav-box" : ""}>
                      <span className="PageName">당일예약</span>
                    </div>
                  </button>
                </div>
              </div>
              <div className={location.pathname === "/MyHomeAllReserv" ? "currentNav" : ""}>
                <div className={location.pathname === "/MyHomeAllReserv" ? "currentPageBar" : ""}>
                  <button
                    className="frame-MyHomeAllReservButton"
                    onClick={goToMyHomeAllReservPage}
                  >
                    <div className={location.pathname !== "/MyHomeAllReserv" ? "nav-box" : ""}>
                      <span className="PageName">예약조회</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="search-border">
            <div className="icon-search">
              <img className="vector" src={searchbar} alt="검색" />
            </div>
            <div className="input-search">
              <span className="search">어떤 가게를 찾으세요?</span>
            </div>
          </div>
          <div className="header-inner-right">
            {isLoggedIn ? (
              <>
                <button
                  className={location.pathname === "/MyHomeMain" ? "currentNav currentPageBar frame-MyHomeMainButton" : "frame-MyHomeMainButton"}
                  onClick={goToMyHomeMainPage}
                >
                  <div className="headerRightDiv">
                    <div className="icon">
                      <img className="home" src={home} alt="홈" />
                    </div>
                    <div className="go-mypage">
                      <span className="my-page">My Page</span>
                    </div>
                  </div>
                </button>
                <div className="headerRightDiv">
                  <div className="icon">
                    <div className="alarmIcon"></div>
                  </div>
                  <div className="user-id">
                    <span className="userId">김아무개</span>
                  </div>
                </div>
                <button className="log-out-but" onClick={goToMain}>
                  <span className="logout">로그아웃</span>
                </button>
              </>
            ) : (
              <button className="loginButton" onClick={goTologin}>
                <span className="login">로그인</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
