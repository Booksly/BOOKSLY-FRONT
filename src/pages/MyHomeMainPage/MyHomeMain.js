import './MyHomeMain.css'
import searchbar from "../../assets/search_button.png";
import polygon from "../../assets/polygon.png";

export default function MyHomeMain() {
    return (
        <div className="MyHomeMain">
            <div className="containerAll">
                <div className="frameNavi">
                    <div className="cpnavi-logo">
                        <div className="logo">
                        </div>
                        <div className="logoLine">
                        </div>
                    </div>
                    <div className="cpnaviAll">
                        <div className="cpnaviBar">
                            <div className="cpnaviLineTop">
                            </div>
                            <div className="cpnaviSearchName">
                                <img className="search" src={searchbar} alt={''}/>
                                <div className="cpnaviName">
                                    My 홈
                                </div>
                            </div>
                            <div className="cpnaviLineBottom">
                            </div>
                        </div>
                        <div className="cpnaviBar">
                            <div className="cpnaviLineTop">
                            </div>
                            <div className="cpnaviSearchName">
                                <img className="search" src={searchbar} alt={''}/>
                                <div className="cpnaviName">
                                    My 예약조회
                                </div>
                            </div>
                            <div className="cpnaviLineBottom">
                            </div>
                        </div>
                        <div className="cpnaviBarSub">
                            <div className="cpnaviLineTop">
                            </div>
                            <div className="cpnaviPolName">
                                <img className="polygon" src={polygon} alt={''}/>
                                <div className="cpnaviNameSub">
                                    전체 예약 조회
                                </div>
                            </div>
                            <div className="cpnaviLineBottomSub">
                            </div>
                        </div>
                        <div className="cpnaviBarSub">
                            <div className="cpnaviLineTop">
                            </div>
                            <div className="cpnaviPolName">
                                <img className="polygon" src={polygon} alt={''}/>
                                <div className="cpnaviNameSub">
                                    현재 예약 조회
                                </div>
                            </div>
                            <div className="cpnaviLineBottomSub">
                            </div>
                        </div>
                        <div className="cpnaviBar">
                            <div className="cpnaviLineTop">
                            </div>
                            <div className="cpnaviSearchName">
                                <img className="search" src={searchbar} alt={''}/>
                                <div className="cpnaviName">
                                    단골 가게 조회
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cpnaviLine">
                    </div>
                    <div className="line">
                    </div>
                </div>
                <div className="container">
                <div className="cptop-bar">
                        <div className="container-9">
                            <div className="goto-mypage">
                                <div className="icon-home">
                                    {/*<img className="vector-3" src="assets/vectors/Vector125_x2.svg" />*/}
                                </div>
                                <div className="go-mypage">
                  <span className="my-page">
                    My Page
                  </span>
                                </div>
                            </div>
                            <div className="notice-todo">
                                <div className="icon-alect">
                                    <div className="container-11">
                                    </div>
                                </div>
                                <div className="user-id">
                  <span className="container-12">
                    김아무개
                  </span>
                                </div>
                            </div>
                            <div className="log-out-but">
                <span className="container-13">
                  로그아웃
                </span>
                            </div>
                        </div>
                        <div className="frame-3">
                            <div className="container-14">
                            </div>
                            <div className="container-15">
                                <div className="container-16">
                                    김아무개
                                </div>
                                <div className="container-17">
                  <span className="container-18">
                    방문 10
                  </span>
                                    <span className="container-19">
                    리뷰 5
                  </span>
                                    <span className="container-20">
                    단골가게 2
                  </span>
                                </div>
                                <span className="container-21">
                  이메일정보
                </span>
                            </div>
                        </div>
                    </div>
                    <div className="frame-418">
                        <div className="frame-411">
                            <div className="containerPhone">
                                전화번호
                            </div>
                            <div className="at-num">
                                <div className="frame-408">
                                    <div className="frame-403">
                    <span className="container-1">
                      ‘-’ 빼고 숫자만 입력
                    </span>
                                    </div>
                                    <div className="frame-404">
                    <span className="container-2">
                      인증요청
                    </span>
                                    </div>
                                </div>
                                <div className="frame-409">
                                    <div className="frame-407">
                    <span className="container-3">
                      인증번호 입력
                    </span>
                                    </div>
                                    <div className="frame-405">
                    <span className="container-4">
                      인증하기
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-417">
                            <div className="container-5">
                                닉네임 변경
                            </div>
                            <div className="frame-406">
                <span className="container-6">
                  김아무개
                </span>
                            </div>
                        </div>
                        <div className="frame-420">
                            <div className="frame-4181">
                <span className="container-7">
                  저장하기
                </span>
                            </div>
                            <div className="frame-419">
                <span className="container-8">
                  회원 탈퇴
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}