import './MyHomeRegularStore.css'
import MyHomeLeftNavi from "../nav/MyHomeLeftNavi";
import MyHomeTopNavi from "../nav/MyHomeTopNavi";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function MyHomeRegularStore() {
    const navigate = useNavigate()
    const goToReservation = () => {
        navigate("/Reservation?shopId=1")
    }
    const goToDetailedStoreInfo = () => {
        navigate("/DetailedStoreInfo?shopId=1")
    }
    return (
        <div className="MyHomeRegularStore">
        <div className="MyHomeRegularStoreBack">
            <MyHomeLeftNavi/>
        <div className="containerAll">
            <MyHomeTopNavi/>
            <div className="MyHomeRegularStoreContainer">
                <div className="RegularStoreList">

                    <div className="RegularStoreContainer">
                        <div className="RegularStoreProfileInfo">
                            <div className="RegularStoreProfile">
                            </div>
                            <div className="RegularStoreInfo">
                                <div className="regularSign">
                                    ☆
                                </div>
                                <div className="StoreInfo">
                                    제롬헤어
                                </div>
                                <div className="partition">
                                    |
                                </div>
                                <div className="StoreInfo">
                                    수원시 영통구 이의동
                                </div>
                                <div className="partition">
                                    |
                                </div>
                                <div className="StoreInfo">
                                    헤어
                                </div>
                            </div>
                            <div className="ButtonFrame">
                                <div className="reservationButton" onClick={goToReservation}>
                                    <div className="buttonName">
                                        예약하기
                                    </div>
                                </div>
                                <div className="InquiryButton" onClick={goToDetailedStoreInfo}>
                                    <div className="buttonName">
                                        가게조회
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}