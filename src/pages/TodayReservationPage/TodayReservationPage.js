import React, { useState } from "react";
import Modal from "react-modal";
import "./TodayReservationPage.css";
import LoginAfterTodayReservNav from "../nav/LoginAfterTodayReservNav";
import plus_button from "../../assets/plus_button.png";
import left_double_arrow_button from "../../assets/left_double_arrow_button.png";
import right_double_arrow_button from "../../assets/right_double_arrow_button.png";
import RegionSelectionPopup from "../StoreSearchPage/RegionSelectionPopup";
import SimpleSlider_Today from "./SliderToday/SimpleSlider_today";

import Image1 from '../MainPage/compopopo/ZZ_hat.jpeg';
import Image2 from '../MainPage/compopopo/ZZ_masage.jpeg';
import Image3 from '../MainPage/compopopo/ZZ_nail.jpeg';
import Image4 from '../MainPage/compopopo/Z_Image1.jpeg';
import Image5 from '../MainPage/compopopo/Z_Image2.jpeg';
import Image6 from '../MainPage/compopopo/ZZ_nail3.jpg';
import Image7 from '../MainPage/compopopo/Z_Image4.jpeg';
import Image8 from '../MainPage/compopopo/Z_Image5.jpeg';
import Image9 from '../MainPage/compopopo/Z_Image6.jpeg';
import Image10 from '../MainPage/compopopo/ZZ_nail2.jpeg';


import Image11 from '../MainPage/compopopo/ZZ_masa1.jpeg';
import Image12 from '../MainPage/compopopo/ZZ_masage.jpeg';
import Image13 from '../MainPage/compopopo/ZZ_masa2.jpeg';
import Image14 from '../MainPage/compopopo/Z_Image1.jpeg';
import Image15 from '../MainPage/compopopo/ZImage3.jpeg';
import Image16 from '../MainPage/compopopo/ZZ_nail.jpeg';
import Image17 from '../MainPage/compopopo/Z_Image4.jpeg';
import Image18 from '../MainPage/compopopo/ZZ_hat.jpeg';
import Image19 from '../MainPage/compopopo/Z_Image6.jpeg';
import Image20 from '../MainPage/compopopo/ZZ_nail2.jpeg';

export default function TodayReservationPage() {
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([
    { start: "", end: "", startMin: "", endMin: "" },
  ]);
  const [isRegionModalOpen, setIsReigonModalOpen] = useState(false);
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [btnAllActive, setBtnAllActive] = useState(false);
  const [btn1Active, setBtn1Active] = useState(false);
  const [btn2Active, setBtn2Active] = useState(false);
  const [btn3Active, setBtn3Active] = useState(false);
  const [btn4Active, setBtn4Active] = useState(false);
  const [btn5Active, setBtn5Active] = useState(false);
  const [btn6Active, setBtn6Active] = useState(false);
  const [btn7Active, setBtn7Active] = useState(false);

  const openRegionModal = () => {
    setIsReigonModalOpen(true);
  };
  const closeRegionModal = () => {
    setIsReigonModalOpen(false);
  };
  const handleSelectRegions = (regions) => {
    setSelectedRegions(regions);
  };
  const RegionModalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      width: "600px",
      height: "650px",
      margin: "auto",
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      padding: "20px",
    },
  };

  const toggleBtnAllActive = () => {
    setBtnAllActive(!btnAllActive);
    setBtn1Active(!btnAllActive);
    setBtn2Active(!btnAllActive);
    setBtn3Active(!btnAllActive);
    setBtn4Active(!btnAllActive);
    setBtn5Active(!btnAllActive);
    setBtn6Active(!btnAllActive);
    setBtn7Active(!btnAllActive);
  };
  const toggleBtn1Active = () => {
    setBtn1Active(!btn1Active);
  };
  const toggleBtn2Active = () => {
    setBtn2Active(!btn2Active);
  };
  const toggleBtn3Active = () => {
    setBtn3Active(!btn3Active);
  };
  const toggleBtn4Active = () => {
    setBtn4Active(!btn4Active);
  };
  const toggleBtn5Active = () => {
    setBtn5Active(!btn5Active);
  };
  const toggleBtn6Active = () => {
    setBtn6Active(!btn6Active);
  };
  const toggleBtn7Active = () => {
    setBtn7Active(!btn7Active);
  };
  const DateStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      width: "800px",
      height: "650px",
      margin: "auto",
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      padding: "20px",
    },
  };

  const handleTimeChange = (index, type, value) => {
    const newTimes = [...selectedTimes];
    newTimes[index][type] = value;
    setSelectedTimes(newTimes);
  };
  const formatTime = (time, min) => {
    return time ? `${time}시 ${min}분` : "";
  };
  const openTimeModal = () => {
    setIsTimeModalOpen(true);
  };
  const closeTimeModal = () => {
    setIsTimeModalOpen(false);
  };

  const LastEvent_stores = [
    { name: "제이제이 헤어", image: Image1, rating: 4.4, category: "헤어" },
    { name: "네일 샵", image: Image2, rating: 4.8, category: "네일" },
    { name: "마사지 샵", image: Image3, rating: 4.7, category: "마사지" },
    { name: "피부 관리", image: Image4, rating: 4.9, category: "피부" },
    { name: "속눈썹 샵", image: Image5, rating: 4.3, category: "속눈썹" },
    { name: "뷰티 샵", image: Image6, rating: 4.5, category: "뷰티" },
    { name: "헤어 샵", image: Image7, rating: 4.6, category: "헤어" },
    { name: "네일 아트", image: Image8, rating: 4.8, category: "네일" },
    { name: "마사지 샵", image: Image9, rating: 4.7, category: "마사지" },
    { name: "피부 관리", image: Image10, rating: 4.9, category: "피부" },
    { name: "뷰티 앤 웰니스", image: Image16, rating: 4.5, category: "기타" },
    { name: "헤어 디자인", image: Image17, rating: 4.6, category: "헤어" },
    { name: "네일 앤 팁", image: Image18, rating: 4.8, category: "네일" },
    { name: "릴렉싱 마사지", image: Image19, rating: 4.7, category: "마사지" },
    { name: "스파 트리트먼트", image: Image20, rating: 4.9, category: "피부" },
  ];

  const TimeEvent_stores = [
    { name: "프레쉬 헤어", image: Image11, rating: 4.4, category: "헤어" },
    { name: "네일 스튜디오", image: Image12, rating: 4.8, category: "네일" },
    { name: "아로마 마사지", image: Image13, rating: 4.7, category: "마사지" },
    { name: "스킨케어 솔루션", image: Image14, rating: 4.9, category: "피부" },
    { name: "플래시 래쉬", image: Image15, rating: 4.3, category: "속눈썹" },
    { name: "뷰티 앤 웰니스", image: Image16, rating: 4.5, category: "기타" },
    { name: "헤어 디자인", image: Image17, rating: 4.6, category: "헤어" },
    { name: "네일 앤 팁", image: Image18, rating: 4.8, category: "네일" },
    { name: "릴렉싱 마사지", image: Image19, rating: 4.7, category: "마사지" },
    { name: "스파 트리트먼트", image: Image20, rating: 4.9, category: "피부" },
    { name: "뷰티 샵", image: Image6, rating: 4.5, category: "뷰티" },
    { name: "헤어 샵", image: Image7, rating: 4.6, category: "헤어" },
    { name: "네일 아트", image: Image8, rating: 4.8, category: "네일" },
    { name: "마사지 샵", image: Image9, rating: 4.7, category: "마사지" },
    { name: "피부 관리", image: Image10, rating: 4.9, category: "피부" },
    ];

  return (
    <div className="TodayReservationPage">
      <div className="TodayReservationPageBack">
        <LoginAfterTodayReservNav />
        <div className="TodayReservationPageContainer">
          <div className="container-36">
            <div className="select-option-padding">
              <div className="before-region">
                <button className="container-4" onClick={openRegionModal}>
                  <div className="container-5">
                    {selectedRegions.length === 0
                      ? "지역을 선택해 주세요"
                      : selectedRegions.join(", ")}
                  </div>
                </button>
                <Modal
                  isOpen={isRegionModalOpen}
                  onRequestClose={closeRegionModal}
                  style={RegionModalStyles}
                >
                  <button
                    className="PopupCloseButton"
                    onClick={closeRegionModal}
                  >
                    ✖
                  </button>
                  <RegionSelectionPopup
                    onSelectRegions={handleSelectRegions}
                    selectedRegions={selectedRegions}
                  />
                </Modal>
              </div>
              <div className="before-day-and-time">
                <div className="frame-timeselect">
                  <button
                    className="content-timeselect"
                    onClick={openTimeModal}
                  >
                    {selectedTimes.every(
                      (time) =>
                        time.start === "" &&
                        time.end === "" &&
                        time.startMin === "" &&
                        time.endMin === ""
                    )
                      ? "시간을 선택해 주세요"
                      : selectedTimes
                          .map(
                            (time) =>
                              `${formatTime(
                                time.start,
                                time.startMin
                              )} ~ ${formatTime(time.end, time.endMin)}`
                          )
                          .join(", ")}
                  </button>
                </div>
              </div>

              <div className="before-category">
                <div
                  className={`frame-247 ${btnAllActive ? "active" : ""}`}
                  onClick={toggleBtnAllActive}
                >
                  <div className="frame-156">
                    <span className="container-82">전체</span>
                  </div>
                  <div className="frame-155">
                    <img
                      className={`container-83 ${btnAllActive ? "active" : ""}`}
                      src={plus_button}
                      alt={""}
                    />
                  </div>
                </div>
                <div
                  className={`frame-240 ${btn1Active ? "active" : ""}`}
                  onClick={toggleBtn1Active}
                >
                  <div className="frame-1561">
                    <span className="container-84">헤어</span>
                  </div>
                  <div className="frame-1551">
                    <img
                      className={`container-85 ${btn1Active ? "active" : ""}`}
                      src={plus_button}
                      alt={""}
                    />
                  </div>
                </div>
                <div
                  className={`frame-241 ${btn2Active ? "active" : ""}`}
                  onClick={toggleBtn2Active}
                >
                  <div className="frame-1562">
                    <span className="container-86">네일</span>
                  </div>
                  <div className="frame-1552">
                    <img
                      className={`container-87 ${btn2Active ? "active" : ""}`}
                      src={plus_button}
                      alt={""}
                    />
                  </div>
                </div>
                <div
                  className={`frame-242 ${btn3Active ? "active" : ""}`}
                  onClick={toggleBtn3Active}
                >
                  <div className="frame-1563">
                    <span className="container-88">마사지</span>
                  </div>
                  <div className="frame-1553">
                    <img
                      className={`container-89 ${btn3Active ? "active" : ""}`}
                      src={plus_button}
                      alt={""}
                    />
                  </div>
                </div>
                <div
                  className={`frame-243 ${btn4Active ? "active" : ""}`}
                  onClick={toggleBtn4Active}
                >
                  <div className="frame-1564">
                    <span className="container-90">눈썹/속눈썹</span>
                  </div>
                  <div className="frame-1554">
                    <img
                      className={`container-91 ${btn4Active ? "active" : ""}`}
                      src={plus_button}
                      alt={""}
                    />
                  </div>
                </div>
                <div
                  className={`frame-244 ${btn5Active ? "active" : ""}`}
                  onClick={toggleBtn5Active}
                >
                  <div className="frame-1565">
                    <span className="container-92">메이크업</span>
                  </div>
                  <div className="frame-1555">
                    <img
                      className={`container-93 ${btn5Active ? "active" : ""}`}
                      src={plus_button}
                      alt={""}
                    />
                  </div>
                </div>
                <div
                  className={`frame-245 ${btn6Active ? "active" : ""}`}
                  onClick={toggleBtn6Active}
                >
                  <div className="frame-1566">
                    <span className="container-94">왁싱/제모</span>
                  </div>
                  <div className="frame-1556">
                    <img
                      className={`container-95 ${btn6Active ? "active" : ""}`}
                      src={plus_button}
                      alt={""}
                    />
                  </div>
                </div>
                <div
                  className={`frame-248 ${btn7Active ? "active" : ""}`}
                  onClick={toggleBtn7Active}
                >
                  <div className="frame-1567">
                    <span className="container-96">기타</span>
                  </div>
                  <div className="frame-1557">
                    <img
                      className={`container-97 ${btn7Active ? "active" : ""}`}
                      src={plus_button}
                      alt={""}
                    />
                  </div>
                </div>
              </div>
            </div>

            <Modal
              isOpen={isTimeModalOpen}
              onRequestClose={closeTimeModal}
              style={DateStyles}
            >
              <button className="PopupCloseButton" onClick={closeTimeModal}>
                ✖
              </button>
              <div>
                <p>* 최대 3개까지 선택이 가능합니다.</p>
                {selectedTimes.map((time, index) => (
                  <div key={index} style={{ marginBottom: "20px" }}>
                    <p>시간 {index + 1}:</p>
                    <select
                      value={time.start}
                      onChange={(e) =>
                        handleTimeChange(index, "start", e.target.value)
                      }
                    >
                      <option value="">시작 시간</option>
                      {[...Array(24).keys()].map((hour) => (
                        <option key={hour} value={hour}>
                          {hour}
                        </option>
                      ))}
                    </select>
                    <select
                      value={time.startMin}
                      onChange={(e) =>
                        handleTimeChange(index, "startMin", e.target.value)
                      }
                    >
                      <option value="">시작 분</option>
                      {[...Array(60).keys()].map((min) => (
                        <option key={min} value={min}>
                          {min}
                        </option>
                      ))}
                    </select>
                    <span> ~ </span>
                    <select
                      value={time.end}
                      onChange={(e) =>
                        handleTimeChange(index, "end", e.target.value)
                      }
                    >
                      <option value="">종료 시간</option>
                      {[...Array(24).keys()].map((hour) => (
                        <option key={hour} value={hour}>
                          {hour}
                        </option>
                      ))}
                    </select>
                    <select
                      value={time.endMin}
                      onChange={(e) =>
                        handleTimeChange(index, "endMin", e.target.value)
                      }
                    >
                      <option value="">종료 분</option>
                      {[...Array(60).keys()].map((min) => (
                        <option key={min} value={min}>
                          {min}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
              <button
                onClick={() =>
                  setSelectedTimes([
                    ...selectedTimes,
                    { start: "", end: "", startMin: "", endMin: "" },
                  ])
                }
                disabled={selectedTimes.length >= 3}
                style={{ marginTop: "10px" }}
              >
                시간 추가
              </button>
            </Modal>

            {/* <div className="frame-281">
              <div className="frame-2851">
                <span className="container-21">예약 마감 임박 할인</span>
              </div>
              <div className="frame-2841">
                <img
                  className="icround-double-arrow-2"
                  src={left_double_arrow_button}
                  alt={""}
                />
                <div className="frame-501">
                  <div className="container-7">
                    <div className="frame-471">
                      <div className="container-18">
                        <div className="rectangle-328"></div>
                      </div>
                      <div className="frame-4621">
                        <div className="frame-1091">
                          <div className="container-22">여성커트</div>
                          <span className="container-23">|</span>
                          <div className="container-24">30,000</div>
                          <span className="container-25">|</span>
                          <div className="container-26">14:30</div>
                        </div>
                        <div className="frame-4611">
                          <span className="container-27">[이벤트 문구]</span>
                        </div>
                      </div>
                    </div>
                    <div className="frame-571">
                      <div className="container-9">
                        <div className="rectangle-329"></div>
                      </div>
                      <span className="container-28">
                        제이제이 헤어 | 4.8 | 14:30
                        <br />
                        [이벤트 문구]
                      </span>
                    </div>
                    <div className="frame-561">
                      <div className="container-13">
                        <div className="rectangle-3210"></div>
                      </div>
                      <span className="container-29">
                        제이제이 헤어 | 4.8 | 14:30
                        <br />
                        [이벤트 문구]
                      </span>
                    </div>
                    <div className="frame-541">
                      <div className="container-15">
                        <div className="rectangle-3211"></div>
                      </div>
                      <span className="container-30">
                        제이제이 헤어 | 4.8 | 14:30
                        <br />
                        [이벤트 문구]
                      </span>
                    </div>
                  </div>
                  <div className="container-5">
                    <div className="frame-551">
                      <div className="container-11">
                        <div className="rectangle-3212"></div>
                      </div>
                      <span className="container-31">
                        제이제이 헤어 | 4.8 | 14:30
                        <br />
                        [이벤트 문구]
                      </span>
                    </div>
                    <div className="frame-581">
                      <div className="container-14">
                        <div className="rectangle-3213"></div>
                      </div>
                      <span className="container-32">
                        제이제이 헤어 | 4.8 | 14:30
                        <br />
                        [이벤트 문구]
                      </span>
                    </div>
                    <div className="frame-591">
                      <div className="container-10">
                        <div className="rectangle-3214"></div>
                      </div>
                      <span className="container-33">
                        제이제이 헤어 | 4.8 | 14:30
                        <br />
                        [이벤트 문구]
                      </span>
                    </div>
                    <div className="frame-601">
                      <div className="container-1">
                        <div className="rectangle-3215"></div>
                      </div>
                      <span className="container-34">
                        제이제이 헤어 | 4.8 | 14:30
                        <br />
                        [이벤트 문구]
                      </span>
                    </div>
                  </div>
                </div>
                <img
                  className="icround-double-arrow-3"
                  src={right_double_arrow_button}
                  alt={""}
                />
              </div>
            </div>
            <div className="frame-281">
              <div className="frame-2851">
                <span className="container-21">타임 세일</span>
              </div>
              <div className="frame-2841">
                <img
                  className="icround-double-arrow-2"
                  src={left_double_arrow_button}
                  alt={""}
                />
                <div className="frame-501">
                  <div className="container-7">
                    <div className="frame-471">
                      <div className="container-18">
                        <div className="rectangle-328"></div>
                      </div>
                      <div className="frame-4621">
                        <div className="frame-1091">
                          <div className="container-22">여성커트</div>
                          <span className="container-23">|</span>
                          <div className="container-24">30,000</div>
                          <span className="container-25">|</span>
                          <div className="container-26">14:30</div>
                        </div>
                        <div className="frame-4611">
                          <span className="container-27">[이벤트 문구]</span>
                        </div>
                      </div>
                    </div>
                    <div className="frame-571">
                      <div className="container-9">
                        <div className="rectangle-329"></div>
                      </div>
                      <span className="container-28">
                        제이제이 헤어 | 4.8 | 14:30
                        <br />
                        [이벤트 문구]
                      </span>
                    </div>
                    <div className="frame-561">
                      <div className="container-13">
                        <div className="rectangle-3210"></div>
                      </div>
                      <span className="container-29">
                        제이제이 헤어 | 4.8 | 14:30
                        <br />
                        [이벤트 문구]
                      </span>
                    </div>
                    <div className="frame-541">
                      <div className="container-15">
                        <div className="rectangle-3211"></div>
                      </div>
                      <span className="container-30">
                        제이제이 헤어 | 4.8 | 14:30
                        <br />
                        [이벤트 문구]
                      </span>
                    </div>
                  </div>
                  <div className="container-5">
                    <div className="frame-551">
                      <div className="container-11">
                        <div className="rectangle-3212"></div>
                      </div>
                      <span className="container-31">
                        제이제이 헤어 | 4.8 | 14:30
                        <br />
                        [이벤트 문구]
                      </span>
                    </div>
                    <div className="frame-581">
                      <div className="container-14">
                        <div className="rectangle-3213"></div>
                      </div>
                      <span className="container-32">
                        제이제이 헤어 | 4.8 | 14:30
                        <br />
                        [이벤트 문구]
                      </span>
                    </div>
                    <div className="frame-591">
                      <div className="container-10">
                        <div className="rectangle-3214"></div>
                      </div>
                      <span className="container-33">
                        제이제이 헤어 | 4.8 | 14:30
                        <br />
                        [이벤트 문구]
                      </span>
                    </div>
                    <div className="frame-601">
                      <div className="container-1">
                        <div className="rectangle-3215"></div>
                      </div>
                      <span className="container-34">
                        제이제이 헤어 | 4.8 | 14:30
                        <br />
                        [이벤트 문구]
                      </span>
                    </div>
                  </div>
                </div>
                <img
                  className="icround-double-arrow-3"
                  src={right_double_arrow_button}
                  alt={""}
                />
              </div>
            </div> */}

            {/* 예약 마감 임박 할인 */}
            <div className='today_reserve_padding'>
              <div className='today_reserve_wrap'>
                <div className="recommand-title">예약 마감 임박 할인</div>
                {/* props로 전달 */}
                <SimpleSlider_Today stores={LastEvent_stores} />
              </div>
            </div>

            {/* 타임 세일 */}
            <div className='today_reserve_padding'>
              <div className='today_reserve_wrap'>
                <div className="recommand-title">타임 세일</div>
                {/* props로 전달 */}
                <SimpleSlider_Today stores={TimeEvent_stores} />
              </div>
            </div>

            <div className="frame-279">
              <div className="top-100-list">
                <div className="top-test">
                  <span className="top-100">TOP 100</span>
                </div>
                <div className="research-results">
                  <div className="research-result">
                    <div className="store-info-padding">
                      <div className="frame-287">
                        <div className="store-infos">
                          <span className="container-40">[헤어]</span>
                          <span className="container-41">제이제이 헤어</span>
                        </div>
                        <div className="store-infos-1">
                          <span className="container-42">
                            수원시 영통수 이의동
                          </span>
                        </div>
                      </div>
                      <div className="mene-names">
                        <span className="container-43">여성커트, 남성커트</span>
                      </div>
                    </div>
                    <div className="reserve-look-buts">
                      <div className="reserve-but">
                        <span className="container-44">예약하기</span>
                      </div>
                      <div className="look-store-but">
                        <span className="container-45">가게조회</span>
                      </div>
                    </div>
                  </div>
                  <div className="research-result">
                    <div className="store-info-padding">
                      <div className="frame-287">
                        <div className="store-infos">
                          <span className="container-40">[헤어]</span>
                          <span className="container-41">제이제이 헤어</span>
                        </div>
                        <div className="store-infos-1">
                          <span className="container-42">
                            수원시 영통수 이의동
                          </span>
                        </div>
                      </div>
                      <div className="mene-names">
                        <span className="container-43">여성커트, 남성커트</span>
                      </div>
                    </div>
                    <div className="reserve-look-buts">
                      <div className="reserve-but">
                        <span className="container-44">예약하기</span>
                      </div>
                      <div className="look-store-but">
                        <span className="container-45">가게조회</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
