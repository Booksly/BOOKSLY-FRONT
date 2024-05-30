import React, { useState } from 'react';
import LoginAfterMainHeader from '../nav/LoginAfterMainHeader';
import '../MainPage/Main.css';
import './Reservation.css';
import Calen_EX from '../StandByReservation_Owner/Calender/calendal';

export default function Reservation() {
    const StoreName = "제이제이 헤어";
    const data_staffs = ["제이원장", "심화 디자이너", "캡 디자이너"];
    const data_can_reserve_time = ["12:30", "13:00", "13:30", "14:00"];

    const [selectedStaff, setSelectedStaff] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const handleStaffClick = (index) => {
        setSelectedStaff(index);
    };

    const handleTimeClick = (index) => {
        setSelectedTime(index);
    };

    return (
        <div className='main_padding'>
            {/* 예약 페이지 내용 */}
            <LoginAfterMainHeader />
            <div className='reservation_padding'>
                {StoreName}<br />
                <div className='reserve_select_option'>
                    <div className='reserve_title'>직원 선택</div>
                    <div className='option_boxs_row'>
                        {data_staffs.map((staff, index) => (
                            <div
                                key={index}
                                className={`staff_box ${selectedStaff === index ? 'isSelect' : ''}`}
                                onClick={() => handleStaffClick(index)}
                            >
                                <div className='staff_img'></div>
                                <div className='staff_name'>{staff}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='reserve_select_option'>
                    <div className='reserve_title'>날짜 선택</div>
                    <div className='calendar_select_single'>
                        <div><Calen_EX /></div>
                    </div>
                </div>
                <div className='reserve_select_option'>
                    <div className='reserve_title'>시간대 선택</div>
                    <div className='option_boxs_row'>
                        {data_can_reserve_time.map((time, index) => (
                            <div
                                key={index}
                                className={`time_box ${selectedTime === index ? 'isSelect' : ''}`}
                                onClick={() => handleTimeClick(index)}
                            >
                                <div className='time'>{time}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='reserve_select_option'>
                    <div className='reserve_title'>메뉴 선택</div>
                    <div>컴포넌트 만들어서 넣을거임</div>
                </div>
                <div className='reserve_select_option'>
                    <div className='reserve_title'>문의사항</div>
                    <textarea className=''></textarea>
                </div>
                <p>
                    당일 예약 취소는 불가능 합니다.
                </p>
                <p>
                    방문 시 먼저 온 손님이 계신 경우 늦어질 수 있습니다.
                </p>
                <p>
                    양해 부탁드립니다.
                </p>
                <button type='submit' className='button_small'>예약하기</button>
            </div>
        </div>
    );
}
