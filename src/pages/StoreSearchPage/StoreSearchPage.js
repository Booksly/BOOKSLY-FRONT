import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { useNavigate } from "react-router-dom";
import "react-day-picker/dist/style.css";
import Modal from "react-modal";
import "./StoreSearchPage.css";
import "./MultiDatePicker.css";
import LoginAfterMainHeader from "../nav/LoginAfterMainHeader";
import plus_button from "../../assets/plus_button.png";
import RegionSelectionPopup from "./RegionSelectionPopup";
import { useEffect } from "react";

//더미데이터 임포트1122
//top100 데이터
import { top_100_dummy } from "../../data/top-100/dummy";

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

// 탑 백 스토어, 위에 부분으로 대체
//const top_100_stores = top_100_dummy;

// 가게 목록 컴포넌트 - 탑 백용
const StoreCard = ({ id, category, name, location, menu }) => {
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

// 가게 목록 컴포넌트 - 조회용
const StoreCard2 = ({
  id,
  category,
  name,
  location,
  menu,
  total_sale_late, //가게조회에서는 할인률 노출 안함
  sale_name, //가게조회에서는 할인명 노출 안함
  possible_reserve_time,
  date,
  times,
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
        <div className="menu_names">
          <span className="menu_name">{menu}</span>
        </div>
      </div>
      <div className="store_can_reserve_contents">
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

//가게 목록 여러개 컴포넌트 - 탑 백용
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

// 가게 목록 여러개 컴포넌트 - 조회용
const ResearchResults2 = ({
  stores = [],
  selectedTimes,
  selectedRegions,
  selectedDates,
  onStoreCountChange,
  currentPage,
  itemsPerPage,
  handlePageChange,
  totalPages,
}) => {
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

  const filterStoresByDate = (date) => {
    if (selectedDates.length === 0) return true;
    return selectedDates.some((selectedDate) => selectedDate === date);
  };

  useEffect(() => {
    let count = 0;
    stores.forEach((store) => {
      Object.entries(store.possible_reserve_time).forEach(([date, times]) => {
        if (filterStoresByDate(date) && filterStoresByRegion(store)) {
          const filteredTimes = filterTimes(times);
          if (filteredTimes.length > 0) {
            count++;
          }
        }
      });
    });
    onStoreCountChange(count);
  }, [stores, selectedTimes, selectedRegions, selectedDates, onStoreCountChange]);

  const filteredStores = stores.flatMap((store) =>
    Object.entries(store.possible_reserve_time)
      .map(([date, times]) => {
        const filteredTimes = filterTimes(times);
        return filteredTimes.length > 0 &&
          filterStoresByRegion(store) &&
          filterStoresByDate(date) ? (
          <StoreCard2
            key={`${store.shopId}-${date}`}
            category={store.category}
            name={store.name}
            location={store.location}
            menu={store.menu}
            total_sale_late={store.total_sale_late}
            sale_name={store.sale_name}
            date={date}
            times={filteredTimes}
            id={store.shopId}
          />
        ) : null;
      })
      .filter((component) => component !== null)
  ).sort((a, b) => new Date(a.props.date) - new Date(b.props.date)); // 날짜 순서대로 정렬;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedStores = filteredStores.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="research-results">
        {paginatedStores.length > 0 ? (
          paginatedStores
        ) : (
          <div>No stores found.</div>
        )}
      </div>
      <div className="pagination-container">
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};



export default function StoreSearchPage() {
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([
    { start: "", end: "", startMin: "", endMin: "" },
  ]);
  const [isRegionModalOpen, setIsReigonModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
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

  const toggleBtnAllActive = () => {
    setBtnAllActive(!btnAllActive);
    setBtn1Active(!btnAllActive);
    setBtn2Active(!btnAllActive);
    setBtn3Active(!btnAllActive);
    setBtn4Active(!btnAllActive);
    setBtn5Active(!btnAllActive);
    setBtn6Active(!btnAllActive);
    setBtn7Active(!btnAllActive);
    setCurrentPage(1);
  };

  const toggleBtn1Active = () => {
    setBtn1Active(!btn1Active);
    setCurrentPage(1);
  };
  const toggleBtn2Active = () => {
    setBtn2Active(!btn2Active);
    setCurrentPage(1);
  };
  const toggleBtn3Active = () => {
    setBtn3Active(!btn3Active);
    setCurrentPage(1);
  };
  const toggleBtn4Active = () => {
    setBtn4Active(!btn4Active);
    setCurrentPage(1);
  };
  const toggleBtn5Active = () => {
    setBtn5Active(!btn5Active);
    setCurrentPage(1);
  };
  const toggleBtn6Active = () => {
    setBtn6Active(!btn6Active);
    setCurrentPage(1);
  };
  const toggleBtn7Active = () => {
    setBtn7Active(!btn7Active);
    setCurrentPage(1);
  };

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

  const openDateModal = () => {
    setIsDateModalOpen(true);
  };
  const closeDateModal = () => {
    setIsDateModalOpen(false);
  };

  const handleDateSelect = (date) => {
    const selectedDateStrings = selectedDates.map((d) => d.toDateString());
    const dateString = date.toDateString();

    if (selectedDateStrings.includes(dateString)) {
      setSelectedDates(
        selectedDates.filter((d) => d.toDateString() !== dateString)
      );
    } else {
      if (selectedDates.length < 3) {
        setSelectedDates([...selectedDates, date]);
      } else {
        alert("최대 3개의 날짜만 선택할 수 있습니다.");
      }
    }
  };
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
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

  // 필터링된 스토어 데이터
  const filteredStores = (stores) => {
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

  // 필터링된 가게 데이터의 개수
  const filteredStoresCount = (stores) => {
    return filteredStores(stores).length;
  };

  // 카테고리 버튼 코드 간략화
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

  const filteredStoresData = filteredStores(top_100_stores);
  const totalFilteredPages = Math.ceil(
    filteredStoreCount / itemsPerPage
  );

  const currentStores = top_100_stores.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(top_100_stores.length / itemsPerPage);

  //보류
  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        className={i === currentPage ? "active" : ""}
      >
        {i}
      </button>
    );
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="StoreSearchPage">
      <div className="StoreSearchPageBack">
        <LoginAfterMainHeader />
        <div className="StoreSearchPageContainer">
          <div className="container-36">
            <div className="select-option-padding">
              <div className="before-region">
                <button className="container-4" onClick={openRegionModal}>
                  <div className="container-5">
                    {selectedRegions.length === 0
                      ? "지역을 선택해 주세요"//"경기도 수원시 영통구, 경기도 수원시 팔달구"
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
                <div className="frame-dateselect">
                  <button
                    className="content-dateselect"
                    onClick={openDateModal}
                  >
                    {selectedDates.length === 0
                      ? "날짜를 선택해 주세요"//"2024-06-09, 2024-06-13"
                      : selectedDates
                          .map((date) => formatDate(date))
                          .join(", ")}
                  </button>
                </div>
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
                      ? "시간을 선택해 주세요"//"12시 30분 ~ 13시 30분, 17시 ~ 19시"
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
              isOpen={isDateModalOpen}
              onRequestClose={closeDateModal}
              style={DateStyles}
            >
              <button className="PopupCloseButton" onClick={closeDateModal}>
                ✖
              </button>
              <DayPicker
                selected={selectedDates}
                onDayClick={handleDateSelect}
                mode="multiple"
                numberOfMonths={2}
                modifiers={{
                  selected: selectedDates,
                }}
                modifiersClassNames={{
                  selected: "my-selected",
                }}
              />
              <div>
                <p>* 최대 3개까지 선택이 가능합니다.</p>
                {selectedDates.map((date, index) => (
                  <p key={index}>
                    날짜 {index + 1}: {formatDate(date)}
                  </p>
                ))}
              </div>
            </Modal>
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

            {/* 탑 백 조회였다가 버튼이 하나라도 눌리면 필터링에 대한 가게 조회 */}
            {/* 필터링에 대한 가게 조회 */}
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
                    <span className="top-100">
                      총 {filteredStoreCount} 개
                    </span>
                  </div>
                  <div className="research-results">
                    <ResearchResults2
                      stores={filteredStores(top_100_stores)}
                      selectedTimes={selectedTimes} 
                      selectedRegions={selectedRegions}
                      selectedDates={selectedDates.map((date) =>
                        formatDate(new Date(date))
                      )}
                      onStoreCountChange={setFilteredStoreCount}
                      currentPage={currentPage}
                      itemsPerPage={itemsPerPage}
                      handlePageChange={setCurrentPage}
                      totalPages={totalFilteredPages}
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* 탑 백 조회 */
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
          </div>
        </div>
      </div>
    </div>
  );
}