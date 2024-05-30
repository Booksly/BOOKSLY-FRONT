import React from "react";
import './StoreOwnerMainTodayReservConfirm.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react";

export default function StoreOwnerMainTodayReservConfirm() {
    const [key, setKey] = useState('home');
    const data_SOMTRC = [
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

    const sortedReservations = sortReservationsByDate(data_SOMTRC);

    return(
        <>
            <div className="StoreOwnerMainTodayReservConfirm">
                <div className="StoreOwnerMainTodayReservConfirm_padding">
                    <div className="StoreOwnerMainTodayReservConfirm">
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                            transition={false}
                        >
                            <Tab eventKey="home" title="전체">
                                {data_SOMTRC.map((reservation, index) => (
                                    <div key={index} className="SOMTRC_contents_padding">
                                        <div className="SOMTRC_contents">
                                            <div className="SOMTRC_content" id="text_middle">
                                                {reservation.time} {reservation.owner_name}
                                            </div>
                                            <div className="SOMTRC_content" id="text_small">
                                                <div className="text_right_margin">메뉴</div>
                                                {reservation.content}
                                            </div>
                                            <div className="SOMTRC_content" id="text_small">
                                                <div className="text_right_margin">문의사항</div> {reservation.memo}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Tab>
                            <Tab eventKey="profile" title="예정">
                                {sortedReservations.map((reservation, index) => (
                                    <div key={index} className="SOMTRC_contents_padding">
                                        <div className="SOMTRC_contents">
                                            <div className="SOMTRC_content" id="text_middle">
                                                {reservation.time} {reservation.owner_name}
                                            </div>
                                            <div className="SOMTRC_content" id="text_small">
                                                <div className="text_right_margin">메뉴</div>
                                                {reservation.content}
                                            </div>
                                            <div className="SOMTRC_content" id="text_small">
                                                <div className="text_right_margin">문의사항</div> {reservation.memo}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Tab>
                        </Tabs>
                    </div>

                </div>
            </div>
        </>
    )
}