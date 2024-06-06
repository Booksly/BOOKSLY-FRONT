import React from "react";
import { useNavigate } from "react-router-dom";
import LoginAfterMainHeader from "../nav/LoginAfterMainHeader";
import "../MainPage/Main.css";
import "./Reservation.css";
import StandByReservation_Owner from "../StandByReservation_Owner/StandByReservation";

export default function Reservation_Complete() {
  const navigate = useNavigate();
  const handleNavigateToMainPage = () => {
    navigate("/");
  };
  const handleNavigateToMyHomeCurrReserv = () => {
    navigate("/MyHomeCurrReserv");
  };

  return (
    <div className="main_padding">
      {/* 예약 완료 페이지 내용 */}
      <LoginAfterMainHeader />
      <div className="reservation_padding">
        예약 신청되었습니다.
        <div className="buttons_box">
          <button className="button_big" onClick={handleNavigateToMainPage}>
            메인 페이지
          </button>
          <button
            className="button_big"
            onClick={handleNavigateToMyHomeCurrReserv}
          >
            예약 확인
          </button>
        </div>
        <button className="button_small">예약 소식 받기</button>
      </div>
      {/* <StandByReservation_Owner/> */}
    </div>
  );
}
