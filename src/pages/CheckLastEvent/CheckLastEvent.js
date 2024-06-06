import React from "react";
import "./CheckLastEvent.css";
import StoreOwnerLeftNavi from "../nav/StoreOwnerLeftNavi";
import StoreOwnerTopNavi from "../nav/StoreOwnerTopNavi";

export default function CheckLastEvent() {
  return (
    <div className="CheckLastEvent">
      <div className="CheckLastEventBack">
        <StoreOwnerLeftNavi />
        <div className="SOMcontainerAll">
          <StoreOwnerTopNavi />
          <div className="SOMcontainer">
            <div className="container">
              <div className="container-1">마감 임박 이벤트</div>
              <div className="container-2">타임 예약 이벤트</div>
              <div className="frame-429">
                <span className="container-12">이벤트 추가 설정</span>
              </div>
            </div>
            <div className="line-22"></div>
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
