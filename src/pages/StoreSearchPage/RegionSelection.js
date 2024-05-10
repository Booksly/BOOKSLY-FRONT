import React, { useState } from "react";
import RegionSelectionPopup from "./RegionSelectionPopup";

function RegionSelection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenPopup}></button>
      {isPopupOpen && (
        <RegionSelectionPopup onClose={handleClosePopup}></RegionSelectionPopup>
      )}
    </div>
  );
}

export default RegionSelection;
