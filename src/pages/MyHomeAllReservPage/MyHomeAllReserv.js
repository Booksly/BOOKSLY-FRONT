import "./MyHomeAllReserv.css";
import MyHomeLeftNavi from "../nav/MyHomeLeftNavi";
import MyHomeTopNavi from "../nav/MyHomeTopNavi";
import React, { useEffect, useState, useRef } from "react";
import Select from "react-select";

let options = [
  { value: "all", label: "전체" },
  { value: "hair", label: "헤어" },
  { value: "nail", label: "네일" },
  { value: "eye", label: "속눈썹 / 눈썹" },
  { value: "massage", label: "마사지" },
  { value: "makeup", label: "메이크업" },
  { value: "etc", label: "기타" },
];

function Testt({
  //가게 정보 : 가게 이미지, 가게 이름, 가게 위치, 카테고리, 단골여부선택
  storeImage,
  storeName,
  location,
  category,
  isRegular,
  //예약한 날짜, 시간, 디자이너, 메뉴
  date,
  time,
  designer,
  menuList,
  // 예약목록 상태 'upcoming', 'cancelled', 'completed_with_review', 'completed_without_review'
  status,
  //평점, 리뷰내용
  reviewScore,
  reviewContent,
  onCancel,
  onDelete,
  onWriteReview,
  onDeleteReview,
}) {
  return (
    <div className="reservationItem">
      <div className="storeInfoFrame">
        <div className="storeProfile">
          {/* <img src={storeImage} alt={`${storeName} Profile`} /> */}
        </div>
        <div className="storeInfoTime">
          <div className="storeInfoList">
            <div className="storeInfo">{storeName}</div>
            <div className="storePartition">|</div>
            <div className="storeInfo">{location}</div>
            <div className="storePartition">|</div>
            <div className="storeInfo">{category}</div>
            <div className="storePartition">|</div>
            <div className="regularSign">{isRegular ? "☆" : "★"}</div>
          </div>
          <div className="reservInfo">
            <div className="reservDate">{date}</div>
            <div className="reservTime">{time}</div>
          </div>
        </div>
      </div>
      <div className="reservFrame">
        <div className="EmpBox">
          <div className="EmpNameTime">
            <div
              className={`EmpName ${
                status === "cancelled" ? "cancelLine" : ""
              }`}
            >
              {designer} -
            </div>
            <div className="EmpTime">{time} 타임</div>
            {status === "cancelled" && (
              <span className="cancelPartition">|</span>
            )}
            {status === "cancelled" && (
              <div className="cancelReserv">취소된 예약</div>
            )}
            {status === "completed_with_review" && (
              <span className="reviewPartition">|</span>
            )}
            {status === "completed_with_review" && (
              <div className="reviewScore">{reviewScore}</div>
            )}
            {status === "completed_without_review" && (
              <span className="reviewPartition">|</span>
            )}
            {status === "completed_without_review" && (
              <div className="reviewCreateButton" onClick={onWriteReview}>
                리뷰작성
              </div>
            )}
          </div>
          <div className="reservBoxLine"></div>
        </div>
        <div className="reservContent">
          <div className="reservMenuList">{menuList}</div>
        </div>
        <div className="reservBoxLine"></div>
        {status === "upcoming" && (
          <div className="cancelButton" onClick={onCancel}>
            예약취소
          </div>
        )}
        {status === "cancelled" && (
          <div className="cancelDelButton" onClick={onDelete}>
            취소내역삭제
          </div>
        )}
        {status === "completed_with_review" && (
          <div className="reviewBox">
            <div className="reviewLine"></div>
            <div className="rvBoxIcon">
              <div className="rvBox">Review</div>
              <div className="rvDel" onClick={onDeleteReview}>
                리뷰삭제
              </div>
            </div>
            <div className="reviewContent">
              <div className="rvContent">{reviewContent}</div>
              <div className="rvPhoto"></div>
            </div>
          </div>
        )}
        {(status === "completed_with_review" ||
          status === "completed_without_review") && (
          <div className="DelButton" onClick={onDelete}>
            예약내역삭제
          </div>
        )}
      </div>
    </div>
  );
}

export default function MyHomeAllReserv() {
  const [selectValue, setSelectValue] = useState("");
  const selectInputRef = useRef(null);

  //추가된 내용
  //예약 상태 정보
  const [reservations, setReservations] = useState([
    {
      id: 900,
      // storeImage: Image1,
      storeName: "글래드뷰티",
      location: "수원시 영통구 광교산로",
      category: "메이크업",
      isRegular: true,
      date: "24. 6. 13 목",
      time: "12:30",
      designer: "김예은",
      menuList: "기본 메이크업, 웨딩 메이크업",
      status: "upcoming",
      reviewContent:
        "마지막 타임 예약이 취소되서 북슬리에 올라온 거 빠르게 잡았어요. 원래는 이 시간에 미용실 가려면 이곳 저곳 전화해서 예약이 다찼는지 확인했어야 하는데, 비어있는 예약을 한번에 볼 수있어서 좋았습니다. 금용구 디자이너님 감사합니다~~",
    },
    {
      id: 901,
      // storeImage: Image1,
      storeName: "레이슨 네일샵",
      location: "서울시 마포구 창전동",
      category: "네일",
      isRegular: false,
      date: "24. 2. 20 화",
      time: "9:30",
      designer: "노진영 디자이너",
      menuList: "여성커트, 남성커트",
      status: "upcoming",
      reviewContent:
        "마지막 타임 예약이 취소되서 북슬리에 올라온 거 빠르게 잡았어요. 원래는 이 시간에 미용실 가려면 이곳 저곳 전화해서 예약이 다찼는지 확인했어야 하는데, 비어있는 예약을 한번에 볼 수있어서 좋았습니다. 금용구 디자이너님 감사합니다~~",
    },
    {
      id: 902,
      // storeImage: Image1,
      storeName: "제이제이 헤어",
      location: "수원시 영통구 이의동",
      category: "헤어",
      isRegular: true,
      date: "24. 3. 4 월",
      time: "11:30",
      designer: "김진영 디자이너",
      menuList: "여성커트, 남성커트",
      status: "cancelled",
      reviewContent: "good",
    },
    {
      id: 903,
      // storeImage: Image1,
      storeName: "레이슨 네일샵",
      location: "서울시 마포구 창전동",
      category: "네일",
      isRegular: false,
      date: "24. 2. 20 화",
      time: "9:30",
      designer: "노진영 디자이너",
      menuList: "여성커트, 남성커트",
      status: "completed_with_review",
      reviewContent:
        "마지막 타임 예약이 취소되서 북슬리에 올라온 거 빠르게 잡았어요. 원래는 이 시간에 미용실 가려면 이곳 저곳 전화해서 예약이 다찼는지 확인했어야 하는데, 비어있는 예약을 한번에 볼 수있어서 좋았습니다. 금용구 디자이너님 감사합니다~~",
    },
    {
      id: 904,
      // storeImage: Image1,
      storeName: "제이제이 헤어",
      location: "수원시 영통구 이의동",
      category: "헤어",
      isRegular: true,
      date: "24. 3. 4 월",
      time: "11:30",
      designer: "김진영 디자이너",
      menuList: "여성커트, 남성커트",
      status: "completed_without_review",
      reviewContent: "good",
    },
    {
      id: 905,
      // storeImage: Image1,
      storeName: "레이슨 네일샵",
      location: "서울시 마포구 창전동",
      category: "네일",
      isRegular: false,
      date: "24. 2. 20 화",
      time: "9:30",
      designer: "노진영 디자이너",
      menuList: "전설의 손톱",
      status: "upcoming",
      reviewContent: "good",
    },
  ]);

  //예약 취소하기 (상태를 변경)
  const handleCancel = (id) => {
    setReservations(
      reservations.map((reservation) =>
        reservation.id === id
          ? { ...reservation, status: "cancelled" }
          : reservation
      )
    );
  };

  //예약 내역 삭제하기
  const handleDelete = (id) => {
    setReservations(
      reservations.filter((reservation) => reservation.id !== id)
    );
  };

  //리뷰 작성하기 (상태를 리뷰 작성한 상태로 변경함)
  const handleWriteReview = (id) => {
    setReservations(
      reservations.map((reservation) =>
        reservation.id === id
          ? { ...reservation, status: "completed_with_review" }
          : reservation
      )
    );
  };

  //리뷰 삭제하기, 리뷰없는 예약완료 목록이 됨
  const handleDeleteReview = (id) => {
    setReservations(
      reservations.map((reservation) =>
        reservation.id === id
          ? { ...reservation, status: "completed_without_review" }
          : reservation
      )
    );
  };

  return (
    <div className="MyHomeAllReserv">
      <div className="MyHomeAllReservBack">
        <MyHomeLeftNavi />
        <div className="containerAll">
          <MyHomeTopNavi />
          <div className="MyHomeAllReservContainer">
            <div className="Content">
              {/* 카테고리 정렬 버튼 */}
              <div className="sortingBox">
                <>
                  <Select
                    className="sortBox"
                    ref={selectInputRef}
                    onChange={(e) => {
                      if (e) {
                        setSelectValue(e.value);
                      } else {
                        setSelectValue("");
                      }
                    }}
                    options={options}
                    placeholder="전체"
                  />
                </>
              </div>

              {/* 예약 목록 */}
              <div className="reservList">
                {reservations.map((reservation) => (
                  <Testt
                    key={reservation.id}
                    {...reservation}
                    onCancel={() => handleCancel(reservation.id)}
                    onDelete={() => handleDelete(reservation.id)}
                    onWriteReview={() => handleWriteReview(reservation.id)}
                    onDeleteReview={() => handleDeleteReview(reservation.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
