import './MyHomeTopNavi.css'
import {useNavigate} from "react-router-dom";

export default function MyHomeTopNavi() {
    const navigate = useNavigate()
    const goToMain = () => {
        navigate("/")
    }
    const goToMyHome = () => {
        navigate("/MyHomeMain")
    }
    return (
        <div className="MyHomeTopNavi">
            <div className="MyHomeTopNavimyhome-top-navi">
                <div className="MyHomeTopNavimyhome-top-navi-top">
                    <div className="MyHomeTopNavimyhomeTopNaviEtc">
                        <button className="MyHomeTopNavimyhome" onClick={goToMyHome}>
                            <div className="MyHomeTopNavimyhomeButton">
                            </div>
                            <div className="MyHomeTopNavicontainer-3">
                                    My Page
                            </div>
                        </button>
                        <div className="MyHomeTopNavialarm">
                            <div className="MyHomeTopNavialarm-button">
                            </div>
                            <div className="MyHomeTopNavialarmId">
                                    김송은
                            </div>
                        </div>
                        <button className="MyHomeTopNavilogoutButton" onClick={goToMain}>
                                로그아웃
                        </button>
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
                                        김송은
                                </span>
                            </div>
                            <div className="MyHomeTopNavinumerical-summary">
                                <div className="MyHomeTopNavivisit">
                                    <div className="MyHomeTopNavicontainer-9">
                                            방문
                                    </div>
                                    <div className="MyHomeTopNavivisitNum">
                                            5
                                    </div>
                                </div>
                                <div className="MyHomeTopNavimyhomeReview">
                                    <span className="MyHomeTopNavicontainer-10">
                                            리뷰
                                    </span>
                                    <span className="MyHomeTopNavimyhomeReviewNum">
                                            1
                                    </span>
                                </div>
                                <div className="MyHomeTopNaviregular-shop">
                                    <span className="MyHomeTopNavicontainer-11">
                                            단골가게
                                    </span>
                                    <span className="MyHomeTopNaviregular-shop-num">
                                            1
                                    </span>
                                </div>
                            </div>
                            <div className="MyHomeTopNavimyhomeEmail">
                                <span className="MyHomeTopNaviprofileEmail">
                                        songeun@kgu.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}