import './Shortcut.css'

//메인 홈의 두번째 섹션
function Shortcut () {
    return(
        <div className='shortcut-padding'>
            {/* shortcut : 바로가기 박스 */}
            <div className='shortcut' id="shortcut_first">
                <div className='shortcut_title'><h1>네일 바로가기</h1></div>
            </div>
            <div className='shortcut' id="shortcut_second">
                <div className='shortcut_title'><h1>속눈썹 바로가기</h1></div>
            </div>
        </div>
    )
}

export default Shortcut


