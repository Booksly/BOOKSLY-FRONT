import React, { useState } from "react";
import "./RegionSelectionPopup.css";

export default function RegionSelectionPopup({
  onSelectRegions,
  selectedRegions,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [regions, setRegions] = useState([]);

  const dummyData = [
    "서울특별시 강남구",
    "서울특별시 강동구",
    "서울특별시 강북구",
    "서울특별시 강서구",
    "서울특별시 관악구",
    "서울특별시 광진구",
    "서울특별시 구로구",
    "서울특별시 금천구",
    "서울특별시 노원구",
    "서울특별시 도봉구",
    "서울특별시 동대문구",
    "서울특별시 동작구",
    "서울특별시 마포구",
    "서울특별시 서대문구",
    "서울특별시 서초구",
    "서울특별시 성동구",
    "서울특별시 성북구",
    "서울특별시 송파구",
    "서울특별시 양천구",
    "서울특별시 영등포구",
    "서울특별시 용산구",
    "서울특별시 은평구",
    "서울특별시 종로구",
    "서울특별시 중구",
    "서울특별시 중랑구",
    "경기도 수원시 장안구",
    "경기도 수원시 권선구",
    "경기도 수원시 팔달구",
    "경기도 수원시 영통구",
    "경기도 고양시 덕양구",
    "경기도 고양시 일산동구",
    "경기도 고양시 일산서구",
    "경기도 용인시 처인구",
    "경기도 용인시 기흥구",
    "경기도 용인시 수지구",
    "경기도 성남시 수정구",
    "경기도 성남시 중원구",
    "경기도 성남시 분당구",
    "경기도 부천시",
    "경기도 화성시",
    "경기도 남양주시",
    "경기도 안산시 상록구",
    "경기도 안산시 단원구",
    "경기도 안양시 만안구",
    "경기도 안양시 동안구",
    "경기도 평택시",
    "경기도 의정부시",
    "경기도 시흥시",
    "경기도 파주시",
    "경기도 김포시",
    "경기도 광주시",
    "경기도 군포시",
    "경기도 하남시",
    "경기도 오산시",
    "경기도 이천시",
    "경기도 안성시",
    "경기도 의왕시",
    "경기도 여주시",
    "경기도 양평군",
    "경기도 광명시",
    "경기도 구리시",
    "경기도 포천시",
    "경기도 동두천시",
    "경기도 가평군",
    "경기도 양주시",
    "경기도 연천군",
    "경기도 과천시",
    "서울특별시 강남구 삼성동",
    "서울특별시 강남구 대치동",
    "서울특별시 강남구 역삼동",
    "서울특별시 강남구 청담동",
    "서울특별시 송파구 잠실동",
    "서울특별시 송파구 신천동",
    "서울특별시 송파구 문정동",
    "서울특별시 송파구 가락동",
    "서울특별시 서초구 서초동",
    "서울특별시 서초구 반포동",
    "서울특별시 서초구 방배동",
    "서울특별시 서초구 잠원동",
    "서울특별시 관악구 신림동",
    "서울특별시 관악구 봉천동",
    "서울특별시 관악구 남현동",
    "서울특별시 관악구 대학동",
    "서울특별시 동작구 상도동",
    "서울특별시 동작구 노량진동",
    "서울특별시 동작구 사당동",
    "서울특별시 동작구 흑석동",
    "경기도 고양시 행신동",
    "경기도 고양시 화정동",
    "경기도 고양시 마두동",
    "경기도 고양시 주엽동",
    "경기도 용인시 신갈동",
    "경기도 용인시 수지동",
    "경기도 용인시 죽전동",
    "경기도 성남시 야탑동",
    "경기도 성남시 서현동",
    "경기도 성남시 이매동",
    "경기도 성남시 정자동",
    "서울특별시 강남구 신사동",
    "서울특별시 강남구 압구정동",
    "서울특별시 강남구 논현동",
    "서울특별시 강남구 학동",
    "서울특별시 강남구 세곡동",
    "서울특별시 강남구 자곡동",
    "서울특별시 강남구 수서동",
    "서울특별시 강남구 도곡동",
    "서울특별시 강남구 개포동",
    "서울특별시 강남구 일원동",
    "부산광역시 해운대구 우동",
    "부산광역시 해운대구 좌동",
    "부산광역시 해운대구 중동",
    "부산광역시 해운대구 송정동",
    "부산광역시 해운대구 반여동",
    "부산광역시 해운대구 재송동",
    "대구광역시 수성구 범어동",
    "대구광역시 수성구 만촌동",
    "대구광역시 수성구 수성동",
    "대구광역시 수성구 중동",
    "대구광역시 수성구 지산동",
    "대구광역시 수성구 범물동",
    "인천광역시 연수구 송도동",
    "인천광역시 연수구 청학동",
    "인천광역시 연수구 동춘동",
    "인천광역시 연수구 연수동",
    "광주광역시 동구 학동",
    "광주광역시 동구 지산동",
    "광주광역시 동구 서석동",
    "광주광역시 동구 충장로",
    "대전광역시 유성구 봉명동",
    "대전광역시 유성구 장대동",
    "대전광역시 유성구 노은동",
    "대전광역시 유성구 지족동",
    "대전광역시 유성구 전민동",
    "울산광역시 남구 삼산동",
    "울산광역시 남구 달동",
    "울산광역시 남구 무거동",
    "울산광역시 남구 신정동",
    "울산광역시 남구 야음동",
    "경기도 성남시 수정구 복정동",
    "경기도 성남시 수정구 위례동",
    "경기도 성남시 수정구 창곡동",
    "경기도 성남시 수정구 신흥동",
    "경기도 성남시 수정구 수진동",
    "경기도 수원시 팔달구 인계동",
    "경기도 수원시 팔달구 매산동",
    "경기도 수원시 팔달구 지동",
    "경기도 수원시 팔달구 우만동",
    "경기도 수원시 팔달구 행궁동",
    "경기도 고양시 덕양구 화정동",
    "경기도 고양시 덕양구 행신동",
    "경기도 고양시 덕양구 능곡동",
    "경기도 고양시 덕양구 흥도동",
    "경기도 고양시 덕양구 원당동",
    "경기도 용인시 처인구 김량장동",
    "경기도 용인시 처인구 마평동",
    "경기도 용인시 처인구 삼가동",
    "경기도 용인시 처인구 이동읍",
    "경기도 용인시 처인구 포곡읍",
    "경기도 용인시 기흥구 구갈동",
    "경기도 용인시 기흥구 상갈동",
    "경기도 용인시 기흥구 보라동",
    "경기도 용인시 기흥구 신갈동",
    "경기도 용인시 기흥구 영덕동",
    "경기도 용인시 수지구 죽전동",
    "경기도 용인시 수지구 동천동",
    "경기도 용인시 수지구 풍덕천동",
    "경기도 용인시 수지구 상현동",
    "경기도 용인시 수지구 성복동",
    "강원도 춘천시 석사동",
    "강원도 춘천시 퇴계동",
    "강원도 춘천시 후평동",
    "강원도 춘천시 효자동",
    "강원도 춘천시 온의동",
    "강원도 원주시 무실동",
    "강원도 원주시 단구동",
    "강원도 원주시 관설동",
    "강원도 원주시 반곡동",
    "강원도 원주시 혁신도시",
    "충청북도 청주시 상당구 용담동",
    "충청북도 청주시 상당구 용암동",
    "충청북도 청주시 상당구 탑동",
    "충청북도 청주시 상당구 금천동",
    "충청북도 청주시 상당구 석교동",
    "충청남도 천안시 동남구 봉명동",
    "충청남도 천안시 동남구 용곡동",
    "충청남도 천안시 동남구 원성동",
    "충청남도 천안시 동남구 청수동",
    "충청남도 천안시 동남구 신방동",
    "전라북도 전주시 덕진구 덕진동",
    "전라북도 전주시 덕진구 인후동",
    "전라북도 전주시 덕진구 금암동",
    "전라북도 전주시 덕진구 우아동",
    "전라북도 전주시 덕진구 송천동",
    "전라남도 목포시 상동",
    "전라남도 목포시 하당동",
    "전라남도 목포시 산정동",
    "전라남도 목포시 용해동",
    "전라남도 목포시 옥암동",
  ];

  const handleSearchTermChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm) {
      const filteredRegions = dummyData.filter((region) =>
        region.includes(searchTerm)
      );
      setRegions(filteredRegions);
    } else {
      setRegions([]);
    }
  };

  const handleRegionSelect = (region) => {
    if (selectedRegions.includes(region)) return;
    if (selectedRegions.length >= 3) {
      alert("최대 3개의 지역만 선택할 수 있습니다.");
      return;
    }
    onSelectRegions([...selectedRegions, region]);
  };

  const handleRegionRemove = (region) => {
    onSelectRegions(selectedRegions.filter((r) => r !== region));
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
              <span className="container-2">{selectedRegions.length}/3</span>
            </div>
          </div>
          <div className="frame-171">
            <div className="frame-587">
              <div className="icon"></div>
              <input
                type="text"
                placeholder="지역을 검색하세요."
                value={searchTerm}
                onChange={handleSearchTermChange}
              />
            </div>
            <div className="max-selection-note">
              *최대 3개까지 선택 가능합니다.
            </div>
            <div className="selected-regions">
              {selectedRegions.map((region, index) => (
                <div key={index} className="selected-region">
                  {region}
                  <button onClick={() => handleRegionRemove(region)}>x</button>
                </div>
              ))}
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
