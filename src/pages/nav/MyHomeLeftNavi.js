import './MyHomeLeftNavi.css'
import searchbar from "../../assets/search_button.png";
import polygon from "../../assets/polygon.png";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function MyHomeLeftNavi() {
    const navigate = useNavigate()
    const goToMain = () => {
        navigate("/login")
    }
    const goToMyHome = () => {
        navigate("/MyHomeMain")
    }
    const goToMyHomeAllReserv = () => {
        navigate("/MyHomeAllReserv")
    }
    const goToMyHomeCurrReserv = () => {
        navigate("/MyHomeCurrReserv")
    }
    const goToMyHomeRegularStore = () => {
        navigate("/MyHomeRegularStore")
    }
    return (
        <div className="MyHomeLeftNavi">
            <div className="MyHomeLeftNavicpsk-navi">
                <div className="MyHomeLeftNavicontainer">
                    <div className="MyHomeLeftNavicpnavi-logo">
                        <button className="MyHomeLeftNavibooksly-logo" onClick={goToMain}>
                        </button>
                        <div className="MyHomeLeftNavilogoLine">
                        </div>
                    </div>
                    <div className="MyHomeLeftNavicpsk-navi-bar">
                        <button className="MyHomeLeftNavicpnavi-bar" onClick={goToMyHome}>
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
                        </button>
                        <button className="MyHomeLeftNavicpnavi-bar" onClick={goToMyHomeAllReserv}>
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
                        </button>
                        <button className="MyHomeLeftNavicpnavi-bar" onClick={goToMyHomeAllReserv}>
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
                        </button>
                        <button className="MyHomeLeftNavicpnavi-bar" onClick={goToMyHomeCurrReserv}>
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
                        </button>
                        <button className="MyHomeLeftNavicpnavi-bar"onClick={goToMyHomeRegularStore}>
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
                        </button>
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