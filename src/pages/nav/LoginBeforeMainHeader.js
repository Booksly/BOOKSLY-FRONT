import './LoginBeforeMainHeader.css'
import searchbar from "../../assets/search_button.png";

export default function LoginBeforeMainHeader() {
    return (
        <div className="back">
        <div className="LoginBeforeMainHeader">
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
                        <div className="nav-box">
                        <span className="PageName">
                            당일예약
                        </span>
                        </div>
                        <div className="nav-box">
                        <span className="PageName">
                            예약조회
                        </span>
                        </div>
                    </div>
                </div>
                <div className="search-border">
                    <div className="icon-search">
                        <img className="vector" src={searchbar} alt={''}/>
                    </div>
                    <div className="input-search">
                    <span className="search">
                        어떤 가게를 찾으세요?
                    </span>
                    </div>
                </div>
                <div className="header-inner-right">
                    <div className="loginButton">
                        <span className="login">
                            로그인
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}