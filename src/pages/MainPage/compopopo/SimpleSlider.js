import React, { Component } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router";

//css 임폴트
import "./slick-theme.css";
import "./slick.css";
import "./SimpleSlider.css"

export default function SimpleSlider({ stores }) {
  //이동을 위한 useNavigate (컴포넌트화 필요할 듯함)
  const navigate = useNavigate()
  //메인으로 이동
  const goToMain = () => {
      navigate("/") 
  }
  //
  const goToMyHome = () => {
      navigate("/MyHomeMain")
  }
  //가게조회
  const StoreSearch = () => {
      navigate("/StoreSearch")
  }
  //당일예약
  const TodayReserv = () => {
      navigate("/TodayReserv")
  }
  //예약조회
  const searchReserve = () => {
      navigate("/Reservation")
  }
  //로그인
  const goTologin = () => {
      navigate("/CustomerLogin")
  }
  //가게 상세 정보로 이동
  const goToDetail = () => {
    navigate("/DetailedStoreInfo")
  }
  
    const settings = {
      dots: false, // 캐러셀 하단 버튼
      infinite: true, // 콘텐츠 반복 여부
      speed: 500, // 넘어갈 때의 속도(ms)
      slidesToShow: 5, // 한 화면에 보이는 콘텐츠 개수
      slidesToScroll: 1, // 한 번에 넘어가는 콘텐츠 수
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <Slider {...settings} className="custom-slider">
        {stores.map((store, index) => (
          <div key={index} className="slider-item" onClick={goToDetail}>
            <img src={store.image} alt={`Slide ${index + 1}`} className="slider-image"/>
            <div className="store-info">
              <span className="store_name">{store.name}</span>
              <span>{store.rating} - [{store.category}]</span>
            </div>
          </div>
        ))}
      </Slider>
    );
    
}

//오른쪽으로 이동하는 함수
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

//왼쪽으로 이동하는 함수
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}