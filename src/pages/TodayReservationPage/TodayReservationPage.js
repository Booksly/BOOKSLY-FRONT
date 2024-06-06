import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./TodayReservationPage.css";
import LoginAfterTodayReservNav from "../nav/LoginAfterTodayReservNav";
import plus_button from "../../assets/plus_button.png";
import RegionSelectionPopup from "../StoreSearchPage/RegionSelectionPopup";
import SimpleSlider_Today from "./SliderToday/SimpleSlider_today";
import { useNavigate } from "react-router-dom";

// 더미데이터 임포트
import { top_100_dummy } from "../../data/top-100/dummy";
import { last_event_dummy } from "../../data/last-event-store/dummy";
import { time_event_dummy } from "../../data/time-event-store/dummy";
import { shops } from "../../data/reservation/dummy";

//예약가능한 시간 합치기 (직원끼리 겹치는 시간 합쳐서 보여주기)
const getMergedReservationTimes = (shopId) => {
  const shop = shops.find((s) => s.shopId === shopId);
  if (!shop) return "";

  const mergedTimes = {};
  shop.employees.forEach((employee) => {
    Object.keys(employee.reserveTimes).forEach((date) => {
      if (!mergedTimes[date]) {
        mergedTimes[date] = new Set();
      }
      employee.reserveTimes[date].forEach((time) => {
        mergedTimes[date].add(time);
      });
    });
  });

  const formattedTimes = {};
  Object.keys(mergedTimes).forEach((date) => {
    formattedTimes[date] = Array.from(mergedTimes[date]).sort();
  });

  return formattedTimes;
};

const top_100_stores = top_100_dummy.map((store) => ({
  ...store,
  possible_reserve_time: getMergedReservationTimes(store.shopId),
}));

const StoreCard = ({ category, name, location, menu, id }) => {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate(`/Reservation?shopId=${id}`);
  };

  const handleViewStoreClick = () => {
    navigate(`/DetailedStoreInfo?shopId=${id}`);
  };

  return (
    <div className="research-result">
      <div className="store_info_padding">
        <div className="store_infos_all">
          <div className="store_infos">
            <span className="categori">[{category}]</span>
            <span className="store_name">{name}</span>
          </div>
          <div className="store_info_where">
            <span className="store_where">{location}</span>
          </div>
        </div>
        <div className="menu-names">
          <span className="menu_name">{menu}</span>
        </div>
      </div>
      <div className="reserve-look-buts">
        <button className="reserve-but" onClick={handleReserveClick}>
          <span className="btn_name">예약하기</span>
        </button>
        <button className="look-store-but" onClick={handleViewStoreClick}>
          <span className="btn_name">가게조회</span>
        </button>
      </div>
    </div>
  );
};

const StoreCard2 = ({
  category,
  name,
  location,
  menu,
  total_sale_late,
  sale_name,
  date,
  times,
  id,
}) => {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate(`/Reservation?shopId=${id}`);
  };

  const handleViewStoreClick = () => {
    navigate(`/DetailedStoreInfo?shopId=${id}`);
  };

  return (
    <div className="research-result">
      <div className="store_info_padding">
        <div className="store_infos_all">
          <div className="store_infos">
            <span className="categori">[{category}]</span>
            <span className="store_name">{name}</span>
          </div>
          <div className="store_info_where">
            <span className="store_where">{location}</span>
          </div>
        </div>
        <div className="menu-names">
          <span className="menu_name">{menu}</span>
        </div>
      </div>
      <div className="store_can_reserve_contents">
        <div className="store_can_reserve_content">
          <span className="store_can_reserve_info">
            총 {total_sale_late}% 할인
          </span>
          <span className="store_can_reserve_info">{sale_name}</span>
        </div>
        <div className="store_can_reserve_content">
          <strong>{date}</strong>
          <ul>
            {times.map((time) => (
              <li key={time}>{time}</li>
            ))}
          </ul>
        </div>
        <div className="reserve-look-buts">
          <button className="reserve-but" onClick={handleReserveClick}>
            <span className="btn_name">예약하기</span>
          </button>
          <button className="look-store-but" onClick={handleViewStoreClick}>
            <span className="btn_name">가게조회</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const ResearchResults = ({ stores }) => (
  <div className="research-results">
    {stores.map((store, index) => (
      <StoreCard
        key={index}
        category={store.category}
        name={store.name}
        location={store.location}
        menu={store.menu}
        id={store.shopId}
      />
    ))}
  </div>
);

const ResearchResults2 = ({
  stores = [],
  selectedTimes,
  selectedRegions,
  onStoreCountChange,
  currentPage,
  itemsPerPage,
  onPageChange
}) => {
  const today = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split("T")[0];

  const filterTimes = (times) => {
    if (selectedTimes.length === 0) return times;
    return times.filter((time) => {
      const [hour, minute] = time.split(":").map(Number);
      return selectedTimes.some(
        ({ start, end, startMin, endMin }) =>
          (hour > start || (hour === start && minute >= startMin)) &&
          (hour < end || (hour === end && minute <= endMin))
      );
    });
  };

  const filterStoresByRegion = (store) => {
    if (selectedRegions.length === 0) return true;
    return selectedRegions.some((region) => store.location.includes(region));
  };

  const filteredStores = stores.flatMap((store) =>
    Object.entries(store.possible_reserve_time)
      .filter(([date]) => date === today && filterStoresByRegion(store))
      .flatMap(([date, times]) => {
        const filteredTimes = filterTimes(times);
        return filteredTimes.length > 0
          ? {
              ...store,
              date,
              times: filteredTimes,
            }
          : [];
      })
  );

  useEffect(() => {
    onStoreCountChange(filteredStores.length);
  }, [filteredStores, onStoreCountChange]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStores = filteredStores.slice(startIndex, endIndex);

  return (
    <div className="research-results">
      {currentStores.map((store, index) => (
        <StoreCard2
          key={`${store.shopId}-${store.date}`}
          category={store.category}
          name={store.name}
          location={store.location}
          menu={store.menu}
          total_sale_late={store.total_sale_late}
          sale_name={store.sale_name}
          date={store.date}
          times={store.times}
          id={store.shopId}
        />
      ))}
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredStores.length / itemsPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => onPageChange(i + 1)}
            className={i + 1 === currentPage ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const last_event_stores = last_event_dummy;
const time_event_stores = time_event_dummy;

export default function TodayReservationPage() {
  const navigate = useNavigate();
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
  const [filteredStoreCount, setFilteredStoreCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  const toggleBtn1Active = () => setBtn1Active(!btn1Active);
  const toggleBtn2Active = () => setBtn2Active(!btn2Active);
  const toggleBtn3Active = () => setBtn3Active(!btn3Active);
  const toggleBtn4Active = () => setBtn4Active(!btn4Active);
  const toggleBtn5Active = () => setBtn5Active(!btn5Active);
  const toggleBtn6Active = () => setBtn6Active(!btn6Active);
  const toggleBtn7Active = () => setBtn7Active(!btn7Active);

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

  const filteredStores = (stores = []) => {
    return stores.filter((store) => {
      if (btnAllActive) return true;
      if (btn1Active && store.category === "헤어") return true;
      if (btn2Active && store.category === "네일") return true;
      if (btn3Active && store.category === "마사지") return true;
      if (btn4Active && store.category === "눈썹/속눈썹") return true;
      if (btn5Active && store.category === "메이크업") return true;
      if (btn6Active && store.category === "왁싱/제모") return true;
      if (btn7Active && store.category === "기타") return true;
      return false;
    });
  };

  const categoryButtons = [
    {
      id: "btnAll",
      label: "전체",
      active: btnAllActive,
      onClick: toggleBtnAllActive,
    },
    {
      id: "btn1",
      label: "헤어",
      active: btn1Active,
      onClick: toggleBtn1Active,
    },
    {
      id: "btn2",
      label: "네일",
      active: btn2Active,
      onClick: toggleBtn2Active,
    },
    {
      id: "btn3",
      label: "마사지",
      active: btn3Active,
      onClick: toggleBtn3Active,
    },
    {
      id: "btn4",
      label: "눈썹/속눈썹",
      active: btn4Active,
      onClick: toggleBtn4Active,
    },
    {
      id: "btn5",
      label: "메이크업",
      active: btn5Active,
      onClick: toggleBtn5Active,
    },
    {
      id: "btn6",
      label: "왁싱/제모",
      active: btn6Active,
      onClick: toggleBtn6Active,
    },
    {
      id: "btn7",
      label: "기타",
      active: btn7Active,
      onClick: toggleBtn7Active,
    },
  ];

  const currentStores = top_100_stores.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(top_100_stores.length / itemsPerPage);
  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={i === currentPage ? "active" : ""}
      >
        {i}
      </button>
    );
  }

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
                {categoryButtons.map((button) => (
                  <div
                    key={button.id}
                    className={`frame-247 ${button.active ? "active" : ""}`}
                    onClick={button.onClick}
                  >
                    <div className="frame-156">
                      <span className="container-82">{button.label}</span>
                    </div>
                    <div className="frame-155">
                      <img
                        className={`container-83 ${
                          button.active ? "active" : ""
                        }`}
                        src={plus_button}
                        alt={""}
                      />
                    </div>
                  </div>
                ))}
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

            {btnAllActive ||
            btn1Active ||
            btn2Active ||
            btn3Active ||
            btn4Active ||
            btn5Active ||
            btn6Active ||
            btn7Active ? (
              <div className="top-100-list-all2">
                <div className="top-100-list">
                  <div className="top-test">
                    <span className="top-100">총 {filteredStoreCount} 개</span>
                  </div>
                  <div className="research-results">
                    <ResearchResults2
                      stores={filteredStores(top_100_stores)}
                      selectedTimes={selectedTimes}
                      selectedRegions={selectedRegions}
                      onStoreCountChange={setFilteredStoreCount}
                      currentPage={currentPage}
                      itemsPerPage={itemsPerPage}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="top-100-list-all">
                <div className="top-100-list">
                  <div className="top-test">
                    <span className="top-100">TOP 100</span>
                  </div>
                  <div className="research-results">
                    <ResearchResults stores={currentStores} />
                  </div>
                  <div className="pagination-container">
                    <div className="pagination">{paginationButtons}</div>
                  </div>
                </div>
              </div>
            )}
            <div className="today_reserve_padding">
              <div className="today_reserve_wrap">
                <div className="recommand-title">예약 마감 임박 할인</div>
                <SimpleSlider_Today stores={last_event_stores} />
              </div>
            </div>
            <div className="today_reserve_padding">
              <div className="today_reserve_wrap">
                <div className="recommand-title">타임 세일</div>
                <SimpleSlider_Today stores={time_event_stores} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
