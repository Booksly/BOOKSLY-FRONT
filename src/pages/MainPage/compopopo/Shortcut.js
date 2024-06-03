import { useNavigate } from 'react-router'

//css 임폴트
import './Shortcut.css'

//이미지 임폴트
import Image1 from './ZImage3.jpeg';
import Image2 from './ZZ_masage.jpeg';

import Image3 from './nail_category.png';
import Image4 from './massage_category.png';

// 메인 페이지 두번째 줄 바로가기 내용
// 내부 클래스 컴포넌트
export default function Shortcut () {
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
    //각각 해당하는 주소로 이동하도록 바꿔야함. 지금은 둘다 일반 가게조회로 넘어감
    const images = [
        { src: Image3, onclick: StoreSearch},
        { src: Image4, onclick: StoreSearch }
    ];

    return(
        <div className='shortcut-padding'>      
            {images.map((image, index) => (
                <div 
                    className='shortcut' 
                    key={index}
                    onClick={image.onclick}
                    style={{ backgroundImage: `url(${image.src})` }}
                >
                </div>
            ))}
        </div>
    )
}




