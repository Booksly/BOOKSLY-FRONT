import "./LoginAfterMainHeader.css";
import searchbar from "../../assets/search_button.png";
import home from "../../assets/home_button.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function LoginAfterMainHeader() {
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
  }

  return (
    <div className="LAMH-back">
      <div className="LoginAfterMainHeader">
        <div className="LAMH-header-inner">
          <div className="LAMH-header-inner-left">
            <button className="LAMH-frame-MainHomeButton" onClick={goToMainHomePage}>
              <div className="LAMH-logo-goto-home">
                <div className="LAMH-booksly-logo"></div>
              </div>
            </button>
            <div className="LAMH-header-buttons">
              <div className={location.pathname === "/StoreSearch" ? "LAMH-currentNav" : ""}>
                <div className={location.pathname === "/StoreSearch" ? "LAMH-currentPageBar" : ""}>
                  <button
                    className="LAMH-frame-StoreSearchButton"
                    onClick={goToStoreSearchPage}
                  >
                    <div className={location.pathname !== "/StoreSearch" ? "LAMH-nav-box" : ""}>
                      <span className="LAMH-PageName">가게조회</span>
                    </div>
                  </button>
                </div>
              </div>
              <div className={location.pathname === "/TodayReserv" ? "LAMH-currentNav" : ""}>
                <div className={location.pathname === "/TodayReserv" ? "LAMH-currentPageBar" : ""}>
                  <button
                    className="LAMH-frame-TodayReservButton"
                    onClick={goToTodayReservPage}
                  >
                    <div className={location.pathname !== "/TodayReserv" ? "LAMH-nav-box" : ""}>
                      <span className="LAMH-PageName">당일예약</span>
                    </div>
                  </button>
                </div>
              </div>
              <div className={location.pathname === "/MyHomeAllReserv" ? "LAMH-currentNav" : ""}>
                <div className={location.pathname === "/MyHomeAllReserv" ? "LAMH-currentPageBar" : ""}>
                  <button
                    className="LAMH-frame-MyHomeAllReservButton"
                    onClick={goToMyHomeAllReservPage}
                  >
                    <div className={location.pathname !== "/MyHomeAllReserv" ? "LAMH-nav-box" : ""}>
                      <span className="LAMH-PageName">예약조회</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="LAMH-search-border">
            <div className="LAMH-icon-search">
              <img className="LAMH-vector" src={searchbar} alt="LAMH-검색" />
            </div>
            <div className="LAMH-input-search">
              <span className="LAMH-search">어떤 가게를 찾으세요?</span>
            </div>
          </div>
          <div className="LAMH-header-inner-right">
            <button
              className={location.pathname === "/MyHomeMain" ? "currentNav currentPageBar frame-MyHomeMainButton" : "LAMH-frame-MyHomeMainButton"}
              onClick={goToMyHomeMainPage}
            >
              <div className="LAMH-headerRightDiv">
                <div className="LAMH-icon">
                  <img className="LAMH-home" src={home} alt="LAMH-홈" />
                </div>
                <div className="LAMH-go-mypage">
                  <span className="LAMH-my-page">My Page</span>
                </div>
              </div>
            </button>
            <div className="LAMH-headerRightDiv">
              <div className="LAMH-icon">
                <div className="LAMH-alarmIcon"></div>
              </div>
              <div className="LAMH-user-id">
                <span className="LAMH-userId">김송은</span>
              </div>
            </div>
            <button className="LAMH-log-out-but" onClick={goToMain}>
              <span className="LAMH-logout">로그아웃</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
