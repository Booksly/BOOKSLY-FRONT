import './StoreOwnerLeftNavi.css'
import searchbar from "../../assets/search_button.png";
import polygon from "../../assets/polygon.png";
import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function StoreOwnerLeftNavi() {
    const navigate = useNavigate()
    const goToMain = () => {
        navigate("/StoreOwnerMain")
    }
    const goToDetail = () => {
        navigate("/StoreOwnerMain")
    }
    const goToSetting = () => {
        navigate("/StoreOwnerSetting")
    }
    //마감 임박 메뉴 등록
    const goToRegisterLastEvent = () => {
        navigate("/RegisterLastEvent")
    }
    //타임세일 메뉴 등록
    const goToRegisterTimeEvent = () => {
        navigate("/RegisterTimeEvent")
    }
    //이벤트 메뉴 - 타임 세일 메뉴 확인
    const goToCheckTimeEvent = () => {
        navigate("/CheckTimeEvent")
    }
    //이벤트 메뉴 - 마감 임박 메뉴 확인
    const goToCheckLastEvent = () => {
        navigate("/CheckLastEvent")
    }
    //예약설정
    const goToRegisterReservation = () => {
        navigate("/RegisterReservation")
    }

    return (
        <div className="StoreOwnerLeftNavi">
            <div className="StoreOwnerLeftNavicpsk-navi">
                <div className="StoreOwnerLeftNavicontainer">
                    <div className="StoreOwnerLeftNavicpnavi-logo">
                        <button className="StoreOwnerLeftNavibooksly-logo" onClick={goToMain}>
                        </button>
                        <div className="StoreOwnerLeftNavilogoLine">
                        </div>
                    </div>
                    <div className="StoreOwnerLeftNavicpsk-navi-bar">
                        <button className="StoreOwnerLeftNavicpnavi-bar" onClick={goToDetail}>
                            <div className="StoreOwnerLeftNavicpnaviLineTop">
                            </div>
                            <div className="StoreOwnerLeftNavicp-navi-search-name">
                                <img className="StoreOwnerLeftNavisearch" src={searchbar} alt={''}/>
                                <div className="StoreOwnerLeftNavicpnaviName">
                                    가게 상세 페이지
                                </div>
                            </div>
                            <div className="StoreOwnerLeftNavicpnaviLineBottom">
                            </div>
                        </button>
                        <div className="StoreOwnerLeftNavicpnavi-bar">
                            <div className="StoreOwnerLeftNavicpnaviLineTop">
                            </div>
                            <div className="StoreOwnerLeftNavicp-navi-search-name">
                                <img className="StoreOwnerLeftNavisearch" src={searchbar} alt={''}/>
                                <div className="StoreOwnerLeftNavicpnaviName">
                                    My 가게 리뷰
                                </div>
                            </div>
                            <div className="StoreOwnerLeftNavicpnaviLineBottom">
                            </div>
                        </div>
                        <button className="StoreOwnerLeftNavicpnavi-bar" onClick={goToMain}>
                            <div className="StoreOwnerLeftNavicpnaviLineTop">
                            </div>
                            <div className="StoreOwnerLeftNavicp-navi-search-name">
                                <img className="StoreOwnerLeftNavisearch" src={searchbar} alt={''}/>
                                <div className="StoreOwnerLeftNavicpnaviName">
                                    예약 확인
                                </div>
                            </div>
                            <div className="StoreOwnerLeftNavicpnaviLineBottom">
                            </div>
                        </button>
                        <button className="StoreOwnerLeftNavicpnavi-bar" onClick={goToMain}>
                            <div className="StoreOwnerLeftNavicpnaviLineTop">
                            </div>
                            <div className="StoreOwnerLeftNavicp-navi-allow">
                                <img className="StoreOwnerLeftNavipolygon" src={polygon} alt={''}/>
                                <div className="StoreOwnerLeftNavicpnaviNamecpnaviName">
                                    오늘 예약
                                </div>
                            </div>
                            <div className="StoreOwnerLeftNavicpnaviLineBottom">
                            </div>
                        </button>
                        <button className="StoreOwnerLeftNavicpnavi-bar" onClick={goToMain}>
                            <div className="StoreOwnerLeftNavicpnaviLineTop">
                            </div>
                            <div className="StoreOwnerLeftNavicp-navi-allow">
                                <img className="StoreOwnerLeftNavipolygon" src={polygon} alt={''}/>
                                <div className="StoreOwnerLeftNavicpnaviNamecpnaviName">
                                    전체 예약
                                </div>
                            </div>
                            <div className="StoreOwnerLeftNavicpnaviLineBottom">
                            </div>
                        </button>
                        <button className="StoreOwnerLeftNavicpnavi-bar" onClick={goToMain}>
                            <div className="StoreOwnerLeftNavicpnaviLineTop">
                            </div>
                            <div className="StoreOwnerLeftNavicp-navi-allow">
                                <img className="StoreOwnerLeftNavipolygon" src={polygon} alt={''}/>
                                <div className="StoreOwnerLeftNavicpnaviNamecpnaviName">
                                    확정 대기 예약
                                </div>
                            </div>
                            <div className="StoreOwnerLeftNavicpnaviLineBottom">
                            </div>
                        </button>
                        <div className="StoreOwnerLeftNavicpnavi-bar">
                            <div className="StoreOwnerLeftNavicpnaviLineTop">
                            </div>
                            <div className="StoreOwnerLeftNavicp-navi-search-name">
                                <img className="StoreOwnerLeftNavisearch" src={searchbar} alt={''}/>
                                <div className="StoreOwnerLeftNavicpnaviName" onClick={goToRegisterReservation}>
                                    예약 설정
                                </div>
                            </div>
                            <div className="StoreOwnerLeftNavicpnaviLineBottom">
                            </div>
                        </div>
                        <button className="StoreOwnerLeftNavicpnavi-bar" onClick={goToMain}>
                            <div className="StoreOwnerLeftNavicpnaviLineTop">
                            </div>
                            <div className="StoreOwnerLeftNavicp-navi-search-name">
                                <img className="StoreOwnerLeftNavisearch" src={searchbar} alt={''}/>
                                <div className="StoreOwnerLeftNavicpnaviName">
                                    메뉴 관리
                                </div>
                            </div>
                            <div className="StoreOwnerLeftNavicpnaviLineBottom">
                            </div>
                        </button>
                        <button className="StoreOwnerLeftNavicpnavi-bar" onClick={goToMain}>
                            <div className="StoreOwnerLeftNavicpnaviLineTop">
                            </div>
                            <div className="StoreOwnerLeftNavicp-navi-allow">
                                <img className="StoreOwnerLeftNavipolygon" src={polygon} alt={''}/>
                                <div className="StoreOwnerLeftNavicpnaviNamecpnaviName">
                                    일반 메뉴
                                </div>
                            </div>
                            <div className="StoreOwnerLeftNavicpnaviLineBottom">
                            </div>
                        </button>
                        <div className="StoreOwnerLeftNavicpnavi-bar">
                            <div className="StoreOwnerLeftNavicpnaviLineTop">
                            </div>
                            <div className="StoreOwnerLeftNavicp-navi-allow">
                                <img className="StoreOwnerLeftNavipolygon" src={polygon} alt={''}/>
                                <div className="StoreOwnerLeftNavicpnaviNamecpnaviName"onClick={goToCheckLastEvent}>
                                    이벤트 메뉴
                                </div>
                            </div>
                            <div className="StoreOwnerLeftNavicpnaviLineBottom">
                            </div>
                        </div>
                        <button className="StoreOwnerLeftNavicpnavi-bar" onClick={goToMain}>
                            <div className="StoreOwnerLeftNavicpnaviLineTop">
                            </div>
                            <div className="StoreOwnerLeftNavicp-navi-search-name">
                                <img className="StoreOwnerLeftNavisearch" src={searchbar} alt={''}/>
                                <div className="StoreOwnerLeftNavicpnaviName">
                                    직원 관리
                                </div>
                            </div>
                            <div className="StoreOwnerLeftNavicpnaviLineBottom">
                            </div>
                        </button>
                        <button className="StoreOwnerLeftNavicpnavi-bar" onClick={goToSetting}>
                            <div className="StoreOwnerLeftNavicpnaviLineTop">
                            </div>
                            <div className="StoreOwnerLeftNavicp-navi-search-name">
                                <img className="StoreOwnerLeftNavisearch" src={searchbar} alt={''}/>
                                <div className="StoreOwnerLeftNavicpnaviName">
                                    설정
                                </div>
                            </div>
                            <div className="StoreOwnerLeftNavicpnaviLineBottom">
                            </div>
                        </button>
                    </div>
                    <div className="StoreOwnerLeftNavinaviBottomLine">
                    </div>
                </div>
                <div className="StoreOwnerLeftNaviline">
                </div>
            </div>
        </div>
    )
}