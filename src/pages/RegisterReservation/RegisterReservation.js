import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

//가게주인 나브바 왼쪽 + 위
import StoreOwnerLeftNavi from "../nav/StoreOwnerLeftNavi";
import StoreOwnerTopNavi from "../nav/StoreOwnerTopNavi";

//css 임폴트
import "./RegisterReservation.css";

export default function RegisterReservation() {
    return(
        <div className="StoreOwnerMain">
            <div className="StoreOwnerMainBack">
                <StoreOwnerLeftNavi/>
                <div className="SOMcontainerAll">
                    <StoreOwnerTopNavi/>
                    <RegisterReservationContent/>
                </div>
            </div>
        </div>
    )
}

function RegisterReservationContent() {
    const [maxCapacity, setMaxCapacity] = useState("");
    const [storeInfo, setStoreInfo] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedHour, setSelectedHour] = useState("");
    const [selectedMinute, setSelectedMinute] = useState("");
    const [maxDays, setMaxDays] = useState("");
  
    const handleStoreInfoChange = (e) => {
      if (e.target.value.length <= 150) {
        setStoreInfo(e.target.value);
      }
    };
  
    const navigate = useNavigate();
    const goToStoreOwnerLogin = () => {
      navigate("/StoreOwnerLogIn");
    };
  
    const handleYesClick = () => {
      setSelectedOption("yes");
    };
    const handleNoClick = () => {
      setSelectedOption("no");
    };
  
    const hourOptions = Array.from({ length: 13 }, (v, k) => ({
      value: k,
      label: k < 10 ? `0${k}` : `${k}`,
    }));
    const minuteOptions = Array.from({ length: 60 }, (v, k) => ({
      value: k,
      label: k < 10 ? `0${k}` : `${k}`,
    }));
    const handleHourChange = (e) => {
      setSelectedHour(e.target.value);
    };
    const handleMinuteChange = (e) => {
      setSelectedMinute(e.target.value);
    };

    return (
        <div className="ReservationRegist">
            <div className="ReservationRegist_contents">
                <div className="RegistReservation_title">예약 설정</div>

                {/* 예약 모집 시간 단위 */}
                <div className="time_select_all_padding">
                    <div className="RegistReservation_mid_title">예약 모집 시간 단위</div>
                    <div className="time_select_box_padding">
                        <div className="time_select_box">
                            <select value={selectedHour} onChange={handleHourChange}>
                                {hourOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <div className="time_text">시</div>
                        </div>
                        <div className="time_select_box">
                            <select value={selectedMinute} onChange={handleMinuteChange}>
                                {minuteOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <div className="time_text">분</div>
                        </div>
                    </div>
                </div>

                {/* 자동 예약 확정 */}
                <div className="RegistReservation_auto_check_padding">
                    {/* 자동 예약 확정 버튼*/}
                    <div className="RegistReservation_auto_check">
                        <div className="RegistReservation_mid_title">자동 예약 확정</div>
                        <div className="auto_check_btn_padding">
                            <div
                                className={`auto_check_btn ${selectedOption === "yes" ? "active" : ""}`}
                                onClick={handleYesClick}
                            >
                                <div className="auto_check_a_yes">예</div>
                            </div>
                            <div
                                className={`auto_check_btn ${selectedOption === "no" ? "active" : ""}`}
                                onClick={handleNoClick}
                            >
                                <div className="auto_check_a_no">아니오</div>
                            </div>
                        </div>
                    </div>
                    {/* 동시간대 최대 인원 */}
                    <div className="RegistReservation_sametime_max_int">
                        <div className="RegistReservation_mid_title">동시간대 최대 인원(명)</div>
                        <input
                            className="RegistReservation_sametime_max_int_input"
                            value={maxCapacity}
                            type="number"
                            placeholder="0"
                            onChange={(e) => setMaxCapacity(e.target.value)}
                        />
                    </div>    
                </div>


                {/* 예약 가능 최대 일자 */}
                <div className="RegistReservation_max_date">
                    <div className="RegistReservation_mid_title">예약 가능 최대 일자(일)</div>
                    <input
                        className="RegistReservation_sametime_max_int_input"
                        value={maxDays}
                        type="number"
                        placeholder="28"
                        onChange={(e) => setMaxDays(e.target.value)}
                    />
                </div>

                    
                {/* 공지사항 */}
                <div className="announcement_textarea_box_padding">
                    <div className="RegistReservation_mid_title">공지 사항</div>
                    <div className="announcement_textarea_box">
                        <textarea
                            className="announcement_textarea"
                            placeholder="공지 사항을 입력해주세요"
                            value={storeInfo}
                            onChange={handleStoreInfoChange}
                        />
                    </div>
                    <div className="text_count_ing">
                        <div className="text_count_text">{storeInfo.length}자</div>
                        <div className="text_count_text">/</div>
                        <div className="text_count_text">150자</div>
                    </div>
                </div>
                
                
                <button className="ReservationRegist_fin_btn" onClick={goToStoreOwnerLogin}>
                    등록
                </button>
                
            </div> 
        </div>
    );
}
