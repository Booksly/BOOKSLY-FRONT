import './StoreOwnerSetting.css'
// import {useNavigate} from 'react-router-dom';
import React, {useState} from "react";
import StoreOwnerLeftNavi from "../nav/StoreOwnerLeftNavi";
import StoreOwnerTopNavi from "../nav/StoreOwnerTopNavi";

export default function StoreOwnerSetting() {
    // const navigate = useNavigate()
    const [passwd, setPasswd] = useState('')
    const [npasswd, setNpasswd] = useState('')
    const handleDelete = () => {
        // navigate("Main")
    }

    return (
        <div className="StoreOwnerSetting">
            <div className="StoreOwnerSettingBack">
                <StoreOwnerLeftNavi/>
                <div className="SOScontainerAll">
                    <StoreOwnerTopNavi/>
                    <div className="SOScontainer">
                        <div className="SOSBox">
                            <div className="SOSframe-666">
                                <div className="SOSframe-660">
                                    <div className="SOScontainer-1">
                                        비밀번호 변경
                                    </div>
                                    <div className="SOSframe-659">
                                        <div className="SOSframe-657">
                                            <div className="SOScontainer-4">
                                                현재 비밀번호
                                            </div>
                                            <input
                                                className="SOSframe-394"
                                                placeholder="8~16자리 / 영문 대소문자, 숫자, 특수문자 조합"
                                                value={passwd}
                                                onChange={(e) => setPasswd(e.target.value)}
                                            />
                                        </div>
                                        <div className="SOSframe-658">
                                            <div className="SOScontainer-5">
                                                새 비밀번호
                                            </div>
                                            <input
                                                className="SOSframe-395"
                                                placeholder="8~16자리 / 영문 대소문자, 숫자, 특수문자 조합"
                                                value={npasswd}
                                                onChange={(e) => setNpasswd(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="SOSframe-664">
                                    <div className="SOScontainer-9">
                                        휴대폰 변경
                                    </div>
                                    <div className="SOSframe-663">
                                        <div className="SOSframe-661">
                                            <input
                                                className="SOSframe-396"
                                                placeholder="‘-’ 빼고 숫자만 입력"
                                            />
                                            <div
                                                style={{cursor: 'pointer'}}
                                                className="SOSframe-398"
                                            >
                                                <div className="SOScontainer-7">
                                                    인증요청
                                                </div>
                                            </div>
                                        </div>
                                        <div className="SOSframe-662">
                                            <input
                                                className="SOSframe-397"
                                                placeholder="인증번호 입력"
                                            />
                                            <div
                                                style={{cursor: 'pointer'}}
                                                className="SOSframe-399"
                                            >
                                                <div className="SOScontainer-8">
                                                    인증하기
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="SOSframe-665">
                                    <div className="SOScontainer-10">
                                        이메일 변경
                                    </div>
                                    <input className="SOSframe-400" placeholder={"email@booksly.co.kr"}>
                                    </input>
                                </div>
                                {/*<div className="SOS-modify-buttonBox">*/}
                                {/*    <button className="SOS-modify-button">*/}
                                {/*        수정*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                            </div>
                            <div className="SOSframe-420">
                                <div className="SOSframe-418">
                                    <button className="SOS-modify-button">
                                        수정
                                    </button>
                                </div>
                                <div
                                    onClick={handleDelete}
                                    style={{cursor: 'pointer'}}
                                    className="SOSframe-418"
                                >
                                    <div className="SOScontainer-12">
                                        가게 삭제
                                    </div>
                                </div>
                                <div className="SOSframe-419" style={{cursor: "pointer"}}>
                                    <div className="SOScontainer-12">
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
