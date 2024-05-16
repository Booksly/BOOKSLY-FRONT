import "./StoreOwnerLogInPage.css";
import { useNavigate } from "react-router-dom";
import home from "../../assets/home_button.png";
import advert from "../../assets/Advert_image.png";

export default function StoreOwnerLogInPage() {
  return (
    <div className="back">
      <div className="StoreOwnerLogInPage">
        <div className="container">
          <div className="login-header">
            <div className="header-inner-left">
              <div className="logo-goto-home">
                <div className="image-13"></div>
              </div>
              <div className="header-buttons">
                <div className="nav-box">
                  <span className="container-12">가게조회</span>
                </div>
              </div>
            </div>
            <div className="header-inner-right">
              <div className="icon-home">
                <img className="vector" src={home} alt={""} />
              </div>
              <div className="go-mypage">
                <span className="container-11">북슬리 홈</span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="container-1">
              <div className="frame-511">
                <div className="frame-510">
                  <div className="line-5"></div>
                  <div className="frame-10">
                    <span className="container-1">개인회원</span>
                    <span className="container-2">기업회원</span>
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
                </div>
              </div>
              <div className="frame-109">
                <div className="container-8">회원가입</div>
                <span className="container-9">|</span>
                <div className="container-10">아이디/비밀번호 찾기</div>
              </div>
            </div>
            <img className="rectangle-7" src={advert} alt={""} />
          </div>
        </div>
      </div>
    </div>
  );
}
