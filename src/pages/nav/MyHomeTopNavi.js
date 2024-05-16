import './MyHomeTopNavi.css'
import bottomAllow from "../../assets/bottomAllow.png";

export default function MyHomeTopNavi() {
    return (
        <div className="back">
            <div className="MyHomeTopNavi">
                <div className="myhome-top-navi">
                    <div className="myhome-top-navi-top">
                        <div className="myhomeTopNaviEtc">
                            <div className="myhome">
                                <div className="myhomeButton">
                                </div>
                                <div className="container-3">
                                    My Page
                                </div>
                            </div>
                            <div className="alarm">
                                <div className="alarm-button">
                                </div>
                                <div className="alarmId">
                                    아이디
                                </div>
                            </div>
                            <div className="logoutButton">
                                로그아웃
                            </div>
                        </div>
                    </div>
                    <div className="myhome-top-navi-bottom">
                        <div className="myhome-top-navi-member-info">
                            <div className="myhome-top-navi-profile">
                                {/*<div className="profileSelectButton">*/}
                                {/*</div>*/}
                                <div className="profile">
                                </div>
                            </div>
                            <div className="member-info">
                                <div className="myhome-top-navi-id">
                                    <span className="profileId">
                                        아이디
                                    </span>
                                </div>
                                <div className="numerical-summary">
                                    <div className="visit">
                                        <div className="container-9">
                                            방문
                                        </div>
                                        <div className="visitNum">
                                            10
                                        </div>
                                    </div>
                                    <div className="myhomeReview">
                                        <span className="container-10">
                                            리뷰
                                        </span>
                                        <span className="myhomeReviewNum">
                                            5
                                        </span>
                                    </div>
                                    <div className="regular-shop">
                                        <span className="container-11">
                                            단골가게
                                        </span>
                                        <span className="regular-shop-num">
                                            2
                                        </span>
                                    </div>
                                </div>
                                <div className="myhomeEmail">
                                    <span className="profileEmail">
                                        이메일정보
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}