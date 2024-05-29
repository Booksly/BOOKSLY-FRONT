import React from 'react';

const ReservationFilter = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div>
      <label>
        날짜:
        <input type="date" name="date" value={filters.date} onChange={handleChange} />
      </label>
      <label>
        카테고리:
        <select name="category" value={filters.category} onChange={handleChange}>
          <option value="">전체</option>
          <option value="카테고리1">카테고리1</option>
          <option value="카테고리2">카테고리2</option>
          <option value="카테고리3">카테고리3</option>
        </select>
      </label>
      <label>
        시간:
        <input type="time" name="time" value={filters.time} onChange={handleChange} />
      </label>
    </div>
  );
};

export default ReservationFilter;
