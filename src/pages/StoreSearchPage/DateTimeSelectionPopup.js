import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimeSelectionPopup = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={`data-selection-popup ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
        <h2>날짜 선택</h2>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy/MM/dd"
          placeholderText="가능한 날짜를 선택해 주세요"
        />
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default DateTimeSelectionPopup;
