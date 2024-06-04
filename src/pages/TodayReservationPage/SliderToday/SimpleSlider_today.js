import React, { Component } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router";

//css 임폴트
import "./slick-theme_today.css";
import "./slick_today.css";
import "./SimpleSlider_today.css"



//메인 페이지 아래 슬라이드 두개 틀(디자인),, stores 배열을 prop으로 받아옴
export default function SimpleSlider({ stores }) {
  //슬라이드 동기화를 위함
  const [oddSlider, setOddSlider] = React.useState(null);
  const [evenSlider, setEvenSlider] = React.useState(null);
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
    //아래 슬라이드도 움직이게 함
    const settings = {
      dots: false, // 캐러셀 하단 버튼
      infinite: true, // 콘텐츠 반복 여부
      speed: 500, // 넘어갈 때의 속도(ms)
      slidesToShow: 4, // 한 화면에 보이는 콘텐츠 개수
      slidesToScroll: 4, // 한 번에 넘어가는 콘텐츠 수
      nextArrow: <SampleNextArrow nextSlider={evenSlider}/>,
      prevArrow: <SamplePrevArrow prevSlider={evenSlider}/>
    };

    //위의 슬라이드도 움직이게 함
    const evenSettings = {
      dots: false,
      infinite: true,
      speed: 470, // 아래가 미묘하게 느려서 더 빨리 넘어가게 함
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow nextSlider={oddSlider} />,
      prevArrow: <SamplePrevArrow prevSlider={oddSlider} />
  };

    return (
      <>
      {/* 홀수번째 가게만 노출 */}
      <Slider {...settings} className="custom-slider custom-sliderup" ref={(slider) => setOddSlider(slider)}>
        {stores.map((store, index) => {
          if ((index + 1) % 2 !== 0) {
            return (
              <div key={index} className="slider-item" onClick={goToDetail}>
                <img src={store.image} alt={`Slide ${index + 1}`} className="slider-image" />
                <div className="store-info">
                  <span className="store_name">{store.name}</span>
                  <span>{store.rating} - [{store.category}]</span>
                </div>
              </div>
            );
          }
          return null;
        })}
      </Slider>
      {/* 짝수번째 가게만 노출 */}
      <Slider {...evenSettings} className="custom-slider custom-sliderdown" ref={(slider) => setEvenSlider(slider)}>
        {stores.map((store, index) => {
          if ((index + 1) % 2 === 0) {
            return (
              <div key={index} className="slider-item" onClick={goToDetail}>
                <img src={store.image} alt={`Slide ${index + 1}`} className="slider-image" />
                <div className="store-info">
                  <span className="store_name">{store.name}</span>
                  <span>{store.rating} - [{store.category}]</span>
                </div>
              </div>
            );
          }
          return null;
        })}
      </Slider>
    </>
    );
    
}

//오른쪽으로 이동하는 함수
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
      <button
          className={className}
          style={{ ...style, display: "block" }}
          onClick={() => {
              onClick();
              // 두 개의 슬라이더를 동시에 이동하도록 수정
              props.nextSlider.slickNext();
          }}
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
          onClick={() => {
              onClick();
              // 두 개의 슬라이더를 동시에 이동하도록 수정
              props.prevSlider.slickPrev();
          }}
      />
  );
}