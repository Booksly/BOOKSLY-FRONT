import './LoginPageNav.css'
import searchbar from "../../assets/search_button.png";
import home from "../../assets/home_button.png";

export default function LoginPageNav() {
    return (
        <div className="LoginPageNav">
            <div className="LoginPageNavBack">
                <div className="header-inner-before">
                    <div className="header-inner-left">
                        <div className="logo-goto-home">
                            <div className="booksly-logo">
                            </div>
                        </div>
                        <div className="header-buttons">
                            <div className="currentNav">
                                <div className="currentPageBar">
                                    <span className="PageName">
                                        가게조회
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-inner-right">
                        <div className="headerRightDiv">
                            <div className="icon">
                                <img className="home" src={home} alt={''}/>
                            </div>
                            <div className="go-mypage">
                                <span className="my-page">
                                    북슬리 홈
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}