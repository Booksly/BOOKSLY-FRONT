import React, { useState } from "react";
import "./RegionSelectionPopup.css";

export default function RegionSelectionPopup() {
  return (
    <div className="RegionSelectionPopup">
      <div className="RegionSelectioPopupBack">
        <div className="frame-204">
          <div className="frame-2041">
            <div className="frame-324">
              <span className="container-1">지역을 추가해 주세요</span>
            </div>
            <div className="frame-325">
              <span className="container-2">0/3</span>
            </div>
          </div>
          <div className="frame-171">
            <div className="container">
              <div className="icon"></div>
              <div className="frame-168">
                <span className="container-3">
                  지역을 지역명으로 검색 예) 수원, 영통구
                </span>
              </div>
            </div>
            <div className="frame-192">
              <div className="frame-172">
                <div className="frame-170">
                  <span className="container-5">수원시 영통구</span>
                </div>
                <div className="frame-177">
                  <span className="container-6">수원시 영통구 이의동</span>
                </div>
                <div className="frame-1711">
                  <span className="container-7">수원시 영통구 연무동</span>
                </div>
                <div className="frame-1721">
                  <span className="container-8">수원시 영통구 지동</span>
                </div>
                <div className="frame-173">
                  <span className="container-9">수원시 영통구 00동</span>
                </div>
                <div className="frame-174">
                  <span className="container-10">수원시 영통구 99동</span>
                </div>
                <div className="frame-175">
                  <span className="container-11">수원시 영통구 88동</span>
                </div>
                <div className="frame-176">
                  <span className="container-12">수원시 영통구 89동</span>
                </div>
              </div>
              <div className="frame-191">
                <div className="rectangle-145"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
