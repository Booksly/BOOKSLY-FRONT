import './MyHomeLeftNavi.css'
import searchbar from "../../assets/search_button.png";
import polygon from "../../assets/polygon.png";

export default function MyHomeLeftNavi() {
    return (
        <div className="back">
            <div className="MyHomeLeftNavi">
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
                                        My 홈
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
                                        My 예약 조회
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
                                        전체 예약 조회
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
                                        현재 예약 조회
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
                                        단골 가게 조회
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