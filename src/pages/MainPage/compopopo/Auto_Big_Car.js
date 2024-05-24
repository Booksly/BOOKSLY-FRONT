import Carousel from 'react-bootstrap/Carousel';
import MainCarouselImage from './MainCarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auto_Big_Car.css'
import { useNavigate } from 'react-router';

function AutoBigCar() {
  const navigate = useNavigate()
    const goToMain = () => {
        navigate("/")
    }
    const goToMyHome = () => {
        navigate("/MyHomeMain")
    }
    const StoreSearch = () => {
        navigate("/StoreSearch")
    }
    const TodayReserv = () => {
        navigate("/TodayReserv")
    }
    const searchReserve = () => {
        navigate("/Reservation")
    }
    const goTologin = () => {
        navigate("/CustomerLogin")
    }
  return (
    <div className='carousel-padding-in-abc'>
      <Carousel onClick={StoreSearch}>
        <Carousel.Item interval={2000}>
          <MainCarouselImage text="First slide" />
          <Carousel.Caption>
            <h1>예약을 예약스럽게 BOOSLY</h1><br></br>
            <p><h3>당신의 시간을 절약할 수 있는 방법</h3></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <MainCarouselImage text="Second slide" />
          <Carousel.Caption>
            <h1>제이제이 헤어</h1><br></br>
            <p><h3>이달의 최대 예약 건수 달성</h3></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <MainCarouselImage text="Third slide" />
          <Carousel.Caption>
            <h1>당신도 할 수 있다</h1><br></br>
            <p><h3>개인회원 기업회원 두 종류의 선택지</h3></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AutoBigCar;