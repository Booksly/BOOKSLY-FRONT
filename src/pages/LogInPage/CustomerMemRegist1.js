import "./CustomerMemRegist1.css";
import advert from "../../assets/Advert_image.png";
import home from "../../assets/home_button.png";
import { useNavigate } from "react-router-dom";

export default function CustomerMemRegist() {
  return (
    <div className="back">
      <div className="CustomerMemRegist">
        <div className="container">
          <div className="login-header">
            <div className="header-inner-left">
              <div className="logo-goto-home">
                <div className="image-13"></div>
              </div>
              <div className="header-buttons">
                <div className="nav-box">
                  <span className="container-7">가게조회</span>
                </div>
              </div>
            </div>
            <div className="header-inner-right">
              <div className="icon-home">
                <img className="vector" src={home} alt={""} />
              </div>
              <div className="go-mypage">
                <span className="container-6">북슬리 홈</span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="frame-511">
              <div className="frame-510">
                <div className="line-5"></div>
                <div className="frame-10">
                  <span className="container-1">개인회원</span>
                  <span className="container-2">기업회원</span>
                </div>
              </div>
              <div className="frame-77">
                <div className="frame-406">
                  <span className="container-3">북슬리 아이디 만들기</span>
                </div>
              </div>
              <div className="frame-109">
                <span className="container-4">이미 계정이 있나요?</span>
                <span className="container-5">로그인</span>
              </div>
            </div>
            <img className="rectangle-7" src={advert} alt={""} />
          </div>
        </div>
      </div>
    </div>
  );
}
