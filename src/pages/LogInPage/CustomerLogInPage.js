import "./CustomerLoginPage.css";
import Advert_img from "../../assets/Advert_image.png";
import home_button from "../../assets/home_button.png";

export default function CustomerLoginPage() {
  return (
    <div className="CustomerLoginPage">
      <div className="container-1">
        <img className="rectangle-7" src={Advert_img} alt={""} />
        <div className="login-header">
          <div className="header-inner-left">
            <div className="logo-goto-home">
              <div className="image-13"></div>
            </div>
            <div className="header-buttons">
              <div className="nav-box">
                <span className="container-5">가게조회</span>
              </div>
            </div>
          </div>
          <div className="header-inner-right">
            <div className="icon-home">
              <img className="vector" src={home_button} alt={""} />
            </div>
            <div className="go-mypage">
              <span className="container">북슬리 홈</span>
            </div>
          </div>
        </div>
        <div className="line-5"></div>
        <div className="frame-10">
          <span className="container-2">개인회원</span>
          <span className="container-3">기업회원</span>
        </div>
        <div className="container-1">
          <div className="line-6"></div>
          <span className="container-4">소셜 계정으로 간편 로그인</span>
          <img className="line-7" src="assets/vectors/Unknown" />
        </div>
        <div className="container">
          <div className="container-2">
            <div className="frame-12">
              <img className="vector-1" src="assets/vectors/Unknown" />
            </div>
            <div className="frame-13">
              <div className="rikakao-talk-fill">
                <img className="vector-2" src="assets/vectors/Unknown" />
              </div>
            </div>
            <div className="frame-14">
              <img
                className="flat-color-iconsgoogle"
                src="assets/vectors/Unknown"
              />
            </div>
          </div>
          <img className="vector-7" src="assets/vectors/Unknown" />
        </div>
      </div>
    </div>
  );
}
