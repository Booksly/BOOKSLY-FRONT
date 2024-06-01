import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router';

//css 임폴트
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auto_Big_Car.css'

//이미지 임폴트
import Image1 from './ZZ_hat.jpeg';
import Image2 from './Z_Image6.jpeg';
import Image3 from './ZZ_nail.jpeg';

// 메인 페이지 첫번째 줄 삼단 캐러셀 내용
// 내부 클래스 컴포넌트
const MainCarouselImage = ({ text, src, onClick }) => (
  <div className="promotion_carousel" style={{ backgroundImage: `url(${src})` }} onClick={onClick}>
    <div className='promotion_content'>{text}</div> {/* 하단에 글자를 넣고 싶다면 이렇게 넣을 수도 있다.*/} 
  </div>
);

//캐러셀 함수
export default function AutoBigCar() {
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

  //이미지 설정 : 1. 택스트, 2. 이미지 주소, 3. 클릭 시 이동하는 장소
  const images = [
    { text: "북슬리 그대의 최고의 선택", src: Image1, onclick: StoreSearch},
    { text: "오늘 예약 빠르게 예약 가능한 가게", src: Image2, onclick: TodayReserv },
    { text: "북슬리는 회원을 찾습니다.", src: Image3, onclick: goTologin }
  ];

  return (
    <div className='carousel-padding-in-abc'>
      <Carousel>
        {images.map((image, index) => (
          //2초(2000)에 한장씩 이동, Item이 캐러셀 한장이라고 생각하면 됨
          <Carousel.Item interval={2000} key={index}> 
            <MainCarouselImage text={image.text} src={image.src} onClick={image.onclick}/>
            {/* Carousel.Caption : 문구를 적고 싶을 때 사용하는 부트스트랩 도구 */}
            {/* <Carousel.Caption>
              <h1>Slide {index + 1}</h1><br />
              <p><h3>Subtitle for slide {index + 1}</h3></p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

