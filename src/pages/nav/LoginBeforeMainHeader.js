import "./LoginBeforeMainHeader.css";
import searchbar from "../../assets/search_button.png";
import { useNavigate } from "react-router";
export default function LoginBeforeMainHeader() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/");
  };
  const goToMyHome = () => {
    navigate("/MyHomeMain");
  };
  const StoreSearch = () => {
    navigate("/StoreSearch");
  };
  const TodayReserv = () => {
    navigate("/TodayReserv");
  };
  const searchReserve = () => {
    navigate("/Reservation");
  };
  const goTologin = () => {
    navigate("/CustomerLogin");
  };
  return (
    <div className="back">
      <div className="LoginBeforeMainHeader">
        <div className="header-inner-before">
          <div className="header-inner-left">
            <div className="logo-goto-home">
              <button className="booksly-logo" onClick={goToMain}></button>
            </div>
            <div className="header-buttons">
              <button className="nav-box" onClick={StoreSearch}>
                <span className="PageName">가게조회</span>
              </button>
              <button className="nav-box" onClick={TodayReserv}>
                <span className="PageName">당일예약</span>
              </button>
              <button className="nav-box" onClick={searchReserve}>
                <span className="PageName">예약조회</span>
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
            <button className="loginButton" onClick={goTologin}>
              <span className="login">로그인</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
