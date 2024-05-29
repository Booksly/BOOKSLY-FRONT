import LoginAfterMainHeader from '../nav/LoginAfterMainHeader'
import React from 'react';
import '../MainPage/Main.css';
import './Reservation.css';
import StandByReservation_Owner from '../StandByReservation_Owner/StandByReservation';

export default function Reservation_Complete() {
    return (
        <div className='main_padding'>
            {/* 예약 완료 페이지 내용 */}
            <LoginAfterMainHeader />
            <div className='reservation_padding'>
                예약 신청되었습니다.
                <div className='buttons_box'>
                    <button className='button_big'>메인 페이지</button>
                    <button className='button_big'>예약 확인</button>
                </div>
                
                <button className='button_small'>예약 소식 받기</button>
            </div>
            <StandByReservation_Owner/>

        </div>
    );
}