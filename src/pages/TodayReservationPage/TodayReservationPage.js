import React, { useState } from "react";
import Modal from "react-modal";
import "./TodayReservationPage.css";
import LoginAfterTodayReservNav from "../nav/LoginAfterTodayReservNav";
import plus_button from "../../assets/plus_button.png";
import left_double_arrow_button from "../../assets/left_double_arrow_button.png";
import right_double_arrow_button from "../../assets/right_double_arrow_button.png";
import RegionSelectionPopup from "../StoreSearchPage/RegionSelectionPopup";

export default function TodayReservationPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTimes, setSelectedTimes] = useState([
    { start: "", end: "", startMin: "", endMin: "" },
  ]);
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [btnAllActive, setBtnAllActive] = useState(false);
  const [btn1Active, setBtn1Active] = useState(false);
  const [btn2Active, setBtn2Active] = useState(false);
  const [btn3Active, setBtn3Active] = useState(false);
  const [btn4Active, setBtn4Active] = useState(false);
  const [btn5Active, setBtn5Active] = useState(false);
  const [btn6Active, setBtn6Active] = useState(false);
  const [btn7Active, setBtn7Active] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
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

  return (
    <div className="TodayReservationPage">
      <div className="TodayReservationPageBack">
        <LoginAfterTodayReservNav />
        <div className="TodayReservationPageContainer">
          <div className="container-36">
            <div className="select-option-padding">
              <div className="before-region">
                <button className="container-4" onClick={openModal}>
                  <div className="container-5">지역을 선택해 주세요</div>
                </button>
                <Modal
                  isOpen={isOpen}
                  onRequestClose={closeModal}
                  style={DateStyles}
                >
                  <button className="PopupCloseButton" onClick={closeModal}>
                    ✖
                  </button>
                  <RegionSelectionPopup />
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

            <div className="frame-281">
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
                  <div className="research-result-1">
                    <div className="store-info-padding-1">
                      <div className="frame-2871">
                        <div className="store-infos-2">
                          <span className="container-46">[헤어]</span>
                          <span className="container-47">제이제이 헤어</span>
                        </div>
                        <div className="store-infos-3">
                          <span className="container-48">
                            수원시 영통수 이의동
                          </span>
                        </div>
                      </div>
                      <div className="mene-names-1">
                        <span className="container-49">여성커트, 남성커트</span>
                      </div>
                    </div>
                    <div className="reserve-look-buts-1">
                      <div className="reserve-but-1">
                        <span className="container-50">예약하기</span>
                      </div>
                      <div className="look-store-but-1">
                        <span className="container-51">가게조회</span>
                      </div>
                    </div>
                  </div>
                  <div className="research-result-2">
                    <div className="store-info-padding-2">
                      <div className="frame-2872">
                        <div className="store-infos-4">
                          <span className="container-52">[헤어]</span>
                          <span className="container-53">제이제이 헤어</span>
                        </div>
                        <div className="store-infos-5">
                          <span className="container-54">
                            수원시 영통수 이의동
                          </span>
                        </div>
                      </div>
                      <div className="mene-names-2">
                        <span className="container-55">여성커트, 남성커트</span>
                      </div>
                    </div>
                    <div className="reserve-look-buts-2">
                      <div className="reserve-but-2">
                        <span className="container-56">예약하기</span>
                      </div>
                      <div className="look-store-but-2">
                        <span className="container-57">가게조회</span>
                      </div>
                    </div>
                  </div>
                  <div className="research-result-3">
                    <div className="store-info-padding-3">
                      <div className="frame-2873">
                        <div className="store-infos-6">
                          <span className="container-58">[헤어]</span>
                          <span className="container-59">제이제이 헤어</span>
                        </div>
                        <div className="store-infos-7">
                          <span className="container-60">
                            수원시 영통수 이의동
                          </span>
                        </div>
                      </div>
                      <div className="mene-names-3">
                        <span className="container-61">여성커트, 남성커트</span>
                      </div>
                    </div>
                    <div className="reserve-look-buts-3">
                      <div className="reserve-but-3">
                        <span className="container-62">예약하기</span>
                      </div>
                      <div className="look-store-but-3">
                        <span className="container-63">가게조회</span>
                      </div>
                    </div>
                  </div>
                  <div className="research-result-4">
                    <div className="store-info-padding-4">
                      <div className="frame-2874">
                        <div className="store-infos-8">
                          <span className="container-64">[헤어]</span>
                          <span className="container-65">제이제이 헤어</span>
                        </div>
                        <div className="store-infos-9">
                          <span className="container-66">
                            수원시 영통수 이의동
                          </span>
                        </div>
                      </div>
                      <div className="mene-names-4">
                        <span className="container-67">여성커트, 남성커트</span>
                      </div>
                    </div>
                    <div className="reserve-look-buts-4">
                      <div className="reserve-but-4">
                        <span className="container-68">예약하기</span>
                      </div>
                      <div className="look-store-but-4">
                        <span className="container-69">가게조회</span>
                      </div>
                    </div>
                  </div>
                  <div className="research-result-5">
                    <div className="store-info-padding-5">
                      <div className="frame-2875">
                        <div className="store-infos-10">
                          <span className="container-70">[헤어]</span>
                          <span className="container-71">제이제이 헤어</span>
                        </div>
                        <div className="store-infos-11">
                          <span className="container-72">
                            수원시 영통수 이의동
                          </span>
                        </div>
                      </div>
                      <div className="mene-names-5">
                        <span className="container-73">여성커트, 남성커트</span>
                      </div>
                    </div>
                    <div className="reserve-look-buts-5">
                      <div className="reserve-but-5">
                        <span className="container-74">예약하기</span>
                      </div>
                      <div className="look-store-but-5">
                        <span className="container-75">가게조회</span>
                      </div>
                    </div>
                  </div>
                  <div className="research-result-6">
                    <div className="store-info-padding-6">
                      <div className="frame-2876">
                        <div className="store-infos-12">
                          <span className="container-76">[헤어]</span>
                          <span className="container-77">제이제이 헤어</span>
                        </div>
                        <div className="store-infos-13">
                          <span className="container-78">
                            수원시 영통수 이의동
                          </span>
                        </div>
                      </div>
                      <div className="mene-names-6">
                        <span className="container-79">여성커트, 남성커트</span>
                      </div>
                    </div>
                    <div className="reserve-look-buts-6">
                      <div className="reserve-but-6">
                        <span className="container-80">예약하기</span>
                      </div>
                      <div className="look-store-but-6">
                        <span className="container-81">가게조회</span>
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
