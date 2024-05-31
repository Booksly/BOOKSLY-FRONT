import "./StoreOwnerMemRegist.css";
import React, {useState} from "react";
import LoginPageNav from "../nav/LoginPageNav";
import { useNavigate } from "react-router-dom";

export default function StoreOwnerMemRegist() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [businessNum, setBusinessNum] = useState('')
  const [phone, setPhone] = useState('')
  const [authentication, setAuthentication] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate();
  const goToThisPage = () => {
    navigate("/StoreOwnerMemRegist");
  };
  const goToStoreOwnerLogInPage = () => {
    navigate("/StoreOwnerLogin");
  };
  const goToStoreRegistPage = () => {
    navigate("/StoreRegist");
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
                      <div className="SOMRcontainer-3">북슬리 아이디 만들기</div>
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
              <div className="SOMRframe-535">
                <div className="SOMRidBox">
                  <div className="SOMRframe-524">
                    <div className="SOMRcontainer-17">아이디</div>
                    <div className="SOMR-id-button">
                      <input className="SOMRframe-4061"
                             placeholder="4~20자리 / 영문, 숫자, 특수문자 ‘_’ 사용가능"
                             value={id}
                             onChange={(e) => setId(e.target.value)}/>
                      <button className="SOMR-idbutton">중복확인</button>
                    </div>
                  </div>
                </div>
                <div className="SOMRframe-526">
                  <div className="SOMRcontainer-19">비밀번호</div>
                  <input className="SOMRframe-512"
                         type={password}
                         placeholder="8~16자리 / 영문 대소문자, 숫자, 특수문자 조합"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="SOMRframe-529">
                  <div className="SOMRcontainer-20">사업자 번호</div>
                  <div className="SOMRframe-528">
                    <input className="SOMRframe-4061"
                    placeholder="000-00-00000 형태로 입력"
                    value={businessNum}
                    onChange={(e) => setBusinessNum(e.target.value)}/>
                    <button className="SOMR-idbutton">조회
                    </button>
                  </div>
                </div>
                <div className="SOMRframe-533">
                  <div className="SOMRcontainer-21">휴대폰</div>
                  <div className="SOMRframe-531">
                    <input className="SOMRframe-4061"
                    placeholder="‘-’빼고 숫자만 입력"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}/>
                    <button className="SOMR-idbutton">인증
                    </button>
                  </div>
                  <div className="SOMRframe-532">
                    <input className="SOMRframe-4061"
                    placeholder="인증번호 입력"
                    value={authentication}
                    onChange={(e) => setAuthentication(e.target.value)}/>
                    <button className="SOMR-idbutton">인증하기
                    </button>
                  </div>
                </div>
                <div className="SOMRframe-534">
                  <div className="SOMRcontainer-22">이메일</div>
                  <input className="SOMRframe-519" type="email"
                  placeholder="booksly@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}>
                    {/*<div className="SOMRbookslyemail-com">booksly@email.com</div>*/}
                  </input>
                </div>
              </div>
            </div>
          </div>
          <div className="SOMRframe-520">
            <button className="SOMRframe-StoreRegistButton"
                    onClick={goToStoreRegistPage}
            > 가게등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
