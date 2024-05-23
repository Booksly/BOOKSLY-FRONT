import './ShopOwnerTopNavi.css'
import bottomAllow from "../../assets/bottomAllow.png";

export default function ShopOwnerTopNavi() {
    return (
        // <div className="ShopOwnerTopNaviback">
        <div className="ShopOwnerTopNavi">
        <div className="ShopOwnerTopNavishop-top-navi">
            <div className="ShopOwnerTopNavishop-top-navi-top">
                <div className="ShopOwnerTopNaviShopTopNaviEtc">
                    <div className="ShopOwnerTopNavicontainer-3">
                        가게 추가 등록
                    </div>
                    <div className="ShopOwnerTopNavialarm">
                        <div className="ShopOwnerTopNavialarm-button">
                        </div>
                        <div className="ShopOwnerTopNavialarmId">
                            아이디
                        </div>
                    </div>
                    <div className="ShopOwnerTopNavilogoutButton">
                        로그아웃
                    </div>
                </div>
            </div>
            <div className="ShopOwnerTopNavishop-top-navi-bottom">
                <div className="ShopOwnerTopNavishop-top-navi-member-info">
                    <div className="ShopOwnerTopNavishop-top-navi-profile">
                        {/*<div className="ShopOwnerTopNaviprofileSelectButton">*/}
                        {/*</div>*/}
                        <div className="ShopOwnerTopNaviprofile">
                        </div>
                    </div>
                    <div className="ShopOwnerTopNavimember-info">
                        <div className="ShopOwnerTopNavishop-top-navi-id">
                            <span className="ShopOwnerTopNaviprofileId">
                                아이디
                            </span>
                            <div className="ShopOwnerTopNaviprofileInfoChangeBt">
                                정보 수정
                            </div>
                        </div>
                        <div className="ShopOwnerTopNavinumerical-summary">
                            <div className="ShopOwnerTopNavivisitors">
                                <div className="ShopOwnerTopNavicontainer-9">
                                    방문자수
                                </div>
                                <div className="ShopOwnerTopNavivisitorsNum">
                                    2,444
                                </div>
                            </div>
                            <div className="ShopOwnerTopNavitoday-visitors">
                                <span className="ShopOwnerTopNavicontainer-10">
                                    오늘 방문자수
                                </span>
                                <span className="ShopOwnerTopNavitoday-visitorsNum">
                                    73
                                </span>
                            </div>
                            <div className="ShopOwnerTopNaviregular-customer">
                                <span className="ShopOwnerTopNavicontainer-11">
                                    단골손님
                                </span>
                                <span className="ShopOwnerTopNaviregular-customer-num">
                                    185
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ShopOwnerTopNaviShopTopNaviAnotherShop">
                    <span className="ShopOwnerTopNaviShopName">
                        제이제이 헤어
                    </span>
                    <div className="ShopOwnerTopNavianother-shop">
                        <img className="ShopOwnerTopNavibottomAllow" src={bottomAllow} alt={''}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        // </div>
    )
}