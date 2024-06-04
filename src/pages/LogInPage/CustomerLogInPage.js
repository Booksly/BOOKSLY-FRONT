import React from "react";
import "./CustomerLoginPage.css";
import advert from "../../assets/Advert_image.png";
import line from "../../assets/Line_img.png";
import naver from "../../assets/naverIcon.png";
import google from "../../assets/googleIcon.png";
import kakao from "../../assets/kakaoIcon.png";
import LoginPageNav from "../nav/LoginPageNav";
import { useNavigate } from "react-router-dom";

export default function CustomerLoginPage() {
  const navigate = useNavigate();
  const goToCustomerLogIn = () => {
    navigate("/CustomerLogIn");
  };
  const goToStoreOwnerLogIn = () => {
    navigate("/StoreOwnerLogIn");
  };

  const NAVER_AUTH_URL =
    "https://api.bookslyserver.shop/oauth2/authorization/naver";
  const naverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };
  const KAKAO_AUTH_URL =
    "https://api.bookslyserver.shop/oauth2/authorization/kakao";
  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  const GOOGLE_AUTH_URL =
    "https://api.bookslyserver.shop/oauth2/authorization/google";
  const googleLogin = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };

  return (
    <div className="CustomerLoginPage">
      <div className="CustomerLoginPageBack">
        <LoginPageNav />
        <div className="CustomerLoginPageContainer">
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
            <div className="container-2">
              <div className="line-6"></div>
              <span className="container-4">소셜 계정으로 간편 로그인</span>
              <img className="line-7" src={line} alt={""} />
            </div>
            <div className="Logo_Container">
              <button onClick={naverLogin} className="Naver_Frame">
                <img className="N_Logo" src={naver} alt={""} />
              </button>
              <button onClick={kakaoLogin} className="Kakao_Frame">
                <img className="Kakao_Logo" src={kakao} alt={""} />
              </button>
              <button onClick={googleLogin} className="Google_Frame">
                <img className="Google_Logo" src={google} alt={""} />
              </button>
            </div>
          </div>
        </div>
        <img className="rectangle-7" src={advert} alt={""} />
      </div>
    </div>
  );
}
