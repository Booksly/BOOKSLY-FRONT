import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginAfterMainHeader from "../nav/LoginAfterMainHeader";
import "../MainPage/Main.css";
import "./Reservation.css";
import { shops as reservationShops } from "../../data/reservation/dummy";
import { shops as detailShops } from "../../data/detail-store/dummy";
import Calen_EX from "../StandByReservation_Owner/Calender/calendal";
import MenuComponent from "./MenuComponent";

export default function Reservation() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const shopId = parseInt(queryParams.get("shopId"));

  const combinedShops = [...reservationShops, ...detailShops];
  const shop = combinedShops.find(
    (shop) => shop.shopId === shopId || shop.id === shopId
  );

  const [reserveTimes, setReserveTimes] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const navigate = useNavigate();

  if (!shop) {
    return <div>Shop not found</div>;
  }

  const shopName = shop.shopName || shop.name;
  const employees = shop.employees.map((employee) => {
    const detailEmployee = detailShops.find((detailShop) =>
      detailShop.employees.some((e) => e.name === employee.name)
    );
    if (detailEmployee) {
      const detailEmployeeData = detailEmployee.employees.find(
        (e) => e.name === employee.name
      );
      return {
        ...employee,
        profileImgUri: detailEmployeeData.profileImgUri,
      };
    }
    return employee;
  });

  const handleStaffClick = (index, employeeId) => {
    setSelectedStaff(index);
    if (selectedDate) {
      updateReserveTimes(selectedDate, employeeId);
    }
  };

  const handleTimeClick = (index) => {
    setSelectedTime(index);
  };

  const handleDateChange = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    setSelectedDate(formattedDate);
    if (selectedStaff !== null) {
      const employeeId = employees[selectedStaff].id;
      updateReserveTimes(formattedDate, employeeId);
    }
  };

  const updateReserveTimes = (date, employeeId) => {
    if (date && employeeId) {
      const selectedEmployee = employees.find(
        (employee) => employee.id === parseInt(employeeId)
      );
      setReserveTimes(selectedEmployee.reserveTimes[date] || []);
    }
  };

  const handleReservationSubmit = () => {
    navigate("/Reservation_Complete");
  };

  return (
    <div className="main_padding">
      <LoginAfterMainHeader />
      <div className="reservation_padding">
        {shopName}
        <br />
        <div className="reserve_select_option">
          <div className="reserve_title">직원 선택</div>
          <div className="option_boxs_row">
            {employees.map((employee, index) => (
              <div
                key={index}
                className={`staff_box ${
                  selectedStaff === index ? "isSelect" : ""
                }`}
                onClick={() => handleStaffClick(index, employee.id)}
              >
                <div
                  className="staff_img"
                  style={{ backgroundImage: `url(${employee.profileImgUri})` }}
                ></div>
                <div className="staff_name">{employee.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="reserve_select_option">
          <div className="reserve_title">날짜 선택</div>
          <div className="calendar_select_single">
            <div>
              <Calen_EX onChange={handleDateChange} />
            </div>
          </div>
        </div>
        <div className="reserve_select_option">
          <div className="reserve_title">시간대 선택</div>
          <div className="option_boxs_row">
            {reserveTimes.map((time, index) => (
              <div
                key={index}
                className={`time_box ${
                  selectedTime === index ? "isSelect" : ""
                }`}
                onClick={() => handleTimeClick(index)}
              >
                <div className="time">{time}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="reserve_select_option">
          <div className="reserve_title">메뉴 선택</div>
          <MenuComponent></MenuComponent>
        </div>
        <div className="reserve_select_option">
          <div className="reserve_title">문의사항</div>
          <textarea className=""></textarea>
        </div>
        <p>당일 예약 취소는 불가능 합니다.</p>
        <p>방문 시 먼저 온 손님이 계신 경우 늦어질 수 있습니다.</p>
        <p>양해 부탁드립니다.</p>
        <button
          type="submit"
          className="button_small"
          onClick={handleReservationSubmit}
        >
          예약하기
        </button>
      </div>
    </div>
  );
}
