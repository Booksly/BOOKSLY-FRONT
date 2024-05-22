import "./StoreOwnerMemRegist.css";
import LoginPageNav from "../nav/LoginPageNav";

export default function StoreOwnerMemRegist() {
  return (
    <div className="StoreOwnerMemRegist">
      <div className="StoreOwnerMemRegistBack">
        <LoginPageNav />
        <div className="content">
          <div className="StoreOwnerMemRegistContainer_1">
            <div className="IdMaking_Box">
              <div className="frame-510">
                <div className="line-5"></div>
                <div className="frame-10">
                  <span className="Customer">개인회원</span>
                  <span className="StoreOwner">기업회원</span>
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
          </div>
          <div className="StoreOwnerMemRegistContainer_2">
            <div className="frame-18>">
              <div className="container-18">회원가입</div>
            </div>
            <div className="frame-535">
              <div className="frame-524">
                <div className="container-17">아이디</div>
                <div className="frame-4061">
                  <span className="container-6">
                    4~20자리 / 영문, 숫자, 특수문자 ‘_’ 사용가능
                  </span>
                </div>
              </div>
              <div className="frame-526">
                <div className="container-19">비밀번호</div>
                <div className="frame-512">
                  <span className="container-7">
                    8~16자리 / 영문 대소문자, 숫자, 특수문자 조합
                  </span>
                </div>
              </div>
              <div className="frame-529">
                <div className="container-20">사업자 번호</div>
                <div className="frame-528">
                  <div className="frame-513">
                    <span className="container-8">
                      000-00-00000 형태로 입력
                    </span>
                  </div>
                  <div className="frame-514">
                    <span className="container-9">조회</span>
                  </div>
                </div>
              </div>
              <div className="frame-533">
                <div className="container-21">휴대폰</div>
                <div className="frame-531">
                  <div className="frame-515">
                    <span className="container-10">‘-’빼고 숫자만 입력</span>
                  </div>
                  <div className="frame-516">
                    <span className="container-11">인증</span>
                  </div>
                </div>
                <div className="frame-532">
                  <div className="frame-517">
                    <span className="container-12">인증번호 입력</span>
                  </div>
                  <div className="frame-518">
                    <span className="container-13">인증하기</span>
                  </div>
                </div>
              </div>
              <div className="frame-534">
                <div className="container-22">이메일</div>
                <div className="frame-519">
                  <span className="bookslyemail-com">booksly@email.com</span>
                </div>
              </div>
            </div>
            <div className="frame-520">
              <span className="container-14">가게 등록</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
