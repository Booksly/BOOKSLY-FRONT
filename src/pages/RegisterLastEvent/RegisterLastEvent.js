import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

//가게주인 나브바 왼쪽 + 위
import StoreOwnerLeftNavi from "../nav/StoreOwnerLeftNavi";
import StoreOwnerTopNavi from "../nav/StoreOwnerTopNavi";

//css 임폴트
import './RegisterLastEvent.css'

export default function RegisterLastEvent() {

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
  
    const data_staffs = ["제이원장", "심화 디자이너", "캡 디자이너", "제이슨 디자이너", "미우 디자이너"];
    const [selectedStaff, setSelectedStaff] = useState(null);
    const handleStaffClick = (index) => {
        setSelectedStaff(index);
    };

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
            <div className="Last_Event_options">
                <div className="RegistReservation_title">마감 임박 이벤트 등록/수정</div>

                {/* 직원 선택 */}
                <div className="RegistReservation_max_date">
                    <div className="RegistReservation_mid_title">직원 선택</div>
                    <div className='option_boxs_row'>
                        {data_staffs.map((staff, index) => (
                            <div
                            key={index}
                            className={`staff_box ${selectedStaff === index ? 'isSelect' : ''}`}
                            onClick={() => handleStaffClick(index)}
                            >
                                <div className='staff_name'>{staff}</div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* 이벤트 문구 */}
                <div className="RegistReservation_max_date">
                    <div className="RegistReservation_mid_title">이벤트 문구</div>
                    <input
                        className="RegistReservation_sametime_max_int_input"
                        value={maxDays}
                        type="text"
                        placeholder="지금 예약시 20% 할인 행사"
                        onChange={(e) => setMaxDays(e.target.value)}
                    />
                </div>

                {/* 할인율 */}
                <div className="RegistReservation_max_date">
                    <div className="RegistReservation_mid_title">할인율(%)</div>
                    <input
                        className="RegistReservation_sametime_max_int_input"
                        value={maxDays}
                        type="number"
                        placeholder="20"
                        onChange={(e) => setMaxDays(e.target.value)}
                    />
                </div>

                    
                {/* 공지사항 */}
                <div className="announcement_textarea_box_padding">
                    <div className="RegistReservation_mid_title">메뉴 선택</div>
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
                    초기화
                </button>
                <button className="ReservationRegist_fin_btn" onClick={goToStoreOwnerLogin}>
                    등록
                </button>
                
 
            </div>
        </div>
    );
}

