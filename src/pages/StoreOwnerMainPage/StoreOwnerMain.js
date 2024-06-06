import './StoreOwnerMain.css'
import StoreOwnerLeftNavi from "../nav/StoreOwnerLeftNavi";
import StoreOwnerTopNavi from "../nav/StoreOwnerTopNavi";
import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import Modal from "react-modal";
import StoreOwnerMainDetailedPopup from "./StoreOwnerMainDetailedPopup";
import Select from "react-select";
import StoreOwnerMainMenuCateg from "./StoreOwnerMainMenuCateg";
import StoreOwnerMainEmpPopup from "./StoreOwnerMainEmpPopup";
import StandByReservation_Owner from "../StandByReservation_Owner/StandByReservation";
import StoreOwnerMainTodayReservConfirm from "./StoreOwnerMainTodayReservConfirm";
import StoreOwnerMainReservConfirm from "./StoreOwnerMainReservConfirm";
import StandByReservationOwner from '../StandByReservation_Owner/StandByReservation';

let options = [
    {value: "all", label: "전체"},
    {value: "emp1", label: "제이원장"},
    {value: "emp2", label: "심화 디자이너"},
    {value: "emp3", label: "캡 디자이너"}
]

const reservations = [
    { year: 2024, month: 6, day: 10 },
    { year: 2024, month: 6, day: 15 },
    { year: 2024, month: 6, day: 20 },
];

const Calendar = ({ reservations = [], modalType }) => {
    const [date, setDate] = useState(new Date()); // 초기값: 현재 날짜
    const [modalState, setModalState] = useState({ isOpen: false, selectedDate: null });

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const handleDateClick = (day) => {
        setModalState({ isOpen: true, selectedDate: new Date(date.getFullYear(), date.getMonth(), day) });
    };

    const handlePrevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1));
    };

    const isReserved = (day, month, year) => {
        return reservations.some(
            (reservation) =>
                reservation.day === day &&
                reservation.month === month + 1 &&
                reservation.year === year
        );
    };

    const renderDay = (day, month, year) => {
        const reserved = isReserved(day, month, year);
        return (
            <div className="SOMcalendar-day" onClick={() => handleDateClick(day)} key={day}>
                <div className="SOMvalue">
                    {day}
                    {reserved && <div className="SOMellipse"></div>}
                </div>
            </div>
        );
    };

    const renderCalendar = () => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        let days = [];
        for (let i = 0; i < firstDay; i++) {
            days.push(<div className="SOMcalendar-day" key={`empty-${i}`}></div>);
        }

        for (let i = 1; i <= lastDate; i++) {
            days.push(renderDay(i, month, year));
        }

        return days;
    };

    const closeModal = () => {
        setModalState({ isOpen: false, selectedDate: null });
    };

    return (
        <div className="SOMcalendar-example-2">
            <div className="SOMmonth-header">
                <div className="SOMicon-button" onClick={handlePrevMonth}>
                    &lt;
                </div>
                <div className="SOMmonth-yyyy">
                    {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
                </div>
                <div className="SOMicon-button-1" onClick={handleNextMonth}>
                    &gt;
                </div>
            </div>
            <div className="SOMweek-header">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                    <div className="SOMbox" key={day}>
                        <div className={`SOM${day.toLowerCase()}`}>{day}</div>
                    </div>
                ))}
            </div>
            <div className="SOMweek-days">
                {renderCalendar()}
            </div>
            <Modal
                isOpen={modalState.isOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                {modalType === 'StoreOwnerMainReservConfirm' ? (
                    <StoreOwnerMainReservConfirm selectedDate={modalState.selectedDate} />
                ) : (
                    <StandByReservationOwner />
                )}
            </Modal>
        </div>
    );
};

function Scheduler({ startTime, endTime, items }) {
    const [activeIndexes1, setActiveIndexes1] = useState([]);
    const [activeIndexes2, setActiveIndexes2] = useState([]);

    // 시작 시간과 끝 시간을 분 단위로 변환
    const startHour = parseInt(startTime.split(':')[0], 10);
    const startMinute = parseInt(startTime.split(':')[1], 10);
    const endHour = parseInt(endTime.split(':')[0], 10);
    const endMinute = parseInt(endTime.split(':')[1], 10);

    // 시작 시간을 분 단위로 변환
    let totalMinutes = startHour * 60 + startMinute;

    // 시간 노트 생성
    const timeNotes = [];
    while (totalMinutes < endHour * 60 + endMinute) {
        const hour = Math.floor(totalMinutes / 60);
        const minute = totalMinutes % 60;

        // 시간을 HH:MM 형식으로 표시
        const timeStr = `${hour < 10 ? '0' + hour : hour}:${minute === 0 ? '00' : '30'}`;

        timeNotes.push(
            <div className="SOMtime-note" key={`time-note-${totalMinutes}`}>
                <div className="SOMcontainer-100">{timeStr}</div>
                <div className="SOMcontainer-101">|</div>
                <div className="SOMmenu-list-1">
                    <div className="SOMcontainer-102">{items[Math.floor(totalMinutes / 30) - (startHour * 2)]}</div>
                </div>
            </div>
        );

        // 30분 증가
        totalMinutes += 30;
    };

    // 체크 박스 클릭 시 활성화 상태 변경 함수
    const handleCheckBoxClick1 = (index) => {
        const currentIndex = activeIndexes1.indexOf(index);
        const newIndexes = [...activeIndexes1];

        if (currentIndex === -1) {
            newIndexes.push(index);
        } else {
            newIndexes.splice(currentIndex, 1);
        }

        setActiveIndexes1(newIndexes);
    };

    const handleCheckBoxClick2 = (index) => {
        const currentIndex = activeIndexes2.indexOf(index);
        const newIndexes = [...activeIndexes2];

        if (currentIndex === -1) {
            newIndexes.push(index);
        } else {
            newIndexes.splice(currentIndex, 1);
        }

        setActiveIndexes2(newIndexes);
    };

    // 체크 박스 생성
    const checkBoxes = timeNotes.map((timeNote, index) => (
        <div className="SOMcheck-box" key={`check-box-${index}`}>
            <button className={`SOMrectangle-246 ${activeIndexes1.includes(index) ? 'active' : ''}`} onClick={() => handleCheckBoxClick1(index)}></button>
            <button className={`SOMrectangle-247 ${activeIndexes2.includes(index) ? 'active' : ''}`} onClick={() => handleCheckBoxClick2(index)}></button>
        </div>
    ));

    // 스케줄러 컴포넌트 반환
    return (
        <div className="scroll">
            <div className="SOMdldccheck">
                <div className="SOMtime-memo">
                    {timeNotes}
                </div>
                <div className="SOMdeadline-dccheck">
                    {checkBoxes}
                </div>
            </div>
        </div>
    );
}

// items의 기본값 설정
Scheduler.defaultProps = {
    startTime: '10:00', // 기본 시작 시간
    endTime: '20:00', // 기본 종료 시간
    items: ['여성 커트, 클리닉'] // 기본 항목
};

export default function StoreOwnerMain() {
    const [selectValue, setSelectValue] = useState('');
    const selectInputRef = useRef(null);

    const [modalState, setModalState] = useState({
        firstModal: false,
        secondModal: false,
        thirdModal: false,
        SBROModal: false,
        SOMTRCModal: false,
        SOMRCModal: false,
    });
    const openModal = (modalName) => {
        setModalState(prevState => ({ ...prevState, [modalName]: true }));
    }
    const closeModal = (modalName) => {
        setModalState(prevState => ({ ...prevState, [modalName]: false }));
    }

    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
        },
        content: {
            width: "fit-content",
            height: "fit-content",
            margin: "auto",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            padding: "20px",
        },
    };

    const navigate = useNavigate()

    return (
        <div className="StoreOwnerMain">
            <div className="StoreOwnerMainBack">
                <StoreOwnerLeftNavi/>
                <div className="SOMcontainerAll">
                    <StoreOwnerTopNavi/>
                    <div className="SOMcontainer">
                        <div className="SOMframe">
                            <div className="SOMstore-detailed">
                                <div className="SOMstore-detailed-name-rv">
                                    <div className="SOMStoreDetailedName">
                                        제이제이 헤어
                                    </div>
                                    <div className="SOMstar">
                                        <div className="star"/>
                                        <div className="SOMstar-figure">
                                            <div className="SOMcontainerRvScore">
                                                4.8
                                            </div>
                                            <div className="SOMcontainer-93">
                                                /5.0
                                            </div>
                                        </div>
                                    </div>
                                    <div className="SOMstore-detailed-review">
                                        <div className="SOMcontainer-83">
                                            리뷰
                                        </div>
                                        <div className="SOMcontainer-94">
                                            372
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMstore-detailed-info">
                                    <div className="SOMstore-detailed-info-left">
                                        <div className="SOMStoreDetailedInfo">
                                            <div className="SOMDetailedInfoIcon">
                                                메인
                                            </div>
                                            <div className="SOMDetailedInfoContent">
                                                고객 맞춤 프리미엄 서비스를 제공하는 제이제이 헤어입니다.
                                            </div>
                                        </div>
                                        <div className="SOMStoreDetailedInfo">
                                            <div className="SOMDetailedInfoIcon">
                                                <div className="SOMlocation-icon">
                                                </div>
                                            </div>
                                            <div className="SOMDetailedInfoContent">
                                                경기도 수원시 영통구 광교산로 154-42 206호
                                            </div>
                                        </div>
                                        <div className="SOMStoreDetailedInfo">
                                            <div className="SOMDetailedInfoIcon">
                                                <div className="SOMcontainer-87">
                                                </div>
                                            </div>
                                            <div className="SOMDetailedInfoContent">
                                                경기대학교 후문사거리
                                            </div>
                                        </div>
                                        <div className="SOMStoreDetailedInfo">
                                            <div className="SOMDetailedInfoIcon">
                                                <div className="SOMcontainer-86">
                                                </div>
                                            </div>
                                            <div className="SOMstore-detailed-info-phones">
                                                <div className="SOMcontainer-91">
                                                    031-249-9114
                                                </div>
                                                <div className="SOMcontainer-97">
                                                    |
                                                </div>
                                                <div className="SOMcontainer-96">
                                                    인스타그램
                                                </div>
                                            </div>
                                        </div>
                                        <div className="SOMStoreDetailedInfo">
                                            <div className="SOMDetailedInfoIcon">
                                                <div className="SOMcontainer-85">
                                                </div>
                                            </div>
                                            <div className="SOMDetailedInfoContent">
                                                월 10:00 - 20:00 ...
                                            </div>
                                        </div>
                                    </div>
                                    <div className="SOMstore-detailed-info-pic"
                                         style={{ backgroundImage: `url("/images/hair_1.png")` }}>
                                        {/*<div className="SOMprofile-select-1">*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <button className="SOMmodify-1" onClick={() => openModal('firstModal')}>
                                    <div className="SOMcontainer-84">
                                        수정하기
                                    </div>
                                </button>
                                <Modal isOpen={modalState.firstModal} onRequestClose={() => closeModal('firstModal')} style={customStyles}>
                                    {/*<button onClick={closeModal}>✖</button>*/}
                                    <StoreOwnerMainDetailedPopup/>
                                </Modal>
                            </div>
                            <div className="SOMreservation">
                                <div className="SOMframe-522">
                                    <div className="SOMtoday-reserv">
                                        <div className="SOMtoday">
                                            <button className="SOMcontainer-98"
                                                    onClick={() => openModal('SOMTRCModal')}>
                                                오늘 예약
                                            </button>
                                            <Modal isOpen={modalState.SOMTRCModal}
                                                   onRequestClose={() => closeModal('SOMTRCModal')}
                                                   style={customStyles}>
                                                <StoreOwnerMainTodayReservConfirm/>
                                            </Modal>
                                            <div className="SOMgroup-502">
                                                <>
                                                    <Select
                                                        className="SOMcontainer-99"
                                                        ref={selectInputRef}
                                                        onChange={(e) => {
                                                            if (e) {
                                                                setSelectValue(e.value);
                                                            } else {
                                                                setSelectValue("");
                                                            }
                                                        }}
                                                        options={options}
                                                        placeholder="전체"
                                                    />
                                                </>
                                            </div>
                                        </div>
                                        <div className="SOMcheck">
                                            <div className="SOMcontainer-127">
                                                예약마감
                                            </div>
                                            <div className="SOMcontainer-128">
                                                마감임박할인
                                            </div>
                                        </div>
                                        <Scheduler
                                            items={['여성 커트, 클리닉', '', '', '남성 커트', '', '염색, 학생 커트', '', '', '일반펌', '트리트먼트', '', '탈색, 여성 커트', '여성 커트', '남성 커트', '', '', '학생 커트', '', '', '', '']}/>
                                    </div>
                                </div>
                                {/*<div className="SOMall-reserv">*/}
                                {/*    <button className="SOMcontainer-132" onClick={() => openModal('SOMRCModal')}>*/}
                                {/*        전체 예약*/}
                                {/*    </button>*/}
                                {/*    <Modal isOpen={modalState.SOMRCModal}*/}
                                {/*           onRequestClose={() => closeModal('SOMRCModal')} style={customStyles}>*/}
                                {/*        <StoreOwnerMainReservConfirm/>*/}
                                {/*    </Modal>*/}
                                {/*    <Calendar />*/}
                                {/*</div>*/}
                                <div className="SOMall-reserv">
                                    <div className="SOMcontainer-132" onClick={() => openModal('SOMRCModal')}>
                                        전체 예약 </div>
                                    <Calendar modalType="StoreOwnerMainReservConfirm" />
                                </div>
                            </div>
                            <div className="SOMwait-reservation">
                                <div className="SOMframe-527">
                                    <div className="SOMcontainerReservCheck">
                                        예약 확인
                                    </div>
                                </div>
                                <div className="SOMwait-reserv-list-calen">
                                    <div className="SOMwait-reserv-list">
                                        <div className="SOMnew-wait-list">
                                            <div className="SOMcontainer-1">
                                                신규
                                            </div>
                                            <div className="SOMwait-list">
                                                <div className="SOMwait-reserv-date">
                                                <div className="SOM-wrd-date">
                                                        3.26
                                                    </div>
                                                    <div className="SOM-wrd-time">
                                                        17:00
                                                    </div>
                                                    <div className="SOM-wrd-emp">
                                                        심화 디자이너
                                                    </div>
                                                </div>
                                                <div className="SOMwait-reserv-button">
                                                    <button className="SOMconfirm-button">
                                                        <div className="SOM-cbutton">
                                                            확정
                                                        </div>
                                                    </button>
                                                    <button className="SOMrefuse-button">
                                                        <div className="SOM-rbutton">
                                                            거절
                                                        </div>
                                                    </button>
                                                    <button className="SOMplus-button">
                                                        <div className="SOM-pbutton">
                                                            ...
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="SOMwait-list">
                                                <div className="SOMwait-reserv-date">
                                                    <div className="SOM-wrd-date">
                                                        3.24
                                                    </div>
                                                    <div className="SOM-wrd-time">
                                                        19:00
                                                    </div>
                                                    <div className="SOM-wrd-emp">
                                                        캡 디자이너
                                                    </div>
                                                </div>
                                                <div className="SOMwait-reserv-button">
                                                    <button className="SOMconfirm-button">
                                                        <div className="SOM-cbutton">
                                                            확정
                                                        </div>
                                                    </button>
                                                    <button className="SOMrefuse-button">
                                                        <div className="SOM-rbutton">
                                                            거절
                                                        </div>
                                                    </button>
                                                    <button className="SOMplus-button">
                                                        <div className="SOM-pbutton">
                                                            ...
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="SOMwait-list">
                                                <div className="SOMwait-reserv-date">
                                                    <div className="SOM-wrd-date">
                                                        4.3
                                                    </div>
                                                    <div className="SOM-wrd-time">
                                                        19:30
                                                    </div>
                                                    <div className="SOM-wrd-emp">
                                                        제이 원장
                                                    </div>
                                                </div>
                                                <div className="SOMwait-reserv-button">
                                                    <button className="SOMconfirm-button">
                                                        <div className="SOM-cbutton">
                                                            확정
                                                        </div>
                                                    </button>
                                                    <button className="SOMrefuse-button">
                                                        <div className="SOM-rbutton">
                                                            거절
                                                        </div>
                                                    </button>
                                                    <button className="SOMplus-button">
                                                        <div className="SOM-pbutton">
                                                            ...
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            <button className="SOMframe-523" onClick={() => openModal('SBROModal')}>
                                                <div className="SOMcontainer-20">
                                                    전체보기
                                                </div>
                                            </button>
                                            <Modal isOpen={modalState.SBROModal}
                                                   onRequestClose={() => closeModal('SBROModal')}
                                                   style={customStyles}>
                                                <StandByReservation_Owner/>
                                            </Modal>
                                            {/*<div className="SOMframe-523">*/}
                                            {/*    <div className="SOMcontainer-20">*/}
                                            {/*        전체보기*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                        <div className="SOMimminent-wait-list">
                                            <div className="SOMcontainer-21">
                                                임박
                                            </div>
                                            <div className="SOMwait-list">
                                                <div className="SOMwait-reserv-date">
                                                    <div className="SOM-wrd-date">
                                                        3.20
                                                    </div>
                                                    <div className="SOM-wrd-time">
                                                        13:00
                                                    </div>
                                                    <div className="SOM-wrd-emp">
                                                        심화 디자이너
                                                    </div>
                                                </div>
                                                <div className="SOMwait-reserv-button">
                                                    <button className="SOMconfirm-button">
                                                        <div className="SOM-cbutton">
                                                            확정
                                                        </div>
                                                    </button>
                                                    <button className="SOMrefuse-button">
                                                        <div className="SOM-rbutton">
                                                            거절
                                                        </div>
                                                    </button>
                                                    <button className="SOMplus-button">
                                                        <div className="SOM-pbutton">
                                                            ...
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="SOMwait-list">
                                                <div className="SOMwait-reserv-date">
                                                    <div className="SOM-wrd-date">
                                                        3.20
                                                    </div>
                                                    <div className="SOM-wrd-time">
                                                        15:30
                                                    </div>
                                                    <div className="SOM-wrd-emp">
                                                        캡 디자이너
                                                    </div>
                                                </div>
                                                <div className="SOMwait-reserv-button">
                                                    <button className="SOMconfirm-button">
                                                        <div className="SOM-cbutton">
                                                            확정
                                                        </div>
                                                    </button>
                                                    <button className="SOMrefuse-button">
                                                        <div className="SOM-rbutton">
                                                            거절
                                                        </div>
                                                    </button>
                                                    <button className="SOMplus-button">
                                                        <div className="SOM-pbutton">
                                                            ...
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="SOMwait-list">
                                                <div className="SOMwait-reserv-date">
                                                    <div className="SOM-wrd-date">
                                                        3.22
                                                    </div>
                                                    <div className="SOM-wrd-time">
                                                        18:00
                                                    </div>
                                                    <div className="SOM-wrd-emp">
                                                        제이 원장
                                                    </div>
                                                </div>
                                                <div className="SOMwait-reserv-button">
                                                    <button className="SOMconfirm-button">
                                                        <div className="SOM-cbutton">
                                                            확정
                                                        </div>
                                                    </button>
                                                    <button className="SOMrefuse-button">
                                                        <div className="SOM-rbutton">
                                                            거절
                                                        </div>
                                                    </button>
                                                    <button className="SOMplus-button">
                                                        <div className="SOM-pbutton">
                                                            ...
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            <button className="SOMframe-523" onClick={() => openModal('SBROModal')}>
                                                <div className="SOMcontainer-20">
                                                    전체보기
                                                </div>
                                            </button>
                                            <Modal isOpen={modalState.SBROModal}
                                                   onRequestClose={() => closeModal('SBROModal')}
                                                   style={customStyles}>
                                                <StandByReservation_Owner/>
                                            </Modal>
                                        </div>
                                    </div>
                                    <Calendar reservations={reservations} modalType="StandByReservationOwner"/>
                                </div>
                            </div>
                            <div className="SOMmenu-box">
                                <div className="SOMmenu-list">
                                    <div className="SOMmenu-info">
                                        <div className="SOMmenu-pic"
                                             style={{ backgroundImage: `url("/assets_shop/cut_W_3.png")` }}>
                                        </div>
                                        <div className="SOMmenu">
                                            <div className="SOMmenu-name">
                                                여성 커트
                                            </div>
                                            <div className="SOMmenu-line">
                                                |
                                            </div>
                                            <div className="SOMmenu-price">
                                                30,000
                                            </div>
                                        </div>
                                    </div>
                                    <div className="SOMmenu-info">
                                        <div className="SOMmenu-pic"
                                             style={{ backgroundImage: `url("/assets_shop/cut_M_2.png")` }}>
                                        </div>
                                        <div className="SOMmenu">
                                            <div className="SOMmenu-name">
                                                남성 커트
                                            </div>
                                            <div className="SOMmenu-line">
                                                |
                                            </div>
                                            <div className="SOMmenu-price">
                                                30,000
                                            </div>
                                        </div>
                                    </div>
                                    <div className="SOMmenu-info">
                                        <div className="SOMmenu-pic"
                                             style={{ backgroundImage: `url("/assets_shop/perm_W_1.png")` }}>
                                        </div>
                                        <div className="SOMmenu">
                                            <div className="SOMmenu-name">
                                                일반펌
                                            </div>
                                            <div className="SOMmenu-line">
                                                |
                                            </div>
                                            <div className="SOMmenu-price">
                                                30,000
                                            </div>
                                        </div>
                                    </div>
                                    <div className="SOMmenu-info">
                                        <div className="SOMmenu-pic"
                                             style={{ backgroundImage: `url("/assets_shop/perm_M_1.png")` }}>
                                        </div>
                                        <div className="SOMmenu">
                                            <div className="SOMmenu-name">
                                                볼륨펌
                                            </div>
                                            <div className="SOMmenu-line">
                                                |
                                            </div>
                                            <div className="SOMmenu-price">
                                                50,000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="SOM-Regist-Modify" onClick={() => openModal('secondModal')}>
                                    <div className="SOM-RM-button">
                                        등록/수정
                                    </div>
                                </button>
                                <Modal isOpen={modalState.secondModal} onRequestClose={() => closeModal('secondModal')} style={customStyles}>
                                    <StoreOwnerMainMenuCateg/>
                                </Modal>
                            </div>
                            <div className="SOMstaff-box">
                                <div className="SOMstaff-list">
                                    <div className="SOMstaff-info">
                                        <div className="SOMstaff-img"
                                             style={{ backgroundImage: `url("/assets_shop/designer_M_4.png")` }}>
                                        </div>
                                        <div className="SOMstaff">
                                            <div className="SOMemp-name">
                                                제이 원장
                                            </div>
                                            <div className="SOMemp-info">
                                                수원 재방률 1위 / 남성
                                            </div>
                                        </div>
                                    </div>
                                    <div className="SOMstaff-info">
                                        <div className="SOMstaff-img"
                                             style={{ backgroundImage: `url("/assets_shop/designer_W_4.png")` }}>
                                        </div>
                                        <div className="SOMstaff">
                                            <div className="SOMemp-name">
                                                심화 디자이너
                                            </div>
                                            <div className="SOMemp-info">
                                                수원 재방률 1위 / 여성
                                            </div>
                                        </div>
                                    </div>
                                    <div className="SOMstaff-info">
                                        <div className="SOMstaff-img"
                                             style={{ backgroundImage: `url("/assets_shop/designer_W_6.png")` }}>
                                        </div>
                                        <div className="SOMstaff">
                                            <div className="SOMemp-name">
                                                캡 디자이너
                                            </div>
                                            <div className="SOMemp-info">
                                                수원 재방률 1위 / 여성
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="SOM-Regist-Modify" onClick={() => openModal('thirdModal')}>
                                    <div className="SOM-RM-button">
                                        등록/수정
                                    </div>
                                </button>
                                <Modal isOpen={modalState.thirdModal} onRequestClose={() => closeModal('thirdModal')}
                                       style={customStyles}>
                                    <StoreOwnerMainEmpPopup/>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}