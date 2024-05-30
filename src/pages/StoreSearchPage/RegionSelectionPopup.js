import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RegionSelectionPopup.css";

export default function RegionSelectionPopup() {
  const [searchTerm, setSearchTerm] = useState("");
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    if (searchTerm) {
      const fetchRegions = async () => {
        try {
          const response = await axios.get(
            "https://naveropenapi.apigw.ntruss.com/map-place/v1/search",
            {
              params: {
                query: searchTerm,
              },
              headers: {
                "X-NCP-APIGW-API-KEY-ID": "libgmfjh86",
                "X-NCP-APIGW-API-KEY":
                  "HllgzpJ4BY12izzj45u4sq8FkBiZw6FJXSaAXgRn",
              },
            }
          );
          setRegions(response.data.places.map((place) => place.name));
        } catch (error) {
          console.error("Error fetching regions:", error);
        }
      };

      fetchRegions();
    }
  }, [searchTerm]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };
  return (
    <div className="RegionSelectionPopup">
      <div className="RegionSelectionPopupBack">
        <div className="RegionSelectionPopupcontainer">
          <div className="frame-204">
            <div className="frame-324">
              <span className="container-1">지역을 추가해 주세요</span>
            </div>
            <div className="frame-325">
              <span className="container-2">0/3</span>
            </div>
          </div>
          <div className="frame-171">
            <div className="frame-587">
              <div className="icon"></div>
              {/* <div className="frame-168">
                <span className="container-3">
                  지역을 지역명으로 검색 예) 수원, 영통구
                </span>
              </div> */}
              <input
                type="text"
                placeholder="지역을 검색하세요."
                value={searchTerm}
                onChange={handleSearchTermChange}
              />
              <div className="frame-192">
                {regions.map((region, index) => (
                  <div
                    key={index}
                    className="region-item"
                    onClick={() => handleRegionSelect(region)}
                  >
                    {region}
                  </div>
                ))}
              </div>

              {/* <div className="frame-170">
                <span className="container-4">수원시 영통구</span>
              </div>
              <div className="frame-177">
                <span className="container-5">수원시 영통구 이의동</span>
              </div>
              <div className="frame-1711">
                <span className="container-6">수원시 영통구 연무동</span>
              </div>
              <div className="frame-172">
                <span className="container-7">수원시 영통구 지동</span>
              </div>
              <div className="frame-173">
                <span className="container-8">수원시 영통구 00동</span>
              </div>
              <div className="frame-174">
                <span className="container-9">수원시 영통구 99동</span>
              </div>
              <div className="frame-175">
                <span className="container-10">수원시 영통구 88동</span>
              </div>
              <div className="frame-176">
                <span className="container-11">수원시 영통구 89동</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
