import "./CustomerLoginPage.css";
import advert from "../../assets/Advert_image.png";
import line from "../../assets/Line_img.png";
import naver from "../../assets/Naver_icon.png";
import google from "../../assets/Google_icon.png";
import kakao from "../../assets/Kakao_icon.png";
import LoginPageNav from "../nav/LoginPageNav";

export default function CustomerLoginPage() {
  return (
    <div className="CustomerLoginPage">
      <div className="CustomerLoginPageBack">
        <LoginPageNav />
        <div className="container-1">
          <div className="CustomerLoginPageContainer">
            <div className="loginBox">
              <div className="line-5"></div>
              <div className="frame-10">
                <span className="container-2">개인회원</span>
                <span className="container-3">기업회원</span>
              </div>
              <div className="container-2">
                <div className="line-6"></div>
                <span className="container-4">소셜 계정으로 간편 로그인</span>
                <img className="line-7" src={line} alt={""} />
              </div>
              <div className="container-3">
                <div className="frame-12">
                  <img className="vector-1" src={naver} alt={""} />
                </div>
                <div className="frame-13">
                  <div className="rikakao-talk-fill">
                    <img className="vector-2" src={kakao} alt={""} />
                  </div>
                </div>
                <div className="frame-14">
                  <img
                    className="flat-color-iconsgoogle"
                    src={google}
                    alt={""}
                  />
                </div>
              </div>
            </div>
            <img className="rectangle-7" src={advert} alt={""} />
          </div>
        </div>
      </div>
    </div>
  );
}
