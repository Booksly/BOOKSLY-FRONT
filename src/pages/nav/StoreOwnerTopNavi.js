import './StoreOwnerTopNavi.css'
import bottomAllow from "../../assets/bottomAllow.png";

export default function StoreOwnerTopNavi() {
    return (
        // <div className="StoreOwnerTopNaviback">
        <div className="StoreOwnerTopNavi">
        <div className="StoreOwnerTopNaviStore-top-navi">
            <div className="StoreOwnerTopNaviStore-top-navi-top">
                <div className="StoreOwnerTopNaviStoreTopNaviEtc">
                    <div className="StoreOwnerTopNavicontainer-3">
                        가게 추가 등록
                    </div>
                    <div className="StoreOwnerTopNavialarm">
                        <div className="StoreOwnerTopNavialarm-button">
                        </div>
                        <div className="StoreOwnerTopNavialarmId">
                            아이디
                        </div>
                    </div>
                    <div className="StoreOwnerTopNavilogoutButton">
                        로그아웃
                    </div>
                </div>
            </div>
            <div className="StoreOwnerTopNaviStore-top-navi-bottom">
                <div className="StoreOwnerTopNaviStore-top-navi-member-info">
                    <div className="StoreOwnerTopNaviStore-top-navi-profile">
                        {/*<div className="StoreOwnerTopNaviprofileSelectButton">*/}
                        {/*</div>*/}
                        <div className="StoreOwnerTopNaviprofile">
                        </div>
                    </div>
                    <div className="StoreOwnerTopNavimember-info">
                        <div className="StoreOwnerTopNaviStore-top-navi-id">
                            <span className="StoreOwnerTopNaviprofileId">
                                아이디
                            </span>
                            <div className="StoreOwnerTopNaviprofileInfoChangeBt">
                                정보 수정
                            </div>
                        </div>
                        <div className="StoreOwnerTopNavinumerical-summary">
                            <div className="StoreOwnerTopNavivisitors">
                                <div className="StoreOwnerTopNavicontainer-9">
                                    방문자수
                                </div>
                                <div className="StoreOwnerTopNavivisitorsNum">
                                    2,444
                                </div>
                            </div>
                            <div className="StoreOwnerTopNavitoday-visitors">
                                <span className="StoreOwnerTopNavicontainer-10">
                                    오늘 방문자수
                                </span>
                                <span className="StoreOwnerTopNavitoday-visitorsNum">
                                    73
                                </span>
                            </div>
                            <div className="StoreOwnerTopNaviregular-customer">
                                <span className="StoreOwnerTopNavicontainer-11">
                                    단골손님
                                </span>
                                <span className="StoreOwnerTopNaviregular-customer-num">
                                    185
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="StoreOwnerTopNaviStoreTopNaviAnotherStore">
                    <span className="StoreOwnerTopNaviStoreName">
                        제이제이 헤어
                    </span>
                    <div className="StoreOwnerTopNavianother-Store">
                        <img className="StoreOwnerTopNavibottomAllow" src={bottomAllow} alt={''}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        // </div>
    )
}