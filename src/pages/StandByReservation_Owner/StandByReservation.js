import React from "react";
import './StandByReservation_Owner.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react";

export default function StandByReservation_Owner() {
    const [key, setKey] = useState('home');
    const data_standbyreservation = [
        {
            date : "5.27",
            time : "14:00",
            content : "남성 컷, 스타일링",
            owner_name : "유정 디자이너",
            memo : "곧 면접이 있어서 깔끔한 스타일로 부탁드립니다."
        },
        {
            date : "3.26",
            time : "17:00",
            content : "여성 컷, 뿌리탈색, 염색, 프리미엄 클리닉",
            owner_name : "심화디자이너",
            memo : "현재 탈색모에 뿌리가 좀 자란 상태입니다. 어두운 색이어도 뿌리탈색이 필요할까요?"
        },
        {
            date : "3.28",
            time : "10:00",
            content : "여성 컷, 클리닉",
            owner_name : "금잔디 디자이너",
            memo : "머릿결이 많이 상해서 클리닉 위주로 부탁드립니다."
          },
        {
            date : "3.27",
            time : "14:00",
            content : "남성 컷, 스타일링",
            owner_name : "유정 디자이너",
            memo : "곧 면접이 있어서 깔끔한 스타일로 부탁드립니다."
        },
       
        
    ]

     // 날짜를 정렬하는 함수
     const sortReservationsByDate = (reservations) => {
        return reservations.slice().sort((a, b) => {
            const dateA = new Date(`2022-${a.date.replace('.', '-')}`);
            const dateB = new Date(`2022-${b.date.replace('.', '-')}`);
            return dateA - dateB;
        });
    };

    const sortedReservations = sortReservationsByDate(data_standbyreservation);

    return(
        <>
            <div className="StandByReservations_padding">
                <div className="StandByReservations">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                        transition={false}
                    >
                        <Tab eventKey="home" title="신규순">
                        {data_standbyreservation.map((reservation, index) => (
                            <div key={index} className="StandByReservation_contents_padding">
                                <div className="StandByReservation_contents">
                                    <div className="StandByReservation_content" id="text_middle">
                                        {reservation.date} {reservation.time} {reservation.owner_name}
                                    </div>
                                    <div className="StandByReservation_content" id="text_small">
                                        <div className="text_right_margin">메뉴</div>
                                        {reservation.content}
                                    </div>
                                    <div className="StandByReservation_content" id="text_small">
                                        <div className="text_right_margin">문의사항</div> {reservation.memo}
                                    </div>
                                </div>
                                <div className="StandBy_buttons">
                                    <button className="StandBy_accept">확정</button>
                                    <button className="StandBy_reject">거절</button>
                                </div>
                            </div>
                        ))}
                        </Tab>
                        <Tab eventKey="profile" title="임박순">
                            {sortedReservations.map((reservation, index) => (
                                <div key={index} className="StandByReservation_contents_padding">
                                    <div className="StandByReservation_contents">
                                        <div className="StandByReservation_content" id="text_middle">
                                            {reservation.date} {reservation.time} {reservation.owner_name}
                                        </div>
                                        <div className="StandByReservation_content" id="text_small">
                                            <div className="text_right_margin">메뉴</div>
                                            {reservation.content}
                                        </div>
                                        <div className="StandByReservation_content" id="text_small">
                                            <div className="text_right_margin">문의사항</div> {reservation.memo}
                                        </div>
                                    </div>
                                    <div className="StandBy_buttons">
                                        <button className="StandBy_accept">확정</button>
                                        <button className="StandBy_reject">거절</button>
                                    </div>
                                </div>
                            ))}
                        </Tab>
                    </Tabs>
                </div>
                
            </div>
        </>
    )
}