import React, { useState, useEffect } from 'react';
import './calendal.css';

export default function Calen_EX() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    
    useEffect(() => {
        renderCalendar(currentDate);
    }, [currentDate, selectedDate]);

    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        const calendarDates = [];
        for (let i = 0; i < firstDay; i++) {
            calendarDates.push(<div key={`empty-${i}`} className="empty-cell"></div>);
        }
        for (let i = 1; i <= lastDate; i++) {
            const key = `${year}-${month + 1}-${i}`;
            calendarDates.push(
                <div 
                    key={i} 
                    className={`date-cell ${selectedDate === key ? 'has-note' : ''}`}
                    onClick={() => handleDateClick(key)}
                >
                    {i}
                </div>
            );
        }
        return calendarDates;
    }

    function handleDateClick(key) {
        setSelectedDate(prevSelectedDate => prevSelectedDate === key ? null : key);
    }

    function handlePrevMonth() {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() - 1);
            return newDate;
        });
    }
    
    function handleNextMonth() {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() + 1);
            return newDate;
        });
    }
    

    return (
        <>
            <div className="calendar-container">
                <div className="calendar-header">
                    <button onClick={handlePrevMonth}>&lt;&lt;</button>
                    <h2>{`${currentDate.getFullYear()} ${monthNames[currentDate.getMonth()]}`}</h2>
                    <button onClick={handleNextMonth}>&gt;&gt;</button>
                </div>
                <div className="calendar-body">
                    <div className="calendar-days">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div id="calendarDates" className="calendar-dates">
                        {renderCalendar(currentDate)}
                    </div>
                </div>
            </div>
            {selectedDate && (
                <div className="selected-dates">
                    <span>선택한 날짜:</span>
                    <p>{selectedDate}</p>
                </div>
            )}
             
        </>
    );
}
