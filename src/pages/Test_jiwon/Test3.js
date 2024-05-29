import React, { useState, useEffect } from 'react';
import ReservationFilter from './Test.js';
import ReservationList from './Test2.js';

const reservationsData = [
    { date: '2024-05-29', category: '카테고리1', time: '10:00' },
    { date: '2024-05-29', category: '카테고리2', time: '14:00' },
    { date: '2024-05-30', category: '카테고리3', time: '09:00' },
    { date: '2024-05-29', category: '카테고리2', time: '12:30' },
    { date: '2024-05-30', category: '카테고리1', time: '02:30' },
    { date: '2024-06-01', category: '카테고리3', time: '02:00' },
    { date: '2024-06-08', category: '카테고리2', time: '14:30' },
    { date: '2024-06-06', category: '카테고리2', time: '22:00' },
    { date: '2024-06-06', category: '카테고리1', time: '14:00' },
    { date: '2024-06-05', category: '카테고리2', time: '09:00' },
    { date: '2024-06-06', category: '카테고리1', time: '10:00' },
    { date: '2024-05-29', category: '카테고리3', time: '03:00' },
    { date: '2024-05-31', category: '카테고리1', time: '22:00' },
    { date: '2024-06-08', category: '카테고리2', time: '00:00' },
    { date: '2024-06-06', category: '카테고리2', time: '08:00' },
    { date: '2024-06-06', category: '카테고리2', time: '12:00' },
    { date: '2024-05-30', category: '카테고리1', time: '13:00' },
    { date: '2024-06-05', category: '카테고리1', time: '18:00' },
    { date: '2024-06-07', category: '카테고리1', time: '23:30' },
    { date: '2024-06-08', category: '카테고리1', time: '20:30' },
    { date: '2024-06-05', category: '카테고리3', time: '03:30' },
    { date: '2024-06-07', category: '카테고리5', time: '07:30' },
    { date: '2024-05-31', category: '카테고리1', time: '02:00' }
    
  // 더미 데이터 추가
];

const Test44 = () => {
  const [filters, setFilters] = useState({ date: '', category: '', time: '' });
  const [filteredReservations, setFilteredReservations] = useState(reservationsData);

  useEffect(() => {
    const filterReservations = () => {
      const { date, category, time } = filters;
      let filtered = reservationsData;

      if (date) {
        filtered = filtered.filter((reservation) => reservation.date === date);
      }
      if (category) {
        filtered = filtered.filter((reservation) => reservation.category === category);
      }
      if (time) {
        filtered = filtered.filter((reservation) => reservation.time === time);
      }

      setFilteredReservations(filtered);
    };

    filterReservations();
  }, [filters]);

  return (
    <div>
      <h1>예약 조회</h1>
      <ReservationFilter filters={filters} setFilters={setFilters} />
      <ReservationList reservations={filteredReservations} />
    </div>
  );
};

export default Test44;
