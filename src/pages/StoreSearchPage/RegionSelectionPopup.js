import React, { useState, useEffect } from "react";
import "./RegionSelectionPopup.css";

const RegionSelectionPopup = ({ isOpen, onClose }) => {
  const [regions, setRegions] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch("API 호출 주소");
        if (!response.ok) {
          throw new Error("API 호출 실패");
        }
        const data = await response.json();
        setRegions(data.regions);
      } catch (error) {
        console.error("지역 조회 실패", error.message);
      }
    };
    fetchRegions();
  }, []);

  const handleRegionSelect = (region) => {
    setSelectedRegions((prevRegions) => {
      if (prevRegions.includes(region)) {
        return prevRegions.filter((prevRegion) => prevRegion !== region);
      } else {
        return [...prevRegions, region];
      }
    });
  };

  if (!isOpen) return null;

  return (
    <div>
      <div className="popup-overlay">
        <div className="popup-content">
          <h2>지역을 추가해주세요</h2>
          <ul>
            {regions.map((region) => (
              <li key={region} onClick={() => handleRegionSelect(region)}>
                {region}
              </li>
            ))}
          </ul>
          <button onClick={onClose}>닫기</button>
          <p>{selectedRegions.join(", ")}</p>
        </div>
      </div>
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
            <div className="free-icon-target-6742104"></div>
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
  );
};

export default RegionSelectionPopup;
