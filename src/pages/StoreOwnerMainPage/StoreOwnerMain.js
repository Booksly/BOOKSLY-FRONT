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


const Calendar = ({ reservations = [] }) => {
    const [date, setDate] = useState(new Date()); // 초기값: 현재 날짜

    const handleDateClick = (day) => {
        alert(`Selected date: ${date.getFullYear()}-${date.getMonth() + 1}-${day}`);
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
        </div>
    );
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
                                    <div className="SOMstore-detailed-info-pic">
                                        <div className="SOMprofile-select-1">
                                        </div>
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
                                            <button className="SOMcontainer-98" onClick={() => openModal('SOMTRCModal')}>
                                                오늘 예약
                                            </button>
                                            <Modal isOpen={modalState.SOMTRCModal}
                                                   onRequestClose={() => closeModal('SOMTRCModal')} style={customStyles}>
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
                                                {/*<div className="SOMselect-box-before">*/}
                                                {/*    /!*<div className="SOMcontainer-99">*!/*/}
                                                {/*    /!*  제이 원장*!/*/}
                                                {/*    /!*</div>*!/*/}
                                                {/*    /!*<img className="SOMarrow-button-before" src="SOMassets/vectors/ArrowButtonBefore2_x2.svg" />*!/*/}
                                                {/*</div>*/}
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
                                        <div className="scroll">
                                            <div className="SOMdldccheck">
                                                <div className="SOMtime-memo">
                                                    <div className="SOMtime-note">
                                                        <div className="SOMcontainer-100">
                                                            12:30
                                                        </div>
                                                        <div className="SOMcontainer-101">
                                                            |
                                                        </div>
                                                        <div className="SOMmenu-list-1">
                                                            <div className="SOMcontainer-102">
                                                                여성 커트, 클리닉
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="SOMtime-note-1">
                                                        <div className="SOMcontainer-103">
                                                            13:00
                                                        </div>
                                                        <div className="SOMcontainer-104">
                                                            |
                                                        </div>
                                                        <div className="SOMmenu-list-2">
                                                            <div className="SOMcontainer-105">
                                                                여성 커트, 클리닉
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="SOMtime-note-2">
                                                        <div className="SOMcontainer-106">
                                                            13:30
                                                        </div>
                                                        <div className="SOMcontainer-107">
                                                            |
                                                        </div>
                                                        <div className="SOMmenu-list-3">
                                                            <div className="SOMcontainer-108">
                                                                여성 커트, 클리닉
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="SOMtime-note-3">
                                                        <div className="SOMcontainer-109">
                                                            14:00
                                                        </div>
                                                        <div className="SOMcontainer-110">
                                                            |
                                                        </div>
                                                        <div className="SOMmenu-list-2">
                                                            <div className="SOMcontainer-111">
                                                                여성 커트, 클리닉
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="SOMtime-note-4">
                                                        <div className="SOMcontainer-112">
                                                            14:30
                                                        </div>
                                                        <div className="SOMcontainer-113">
                                                            |
                                                        </div>
                                                        <div className="SOMmenu-list-21">
                                                            <div className="SOMcontainer-114">
                                                                여성 커트, 클리닉
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="SOMtime-note-5">
                                                        <div className="SOMcontainer-115">
                                                            15:00
                                                        </div>
                                                        <div className="SOMcontainer-116">
                                                            |
                                                        </div>
                                                        <div className="SOMmenu-list-22">
                                                            <div className="SOMcontainer-117">
                                                                여성 커트, 클리닉
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="SOMtime-note-6">
                                                        <div className="SOMcontainer-118">
                                                            15:30
                                                        </div>
                                                        <div className="SOMcontainer-119">
                                                            |
                                                        </div>
                                                        <div className="SOMmenu-list-23">
                                                            <div className="SOMcontainer-120">
                                                                여성 커트, 클리닉
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="SOMtime-note-7">
                                                        <div className="SOMcontainer-121">
                                                            16:00
                                                        </div>
                                                        <div className="SOMcontainer-122">
                                                            |
                                                        </div>
                                                        <div className="SOMmenu-list-24">
                                                            <div className="SOMcontainer-123">
                                                                여성 커트, 클리닉
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="SOMtime-note-8">
                                                        <div className="SOMcontainer-124">
                                                            16:30
                                                        </div>
                                                        <div className="SOMcontainer-125">
                                                            |
                                                        </div>
                                                        <div className="SOMmenu-list-25">
                                                            <div className="SOMcontainer-126">
                                                                여성 커트, 클리닉
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="SOMdeadline-dccheck">
                                                    <div className="SOMcheck-box">
                                                        <div className="SOMrectangle-246">
                                                        </div>
                                                        <div className="SOMrectangle-247">
                                                        </div>
                                                    </div>
                                                    <div className="SOMcheck-box-1">
                                                        <div className="SOMrectangle-2461">
                                                        </div>
                                                        <div className="SOMrectangle-2471">
                                                        </div>
                                                    </div>
                                                    <div className="SOMcheck-box-2">
                                                        <div className="SOMrectangle-2462">
                                                        </div>
                                                        <div className="SOMrectangle-2472">
                                                        </div>
                                                    </div>
                                                    <div className="SOMcheck-box-3">
                                                        <div className="SOMrectangle-2463">
                                                        </div>
                                                        <div className="SOMrectangle-2473">
                                                        </div>
                                                    </div>
                                                    <div className="SOMcheck-box-4">
                                                        <div className="SOMrectangle-2464">
                                                        </div>
                                                        <div className="SOMrectangle-2474">
                                                        </div>
                                                    </div>
                                                    <div className="SOMcheck-box-5">
                                                        <div className="SOMrectangle-2465">
                                                        </div>
                                                        <div className="SOMrectangle-2475">
                                                        </div>
                                                    </div>
                                                    <div className="SOMcheck-box-6">
                                                        <div className="SOMrectangle-2466">
                                                        </div>
                                                        <div className="SOMrectangle-2476">
                                                        </div>
                                                    </div>
                                                    <div className="SOMcheck-box-7">
                                                        <div className="SOMrectangle-2467">
                                                        </div>
                                                        <div className="SOMrectangle-2477">
                                                        </div>
                                                    </div>
                                                    <div className="SOMcheck-box-8">
                                                        <div className="SOMrectangle-2468">
                                                        </div>
                                                        <div className="SOMrectangle-2478">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMall-reserv">
                                    <button className="SOMcontainer-132" onClick={() => openModal('SOMRCModal')}>
                                        전체 예약
                                    </button>
                                    <Modal isOpen={modalState.SOMRCModal}
                                           onRequestClose={() => closeModal('SOMRCModal')} style={customStyles}>
                                        <StoreOwnerMainReservConfirm/>
                                    </Modal>
                                    {/*<div className="SOMcontainer-132">*/}
                                    {/*    전체 예약*/}
                                    {/*</div>*/}
                                    <Calendar />
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
                                                    <div className="SOMconfirm-button">
                                                        <div className="SOM-cbutton">
                                                            확정
                                                        </div>
                                                    </div>
                                                    <div className="SOMrefuse-button">
                                                        <div className="SOM-rbutton">
                                                            거절
                                                        </div>
                                                    </div>
                                                    <div className="SOMplus-button">
                                                        <div className="SOM-pbutton">
                                                            ...
                                                        </div>
                                                    </div>
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
                                                    <div className="SOMconfirm-button">
                                                        <div className="SOM-cbutton">
                                                            확정
                                                        </div>
                                                    </div>
                                                    <div className="SOMrefuse-button">
                                                        <div className="SOM-rbutton">
                                                            거절
                                                        </div>
                                                    </div>
                                                    <div className="SOMplus-button">
                                                        <div className="SOM-pbutton">
                                                            ...
                                                        </div>
                                                    </div>
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
                                                    <div className="SOMconfirm-button">
                                                        <div className="SOM-cbutton">
                                                            확정
                                                        </div>
                                                    </div>
                                                    <div className="SOMrefuse-button">
                                                        <div className="SOM-rbutton">
                                                            거절
                                                        </div>
                                                    </div>
                                                    <div className="SOMplus-button">
                                                        <div className="SOM-pbutton">
                                                            ...
                                                        </div>
                                                    </div>
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
                                                    <div className="SOMconfirm-button">
                                                        <div className="SOM-cbutton">
                                                            확정
                                                        </div>
                                                    </div>
                                                    <div className="SOMrefuse-button">
                                                        <div className="SOM-rbutton">
                                                            거절
                                                        </div>
                                                    </div>
                                                    <div className="SOMplus-button">
                                                        <div className="SOM-pbutton">
                                                            ...
                                                        </div>
                                                    </div>
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
                                                    <div className="SOMconfirm-button">
                                                        <div className="SOM-cbutton">
                                                            확정
                                                        </div>
                                                    </div>
                                                    <div className="SOMrefuse-button">
                                                        <div className="SOM-rbutton">
                                                            거절
                                                        </div>
                                                    </div>
                                                    <div className="SOMplus-button">
                                                        <div className="SOM-pbutton">
                                                            ...
                                                        </div>
                                                    </div>
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
                                                    <div className="SOMconfirm-button">
                                                        <div className="SOM-cbutton">
                                                            확정
                                                        </div>
                                                    </div>
                                                    <div className="SOMrefuse-button">
                                                        <div className="SOM-rbutton">
                                                            거절
                                                        </div>
                                                    </div>
                                                    <div className="SOMplus-button">
                                                        <div className="SOM-pbutton">
                                                            ...
                                                        </div>
                                                    </div>
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
                                    <Calendar reservations={reservations} />
                                </div>
                            </div>
                            <div className="SOMmenu-box">
                                <div className="SOMmenu-list">
                                    <div className="SOMmenu-info">
                                        <div className="SOMmenu-pic">
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
                                        <div className="SOMmenu-pic">
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
                                        <div className="SOMmenu-pic">
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
                                    <div className="SOMmenu-info">
                                        <div className="SOMmenu-pic">
                                        </div>
                                        <div className="SOMmenu">
                                            <div className="SOMmenu-name">
                                                펌
                                            </div>
                                            <div className="SOMmenu-line">
                                                |
                                            </div>
                                            <div className="SOMmenu-price">
                                                30,000
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
                                        <div className="SOMstaff-img">
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
                                        <div className="SOMstaff-img">
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
                                        <div className="SOMstaff-img">
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
                                {/*<div className="SOM-Regist-Modify">*/}
                                {/*    <div className="SOM-RM-button">*/}
                                {/*      등록/수정*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}