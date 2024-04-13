import React, { useState } from "react";
import LocationSelection from "./LocationSelection";
import DateTimeSelection from "./DateTimeSelection";
import CategorySelection from "./CategorySelection";

function StoreSearch() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("12:00");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1>Store Search Page</h1>
      <LocationSelection onSelectLocation={handleLocationChange} />
      <DateTimeSelection
        onSelectDate={handleDateChange}
        onSelectTime={handleTimeChange}
      />
      <CategorySelection onSelectCategory={handleCategoryChange} />
      {/* 
        top 100 차트 등 ui 별 요소 추가 구현
      */}
    </div>
  );
}

export default StoreSearch;
