import './MyHomeTopNavi.css'

export default function MyHomeTopNavi() {
    return (
        <div className="MyHomeTopNavi">
            <div className="MyHomeTopNavimyhome-top-navi">
                <div className="MyHomeTopNavimyhome-top-navi-top">
                    <div className="MyHomeTopNavimyhomeTopNaviEtc">
                        <div className="MyHomeTopNavimyhome">
                            <div className="MyHomeTopNavimyhomeButton">
                            </div>
                            <div className="MyHomeTopNavicontainer-3">
                                    My Page
                            </div>
                        </div>
                        <div className="MyHomeTopNavialarm">
                            <div className="MyHomeTopNavialarm-button">
                            </div>
                            <div className="MyHomeTopNavialarmId">
                                    아이디
                            </div>
                        </div>
                        <div className="MyHomeTopNavilogoutButton">
                                로그아웃
                        </div>
                    </div>
                </div>
                <div className="MyHomeTopNavimyhome-top-navi-bottom">
                    <div className="MyHomeTopNavimyhome-top-navi-member-info">
                        <div className="MyHomeTopNavimyhome-top-navi-profile">
                                {/*<div className="MyHomeTopNaviprofileSelectButton">*/}
                                {/*</div>*/}
                            <div className="MyHomeTopNaviprofile">
                            </div>
                        </div>
                        <div className="MyHomeTopNavimember-info">
                            <div className="MyHomeTopNavimyhome-top-navi-id">
                                <span className="MyHomeTopNaviprofileId">
                                        아이디
                                </span>
                            </div>
                            <div className="MyHomeTopNavinumerical-summary">
                                <div className="MyHomeTopNavivisit">
                                    <div className="MyHomeTopNavicontainer-9">
                                            방문
                                    </div>
                                    <div className="MyHomeTopNavivisitNum">
                                            10
                                    </div>
                                </div>
                                <div className="MyHomeTopNavimyhomeReview">
                                    <span className="MyHomeTopNavicontainer-10">
                                            리뷰
                                    </span>
                                    <span className="MyHomeTopNavimyhomeReviewNum">
                                            5
                                    </span>
                                </div>
                                <div className="MyHomeTopNaviregular-shop">
                                    <span className="MyHomeTopNavicontainer-11">
                                            단골가게
                                    </span>
                                    <span className="MyHomeTopNaviregular-shop-num">
                                            2
                                    </span>
                                </div>
                            </div>
                            <div className="MyHomeTopNavimyhomeEmail">
                                <span className="MyHomeTopNaviprofileEmail">
                                        이메일정보
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}