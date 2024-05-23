import "./LoginPageNav.css";
import home from "../../assets/home_button.png";
import { useNavigate } from "react-router-dom";

export default function LoginPageNav() {
  const navigate = useNavigate();
  const goToStoreSearchPage = () => {
    navigate("/StoreSearch");
  };
  return (
    <div className="LoginPageNav">
      <div className="LoginPageNavBack">
        <div className="LoginPageNavheader-inner-before">
          <div className="LoginPageNavheader-inner-left">
            <div className="LoginPageNavlogo-goto-home">
              <div className="LoginPageNavbooksly-logo"></div>
            </div>
            <div className="LoginPageNavheader-buttons">
              <div className="LoginPageNavcurrentNav">
                <div className="LoginPageNavcurrentPageBar">
                  <button
                    className="frame-StoreSearchButton"
                    onClick={goToStoreSearchPage}
                  >
                    <span className="LoginPageNavPageName">가게조회</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="LoginPageNavheader-inner-right">
            <div className="LoginPageNavheaderRightDiv">
              <div className="LoginPageNavicon">
                <img className="LoginPageNavhome" src={home} alt={""} />
              </div>
              <div className="LoginPageNavgo-mypage">
                <span className="LoginPageNavmy-page">북슬리 홈</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
