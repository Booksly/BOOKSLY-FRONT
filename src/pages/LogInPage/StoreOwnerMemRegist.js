import "./StoreOwnerMemRegist.css";
import React, {useState} from "react";
import LoginPageNav from "../nav/LoginPageNav";
import { useNavigate } from "react-router-dom";

export default function StoreOwnerMemRegist() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
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
                      </div>
                      <button className="SOMR-idbutton">중복확인</button>
                  </div>
                </div>
                <div className="SOMRframe-526">
                  <div className="SOMRcontainer-19">비밀번호</div>
                  <div className="SOMRframe-512">
                    <div className="SOMRcontainer-7">
                      8~16자리 / 영문 대소문자, 숫자, 특수문자 조합
                    </div>
                  </div>
                </div>
                <div className="SOMRframe-529">
                  <div className="SOMRcontainer-20">사업자 번호</div>
                  <div className="SOMRframe-528">
                    <div className="SOMRframe-513">
                      <div className="SOMRcontainer-8">
                        000-00-00000 형태로 입력
                      </div>
                    </div>
                    <div className="SOMRframe-514">
                      <div className="SOMRcontainer-9">조회</div>
                    </div>
                  </div>
                </div>
                <div className="SOMRframe-533">
                  <div className="SOMRcontainer-21">휴대폰</div>
                  <div className="SOMRframe-531">
                    <div className="SOMRframe-515">
                      <div className="SOMRcontainer-10">‘-’빼고 숫자만 입력</div>
                    </div>
                    <div className="SOMRframe-516">
                      <div className="SOMRcontainer-11">인증</div>
                    </div>
                  </div>
                  <div className="SOMRframe-532">
                    <div className="SOMRframe-517">
                      <div className="SOMRcontainer-12">인증번호 입력</div>
                    </div>
                    <div className="SOMRframe-518">
                      <div className="SOMRcontainer-13">인증하기</div>
                    </div>
                  </div>
                </div>
                <div className="SOMRframe-534">
                  <div className="SOMRcontainer-22">이메일</div>
                  <div className="SOMRframe-519">
                    <div className="SOMRbookslyemail-com">booksly@email.com</div>
                  </div>
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
