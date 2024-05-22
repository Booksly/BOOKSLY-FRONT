import "./LoginAfterTodayReservNav.css";
import searchbar from "../../assets/search_button.png";
import home from "../../assets/home_button.png";

export default function LoginAfterTodayReservNav() {
  return (
    <div className="back">
      <div className="LoginAfterTodayReservNav">
        <div className="header-inner">
          <div className="header-inner-left">
            <div className="logo-goto-home">
              <div className="booksly-logo"></div>
            </div>
            <div className="header-buttons">
              <div className="nav-box">
                <span className="PageName">가게조회</span>
              </div>
              <div className="currentNav">
                <div className="currentPageBar">
                  <span className="PageName">당일예약</span>
                </div>
              </div>
              <div className="nav-box">
                <span className="PageName">예약조회</span>
              </div>
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
            <div className="headerRightDiv">
              <div className="icon">
                <img className="home" src={home} alt={""} />
              </div>
              <div className="go-mypage">
                <span className="my-page">My Page</span>
              </div>
            </div>
            <div className="headerRightDiv">
              <div className="icon">
                <div className="alarmIcon"></div>
              </div>
              <div className="user-id">
                <span className="userId">김아무개</span>
              </div>
            </div>
            <div className="log-out-but">
              <span className="logout">로그아웃</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
