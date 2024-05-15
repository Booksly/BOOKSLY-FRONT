import './ShopOwnerLeftNavi.css'
import searchbar from "../../assets/search_button.png";
import polygon from "../../assets/polygon.png";

export default function ShopOwnerLeftNavi() {
    return (
        <div className="back">
        <div className="ShopOwnerLeftNavi">
            <div className="cpsk-navi">
                <div className="container">
                    <div className="cpnavi-logo">
                        <div className="booksly-logo">
                        </div>
                        <div className="logoLine">
                        </div>
                    </div>
                    <div className="cpsk-navi-bar">
                        <div className="cpnavi-bar">
                            <div className="cpnaviLineTop">
                            </div>
                            <div className="cp-navi-search-name">
                                <img className="search" src={searchbar} alt={''}/>
                                <div className="cpnaviName">
                                    가게 상세 페이지
                                </div>
                            </div>
                            <div className="cpnaviLineBottom">
                            </div>
                        </div>
                        <div className="cpnavi-bar">
                            <div className="cpnaviLineTop">
                            </div>
                            <div className="cp-navi-search-name">
                                <img className="search" src={searchbar} alt={''}/>
                                <div className="cpnaviName">
                                    My 가게 리뷰
                                </div>
                            </div>
                            <div className="cpnaviLineBottom">
                            </div>
                        </div>
                        <div className="cpnavi-bar">
                            <div className="cpnaviLineTop">
                            </div>
                            <div className="cp-navi-search-name">
                                <img className="search" src={searchbar} alt={''}/>
                                <div className="cpnaviName">
                                    예약 확인
                                </div>
                            </div>
                            <div className="cpnaviLineBottom">
                            </div>
                        </div>
                        <div className="cpnavi-bar">
                            <div className="cpnaviLineTop">
                            </div>
                            <div className="cp-navi-allow">
                                <img className="polygon" src={polygon} alt={''}/>
                                <div className="cpnaviNamecpnaviName">
                                    오늘 예약
                                </div>
                            </div>
                            <div className="cpnaviLineBottom">
                            </div>
                        </div>
                        <div className="cpnavi-bar">
                            <div className="cpnaviLineTop">
                            </div>
                            <div className="cp-navi-allow">
                                <img className="polygon" src={polygon} alt={''}/>
                                <div className="cpnaviNamecpnaviName">
                                    전체 예약
                                </div>
                            </div>
                            <div className="cpnaviLineBottom">
                            </div>
                        </div>
                        <div className="cpnavi-bar">
                            <div className="cpnaviLineTop">
                            </div>
                            <div className="cp-navi-allow">
                                <img className="polygon" src={polygon} alt={''}/>
                                <div className="cpnaviNamecpnaviName">
                                    확정 대기 예약
                                </div>
                            </div>
                            <div className="cpnaviLineBottom">
                            </div>
                        </div>
                        <div className="cpnavi-bar">
                            <div className="cpnaviLineTop">
                            </div>
                            <div className="cp-navi-search-name">
                                <img className="search" src={searchbar} alt={''}/>
                                <div className="cpnaviName">
                                    예약 설정
                                </div>
                            </div>
                            <div className="cpnaviLineBottom">
                            </div>
                        </div>
                        <div className="cpnavi-bar">
                            <div className="cpnaviLineTop">
                            </div>
                            <div className="cp-navi-search-name">
                                <img className="search" src={searchbar} alt={''}/>
                                <div className="cpnaviName">
                                    메뉴 관리
                                </div>
                            </div>
                            <div className="cpnaviLineBottom">
                            </div>
                        </div>
                        <div className="cpnavi-bar">
                            <div className="cpnaviLineTop">
                            </div>
                            <div className="cp-navi-allow">
                                <img className="polygon" src={polygon} alt={''}/>
                                <div className="cpnaviNamecpnaviName">
                                    일반 메뉴
                                </div>
                            </div>
                            <div className="cpnaviLineBottom">
                            </div>
                        </div>
                        <div className="cpnavi-bar">
                            <div className="cpnaviLineTop">
                            </div>
                            <div className="cp-navi-allow">
                                <img className="polygon" src={polygon} alt={''}/>
                                <div className="cpnaviNamecpnaviName">
                                    이벤트 메뉴
                                </div>
                            </div>
                            <div className="cpnaviLineBottom">
                            </div>
                        </div>
                        <div className="cpnavi-bar">
                            <div className="cpnaviLineTop">
                            </div>
                            <div className="cp-navi-search-name">
                                <img className="search" src={searchbar} alt={''}/>
                                <div className="cpnaviName">
                                    직원 관리
                                </div>
                            </div>
                            <div className="cpnaviLineBottom">
                            </div>
                        </div>
                        <div className="cpnavi-bar">
                            <div className="cpnaviLineTop">
                            </div>
                            <div className="cp-navi-search-name">
                                <img className="search" src={searchbar} alt={''}/>
                                <div className="cpnaviName">
                                    설정
                                </div>
                            </div>
                            <div className="cpnaviLineBottom">
                            </div>
                        </div>
                    </div>
                    <div className="naviBottomLine">
                    </div>
                </div>
                <div className="line">
                </div>
            </div>
        </div>
        </div>
    )
}