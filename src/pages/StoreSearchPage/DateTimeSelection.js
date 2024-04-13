import React, { useState } from "react";
import DateTimeSelectionPopup from "./DateTimeSelectionPopup";

const DateTimeSelection = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>달력 열기</button>
      <DateTimeSelectionPopup isOpen={popupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default DateTimeSelection;
