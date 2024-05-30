import "./StoreOwnerLogInPage.css";
import LoginPageNav from "../nav/LoginPageNav";
import advert from "../../assets/Advert_image.png";
import { useNavigate } from "react-router-dom";

export default function StoreOwnerLogInPage() {
  const navigate = useNavigate();
  const goToStoreOwnerMemRegist = () => {
    navigate("/StoreOwnerMemRegist");
  };
  const goToCustomerLogIn = () => {
    navigate("/CustomerLogIn");
  };
  const goToStoreOwnerLogIn = () => {
    navigate("/StoreOwnerLogIn");
  };
  return (
    <div className="StoreOwnerLogInPage">
      <div className="StoreOwnerLogInPageBack">
        <LoginPageNav />
        <div className="StoreOwnerLogInPageContainer">
          <div className="LogIn_Box">
            <div className="frame-510">
              <div className="line-5"></div>
              <div className="frame-10">
                <button
                  className="frame-CustomerLoginButton"
                  onClick={goToCustomerLogIn}
                >
                  <span className="Customer">개인회원</span>
                </button>
                <button
                  className="frame-StoreOwnerLoginButton"
                  onClick={goToStoreOwnerLogIn}
                >
                  <span className="StoreOwner">기업회원</span>
                </button>
              </div>
            </div>
            <div className="frame-77">
              <div className="frame-56">
                <div className="frame-508">
                  <div className="rectangle-16"></div>
                  <div className="container-3">로그인 유지</div>
                </div>
                <div className="frame-509">
                  <div className="rectangle-17"></div>
                  <div className="container-4">아이디 저장</div>
                </div>
              </div>
              <div className="frame-406">
                <span className="container-5">아이디</span>
              </div>
              <div className="frame-407">
                <span className="container-6">비밀번호</span>
              </div>
              <div className="frame-408">
                <span className="container-7">로그인</span>
              </div>
              <div className="frame-109">
                <button
                  className="frame-StoreOwnerMemRegistButton"
                  onClick={goToStoreOwnerMemRegist}
                >
                  <div className="container-8">회원가입</div>
                </button>
                <span className="container-9">|</span>
                <div className="container-10">아이디/비밀번호 찾기</div>
              </div>
            </div>
          </div>
        </div>
        <img className="rectangle-7" src={advert} alt={""} />
      </div>
    </div>
  );
}
