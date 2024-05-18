import "./CustomerMemRegist1.css";
import advert from "../../assets/Advert_image.png";
import LoginPageNav from "../nav/LoginPageNav";
import { useNavigate } from "react-router-dom";

export default function CustomerMemRegist() {
  return (
    <div className="CustomerMemRegist1">
      <div className="CustomerMemRegist1Back">
        <LoginPageNav />
        <div className="CustomerMemRegist1Container">
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
        <img className="rectangle-7" src={advert} alt={""} />
      </div>
    </div>
  );
}
