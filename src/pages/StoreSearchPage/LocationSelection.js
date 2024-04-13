import React, { useState } from "react";
import LocationSelectionPopup from "./LocationSelectionPopup";

function LocationSelection() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const locations = [
    "서울",
    "경기",
    "인천",
    "부산",
    "대구",
    "광주",
    "대전",
    "울산",
  ];

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsPopupOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsPopupOpen(true)}>지역을 선택해 주세요</button>
      {isPopupOpen && (
        <LocationSelectionPopup
          locations={locations}
          onSelectLocation={handleLocationSelect}
        />
      )}
      {selectedLocation && <p>선택된 지역: {selectedLocation}</p>}
    </div>
  );
}

export default LocationSelection;
