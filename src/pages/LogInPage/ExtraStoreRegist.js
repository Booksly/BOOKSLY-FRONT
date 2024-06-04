import "./ExtraStoreRegist.css";
import storeimgadd from "../../assets/AddStoreImg_button.png";
import LoginPageNav from "../nav/LoginPageNav";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";

const options = [
  { value: "hair", label: "헤어" },
  { value: "nail", label: "네일" },
  { value: "massage", label: "마사지" },
  { value: "eyebrow_eyelash", label: "눈썹/속눈썹" },
  { value: "makeup", label: "메이크업" },
  { value: "waxing_hair_removal", label: "왁싱/제모" },
  { value: "etc", label: "기타" },
];

export default function ExtraStoreRegist() {
  const [storeName, setStoreName] = useState("");
  const [storePhone, setStorePhone] = useState("");
  const [address, setAddress] = useState("");
  const [addrDetail, setAddrDetail] = useState("");
  const [snsURL, setSnsURL] = useState("");
  const [displayURL, setDisplayURL] = useState("www.booksly.com");
  const [storeInfo, setStoreInfo] = useState("");

  const [timeStartMon, setTimeStartMon] = useState("");
  const [timeEndMon, setTimeEndMon] = useState("");
  const [timeStartTue, setTimeStartTue] = useState("");
  const [timeEndTue, setTimeEndTue] = useState("");
  const [timeStartWed, setTimeStartWed] = useState("");
  const [timeEndWed, setTimeEndWed] = useState("");
  const [timeStartThu, setTimeStartThu] = useState("");
  const [timeEndThu, setTimeEndThu] = useState("");
  const [timeStartFri, setTimeStartFri] = useState("");
  const [timeEndFri, setTimeEndFri] = useState("");
  const [timeStartSat, setTimeStartSat] = useState("");
  const [timeEndSat, setTimeEndSat] = useState("");
  const [timeStartSun, setTimeStartSun] = useState("");
  const [timeEndSun, setTimeEndSun] = useState("");
  const [disabledDays, setDisabledDays] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [isPostOpen, setIsPostOpen] = useState(false);

  const [selectedHour, setSelectedHour] = useState("");
  const [selectedMinute, setSelectedMinute] = useState("");

  const handlePostCodeComplete = (data) => {
    setAddress(data.address);
    setIsPostOpen(false);
  };

  const openPostCode = () => {
    setIsPostOpen(true);
  };

  const onChange = (e) => {
    setAddrDetail(e.target.value);
  };

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleAddURL = () => {
    if (snsURL.trim() !== "") {
      setDisplayURL(snsURL);
      setSnsURL("");
    }
  };

  const handleDate = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "timeStartMon":
        setTimeStartMon(value);
        break;
      case "timeEndMon":
        setTimeEndMon(value);
        break;
      case "timeStartTue":
        setTimeStartTue(value);
        break;
      case "timeEndTue":
        setTimeEndTue(value);
        break;
      case "timeStartWed":
        setTimeStartWed(value);
        break;
      case "timeEndWed":
        setTimeEndWed(value);
        break;
      case "timeStartThu":
        setTimeStartThu(value);
        break;
      case "timeEndThu":
        setTimeEndThu(value);
        break;
      case "timeStartFri":
        setTimeStartFri(value);
        break;
      case "timeEndFri":
        setTimeEndFri(value);
        break;
      case "timeStartSat":
        setTimeStartSat(value);
        break;
      case "timeEndSat":
        setTimeEndSat(value);
        break;
      case "timeStartSun":
        setTimeStartSun(value);
        break;
      case "timeEndSun":
        setTimeEndSun(value);
        break;
      default:
        break;
    }
  };

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
      setDisabledDays([...disabledDays, day]);
      clearInput(day);
    } else {
      setSelectedDays([...selectedDays, day]);
      setDisabledDays(disabledDays.filter((d) => d !== day));
    }
  };

  const toggleHoliday = (day) => {
    setDisabledDays([...disabledDays, day]);
    setSelectedDays(selectedDays.filter((d) => d !== day));
    clearInput(day);
  };

  const clearInput = (day) => {
    switch (day) {
      case "Mon":
        setTimeStartMon("");
        setTimeEndMon("");
        break;
      case "Tue":
        setTimeStartTue("");
        setTimeEndTue("");
        break;
      case "Wed":
        setTimeStartWed("");
        setTimeEndWed("");
        break;
      case "Thu":
        setTimeStartThu("");
        setTimeEndThu("");
        break;
      case "Fri":
        setTimeStartFri("");
        setTimeEndFri("");
        break;
      case "Sat":
        setTimeStartSat("");
        setTimeEndSat("");
        break;
      case "Sun":
        setTimeStartSun("");
        setTimeEndSun("");
        break;
      default:
        break;
    }
  };

  const handleStoreInfoChange = (e) => {
    if (e.target.value.length <= 150) {
      setStoreInfo(e.target.value);
    }
  };

  const navigate = useNavigate();
  const goToStoreOwnerMain = () => {
    navigate("/StoreOwnerMain");
  };

  const handleYesClick = () => {
    setSelectedOption("yes");
  };
  const handleNoClick = () => {
    setSelectedOption("no");
  };

  const hourOptions = Array.from({ length: 13 }, (v, k) => ({
    value: k,
    label: k < 10 ? `0${k}` : `${k}`,
  }));
  const minuteOptions = Array.from({ length: 60 }, (v, k) => ({
    value: k,
    label: k < 10 ? `0${k}` : `${k}`,
  }));
  const handleHourChange = (e) => {
    setSelectedHour(e.target.value);
  };
  const handleMinuteChange = (e) => {
    setSelectedMinute(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="ExtraStoreRegist">
      <div className="ExtraStoreRegistBack">
        <LoginPageNav />
        <div className="SR-container">
          <div className="SR-allcontentcontainer">
            <div className="SR-leftcontentcontainer">
              <div className="SR-container-11">가게 등록</div>
              <div className="SR-frame-550">
                <div className="SR-frame-524">
                  <div className="SR-container-1">업체명</div>
                  <input
                    className="SR-frame-406"
                    placeholder="업체명을 입력해주세요"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                  />
                </div>
                <div className="SR-frame-526">
                  <div className="SR-container-3">업종</div>
                  <select
                    className="SR-frame-512"
                    value={selectedCategory}
                    onChange={handleChange}
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="SR-frame-529">
                  <div className="SR-container-5">업체 전화번호</div>
                  <input
                    className="SR-frame-513"
                    value={storePhone}
                    type="number"
                    placeholder="‘-’빼고 숫자만 입력해주세요"
                    onChange={(e) => setStorePhone(e.target.value)}
                  />
                </div>
                <div className="frame-StoreOwnerNum">
                  <div className="container-StoreOwnerNum">사업자 번호</div>
                  <div className="frame-SetStoreOwnerNum">
                    <div className="frame-StoreOwnerNumCont">
                      <span className="container-StoreOwnerNumCont">
                        000-00-00000 형태로 입력
                      </span>
                    </div>
                    <div className="frame-StoreOwnerNumSear">
                      <span className="container-StoreOwnerNumSear">조회</span>
                    </div>
                  </div>
                </div>
                <div className="SR-frame-533">
                  <div className="SR-container-7">업체 주소</div>
                  <div>
                    <div className="SR-frame-531">
                      <div className="SR-container-8">
                        <input
                          type="text"
                          value={address}
                          readOnly
                          className="SR-frame-515"
                          placeholder="도로명, 지번, 건물명 검색"
                          autoComplete="address"
                        />
                      </div>
                      <button onClick={openPostCode} className="SR-frame-516">
                        검색
                      </button>
                    </div>
                    <input
                      onChange={onChange}
                      name="addrDetail"
                      value={addrDetail}
                      className="SR-frame-5171"
                      placeholder="상세 주소를 입력해주세요"
                    />
                    {isPostOpen && (
                      <div
                        style={{
                          display: "block",
                          position: "absolute",
                          top: "100px",
                          zIndex: "100",
                          border: "1px solid",
                          backgroundColor: "#ffffff",
                        }}
                      >
                        <DaumPostcode
                          onComplete={handlePostCodeComplete}
                          width={600}
                          height={450}
                          style={{ display: "block" }}
                        />
                        <button
                          type="button"
                          onClick={() => setIsPostOpen(false)}
                          style={{ margin: "0 0 10px 10px", cursor: "pointer" }}
                        >
                          닫기
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="SR-frame-548">
                  <div className="SR-sns">업체 SNS</div>
                  <div className="SR-frame-547">
                    <input
                      className="SR-frame-407"
                      value={snsURL}
                      placeholder="URL을 입력해주세요."
                      onChange={(e) => setSnsURL(e.target.value)}
                    />
                    <button className="SR-frame-537" onClick={handleAddURL}>
                      추가
                    </button>
                  </div>
                  <div className="SR-frame-5281">
                    <div className="SR-frame-5131">
                      <div className="SR-www-booksly-com">{displayURL}</div>
                    </div>
                  </div>
                </div>
                <div className="SR-frame-549">
                  <div className="SR-container-14">자동 예약 확정</div>
                  <div className="SR-frame-133">
                    <div
                      className={`SR-frame-317 ${
                        selectedOption === "yes" ? "active" : ""
                      }`}
                      onClick={handleYesClick}
                    >
                      <div className="SR-container-15">예</div>
                    </div>
                    <div
                      className={`SR-frame-318 ${
                        selectedOption === "no" ? "active" : ""
                      }`}
                      onClick={handleNoClick}
                    >
                      <div className="SR-container-16">아니오</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="SR-rightcontentcontainer">
              <div className="SR-frame-574">
                <div className="SR-frame-572">
                  <div className="SR-frame-571">
                    <div className="SR-container-17">업체 영업시간</div>
                    <div className="SR-container-18">
                      : 선택한 요일과 기입한 시간이 영업 시간으로 표시됩니다.
                    </div>
                  </div>
                  <div className="SR-time-space">
                    {[
                      {
                        day: "Mon",
                        label: "월",
                        timeStart: timeStartMon,
                        timeEnd: timeEndMon,
                        timeStartName: "timeStartMon",
                        timeEndName: "timeEndMon",
                      },
                      {
                        day: "Tue",
                        label: "화",
                        timeStart: timeStartTue,
                        timeEnd: timeEndTue,
                        timeStartName: "timeStartTue",
                        timeEndName: "timeEndTue",
                      },
                      {
                        day: "Wed",
                        label: "수",
                        timeStart: timeStartWed,
                        timeEnd: timeEndWed,
                        timeStartName: "timeStartWed",
                        timeEndName: "timeEndWed",
                      },
                      {
                        day: "Thu",
                        label: "목",
                        timeStart: timeStartThu,
                        timeEnd: timeEndThu,
                        timeStartName: "timeStartThu",
                        timeEndName: "timeEndThu",
                      },
                      {
                        day: "Fri",
                        label: "금",
                        timeStart: timeStartFri,
                        timeEnd: timeEndFri,
                        timeStartName: "timeStartFri",
                        timeEndName: "timeEndFri",
                      },
                      {
                        day: "Sat",
                        label: "토",
                        timeStart: timeStartSat,
                        timeEnd: timeEndSat,
                        timeStartName: "timeStartSat",
                        timeEndName: "timeEndSat",
                      },
                      {
                        day: "Sun",
                        label: "일",
                        timeStart: timeStartSun,
                        timeEnd: timeEndSun,
                        timeStartName: "timeStartSun",
                        timeEndName: "timeEndSun",
                      },
                    ].map((time, index) => (
                      <div className="SR-frame-254" key={index}>
                        <div className="SR-frame-251">
                          <button
                            className="SR-container-4"
                            onClick={() => toggleDay(time.day)}
                            style={{
                              backgroundColor: selectedDays.includes(time.day)
                                ? "rgba(255, 89, 37, 0.2)"
                                : "transparent",
                            }}
                          >
                            {time.label}
                          </button>
                        </div>
                        <div className="SR-frame-253">
                          <input
                            onChange={handleDate}
                            name={time.timeStartName}
                            value={time.timeStart}
                            placeholder="10:00"
                            className="SR-frame-249"
                            disabled={disabledDays.includes(time.day)}
                          />
                          <div className="SR-container-6">~</div>
                          <input
                            onChange={handleDate}
                            name={time.timeEndName}
                            value={time.timeEnd}
                            placeholder="20:00"
                            className="SR-frame-250"
                            disabled={disabledDays.includes(time.day)}
                          />
                        </div>
                        <div className="SR-frame-319">
                          <button
                            className="SR-container-8"
                            onClick={() => toggleHoliday(time.day)}
                            style={{
                              backgroundColor: disabledDays.includes(time.day)
                                ? "rgba(255, 89, 37, 0.2)"
                                : "transparent",
                            }}
                          >
                            휴무
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="SR-frame-560">
                  <div className="SR-frame-5501">
                    <div className="SR-container-55">예약 모집 시간 단위</div>
                  </div>
                  <div className="SR-frame-559">
                    <div className="SR-frame-5121">
                      <select value={selectedHour} onChange={handleHourChange}>
                        {" "}
                        {hourOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {" "}
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className="SR-container-56">시</div>
                    </div>
                    <div className="SR-frame-514">
                      <select
                        value={selectedMinute}
                        onChange={handleMinuteChange}
                      >
                        {minuteOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {" "}
                            {option.label}{" "}
                          </option>
                        ))}{" "}
                      </select>
                      <div className="SR-container-64">분</div>
                    </div>
                  </div>
                </div>
                <div className="SR-frame-567">
                  <div className="SR-container-57">업체 소개글</div>
                  <div className="SR-frame-566">
                    <div className="SR-frame-4071">
                      <textarea
                        className="SR-container-58"
                        placeholder="업체 소개 글을 입력해주세요."
                        value={storeInfo}
                        onChange={handleStoreInfoChange}
                      />
                    </div>
                    <div className="SR-frame-109">
                      <div className="SR-container-59">0자</div>
                      <div className="SR-container-60">/</div>
                      <div className="SR-container-61">150자</div>
                    </div>
                  </div>
                </div>
                <div className="SR-frame-573">
                  <div className="SR-container-62">업체 대표 이미지</div>
                  <div
                    className={`SR-frame-568 ${
                      selectedImage ? "image-uploaded" : ""
                    }`}
                  >
                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                    <label htmlFor="imageUpload">
                      <img
                        className="SR-vector-2"
                        src={selectedImage || storeimgadd}
                        alt="대표 이미지 추가"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="SR-frame-536">
            <button
              className="SR-frame-StoreRegistFinButton"
              onClick={goToStoreOwnerMain}
            >
              등록 완료
              {/*<div className="SR-container-63">등록 완료</div>*/}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
