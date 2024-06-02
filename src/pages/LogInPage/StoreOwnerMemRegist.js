import "./StoreOwnerMemRegist.css";
import React, { useState } from "react";
import LoginPageNav from "../nav/LoginPageNav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function StoreOwnerMemRegist() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [businessNumber, setBusinessNumber] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [authentication, setAuthentication] = useState("");
  const [email, setEmail] = useState("");
  const [isVerify, setIsVerify] = useState(false);

  const navigate = useNavigate();
  const goToThisPage = () => {
    navigate("/StoreOwnerMemRegist");
  };
  const goToStoreOwnerLogInPage = () => {
    navigate("/StoreOwnerLogin");
  };

  const handlePhoneVerify = async () => {
    try {
      const phoneRegex = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
      if (!phoneRegex.test(phoneNum)) {
        alert("올바른 전화번호 형식을 입력하세요.");
        return;
      }

      const formattedPhone = phoneNum.replace(/-/g, "");
      console.log("Sending request to API with phone number:", formattedPhone);
      const response = await axios.post(
        "https://api.bookslyserver.shop/api/auth/verify/owner/send-sms",
        { receivingNumber: formattedPhone },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Response received:", response);
      console.log("Response data:", response.data);
      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      if (
        response.status === 200 &&
        response.data.message === "요청이 성공했습니다."
      ) {
        alert("인증 번호가 전송되었습니다!");
      } else {
        console.log("Failed response data:", response.data);
        alert(
          "인증 번호 전송에 실패했습니다. 메시지: " + response.data.message
        );
      }
    } catch (error) {
      console.error("Error response data:", error.response?.data);
      alert(
        "오류가 발생했습니다: " +
          (error.response?.data.message || error.message)
      );
    }
  };

  const handleVerifyCode = async () => {
    try {
      const response = await axios.post(
        "https://api.bookslyserver.shop/api/auth/verify/owner",
        {
          code: authentication,
          receivingNumber: phoneNum.replace(/-/g, ""),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Verify response received:", response);
      console.log("Verify response data:", response.data);
      console.log("Verify response status:", response.status);
      console.log("Verify response headers:", response.headers);

      if (
        response.status === 200 &&
        response.data.message === "요청이 성공했습니다."
      ) {
        alert("휴대폰 인증에 성공했습니다!");
        setIsVerify(true);
      } else {
        console.log("Failed verify response data:", response.data);
        alert("휴대폰 인증에 실패했습니다. 메시지: " + response.data.message);
      }
    } catch (error) {
      // 에러 로그
      console.error("Error occurred:", error);
      if (error.response) {
        console.error("Error response data:", error.response.data);
        alert("오류가 발생했습니다: " + error.response.data.message);
      } else {
        alert("오류가 발생했습니다: " + error.message);
      }
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const data = {
        loginId: id,
        password,
        businessNumber,
        phoneNum,
        isVerify,
        email,
      };

      // 요청 본문 데이터 확인
      console.log("Request data:", data);
      console.log("loginId:", id);
      console.log("password:", password);
      console.log("businessNumber:", businessNumber);
      console.log("phoneNum:", phoneNum);
      console.log("isVerify:", isVerify);
      console.log("email:", email);

      const response = await axios.post(
        "http://api.bookslyserver.shop/api/auth/owner",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response received:", response);

      if (response.data.status === 0) {
        alert("회원가입에 성공했습니다!");
        navigate("/StoreRegist"); // 회원가입 성공 시 가게 등록 페이지로 이동
      } else {
        alert("회원가입에 실패했습니다: " + response.data.message);
      }
    } catch (error) {
      // 에러 로그
      console.error("Error occurred:", error);
      console.error("Error response data:", error.response?.data);
      alert("오류가 발생했습니다: " + error.message);
    }
  };

  return (
    <div className="StoreOwnerMemRegist">
      <div className="StoreOwnerMemRegistBack">
        <LoginPageNav />
        <div className="SOMRcontainer">
          <div className="SOMRallcontentcontainer">
            <div className="SOMRleftcontentcontainer">
              <div className="SOMRIdMaking_Box">
                <div className="SOMRframe-510">
                  <div className="SOMRline-5"></div>
                  <div className="SOMRframe-10">
                    <div className="SOMRCustomer">개인회원</div>
                    <div className="SOMRStoreOwner">기업회원</div>
                  </div>
                </div>

                <div className="SOMRframe-77">
                  <button
                    className="SOMRframe-ThisPageButton"
                    onClick={goToThisPage}
                  >
                    <div className="SOMRframe-406">
                      <div className="SOMRcontainer-3">
                        북슬리 아이디 만들기
                      </div>
                    </div>
                  </button>
                </div>

                <div className="SOMRframe-109">
                  <div className="SOMRcontainer-4">이미 계정이 있나요?</div>
                  <button
                    className="SOMRframe-StoreOwnerLoginButton"
                    onClick={goToStoreOwnerLogInPage}
                  >
                    <div className="SOMRcontainer-5">로그인</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="SOMRrightcontentcontainer">
              <div className="SOMRcontainer-18">회원가입</div>
              <form onSubmit={handleRegister}>
                <div className="SOMRframe-535">
                  <div className="SOMRidBox">
                    <div className="SOMRframe-524">
                      <div className="SOMRcontainer-17">아이디</div>
                      <div className="SOMR-id-button">
                        <input
                          className="SOMRframe-4061"
                          placeholder="4~20자리 / 영문, 숫자, 특수문자 ‘_’ 사용가능"
                          value={id}
                          onChange={(e) => setId(e.target.value)}
                          required
                        />
                        <button className="SOMR-idbutton">중복확인</button>
                      </div>
                    </div>
                  </div>
                  <div className="SOMRframe-526">
                    <div className="SOMRcontainer-19">비밀번호</div>
                    <input
                      className="SOMRframe-512"
                      type="password"
                      placeholder="8~16자리 / 영문 대소문자, 숫자, 특수문자 조합"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,16}"
                      title="8~16자리 / 영문 대소문자, 숫자, 특수문자 조합"
                      required
                    />
                  </div>
                  <div className="SOMRframe-529">
                    <div className="SOMRcontainer-20">사업자 번호</div>
                    <div className="SOMRframe-528">
                      <input
                        className="SOMRframe-4061"
                        placeholder="000-00-0000 형태로 입력"
                        value={businessNumber}
                        onChange={(e) => setBusinessNumber(e.target.value)}
                        pattern="\d{3}-\d{2}-\d{4}"
                        title="000-00-0000 형태로 입력"
                        required
                      />
                      <button className="SOMR-idbutton">조회</button>
                    </div>
                  </div>

                  <div className="SOMRframe-533">
                    <div className="SOMRcontainer-21">휴대폰</div>
                    <div className="SOMRframe-531">
                      <input
                        className="SOMRframe-4061"
                        placeholder="‘-’빼고 숫자만 입력"
                        value={phoneNum}
                        onChange={(e) => setPhoneNum(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="SOMR-idbutton"
                        onClick={handlePhoneVerify}
                      >
                        인증
                      </button>
                    </div>
                    <div className="SOMRframe-532">
                      <input
                        className="SOMRframe-4061"
                        placeholder="인증번호 입력"
                        value={authentication}
                        onChange={(e) => setAuthentication(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="SOMR-idbutton"
                        onClick={handleVerifyCode}
                      >
                        인증하기
                      </button>
                    </div>
                  </div>
                  <div className="SOMRframe-534">
                    <div className="SOMRcontainer-22">이메일</div>
                    <input
                      className="SOMRframe-519"
                      type="email"
                      placeholder="booksly@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    >
                      {/*<div className="SOMRbookslyemail-com">booksly@email.com</div>*/}
                    </input>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="SOMRframe-520">
            <button
              type="button"
              className="SOMRframe-StoreRegistButton"
              onClick={handleRegister}
            >
              가게등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
