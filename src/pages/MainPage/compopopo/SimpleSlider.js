import React, { Component } from "react";
import Slider from "react-slick";
import "./slick-theme.css";
import "./slick.css";
import "./SimpleSlider.css"

class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: false, // 캐러셀 하단 버튼
        infinite: true, // 콘텐츠 반복 여부
        speed: 500, // 넘어갈 때의 속도(ms)
        slidesToShow: 5, // 한 화면에 보이는 콘텐츠 개수
        slidesToScroll: 1, // 한 번에 넘어가는 콘텐츠 수
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      const images = [
        "https://via.placeholder.com/300x200.png?text=Image+1",
        "https://via.placeholder.com/300x200.png?text=Image+2",
        "https://via.placeholder.com/300x200.png?text=Image+3",
        "https://via.placeholder.com/300x200.png?text=Image+4",
        "https://via.placeholder.com/300x200.png?text=Image+5"
      ];
    
      return (
        <Slider {...settings} className="custom-slider">
          {images.map((src, index) => (
            <div key={index} className="slider-item">
              <img src={src} alt={`Slide ${index + 1}`} className="slider-image"/>
              [제이제이 헤어] 4.4 <br></br>
            </div>
          ))}
        </Slider>
      );
    }
}

export default SimpleSlider;

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