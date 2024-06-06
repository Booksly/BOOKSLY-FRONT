import './CheckTimeEvent.css'
import StoreOwnerLeftNavi from "../nav/StoreOwnerLeftNavi";
import StoreOwnerTopNavi from "../nav/StoreOwnerTopNavi";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const Calendar = ({ reservations = [], onSelectDate }) => {
    const [date, setDate] = useState(new Date());

    const handleDateClick = (day) => {
        const selectedDate = new Date(date.getFullYear(), date.getMonth(), day);
        onSelectDate(selectedDate);
    };

    const handlePrevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1));
    };

    const renderDay = (day) => {
        return (
            <div className="SOMcalendar-day" onClick={() => handleDateClick(day)} key={day}>
                <div className="SOMvalue">
                    {day}
                    {<div className="SOMellipse"></div>}
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
            days.push(renderDay(i));
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

export default function CheckTimeEven() {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedFrame, setSelectedFrame] = useState(null);
    const [selectedDesigner, setSelectedDesigner] = useState(null);
    const [savedFrames, setSavedFrames] = useState({});

    const goToCheckLastEvent = () => {
        navigate("/CheckLastEvent");
    };

    const goToCheckTimeEvent = () => {
        navigate("/CheckTimeEvent");
    };

    const handleSelectDate = (date) => {
        setSelectedDate(date);
        setSelectedFrame(null); // Reset frame selection when date is changed
    };

    const handleFrameClick = (frame) => {
        if (selectedDate) { // Check if a date is selected
            setSelectedFrame(prevFrame => (prevFrame === frame ? null : frame));

            // Save or remove the selected frame
            setSavedFrames(prevSavedFrames => {
                const newSavedFrames = { ...prevSavedFrames };
                if (newSavedFrames[selectedDate.toDateString()] === frame) {
                    delete newSavedFrames[selectedDate.toDateString()];
                } else {
                    newSavedFrames[selectedDate.toDateString()] = frame;
                }
                return newSavedFrames;
            });
        }
    };

    const handleDesignerClick = (designer) => {
        setSelectedDesigner(designer);
    };

    return (
        <div className="checkTimeEven">
            <div className="CTE-back">
                <StoreOwnerLeftNavi/>
                <div className="CTE-containerAll">
                    <StoreOwnerTopNavi/>
                    <div className="CTE-container">
                        <div className="CTE-frame-624">
                            <div className="CTE-frame-623">
                                <div className="CTE-frame-622">
                                    <button className="CTE-naviButton-n" onClick={goToCheckLastEvent}>
                                        마감 임박 이벤트
                                    </button>
                                    <button className="CTE-naviButton" onClick={goToCheckLastEvent}>
                                        타임 예약 이벤트
                                    </button>
                                </div>
                                <button className="CTE-frame-429">
                                    <div className="CTE-container-3">
                                        이벤트 추가 등록
                                    </div>
                                </button>
                            </div>
                            <div className="CTE-line-22">
                            </div>
                        </div>
                        <div className="CTE-frame-625">
                            <div className="CTE-frame-433">
                                <Calendar onSelectDate={handleSelectDate} />
                            </div>
                            <div className="CTE-frame-434">
                                <div className="CTE-frame-435">
                                    <div className="CTE-container-4">
                                        타임 이벤트 목록
                                    </div>
                                    <div className="CTE-container-5">
                                        {selectedDate ? `${selectedDate.getMonth() + 1}월 ${selectedDate.getDate()}일` : "날짜선택"}
                                    </div>
                                </div>
                                <div className="CTE-frame-459">
                                    <button className={`CTE-empButton ${selectedDesigner === '제이 원장' ? 'selected' : ''}`} onClick={() => handleDesignerClick('제이 원장')}>
                                        제이 원장
                                    </button>
                                    <button className={`CTE-empButton ${selectedDesigner === '심화 디자이너' ? 'selected' : ''}`} onClick={() => handleDesignerClick('심화 디자이너')}>
                                        심화 디자이너
                                    </button>
                                    <button className={`CTE-empButton ${selectedDesigner === '캡 디자이너' ? 'selected' : ''}`} onClick={() => handleDesignerClick('캡 디자이너')}>
                                        캡 디자이너
                                    </button>
                                </div>
                                <div className="CTE-frame-460">
                                    <div className={`CTE-timeEvt ${(selectedFrame === '438' || savedFrames[selectedDate?.toDateString()] === '438') ? 'selected' : ''}`} onClick={() => handleFrameClick('438')}>
                                        <div className="CTE-title">
                                            아침 예약
                                        </div>
                                        <div className="CTE-listRight">
                                            <div className="CTE-listTime">
                                                10:00 ~ 11:30
                                            </div>
                                            <div className="CTE-containerBox">
                                                <button className="CTE-container-modify">
                                                    수정하기
                                                </button>
                                                <button className="CTE-container-del">
                                                    삭제
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`CTE-timeEvt ${(selectedFrame === '439' || savedFrames[selectedDate?.toDateString()] === '439') ? 'selected' : ''}`} onClick={() => handleFrameClick('439')}>
                                        <div className="CTE-title">
                                            짜투리 시간 예약
                                        </div>
                                        <div className="CTE-listRight">
                                            <div className="CTE-listTime">
                                                10:00 ~ 20:00
                                            </div>
                                            <div className="CTE-containerBox">
                                                <button className="CTE-container-modify">
                                                    수정하기
                                                </button>
                                                <button className="CTE-container-del">
                                                    삭제
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`CTE-timeEvt ${(selectedFrame === '440' || savedFrames[selectedDate?.toDateString()] === '440') ? 'selected' : ''}`} onClick={() => handleFrameClick('440')}>
                                        <div className="CTE-title">
                                            마지막 타임 예약
                                        </div>
                                        <div className="CTE-listRight">
                                            <div className="CTE-listTime">
                                                19:00 ~ 20:00
                                            </div>
                                            <div className="CTE-containerBox">
                                                <button className="CTE-container-modify">
                                                    수정하기
                                                </button>
                                                <button className="CTE-container-del">
                                                    삭제
                                                </button>
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
    );
}
