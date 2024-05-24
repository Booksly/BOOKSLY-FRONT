import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import './StoreOwnerMainDetailedPopup.css'

export default function StoreOwnerMainDetailedPopup() {
    const navigate = useNavigate()
    const [text, setText] = useState({
        storeName: '',
        mainContent: '',
        addr: '',
        addrDetail: '',
        addrPlus: '',
        call: '',
        instagram: '',
        kakao: '',
        blog: '',
        timeStartMon: '',
        timeEndMon: '',
        timeStartTue: '',
        timeEndTue: '',
        timeStartWed: '',
        timeEndWed: '',
        timeStartThu: '',
        timeEndThu:'',
        timeStartFri: '',
        timeEndFri: '',
        timeStartSat: '',
        timeEndSat: '',
        timeStartSun: '',
        timeEndSun: '',
    });
    const onChange = (e) => {
        setText(e.target.storeName);
        setText(e.target.mainContent);
        setText(e.target.addr);
        setText(e.target.addrDetail);
        setText(e.target.addrPlus);
        setText(e.target.call);
        setText(e.target.instagram);
        setText(e.target.kakao);
        setText(e.target.blog);
        setText(e.target.timeStartMon);
        setText(e.target.timeEndMon);
        setText(e.target.timeStartTue);
        setText(e.target.timeEndTue);
        setText(e.target.timeStartWed);
        setText(e.target.timeEndWed);
        setText(e.target.timeStartThu);
        setText(e.target.timeEndThu);
        setText(e.target.timeStartFri);
        setText(e.target.timeEndFri);
        setText(e.target.timeStartSat);
        setText(e.target.timeEndSat);
        setText(e.target.timeStartSun);
        setText(e.target.timeEndSun);
    }

    return (
        <div className="StoreOwnerMainDetailedPopup">
            <div className="DetailedPopupstore-detailed-popup">
                <div className="DetailedPopupstore-detailed-popup-left">
                    <div className="DetailedPopupstore-name-box">
                        <div className="DetailedPopupstore-name">
                            <div className="DetailedPopupcontainer-52">
                                상호
                            </div>
                        </div>
                        <input onChange={onChange} name="storeName" placeholder="제이제이 헤어" className="DetailedPopupstore-name-space"
                        />
                    </div>
                    <div className="DetailedPopupstore-main-box">
                        <div className="DetailedPopupstore-main">
                            <div className="DetailedPopupcontainer">
                                메인
                            </div>
                        </div>
                        <input onChange={onChange} name="mainContent" placeholder="고객 맞춤 프리미엄 서비스를 제공하는 제이제이 헤어입니다."
                               className="DetailedPopupstore-main-space"
                        />
                        {/*<div className="DetailedPopupstore-main-space">*/}
                        {/*    <div className="DetailedPopupcontainer-48">*/}
                        {/*        고객 맞춤 프리미엄 서비스를 제공하는 제이제이 헤어입니다.*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="DetailedPopuplocation-box">
                        <div className="DetailedPopuplocation">
                        <div className="DetailedPopuplocation-icon">
                            </div>
                        </div>
                        <div className="DetailedPopuplocation-address-box">
                            <div className="DetailedPopuplocation-search-box">
                                <div className="DetailedPopuplocation-search">
                                    <div className="DetailedPopupcontainer-42">
                                        도로명, 지번, 건물명 검색
                                    </div>
                                </div>
                                <div className="DetailedPopuplocation-search-button">
                                    <div className="DetailedPopupcontainer-40">
                                        검색
                                    </div>
                                </div>
                            </div>
                            <input onChange={onChange} name="addr" value="경기도 수원시 영통구 광교산로 154-42"
                                   className="DetailedPopuplocation-address"
                            />
                            <input onChange={onChange} name="addrDetail" value="206호"
                                   className="DetailedPopuplocation-detailed-address"
                            />
                        </div>
                    </div>
                    <div className="DetailedPopuplocation-plus-box">
                        <div className="DetailedPopuplocation-plus-icon">
                            <div className="DetailedPopupcontainer-45">
                            </div>
                        </div>
                        <input onChange={onChange} name="addrPlus" placeholder="위치 추가 설명"
                               className="DetailedPopuplocation-plus"
                        />
                    </div>
                    <div className="DetailedPopupphones-box">
                        <div className="DetailedPopupphone-icon">
                            <div className="DetailedPopupcontainer-44">
                            </div>
                        </div>
                        <div className="DetailedPopupphones">
                            <div className="DetailedPopupphone-box">
                                <div className="DetailedPopupcontainer-1">
                                    전화번호
                                </div>
                                <input onChange={onChange} name="call"
                                       placeholder="031-249-9114"
                                       className="DetailedPopupphone-space"
                                />
                            </div>
                            <div className="DetailedPopupinsta-box">
                                <div className="DetailedPopupcontainer-2">
                                    인스타그램
                                </div>
                                <input onChange={onChange} name="instagram"
                                       placeholder="http://instagram. ..."
                                       className="DetailedPopupinsta-space"
                                />
                            </div>
                            <div className="DetailedPopupkakao-box">
                                <div className="DetailedPopupcontainer-3">
                                    카카오톡
                                </div>
                                <input onChange={onChange} name="kakao"
                                       placeholder="http://pf.kakao.com/..."
                                       className="DetailedPopupkakao-space"
                                />
                            </div>
                            <div className="DetailedPopupblog-box">
                                <div className="DetailedPopupcontainer-50">
                                    블로그
                                </div>
                                <input onChange={onChange} name="blog"
                                       placeholder="http://pf.blog.com/..."
                                       className="DetailedPopupblog-space"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="DetailedPopupstore-detailed-popup-right">
                    <div className="DetailedPopupstore-detailed-info-pic">
                        <div className="DetailedPopupprofile-select">
                        </div>
                    </div>
                    <div className="DetailedPopuptime-box">
                        <div className="DetailedPopuptime-icon">
                            <div className="DetailedPopupcontainer-43">
                            </div>
                        </div>
                        <div className="DetailedPopuptime-space">
                            <div className="DetailedPopupframe-254">
                                <div className="DetailedPopupframe-251">
                                    <div className="DetailedPopupcontainer-4">
                                        월
                                    </div>
                                </div>
                                <div className="DetailedPopupframe-253">
                                    <input onChange={onChange} name="timeStartMon"
                                           placeholder="10:00"
                                           className="DetailedPopupframe-249"
                                    />
                                    <div className="DetailedPopupcontainer-6">
                                        ~
                                    </div>
                                    <input onChange={onChange} name="timeEndMon"
                                           placeholder="20:00"
                                           className="DetailedPopupframe-250"
                                    />
                                </div>
                                <div className="DetailedPopupframe-319">
                                    <div className="DetailedPopupcontainer-8">
                                        휴무
                                    </div>
                                </div>
                            </div>
                            <div className="DetailedPopupframe-551">
                                <div className="DetailedPopupframe-2511">
                                    <div className="DetailedPopupcontainer-9">
                                        화
                                    </div>
                                </div>
                                <div className="DetailedPopupframe-253">
                                    <input onChange={onChange} name="timeStartTue"
                                           placeholder="10:00"
                                           className="DetailedPopupframe-249"
                                    />
                                    <div className="DetailedPopupcontainer-6">
                                        ~
                                    </div>
                                    <input onChange={onChange} name="timeEndTue"
                                           placeholder="20:00"
                                           className="DetailedPopupframe-250"
                                    />
                                </div>
                                <div className="DetailedPopupframe-3191">
                                    <div className="DetailedPopupcontainer-13">
                                        휴무
                                    </div>
                                </div>
                            </div>
                            <div className="DetailedPopupframe-254">
                                <div className="DetailedPopupframe-251">
                                    <div className="DetailedPopupcontainer-4">
                                        수
                                    </div>
                                </div>
                                <div className="DetailedPopupframe-253">
                                    <input onChange={onChange} name="timeStartWed"
                                           placeholder="10:00"
                                           className="DetailedPopupframe-249"
                                    />
                                    <div className="DetailedPopupcontainer-6">
                                        ~
                                    </div>
                                    <input onChange={onChange} name="timeEndWed"
                                           placeholder="20:00"
                                           className="DetailedPopupframe-250"
                                    />
                                </div>
                                <div className="DetailedPopupframe-319">
                                    <div className="DetailedPopupcontainer-8">
                                        휴무
                                    </div>
                                </div>
                            </div>
                            <div className="DetailedPopupframe-254">
                                <div className="DetailedPopupframe-251">
                                    <div className="DetailedPopupcontainer-4">
                                        목
                                    </div>
                                </div>
                                <div className="DetailedPopupframe-253">
                                    <input onChange={onChange} name="timeStartThu"
                                           placeholder="10:00"
                                           className="DetailedPopupframe-249"
                                    />
                                    <div className="DetailedPopupcontainer-6">
                                        ~
                                    </div>
                                    <input onChange={onChange} name="timeEndThu"
                                           placeholder="20:00"
                                           className="DetailedPopupframe-250"
                                    />
                                </div>
                                <div className="DetailedPopupframe-319">
                                    <div className="DetailedPopupcontainer-8">
                                        휴무
                                    </div>
                                </div>
                            </div>
                            <div className="DetailedPopupframe-254">
                                <div className="DetailedPopupframe-251">
                                    <div className="DetailedPopupcontainer-4">
                                        금
                                    </div>
                                </div>
                                <div className="DetailedPopupframe-253">
                                    <input onChange={onChange} name="timeStartFri"
                                           placeholder="10:00"
                                           className="DetailedPopupframe-249"
                                    />
                                    <div className="DetailedPopupcontainer-6">
                                        ~
                                    </div>
                                    <input onChange={onChange} name="timeEndFri"
                                           placeholder="20:00"
                                           className="DetailedPopupframe-250"
                                    />
                                </div>
                                <div className="DetailedPopupframe-319">
                                    <div className="DetailedPopupcontainer-8">
                                        휴무
                                    </div>
                                </div>
                            </div>
                            <div className="DetailedPopupframe-254">
                                <div className="DetailedPopupframe-251">
                                    <div className="DetailedPopupcontainer-4">
                                        토
                                    </div>
                                </div>
                                <div className="DetailedPopupframe-253">
                                    <input onChange={onChange} name="timeStartSat"
                                           placeholder="10:00"
                                           className="DetailedPopupframe-249"
                                    />
                                    <div className="DetailedPopupcontainer-6">
                                        ~
                                    </div>
                                    <input onChange={onChange} name="timeEndSat"
                                           placeholder="20:00"
                                           className="DetailedPopupframe-250"
                                    />
                                </div>
                                <div className="DetailedPopupframe-319">
                                    <div className="DetailedPopupcontainer-8">
                                        휴무
                                    </div>
                                </div>
                            </div>
                            <div className="DetailedPopupframe-254">
                                <div className="DetailedPopupframe-251">
                                    <div className="DetailedPopupcontainer-4">
                                        일
                                    </div>
                                </div>
                                <div className="DetailedPopupframe-253">
                                    <input onChange={onChange} name="timeStartSun"
                                           placeholder="10:00"
                                           className="DetailedPopupframe-249"
                                    />
                                    <div className="DetailedPopupcontainer-6">
                                        ~
                                    </div>
                                    <input onChange={onChange} name="timeEndSun"
                                           placeholder="20:00"
                                           className="DetailedPopupframe-250"
                                    />
                                </div>
                                <div className="DetailedPopupframe-319">
                                    <div className="DetailedPopupcontainer-8">
                                        휴무
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="DetailedPopupframe-575">
                        <div className="DetailedPopupmodify-button">
                            <div className="DetailedPopupcontainer-41">
                                수정
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}