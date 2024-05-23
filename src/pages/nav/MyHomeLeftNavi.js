import './MyHomeLeftNavi.css'
import searchbar from "../../assets/search_button.png";
import polygon from "../../assets/polygon.png";
import React from "react";

export default function MyHomeLeftNavi() {
    return (
        <div className="MyHomeLeftNavi">
            <div className="MyHomeLeftNavicpsk-navi">
                <div className="MyHomeLeftNavicontainer">
                    <div className="MyHomeLeftNavicpnavi-logo">
                        <div className="MyHomeLeftNavibooksly-logo">
                        </div>
                        <div className="MyHomeLeftNavilogoLine">
                        </div>
                    </div>
                    <div className="MyHomeLeftNavicpsk-navi-bar">
                        <div className="MyHomeLeftNavicpnavi-bar">
                            <div className="MyHomeLeftNavicpnaviLineTop">
                            </div>
                            <div className="MyHomeLeftNavicp-navi-search-name">
                                <img className="MyHomeLeftNavisearch" src={searchbar} alt={''}/>
                                <div className="MyHomeLeftNavicpnaviName">
                                    My 홈
                                </div>
                            </div>
                            <div className="MyHomeLeftNavicpnaviLineBottom">
                            </div>
                        </div>
                        <div className="MyHomeLeftNavicpnavi-bar">
                            <div className="MyHomeLeftNavicpnaviLineTop">
                            </div>
                            <div className="MyHomeLeftNavicp-navi-search-name">
                                <img className="MyHomeLeftNavisearch" src={searchbar} alt={''}/>
                                <div className="MyHomeLeftNavicpnaviName">
                                    My 예약 조회
                                </div>
                            </div>
                            <div className="MyHomeLeftNavicpnaviLineBottom">
                            </div>
                        </div>
                        <div className="MyHomeLeftNavicpnavi-bar">
                            <div className="MyHomeLeftNavicpnaviLineTop">
                            </div>
                            <div className="MyHomeLeftNavicp-navi-allow">
                                <img className="MyHomeLeftNavipolygon" src={polygon} alt={''}/>
                                <div className="MyHomeLeftNavicpnaviNamecpnaviName">
                                    전체 예약 조회
                                </div>
                            </div>
                            <div className="MyHomeLeftNavicpnaviLineBottom">
                            </div>
                        </div>
                        <div className="MyHomeLeftNavicpnavi-bar">
                            <div className="MyHomeLeftNavicpnaviLineTop">
                            </div>
                            <div className="MyHomeLeftNavicp-navi-allow">
                                <img className="MyHomeLeftNavipolygon" src={polygon} alt={''}/>
                                <div className="MyHomeLeftNavicpnaviNamecpnaviName">
                                    현재 예약 조회
                                </div>
                            </div>
                            <div className="MyHomeLeftNavicpnaviLineBottom">
                            </div>
                        </div>
                        <div className="MyHomeLeftNavicpnavi-bar">
                            <div className="MyHomeLeftNavicpnaviLineTop">
                            </div>
                            <div className="MyHomeLeftNavicp-navi-search-name">
                                <img className="MyHomeLeftNavisearch" src={searchbar} alt={''}/>
                                <div className="MyHomeLeftNavicpnaviName">
                                    단골 가게 조회
                                </div>
                            </div>
                            <div className="MyHomeLeftNavicpnaviLineBottom">
                            </div>
                        </div>
                    </div>
                    <div className="MyHomeLeftNavinaviBottomLine">
                    </div>
                </div>
                <div className="MyHomeLeftNaviline">
                </div>
            </div>
        </div>
    )
}