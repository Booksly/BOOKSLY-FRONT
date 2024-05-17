import './ShopOwnerTopNavi.css'
import bottomAllow from "../../assets/bottomAllow.png";

export default function ShopOwnerTopNavi() {
    return (
        // <div className="back">
        <div className="ShopOwnerTopNavi">
        <div className="shop-top-navi">
            <div className="shop-top-navi-top">
                <div className="ShopTopNaviEtc">
                    <div className="container-3">
                        가게 추가 등록
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
            <div className="shop-top-navi-bottom">
                <div className="shop-top-navi-member-info">
                    <div className="shop-top-navi-profile">
                        {/*<div className="profileSelectButton">*/}
                        {/*</div>*/}
                        <div className="profile">
                        </div>
                    </div>
                    <div className="member-info">
                        <div className="shop-top-navi-id">
                            <span className="profileId">
                                아이디
                            </span>
                            <div className="profileInfoChangeBt">
                                정보 수정
                            </div>
                        </div>
                        <div className="numerical-summary">
                            <div className="visitors">
                                <div className="container-9">
                                    방문자수
                                </div>
                                <div className="visitorsNum">
                                    2,444
                                </div>
                            </div>
                            <div className="today-visitors">
                                <span className="container-10">
                                    오늘 방문자수
                                </span>
                                <span className="today-visitorsNum">
                                    73
                                </span>
                            </div>
                            <div className="regular-customer">
                                <span className="container-11">
                                    단골손님
                                </span>
                                <span className="regular-customer-num">
                                    185
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ShopTopNaviAnotherShop">
                    <span className="ShopName">
                        제이제이 헤어
                    </span>
                    <div className="another-shop">
                        <img className="bottomAllow" src={bottomAllow} alt={''}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        // </div>
    )
}