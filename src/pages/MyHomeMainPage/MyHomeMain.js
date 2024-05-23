import './MyHomeMain.css'
import MyHomeLeftNavi from "../nav/MyHomeLeftNavi";
import MyHomeTopNavi from "../nav/MyHomeTopNavi";

export default function MyHomeMain() {
    return (
        <div className="MyHomeMain">
        <div className="MyHomeMainBack">
            <MyHomeLeftNavi/>
            <div className="containerAll">
                <MyHomeTopNavi/>
                <div className="MyHomeMaincontainer">
                    <div className="ContentBox">
                        <div className="frame-411">
                            <div className="containerPhone">
                                전화번호
                            </div>
                            <div className="at-num">
                                <div className="frame-408">
                                    <div className="frame-403">
                                        <span className="container-3">
                                            ‘-’ 빼고 숫자만 입력
                                        </span>
                                    </div>
                                    <div className="frame-404">
                                        <span className="container-2">
                                            인증요청
                                        </span>
                                    </div>
                                </div>
                                <div className="frame-409">
                                    <div className="frame-407">
                                        <span className="container-3">
                                            인증번호 입력
                                        </span>
                                    </div>
                                    <div className="frame-405">
                                        <span className="container-4">
                                            인증하기
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-417">
                            <div className="container-5">
                                닉네임 변경
                            </div>
                            <div className="frame-406">
                                <span className="container-6">
                                    김아무개
                                </span>
                            </div>
                        </div>
                        <div className="frame-420">
                            <div className="frame-4181">
                                <div className="container-7">
                                    저장하기
                                </div>
                            </div>
                            <div className="frame-419">
                                <div className="container-8">
                                    회원 탈퇴
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}