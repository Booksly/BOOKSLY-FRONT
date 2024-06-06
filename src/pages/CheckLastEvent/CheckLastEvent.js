import React from "react";
import { useNavigate } from "react-router-dom";
import "./CheckLastEvent.css";
import StoreOwnerLeftNavi from "../nav/StoreOwnerLeftNavi";
import StoreOwnerTopNavi from "../nav/StoreOwnerTopNavi";

export default function CheckLastEvent() {
  const navigate = useNavigate();
  const goToCheckLastEvent = () => {
    navigate("/CheckLastEvent");
  };

  const goToCheckTimeEvent = () => {
    navigate("/CheckTimeEvent");
  };

  const goToRegisterTimeEvent = () => {
    navigate("/RegisterTimeEvent");
  };

  return (
    <div className="CheckLastEvent">
      <div className="CheckLastEventBack">
        <StoreOwnerLeftNavi />
        <div className="CLEcontainerAll">
          <StoreOwnerTopNavi />
          <div className="CLE-container">
            <div className="CLE-frame-624">
              <div className="CLE-frame-623">
                <div className="CLE-frame-622">
                  <button
                    className="CLE-naviButton-n"
                    onClick={goToCheckLastEvent}
                  >
                    마감 임박 이벤트
                  </button>
                  <button
                    className="CLE-naviButton"
                    onClick={goToCheckTimeEvent}
                  >
                    타임 예약 이벤트
                  </button>
                </div>
                <button className="CLE-frame-429">
                  <div
                    className="CLE-container-3"
                    onClick={goToRegisterTimeEvent}
                  >
                    이벤트 추가 등록
                  </div>
                </button>
              </div>
              <div className="CLE-line-22"></div>
            </div>
            <div className="frame-130">
              <p className="container-3">
                <span className="container-3-sub-22"></span>
                <span className="container-3-sub-61"></span>
                <span></span>
              </p>
              <div className="frame-431">
                <span className="container-4">수정하기</span>
                <span className="container-5">삭제</span>
              </div>
            </div>
            <div className="frame-1301">
              <p className="container-8">
                <span className="container-8-sub-22"></span>
                <span className="container-8-sub-61"></span>
                <span></span>
              </p>
              <div className="frame-4311">
                <span className="container-6">수정하기</span>
                <span className="container-7">삭제</span>
              </div>
            </div>
            <div className="frame-1302">
              <p className="container-11">
                <span className="container-11-sub-22"></span>
                <span className="container-11-sub-61"></span>
                <span></span>
              </p>
              <div className="frame-4312">
                <span className="container-9">수정하기</span>
                <span className="container-10">삭제</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
