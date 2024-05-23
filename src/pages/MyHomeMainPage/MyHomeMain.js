import './MyHomeMain.css'
import MyHomeLeftNavi from "../nav/MyHomeLeftNavi";
import MyHomeTopNavi from "../nav/MyHomeTopNavi";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function MyHomeMain() {
    const navigate = useNavigate()
    const Storage = () => {
        navigate("/MyHomeMain")
    }
    const withdrawal = () => {
        navigate("/")
    }
    const [text, setText] = useState({
        phone: '',
        authentiNum: '',
        nickname: '',
    });
    const onChange = (e) => {
        setText(e.target.phone);
        setText(e.target.authentiNum);
        setText(e.target.nickname)
    }
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
                                    <input onChange={onChange}
                                        name = "phone"
                                        placeholder="‘-’ 빼고 숫자만 입력"
                                        className="frame-403"
                                    />
                                    <div className="frame-404">
                                        <span className="container-2">
                                            인증요청
                                        </span>
                                    </div>
                                </div>
                                <div className="frame-409">
                                    <input name="authentiNum" placeholder="인증번호 입력" className="frame-403" onChange={onChange}/>
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
                            <input
                                name="nickname"
                                placeholder="김아무개"
                                className="frame-406" onChange={onChange}
                            />
                        </div>
                        <div className="frame-420">
                            <button className="frame-4181" onClick={Storage}>
                                <div className="container-7">
                                    저장하기
                                </div>
                            </button>
                            <button className="frame-419" onClick={withdrawal}>
                                <div className="container-8">
                                    회원 탈퇴
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}