import "./LoginAfterTodayReservNav.css";
import searchbar from "../../assets/search_button.png";
import home from "../../assets/home_button.png";
import { useNavigate } from "react-router-dom";

export default function LoginAfterTodayReservNav() {
  const navigate = useNavigate();
  const goToMainHomePage = () => {
    navigate("/MainHome");
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
  return (
    <div className="back">
      <div className="LoginAfterTodayReservNav">
        <div className="header-inner">
          <div className="header-inner-left">
            <button className="frame-MainHomeButton" onClick={goToMainHomePage}>
              <div className="logo-goto-home">
                <div className="booksly-logo"></div>
              </div>
            </button>
            <div className="header-buttons">
              <button
                className="frame-StoreSearchButton"
                onClick={goToStoreSearchPage}
              >
                <div className="nav-box">
                  <span className="PageName">가게조회</span>
                </div>
              </button>
              <div className="currentNav">
                <div className="currentPageBar">
                  <button
                    className="frame-TodayReservButton"
                    onClick={goToTodayReservPage}
                  >
                    <span className="PageName">당일예약</span>
                  </button>
                </div>
              </div>
              <button
                className="frame-MyHomeAllReservButton"
                onClick={goToMyHomeAllReservPage}
              >
                <div className="nav-box">
                  <span className="PageName">예약조회</span>
                </div>
              </button>
            </div>
          </div>
          <div className="search-border">
            <div className="icon-search">
              <img className="vector" src={searchbar} alt={""} />
            </div>
            <div className="input-search">
              <span className="search">어떤 가게를 찾으세요?</span>
            </div>
          </div>
          <div className="header-inner-right">
            <button
              className="frame-MyHomeMainButton"
              onClick={goToMyHomeMainPage}
            >
              <div className="headerRightDiv">
                <div className="icon">
                  <img className="home" src={home} alt={""} />
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
                <span className="userId">김송은</span>
              </div>
            </div>
            <button className="log-out-but" onClick={goToMain}>
              <span className="logout">로그아웃</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
