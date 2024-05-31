import React, { useState } from "react";
import "./CustomerLoginPage.css";
import advert from "../../assets/Advert_image.png";
import line from "../../assets/Line_img.png";
import naver from "../../assets/Naver_icon.png";
import google from "../../assets/Google_icon.png";
import kakao from "../../assets/Kakao_icon.png";
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

  const KAKAO_AUTH_URL =
    "http://ec2-43-203-49-125.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/kakao";
  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
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
              <button className="Naver_Frame">
                <img className="N_Logo" src={naver} alt={""} />
              </button>
              <button onClick={kakaoLogin} className="Kakao_Frame">
                <img className="Kakao_Logo" src={kakao} alt={""} />
              </button>
              <div className="frame-14">
                <img className="Google_Logo" src={google} alt={""} />
              </div>
            </div>
          </div>
        </div>
        <img className="rectangle-7" src={advert} alt={""} />
      </div>
    </div>
  );
}
