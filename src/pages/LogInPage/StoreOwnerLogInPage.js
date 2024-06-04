import "./StoreOwnerLogInPage.css";
import React, { useState } from "react";
import LoginPageNav from "../nav/LoginPageNav";
import advert from "../../assets/Advert_image.png";
import { useNavigate } from "react-router-dom";

export default function StoreOwnerLogInPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

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
  const goToStoreMain = () => {
    navigate("/StoreOwnerMain");
  };

  const handleLogin = () => {
    const predefinedId = "booksly";
    const predefinedPassword = "240613ab!";

    if (id === predefinedId && password === predefinedPassword) {
      goToStoreMain();
    } else {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
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
                  <div className="Customer">개인회원</div>
                </button>
                <button
                  className="frame-StoreOwnerLoginButton"
                  onClick={goToStoreOwnerLogIn}
                >
                  <div className="StoreOwner">기업회원</div>
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
              <input
                className="frame-406"
                placeholder="아이디"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <input
                className="frame-407"
                placeholder="비밀번호"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="frame-408" onClick={handleLogin}>
                <div className="container-7">로그인</div>
              </button>
              <div className="frame-109">
                <button
                  className="frame-StoreOwnerMemRegistButton"
                  onClick={goToStoreOwnerMemRegist}
                >
                  <div className="container-8">회원가입</div>
                </button>
                <div className="container-9">|</div>
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
