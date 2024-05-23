import './Shortcut.css'
import { useNavigate } from 'react-router'

//메인 홈의 두번째 섹션
function Shortcut () {
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
    return(
        <div className='shortcut-padding'>
            {/* shortcut : 바로가기 박스 */}
            <div className='shortcut' id="shortcut_first" onClick={StoreSearch}>
                <div className='shortcut_title'><h1>네일 바로가기</h1></div>
            </div>
            <div className='shortcut' id="shortcut_second" onClick={StoreSearch}>
                <div className='shortcut_title'><h1>속눈썹 바로가기</h1></div>
            </div>
        </div>
    )
}

export default Shortcut


