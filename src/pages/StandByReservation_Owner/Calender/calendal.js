import React, { useState, useEffect } from 'react';
import './calendal.css';
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function Calen_EX({ onChange }) {
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
        if (onChange) {
            onChange(new Date(key));
        }
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
                    <button onClick={handlePrevMonth}>&lt;</button>
                    <h1>{`${currentDate.getFullYear()} ${monthNames[currentDate.getMonth()]}`}</h1>
                    <button onClick={handleNextMonth}>&gt;</button>
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
            
        </>
    );
}
