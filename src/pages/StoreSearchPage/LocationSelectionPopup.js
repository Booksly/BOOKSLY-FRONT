import React, { useState } from "react";

function LocationSelectionPopup({ locations, onSelectLocation }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLocationSelect = (location) => {
    onSelectLocation(location);
    setSearchQuery("");
  };

  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="지역을 지역명으로 검색 예) 수원, 영통구"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredLocations.map((location, index) => (
          <li key={index} onClick={() => handleLocationSelect(location)}>
            {location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LocationSelectionPopup;
