import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import './StoreOwnerMainDetailedPopup.css'
import DaumPostcode from 'react-daum-postcode';
import Modal from "react-modal";
import StoreOwnerMain from "./StoreOwnerMain";

export default function StoreOwnerMainDetailedPopup() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [isPostOpen, setIsPostOpen] = useState(false);
    const openPostCode = () => {
        setIsPostOpen(true);
    };

    const handlePostCodeComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        setAddress(fullAddress);
        setIsPostOpen(false);
    };


    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    const modifyButton = () => {
        navigate("/StoreOwnerMain")
    }
    const [text, setText] = useState({
        storeName: '',
        mainContent: '',
        address: '',
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
        setStoreName(e.target.storeName);
        setMainContent(e.target.mainContent);
        setAddress(e.target.address);
        setAddrDetail(e.target.addrDetail);
        setAddrPlus(e.target.addrPlus);
        setCall(e.target.call);
        setInstagram(e.target.instagram);
        setKakao(e.target.kakao);
        setBlog(e.target.blog);
        setTimeStartMon(e.target.timeStartMon);
        setTimeEndMon(e.target.timeEndMon);
        setTimeStartTue(e.target.timeStartTue);
        setTimeEndTue(e.target.timeEndTue);
        setTimeStartWed(e.target.timeStartWed);
        setTimeEndWed(e.target.timeEndWed);
        setTimeStartThu(e.target.timeStartThu);
        setTimeEndThu(e.target.timeEndThu);
        setTimeStartFri(e.target.timeStartFri);
        setTimeEndFri(e.target.timeEndFri);
        setTimeStartSat(e.target.timeStartSat);
        setTimeEndSat(e.target.timeEndSat);
        setTimeStartSun(e.target.timeStartSun);
        setTimeEndSun(e.target.timeEndSun);
    }
    const [storeName, setStoreName] = React.useState()
    const [mainContent, setMainContent] = React.useState()
    const [address, setAddress] = React.useState()
    const [addrDetail, setAddrDetail] = React.useState()
    const [addrPlus, setAddrPlus] = React.useState()
    const [call, setCall] = React.useState()
    const [instagram, setInstagram] = React.useState()
    const [kakao, setKakao] = React.useState()
    const [blog, setBlog] = React.useState()
    const [timeStartMon, setTimeStartMon] = React.useState()
    const [timeEndMon, setTimeEndMon] = React.useState()
    const [timeStartTue, setTimeStartTue] = React.useState()
    const [timeEndTue, setTimeEndTue] = React.useState()
    const [timeStartWed, setTimeStartWed] = React.useState()
    const [timeEndWed, setTimeEndWed] = React.useState()
    const [timeStartThu, setTimeStartThu] = React.useState()
    const [timeEndThu, setTimeEndThu] = React.useState()
    const [timeStartFri, setTimeStartFri] = React.useState()
    const [timeEndFri, setTimeEndFri] = React.useState()
    const [timeStartSat, setTimeStartSat] = React.useState()
    const [timeEndSat, setTimeEndSat] = React.useState()
    const [timeStartSun, setTimeStartSun] = React.useState()
    const [timeEndSun, setTimeEndSun] = React.useState()

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
                        <input onChange={onChange} name="storeName" value={storeName} placeholder="제이제이 헤어" className="DetailedPopupstore-name-space"
                        />
                    </div>
                    <div className="DetailedPopupstore-main-box">
                        <div className="DetailedPopupstore-main">
                            <div className="DetailedPopupcontainer">
                                메인
                            </div>
                        </div>
                        <input onChange={onChange} name="mainContent" value={mainContent}
                               placeholder="고객 맞춤 프리미엄 서비스를 제공하는 제이제이 헤어입니다."
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
                                {/*<div className="DetailedPopuplocation-search">*/}
                                {/*    <div className="DetailedPopupcontainer-42">*/}
                                {/*        도로명, 지번, 건물명 검색*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <input
                                    type="text"
                                    value={address}
                                    readOnly
                                    className="DetailedPopuplocation-search"
                                    placeholder="도로명, 지번, 건물명 검색"
                                    autoComplete="address"
                                />
                                {isPostOpen && (
                                    <div style={{
                                        display: 'block',
                                        position: 'absolute',
                                        top: '100px',
                                        zIndex: '100',
                                        border: '1px solid',
                                        backgroundColor: '#ffffff'
                                    }}>
                                        <DaumPostcode
                                            onComplete={handlePostCodeComplete}
                                            width={600}
                                            height={450}
                                            style={{display: 'block'}}
                                        />
                                        <button type="button" onClick={() => setIsPostOpen(false)}
                                                style={{margin: '0 0 10px 10px', cursor: 'pointer'}} >닫기
                                        </button>
                                    </div>
                                )}
                                <button onClick={openPostCode}
                                    className="DetailedPopuplocation-search-button">
                                    <div className="DetailedPopupcontainer-40">
                                        검색
                                    </div>
                                </button>
                            </div>
                            {/*<input onChange={onChange} name="addr" value={addr}*/}
                            {/*       className="DetailedPopuplocation-address"*/}
                            {/*/>*/}
                            <input onChange={onChange} name="addrDetail" value={addrDetail}
                                   className="DetailedPopuplocation-detailed-address"
                            />
                        </div>
                    </div>
                    <div className="DetailedPopuplocation-plus-box">
                        <div className="DetailedPopuplocation-plus-icon">
                            <div className="DetailedPopupcontainer-45">
                            </div>
                        </div>
                        <input onChange={onChange} name="addrPlus" value={addrPlus} placeholder="위치 추가 설명"
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
                                <input onChange={onChange} name="call" value={call}
                                       placeholder="031-249-9114"
                                       className="DetailedPopupphone-space"
                                />
                            </div>
                            <div className="DetailedPopupinsta-box">
                                <div className="DetailedPopupcontainer-2">
                                    인스타그램
                                </div>
                                <input onChange={onChange} name="instagram" value={instagram}
                                       placeholder="http://instagram. ..."
                                       className="DetailedPopupinsta-space"
                                />
                            </div>
                            <div className="DetailedPopupkakao-box">
                                <div className="DetailedPopupcontainer-3">
                                    카카오톡
                                </div>
                                <input onChange={onChange} name="kakao" value={kakao}
                                       placeholder="http://pf.kakao.com/..."
                                       className="DetailedPopupkakao-space"
                                />
                            </div>
                            <div className="DetailedPopupblog-box">
                                <div className="DetailedPopupcontainer-50">
                                    블로그
                                </div>
                                <input onChange={onChange} name="blog" value={blog}
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
                                    <input onChange={onChange} name="timeStartMon" value={timeStartMon}
                                           placeholder="10:00"
                                           className="DetailedPopupframe-249"
                                    />
                                    <div className="DetailedPopupcontainer-6">
                                        ~
                                    </div>
                                    <input onChange={onChange} name="timeEndMon" value={timeEndMon}
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
                                    <input onChange={onChange} name="timeStartTue" value={timeStartTue}
                                           placeholder="10:00"
                                           className="DetailedPopupframe-249"
                                    />
                                    <div className="DetailedPopupcontainer-6">
                                        ~
                                    </div>
                                    <input onChange={onChange} name="timeEndTue" value={timeEndTue}
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
                                        수
                                    </div>
                                </div>
                                <div className="DetailedPopupframe-253">
                                    <input onChange={onChange} name="timeStartWed" value={timeStartWed}
                                           placeholder="10:00"
                                           className="DetailedPopupframe-249"
                                    />
                                    <div className="DetailedPopupcontainer-6">
                                        ~
                                    </div>
                                    <input onChange={onChange} name="timeEndWed" value={timeEndWed}
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
                                    <input onChange={onChange} name="timeStartThu" value={timeStartThu}
                                           placeholder="10:00"
                                           className="DetailedPopupframe-249"
                                    />
                                    <div className="DetailedPopupcontainer-6">
                                        ~
                                    </div>
                                    <input onChange={onChange} name="timeEndThu" value={timeEndThu}
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
                                    <input onChange={onChange} name="timeStartFri" value={timeStartFri}
                                           placeholder="10:00"
                                           className="DetailedPopupframe-249"
                                    />
                                    <div className="DetailedPopupcontainer-6">
                                        ~
                                    </div>
                                    <input onChange={onChange} name="timeEndFri" value={timeEndFri}
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
                                    <input onChange={onChange} name="timeStartSat" value={timeStartSat}
                                           placeholder="10:00"
                                           className="DetailedPopupframe-249"
                                    />
                                    <div className="DetailedPopupcontainer-6">
                                        ~
                                    </div>
                                    <input onChange={onChange} name="timeEndSat" value={timeEndSat}
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
                                    <input onChange={onChange} name="timeStartSun" value={timeStartSun}
                                           placeholder="10:00"
                                           className="DetailedPopupframe-249"
                                    />
                                    <div className="DetailedPopupcontainer-6">
                                        ~
                                    </div>
                                    <input onChange={onChange} name="timeEndSun" value={timeEndSun}
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
                        <button className="DetailedPopupmodify-button" onClick={closeModal}>
                            <div className="DetailedPopupcontainer-41">
                                수정
                            </div>
                        </button>
                        {/*<Modal isOpen={isOpen} onRequestClose={closeModal}>*/}
                        {/*    <StoreOwnerMain/>*/}
                        {/*</Modal>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}