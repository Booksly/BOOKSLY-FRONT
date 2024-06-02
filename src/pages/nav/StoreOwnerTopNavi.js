import "./StoreOwnerTopNavi.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

export default function StoreOwnerTopNavi() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/");
  }
  const goToExtraStoreRegist = () => {
    navigate("/ExtraStoreRegist");
  };
  const goToSetting = () => {
    navigate("/StoreOwnerSetting");
  }
  return (
      <div className="StoreOwnerTopNavi">
        <div className="StoreOwnerTopNaviStore-top-navi">
          <div className="StoreOwnerTopNaviStore-top-navi-top">
            <div className="StoreOwnerTopNaviStoreTopNaviEtc">
              <button
                  className="frame-ExtraStoreRegistButton"
                  onClick={goToExtraStoreRegist}
              >
                <div className="StoreOwnerTopNavicontainer-3">가게 추가 등록</div>
              </button>
              <div className="StoreOwnerTopNavialarm">
                <div className="StoreOwnerTopNavialarm-button"></div>
                <div className="StoreOwnerTopNavialarmId">아이디</div>
              </div>
              <button className="StoreOwnerTopNavilogoutButton" onClick={goToMain}>로그아웃</button>
            </div>
          </div>
          <div className="StoreOwnerTopNaviStore-top-navi-bottom">
            <div className="StoreOwnerTopNaviStore-top-navi-member-info">
              <div className="StoreOwnerTopNaviStore-top-navi-profile">
                <div className="StoreOwnerTopNaviprofile"></div>
              </div>
              <div className="StoreOwnerTopNavimember-info">
                <div className="StoreOwnerTopNaviStore-top-navi-id">
                  <span className="StoreOwnerTopNaviprofileId">아이디</span>
                  <button className="StoreOwnerTopNaviprofileInfoChangeBt"
                          onClick={goToSetting}>정보 수정</button>
                </div>
                <div className="StoreOwnerTopNavinumerical-summary">
                  <div className="StoreOwnerTopNavivisitors">
                    <div className="StoreOwnerTopNavicontainer-9">방문자수</div>
                    <div className="StoreOwnerTopNavivisitorsNum">2,444</div>
                  </div>
                  <div className="StoreOwnerTopNavitoday-visitors">
                  <span className="StoreOwnerTopNavicontainer-10">
                    오늘 방문자수
                  </span>
                    <span className="StoreOwnerTopNavitoday-visitorsNum">73</span>
                  </div>
                  <div className="StoreOwnerTopNaviregular-customer">
                  <span className="StoreOwnerTopNavicontainer-11">
                    단골손님
                  </span>
                    <span className="StoreOwnerTopNaviregular-customer-num">
                    185
                  </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="StoreOwnerTopNaviStoreTopNaviAnotherStore">
              <select className="StoreOwnerTopNaviStoreSelect">
                <option value="jjHair">제이제이 헤어</option>
              </select>
            </div>
          </div>
        </div>
      </div>
  );
}
