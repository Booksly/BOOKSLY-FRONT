import React, { useState } from "react";
import Modal from "react-modal";
import "./TodayReservationPage.css";
import LoginAfterTodayReservNav from "../nav/LoginAfterTodayReservNav";
import plus_button from "../../assets/plus_button.png";
import left_double_arrow_button from "../../assets/left_double_arrow_button.png";
import right_double_arrow_button from "../../assets/right_double_arrow_button.png";
import closingEvent_img from "../../assets/25_sale.png";
import RegionSelectionPopup from "../StoreSearchPage/RegionSelectionPopup";
import SimpleSlider_Today from "./SliderToday/SimpleSlider_today";

//이미지 임폴트
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

//이미지 임폴트2
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

//가게 목록 하나 컴포넌트 - top100용
const StoreCard = ({ category, name, location, menu }) => (
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
      <div className="reserve-but">
        <span className="btn_name">예약하기</span>
      </div>
      <div className="look-store-but">
        <span className="btn_name">가게조회</span>
      </div>
    </div>
  </div>
);

//가게 목록 하나 컴포넌트 - 가게조회용
const StoreCard2 = ({ category, name, location, menu, total_sale_late, sale_name, possible_reserve_time  }) => (
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
        <span className="store_can_reserve_info">{total_sale_late}</span>
      </div>
      <div className="store_can_reserve_content">
        <span className="store_can_reserve_info">{sale_name}</span>
      </div>
      <div className="store_can_reserve_content">
        <span className="store_can_reserve_info">{possible_reserve_time}</span>
      </div>
    </div>
    <div className="reserve-look-buts">
      <div className="reserve-but">
        <span className="btn_name">예약하기</span>
      </div>
      <div className="look-store-but">
        <span className="btn_name">가게조회</span>
      </div>
    </div>
  </div>
);



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
      />
    ))}
  </div>
);

//가게 목록 여러개 컴포넌트 - 조회용
const ResearchResults2 = ({ stores }) => (
  <div className="research-results">
    {stores.map((store, index) => (
      <StoreCard2
        key={index}
        category={store.category}
        name={store.name}
        location={store.location}
        menu={store.menu}
        total_sale_late={store.total_sale_late} 
        sale_name={store.sale_name}
        possible_reserve_time={store.possible_reserve_time}
      />
    ))}
  </div>
);



  //예약 마감 임박 할인 가게
const LastEvent_stores = [
  { id: 40, name: "제이젱 헤어", image: Image1, rating: 4.4, category: "헤어", eventcoment: "오픈기념 할인 행사" },
  { id: 41, name: "네네유루 샵", image: Image2, rating: 4.8, category: "네일", eventcoment: "오픈기념 할인 행사" },
  { id: 42, name: "마상마상 샵", image: Image3, rating: 4.7, category: "마사지", eventcoment: "오픈기념 할인 행사" },
  { id: 43, name: "매끈매끈", image: Image4, rating: 4.9, category: "왁싱/제모", eventcoment: "오픈기념 할인 행사" },
  { id: 44, name: "뷰러풍풍", image: Image5, rating: 4.3, category: "속눈썹", eventcoment: "오픈기념 할인 행사" },
  { id: 45, name: "뷰티풀그대", image: Image6, rating: 4.5, category: "메이크업", eventcoment: "오픈기념 할인 행사" },
  { id: 46, name: "샬롱더워드", image: Image7, rating: 4.6, category: "헤어", eventcoment: "오픈기념 할인 행사" },
  { id: 47, name: "음악과 함께", image: Image8, rating: 4.8, category: "네일", eventcoment: "오픈기념 할인 행사" },
  { id: 48, name: "모미개운", image: Image9, rating: 4.7, category: "마사지", eventcoment: "오픈기념 할인 행사" },
  { id: 49, name: "부부", image: Image10, rating: 4.9, category: "왁싱/제모", eventcoment: "오픈기념 할인 행사" },
  { id: 50, name: "뷰티 앤 웰니스", image: Image16, rating: 4.5, category: "기타", eventcoment: "오픈기념 할인 행사" },
  { id: 51, name: "헤어 디자인", image: Image17, rating: 4.6, category: "헤어", eventcoment: "오픈기념 할인 행사" },
  { id: 52, name: "네일 앤 팁", image: Image18, rating: 4.8, category: "네일", eventcoment: "오픈기념 할인 행사" },
  { id: 53, name: "릴렉싱 마사지", image: Image19, rating: 4.7, category: "마사지", eventcoment: "오픈기념 할인 행사" },
  { id: 54, name: "스파 트리트먼트", image: Image20, rating: 4.9, category: "왁싱/제모", eventcoment: "오픈기념 할인 행사" },
  { id: 55, name: "프레쉬 헤어", image: Image11, rating: 4.4, category: "헤어", eventcoment: "오픈기념 할인 행사" },
  { id: 56, name: "네일 스튜디오", image: Image12, rating: 4.8, category: "네일", eventcoment: "오픈기념 할인 행사" },
  { id: 57, name: "아로마 마사지", image: Image13, rating: 4.7, category: "마사지", eventcoment: "오픈기념 할인 행사" },
  { id: 58, name: "스킨케어 솔루션", image: Image14, rating: 4.9, category: "왁싱/제모", eventcoment: "오픈기념 할인 행사" },
  { id: 59, name: "플래시 래쉬", image: Image15, rating: 4.3, category: "속눈썹", eventcoment: "오픈기념 할인 행사" }
];

// 타임 세일 가게
const TimeEvent_stores = [
  { id: 60, name: "헤어 글램", image: Image11, rating: 4.5, category: "헤어", eventcoment: "오픈기념 할인 행사" },
  { id: 61, name: "네일 글리터", image: Image12, rating: 4.8, category: "네일", eventcoment: "오픈기념 할인 행사" },
  { id: 62, name: "릴렉스 타임", image: Image13, rating: 4.7, category: "마사지", eventcoment: "오픈기념 할인 행사" },
  { id: 63, name: "글로우 스킨", image: Image14, rating: 4.9, category: "왁싱/제모", eventcoment: "오픈기념 할인 행사" },
  { id: 64, name: "아이래쉬 스튜디오", image: Image15, rating: 4.3, category: "속눈썹", eventcoment: "오픈기념 할인 행사" },
  { id: 65, name: "뷰티 인스티튜트", image: Image6, rating: 4.5, category: "메이크업", eventcoment: "오픈기념 할인 행사" },
  { id: 66, name: "헤어 플레이스", image: Image7, rating: 4.6, category: "헤어", eventcoment: "오픈기념 할인 행사" },
  { id: 67, name: "네일 갤러리", image: Image8, rating: 4.8, category: "네일", eventcoment: "오픈기념 할인 행사" },
  { id: 68, name: "마사지 하우스", image: Image9, rating: 4.7, category: "마사지", eventcoment: "오픈기념 할인 행사" },
  { id: 69, name: "피부 솔루션", image: Image10, rating: 4.9, category: "왁싱/제모", eventcoment: "오픈기념 할인 행사" },
  { id: 70, name: "래쉬 아티스트", image: Image1, rating: 4.3, category: "속눈썹", eventcoment: "오픈기념 할인 행사" },
  { id: 71, name: "뷰티 바이브", image: Image2, rating: 4.5, category: "메이크업", eventcoment: "오픈기념 할인 행사" },
  { id: 72, name: "헤어 스타일리스트", image: Image3, rating: 4.6, category: "헤어", eventcoment: "오픈기념 할인 행사" },
  { id: 73, name: "네일 부티크", image: Image4, rating: 4.8, category: "네일", eventcoment: "오픈기념 할인 행사" },
  { id: 74, name: "마사지 힐", image: Image5, rating: 4.7, category: "마사지", eventcoment: "오픈기념 할인 행사" },
  { id: 75, name: "피부 테라피", image: Image6, rating: 4.9, category: "왁싱/제모", eventcoment: "오픈기념 할인 행사" },
  { id: 76, name: "속눈썹 매직", image: Image7, rating: 4.3, category: "속눈썹", eventcoment: "오픈기념 할인 행사" },
  { id: 77, name: "뷰티 시크릿", image: Image8, rating: 4.5, category: "메이크업", eventcoment: "오픈기념 할인 행사" },
  { id: 78, name: "헤어 스튜디오", image: Image9, rating: 4.6, category: "헤어", eventcoment: "오픈기념 할인 행사" },
  { id: 79, name: "네일 아트", image: Image10, rating: 4.8, category: "네일", eventcoment: "오픈기념 할인 행사" },
  { id: 80, name: "마사지 엘리트", image: Image1, rating: 4.7, category: "마사지", eventcoment: "오픈기념 할인 행사" },
  ];
//탑백 스토어
const top_100stores = [
  {
    id: 20,
    category: "헤어",
    name: "제이제이 헤어",
    location: "수원시 영통구 이의동",
    menu: "여성커트, 남성커트"
  },
  {
    id: 21,
    category: "네일",
    name: "내일 네일",
    location: "수원시 영통구 동동동",
    menu: "여성커트, 남성커트, 펌"
  },
  {
    id: 22,
    category: "마사지",
    name: "힐링 마사지",
    location: "수원시 영통구 팔달구",
    menu: "전신 마사지, 발 마사지"
  },
  {
    id: 23,
    category: "왁싱/제모",
    name: "스킨 케어 클리닉",
    location: "수원시 영통구 팔달구",
    menu: "피부 관리, 여드름 관리"
  },
  {
    id: 24,
    category: "헤어",
    name: "뷰티 헤어샵",
    location: "수원시 영통구 팔달구",
    menu: "염색, 펌"
  },
  {
    id: 25,
    category: "메이크업",
    name: "아름다움 뷰티",
    location: "수원시 영통구 팔달구",
    menu: "메이크업, 네일아트"
  },
  {
    id: 26,
    category: "마사지",
    name: "릴렉스 마사지",
    location: "수원시 영통구 팔달구",
    menu: "타이 마사지, 스웨디시 마사지"
  },
  {
    id: 27,
    category: "왁싱/제모",
    name: "클리어 스킨",
    location: "수원시 영통구 팔달구",
    menu: "피부 재생, 미백 관리"
  },
  {
    id: 28,
    category: "헤어",
    name: "스타일 헤어샵",
    location: "수원시 영통구 팔달구",
    menu: "컷트, 스타일링"
  },
  {
    id: 29,
    category: "메이크업",
    name: "엘레강스 뷰티",
    location: "수원시 영통구 팔달구",
    menu: "웨딩 메이크업, 네일 케어"
  },
  {
    id: 30,
    category: "마사지",
    name: "웰빙 마사지",
    location: "수원시 영통구 팔달구",
    menu: "아로마 마사지, 림프 마사지"
  },
  {
    id: 31,
    category: "왁싱/제모",
    name: "글로우 스킨",
    location: "수원시 영통구 팔달구",
    menu: "안티에이징, 수분 공급"
  },
  {
    id: 32,
    category: "헤어",
    name: "헤어 스튜디오",
    location: "수원시 영통구 팔달구",
    menu: "남성커트, 여성커트"
  },
  {
    id: 33,
    category: "메이크업",
    name: "뷰티풀 데이즈",
    location: "수원시 영통구 팔달구",
    menu: "아이 메이크업, 피부 메이크업"
  },
  {
    id: 34,
    category: "마사지",
    name: "비타 마사지",
    location: "수원시 영통구 팔달구",
    menu: "지압 마사지, 핫스톤 마사지"
  },
  {
    id: 35,
    category: "왁싱/제모",
    name: "스킨글로우 클리닉",
    location: "수원시 영통구 팔달구",
    menu: "피부 톤업, 모공 관리"
  },
  {
    id: 36,
    category: "헤어",
    name: "헤어 트렌드",
    location: "수원시 영통구 팔달구",
    menu: "펌, 염색"
  },
  {
    id: 37,
    category: "메이크업",
    name: "글래머 뷰티",
    location: "수원시 영통구 팔달구",
    menu: "페디큐어, 네일아트"
  },
  {
    id: 38,
    category: "마사지",
    name: "편안한 마사지",
    location: "수원시 영통구 팔달구",
    menu: "경락 마사지, 발 마사지"
  },
  {
    id: 39,
    category: "왁싱/제모",
    name: "프리미엄 스킨케어",
    location: "수원시 영통구 팔달구",
    menu: "여드름 관리, 피부 재생"
  }
];


const sample_stores = [
  {
    id: 90,
    category: "헤어",
    name: "제이제이 헤어",
    location: "수원시 영통구 이의동",
    menu: "여성커트, 남성커트",
    total_sale_late: 30,
    sale_name: "예약 마감 임박 할인",
    possible_reserve_time: "2024.06.20 15:30"
  },
  {
    id: 91,
    category: "네일",
    name: "내일 네일",
    location: "수원시 영통구 동동동",
    menu: "여성커트, 남성커트, 펌",
    total_sale_late: 30,
    sale_name: "오픈 기념 할인중",
    possible_reserve_time: "2024.06.20 15:30"
  },
  {
    id: 92,
    category: "마사지",
    name: "힐링 마사지",
    location: "수원시 영통구 팔달구",
    menu: "전신 마사지, 발 마사지",
    total_sale_late: 20,
    sale_name: "예약 마감 임박 할인",
    possible_reserve_time: "2024.06.21 10:00"
  },
  {
    id: 93,
    category: "왁싱/제모",
    name: "스킨 케어 클리닉",
    location: "수원시 영통구 팔달구",
    menu: "피부 관리, 여드름 관리",
    total_sale_late: 25,
    sale_name: "오픈 기념 할인중",
    possible_reserve_time: "2024.06.21 14:00"
  },
  {
    id: 94,
    category: "헤어",
    name: "뷰티 헤어샵",
    location: "수원시 영통구 팔달구",
    menu: "염색, 펌",
    total_sale_late: 15,
    sale_name: "예약 마감 임박 할인",
    possible_reserve_time: "2024.06.21 09:00"
  },
  {
    id: 95,
    category: "메이크업",
    name: "아름다움 뷰티",
    location: "수원시 영통구 팔달구",
    menu: "메이크업, 네일아트",
    total_sale_late: 10,
    sale_name: "오픈 기념 할인중",
    possible_reserve_time: "2024.06.21 13:00"
  },
  {
    id: 96,
    category: "눈썹/속눈썹",
    name: "아이브로우로",
    location: "수원시 영통구 팔달구",
    menu: "반영구 눈썹 문신",
    total_sale_late: 22,
    sale_name: "예약 마감 임박 할인",
    possible_reserve_time: "2024.06.21 11:00"
  },
  {
    id: 97,
    category: "왁싱/제모",
    name: "클리어 스킨",
    location: "수원시 영통구 팔달구",
    menu: "피부 재생, 미백 관리",
    total_sale_late: 30,
    sale_name: "오픈 기념 할인중",
    possible_reserve_time: "2024.06.21 16:00"
  },
  {
    id: 98,
    category: "헤어",
    name: "스타일 헤어샵",
    location: "수원시 영통구 팔달구",
    menu: "컷트, 스타일링",
    total_sale_late: 18,
    sale_name: "예약 마감 임박 할인",
    possible_reserve_time: "2024.06.21 10:30"
  },
  {
    id: 99,
    category: "메이크업",
    name: "엘레강스 뷰티",
    location: "수원시 영통구 팔달구",
    menu: "웨딩 메이크업, 네일 케어",
    total_sale_late: 12,
    sale_name: "오픈 기념 할인중",
    possible_reserve_time: "2024.06.21 15:00"
  },
  {
    id: 100,
    category: "마사지",
    name: "웰빙 마사지",
    location: "수원시 영통구 팔달구",
    menu: "아로마 마사지, 림프 마사지",
    total_sale_late: 28,
    sale_name: "예약 마감 임박 할인",
    possible_reserve_time: "2024.06.22 09:30"
  },
  {
    id: 101,
    category: "왁싱/제모",
    name: "글로우 스킨",
    location: "수원시 영통구 팔달구",
    menu: "안티에이징, 수분 공급",
    total_sale_late: 27,
    sale_name: "오픈 기념 할인중",
    possible_reserve_time: "2024.06.22 11:30"
  },
  {
    id: 102,
    category: "헤어",
    name: "헤어 스튜디오",
    location: "수원시 영통구 팔달구",
    menu: "남성커트, 여성커트",
    total_sale_late: 14,
    sale_name: "예약 마감 임박 할인",
    possible_reserve_time: "2024.06.22 10:00"
  },
  {
    id: 103,
    category: "메이크업",
    name: "뷰티풀 데이즈",
    location: "수원시 영통구 팔달구",
    menu: "아이 메이크업, 피부 메이크업",
    total_sale_late: 11,
    sale_name: "오픈 기념 할인중",
    possible_reserve_time: "2024.06.22 13:30"
  },
  {
    id: 104,
    category: "마사지",
    name: "비타 마사지",
    location: "수원시 영통구 팔달구",
    menu: "지압 마사지, 핫스톤 마사지",
    total_sale_late: 20,
    sale_name: "예약 마감 임박 할인",
    possible_reserve_time: "2024.06.22 12:00"
  },
  {
    id: 105,
    category: "왁싱/제모",
    name: "스킨글로우 클리닉",
    location: "수원시 영통구 팔달구",
    menu: "피부 톤업, 모공 관리",
    total_sale_late: 30,
    sale_name: "오픈 기념 할인중",
    possible_reserve_time: "2024.06.22 14:00"
  },
  {
    id: 106,
    category: "헤어",
    name: "헤어 트렌드",
    location: "수원시 영통구 팔달구",
    menu: "펌, 염색",
    total_sale_late: 19,
    sale_name: "예약 마감 임박 할인",
    possible_reserve_time: "2024.06.22 11:30"
  },
  {
    id: 107,
    category: "메이크업",
    name: "글래머 뷰티",
    location: "수원시 영통구 팔달구",
    menu: "페디큐어, 네일아트",
    total_sale_late: 25,
    sale_name: "오픈 기념 할인중",
    possible_reserve_time: "2024.06.22 15:00"
  },
  {
    id: 108,
    category: "마사지",
    name: "편안한 마사지",
    location: "수원시 영통구 팔달구",
    menu: "경락 마사지, 발 마사지",
    total_sale_late: 24,
    sale_name: "예약 마감 임박 할인",
    possible_reserve_time: "2024.06.23 09:00"
  },
  {
    id: 109,
    category: "왁싱/제모",
    name: "프리미엄 스킨케어",
    location: "수원시 영통구 팔달구",
    menu: "여드름 관리, 피부 재생",
    total_sale_late: 29,
    sale_name: "오픈 기념 할인중",
    possible_reserve_time: "2024.06.23 10:30"
  },
  {
    id: 110,
    category: "헤어",
    name: "글램 헤어",
    location: "수원시 영통구 팔달구",
    menu: "컷트, 펌",
    total_sale_late: 20,
    sale_name: "예약 마감 임박 할인",
    possible_reserve_time: "2024.06.23 11:00"
  },
  {
    id: 111,
    category: "네일",
    name: "네일 갤러리",
    location: "수원시 영통구 팔달구",
    menu: "매니큐어, 페디큐어",
    total_sale_late: 30,
    sale_name: "오픈 기념 할인중",
    possible_reserve_time: "2024.06.23 12:00"
  },
  {
    id: 112,
    category: "마사지",
    name: "릴렉스 타임",
    location: "수원시 영통구 팔달구",
    menu: "타이 마사지, 스웨디시 마사지",
    total_sale_late: 26,
    sale_name: "예약 마감 임박 할인",
    possible_reserve_time: "2024.06.23 13:00"
  },
  {
    id: 113,
    category: "왁싱/제모",
    name: "글로우 스킨케어",
    location: "수원시 영통구 팔달구",
    menu: "미백 관리, 피부 재생",
    total_sale_late: 30,
    sale_name: "오픈 기념 할인중",
    possible_reserve_time: "2024.06.23 14:00"
  },
  {
    id: 114,
    category: "헤어",
    name: "스타일 헤어 디자인",
    location: "수원시 영통구 팔달구",
    menu: "염색, 컷트",
    total_sale_late: 17,
    sale_name: "예약 마감 임박 할인",
    possible_reserve_time: "2024.06.23 15:00"
  },
  {
    id: 115,
    category: "메이크업",
    name: "뷰티 스튜디오",
    location: "수원시 영통구 팔달구",
    menu: "네일아트, 메이크업",
    total_sale_late: 22,
    sale_name: "오픈 기념 할인중",
    possible_reserve_time: "2024.06.23 16:00"
  },
  {
    id: 116,
    category: "마사지",
    name: "힐링 마사지",
    location: "수원시 영통구 팔달구",
    menu: "지압 마사지, 아로마 마사지",
    total_sale_late: 21,
    sale_name: "예약 마감 임박 할인",
    possible_reserve_time: "2024.06.24 09:00"
  },
  {
    id: 117,
    category: "왁싱/제모",
    name: "스킨 케어 솔루션",
    location: "수원시 영통구 팔달구",
    menu: "여드름 관리, 피부 톤업",
    total_sale_late: 28,
    sale_name: "오픈 기념 할인중",
    possible_reserve_time: "2024.06.24 10:00"
  },
  {
    id: 118,
    category: "헤어",
    name: "프레쉬 헤어",
    location: "수원시 영통구 팔달구",
    menu: "남성커트, 여성커트",
    total_sale_late: 19,
    sale_name: "예약 마감 임박 할인",
    possible_reserve_time: "2024.06.24 11:00"
  },
  {
    id: 119,
    category: "네일",
    name: "네일 스튜디오",
    location: "수원시 영통구 팔달구",
    menu: "매니큐어, 젤 네일",
    total_sale_late: 27,
    sale_name: "오픈 기념 할인중",
    possible_reserve_time: "2024.06.24 12:00"
  }
];



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

  // 필터링된 스토어 데이터
  const filteredStores = ({ stores }) => {
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
  const filteredStoresCount = ({ stores }) => {
    return filteredStores({ stores }).length;
  };

  //카테고리 버튼 코드 간략화
  const categoryButtons = [
    { id: "btnAll", label: "전체", active: btnAllActive, onClick: toggleBtnAllActive },
    { id: "btn1", label: "헤어", active: btn1Active, onClick: toggleBtn1Active },
    { id: "btn2", label: "네일", active: btn2Active, onClick: toggleBtn2Active },
    { id: "btn3", label: "마사지", active: btn3Active, onClick: toggleBtn3Active },
    { id: "btn4", label: "눈썹/속눈썹", active: btn4Active, onClick: toggleBtn4Active },
    { id: "btn5", label: "메이크업", active: btn5Active, onClick: toggleBtn5Active },
    { id: "btn6", label: "왁싱/제모", active: btn6Active, onClick: toggleBtn6Active },
    { id: "btn7", label: "기타", active: btn7Active, onClick: toggleBtn7Active },
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
                        className={`container-83 ${button.active ? "active" : ""}`}
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

            {/* 탑 백 조회 였다가 버튼이 하나라도 눌리면 필터링에 대한 가게 조회 */}
            {/* 필터링에 대한 가게 조회 */}
            {btnAllActive || btn1Active || btn2Active || btn3Active || btn4Active || btn5Active || btn6Active || btn7Active ? (
              <div className="top-100-list-all2">
                <div className="top-100-list">
                  <div className="top-test">
                    <span className="top-100">총 {filteredStoresCount({ stores: sample_stores })} 개</span>
                  </div>
                  <div className="research-results">
                    <ResearchResults2 stores={filteredStores({ stores: sample_stores })} />
                  </div>
                </div>
              </div>
              ) : ( /* 탑 백 조회 */
              <div className="top-100-list-all">
                <div className="top-100-list">
                  <div className="top-test">
                    <span className="top-100">TOP 100</span>
                  </div>
                  <div className="research-results">
                    <ResearchResults stores={top_100stores} />
                  </div>
                </div>
              </div>
            )}

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

            {/* 탑 백 조회 */}
            {/* <div className="top-100-list-all">
              <div className="top-100-list">
                <div className="top-test">
                  <span className="top-100">TOP 100</span>
                </div>
                <div className="research-results">
                  <ResearchResults stores={top_100stores} />
                </div>
              </div>
            </div> */}

            {/* 필터링에 대한 가게 조회 */}
            {/* <div className="top-100-list-all2">
              <div className="top-100-list">
                <div className="top-test">
                  <span className="top-100">총 몇개</span>
                </div>
                <div className="research-results">
                  <ResearchResults2 stores={filteredStores({ stores: sample_stores })} /> 
                </div>
              </div>
            </div> */}

            {/* 탑 백 조회 였다가 버튼이 하나라도 눌리면 필터링에 대한 가게 조회 */}
            {/* {btnAllActive || btn1Active || btn2Active || btn3Active || btn4Active || btn5Active || btn6Active || btn7Active ? (
              <div className="top-100-list-all2">
                <div className="top-100-list">
                  <div className="top-test">
                    <span className="top-100">총 {filteredStoresCount({ stores: sample_stores })} 개</span>
                  </div>
                  <div className="research-results">
                    <ResearchResults2 stores={filteredStores({ stores: sample_stores })} />
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
                    <ResearchResults stores={top_100stores} />
                  </div>
                </div>
              </div>
            )} */}

            {/* 깃 브런치 실험*/}
          </div>
        </div>
      </div>
    </div>
  );
}
