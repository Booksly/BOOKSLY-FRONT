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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <MainCarouselImage text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <MainCarouselImage text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AutoBigCar;