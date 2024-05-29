import React from 'react';

const ReservationList = ({ reservations }) => {
  return (
    <div>
      {reservations.length > 0 ? (
        reservations.map((reservation, index) => (
          <div key={index}>
            <p>날짜: {reservation.date}</p>
            <p>카테고리: {reservation.category}</p>
            <p>시간: {reservation.time}</p>
          </div>
        ))
      ) : (
        <p>예약이 없습니다.</p>
      )}
    </div>
  );
};

export default ReservationList;
