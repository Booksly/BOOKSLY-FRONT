import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import './StoreOwnerMainDetailedPopup.css'
import DaumPostcode from 'react-daum-postcode';

export default function StoreOwnerMainDetailedPopup() {
    const navigate = useNavigate()
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
    });
    const onChange = (e) => {
        setStoreName(e.target.storeName);
        setAddress(e.target.address);
        setAddrDetail(e.target.addrDetail);
        setAddrPlus(e.target.addrPlus);
        setCall(e.target.call);
        setInstagram(e.target.instagram);
        setKakao(e.target.kakao);
        setBlog(e.target.blog);
    }
    const handleMainContentChange = (e) => {
        setMainContent(e.target.value);
    };

    const [storeName, setStoreName] = React.useState()
    const [mainContent, setMainContent] = React.useState()
    const [address, setAddress] = React.useState()
    const [addrDetail, setAddrDetail] = React.useState()
    const [addrPlus, setAddrPlus] = React.useState()
    const [call, setCall] = React.useState()
    const [instagram, setInstagram] = React.useState()
    const [kakao, setKakao] = React.useState()
    const [blog, setBlog] = React.useState()

    const [timeStartMon, setTimeStartMon] = useState('');
    const [timeEndMon, setTimeEndMon] = useState('');
    const [timeStartTue, setTimeStartTue] = useState('');
    const [timeEndTue, setTimeEndTue] = useState('');
    const [timeStartWed, setTimeStartWed] = useState('');
    const [timeEndWed, setTimeEndWed] = useState('');
    const [timeStartThu, setTimeStartThu] = useState('');
    const [timeEndThu, setTimeEndThu] = useState('');
    const [timeStartFri, setTimeStartFri] = useState('');
    const [timeEndFri, setTimeEndFri] = useState('');
    const [timeStartSat, setTimeStartSat] = useState('');
    const [timeEndSat, setTimeEndSat] = useState('');
    const [timeStartSun, setTimeStartSun] = useState('');
    const [timeEndSun, setTimeEndSun] = useState('');
    const [disabledDays, setDisabledDays] = useState([]);
    const [selectedDays, setSelectedDays] = useState([]);

    const handleDate = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'timeStartMon':
                setTimeStartMon(value);
                break;
            case 'timeEndMon':
                setTimeEndMon(value);
                break;
            case 'timeStartTue':
                setTimeStartTue(value);
                break;
            case 'timeEndTue':
                setTimeEndTue(value);
                break;
            case 'timeStartWed':
                setTimeStartWed(value);
                break;
            case 'timeEndWed':
                setTimeEndWed(value);
                break;
            case 'timeStartThu':
                setTimeStartThu(value);
                break;
            case 'timeEndThu':
                setTimeEndThu(value);
                break;
            case 'timeStartFri':
                setTimeStartFri(value);
                break;
            case 'timeEndFri':
                setTimeEndFri(value);
                break;
            case 'timeStartSat':
                setTimeStartSat(value);
                break;
            case 'timeEndSat':
                setTimeEndSat(value);
                break;
            case 'timeStartSun':
                setTimeStartSun(value);
                break;
            case 'timeEndSun':
                setTimeEndSun(value);
                break;
            default:
                break;
        }
    };

    const toggleDay = (day) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter(d => d !== day));
            setDisabledDays([...disabledDays, day]);
            clearInput(day);
        } else {
            setSelectedDays([...selectedDays, day]);
            setDisabledDays(disabledDays.filter(d => d !== day));
        }
    };

    const toggleHoliday = (day) => {
        setDisabledDays([...disabledDays, day]);
        setSelectedDays(selectedDays.filter(d => d !== day));
        clearInput(day);
    };

    const clearInput = (day) => {
        switch (day) {
            case 'Mon':
                setTimeStartMon('');
                setTimeEndMon('');
                break;
            case 'Tue':
                setTimeStartTue('');
                setTimeEndTue('');
                break;
            case 'Wed':
                setTimeStartWed('');
                setTimeEndWed('');
                break;
            case 'Thu':
                setTimeStartThu('');
                setTimeEndThu('');
                break;
            case 'Fri':
                setTimeStartFri('');
                setTimeEndFri('');
                break;
            case 'Sat':
                setTimeStartSat('');
                setTimeEndSat('');
                break;
            case 'Sun':
                setTimeStartSun('');
                setTimeEndSun('');
                break;
            default:
                break;
        }
    };

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(URL.createObjectURL(e.target.files[0]));
        }
    };

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
                        <textarea
                            onChange={handleMainContentChange}
                            name="mainContent"
                            value={mainContent}
                            placeholder="고객 맞춤 프리미엄 서비스를 제공하는 제이제이 헤어입니다."
                            className="DetailedPopupstore-main-space"
                        />
                    </div>
                    <div className="DetailedPopuplocation-box">
                        <div className="DetailedPopuplocation">
                            <div className="DetailedPopuplocation-icon">
                            </div>
                        </div>
                        <div className="DetailedPopuplocation-address-box">
                            <div className="DetailedPopuplocation-search-box">
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
                        {selectedImage ? (
                            <img src={selectedImage} alt="Selected" className="DetailedPopupprofile-image"/>
                        ) : (
                            <div className="DetailedPopupprofile-select"
                                 onClick={() => document.getElementById('fileInput').click()}></div>
                        )}
                        <input
                            type="file"
                            id="fileInput"
                            style={{display: 'none'}}
                            onChange={handleImageChange}
                            accept="image/*"
                        />
                    </div>
                    <div className="DetailedPopuptime-box">
                        <div className="DetailedPopuptime-icon">
                            <div className="DetailedPopupcontainer-43">
                            </div>
                        </div>
                        <div className="SOMDP-time-space">
                            {[
                                {
                                    day: 'Mon',
                                    label: '월',
                                    timeStart: timeStartMon,
                                    timeEnd: timeEndMon,
                                    timeStartName: 'timeStartMon',
                                    timeEndName: 'timeEndMon'
                                },
                                {
                                    day: 'Tue',
                                    label: '화',
                                    timeStart: timeStartTue,
                                    timeEnd: timeEndTue,
                                    timeStartName: 'timeStartTue',
                                    timeEndName: 'timeEndTue'
                                },
                                {
                                    day: 'Wed',
                                    label: '수',
                                    timeStart: timeStartWed,
                                    timeEnd: timeEndWed,
                                    timeStartName: 'timeStartWed',
                                    timeEndName: 'timeEndWed'
                                },
                                {
                                    day: 'Thu',
                                    label: '목',
                                    timeStart: timeStartThu,
                                    timeEnd: timeEndThu,
                                    timeStartName: 'timeStartThu',
                                    timeEndName: 'timeEndThu'
                                },
                                {
                                    day: 'Fri',
                                    label: '금',
                                    timeStart: timeStartFri,
                                    timeEnd: timeEndFri,
                                    timeStartName: 'timeStartFri',
                                    timeEndName: 'timeEndFri'
                                },
                                {
                                    day: 'Sat',
                                    label: '토',
                                    timeStart: timeStartSat,
                                    timeEnd: timeEndSat,
                                    timeStartName: 'timeStartSat',
                                    timeEndName: 'timeEndSat'
                                },
                                {
                                    day: 'Sun',
                                    label: '일',
                                    timeStart: timeStartSun,
                                    timeEnd: timeEndSun,
                                    timeStartName: 'timeStartSun',
                                    timeEndName: 'timeEndSun'
                                }
                            ].map((time, index) => (
                                <div className="SOMDP-frame-254" key={index}>
                                    <div className="SOMDP-frame-251">
                                        <button
                                            className="SOMDP-container-4"
                                            onClick={() => toggleDay(time.day)}
                                            style={{backgroundColor: selectedDays.includes(time.day) ? 'rgba(255, 89, 37, 0.2)' : 'transparent'}}
                                        >
                                            {time.label}
                                        </button>
                                    </div>
                                    <div className="SOMDP-frame-253">
                                        <input
                                            onChange={handleDate}
                                            name={time.timeStartName}
                                            value={time.timeStart}
                                            placeholder="10:00"
                                            className="SOMDP-frame-249"
                                            disabled={disabledDays.includes(time.day)}
                                        />
                                        <div className="SOMDP-container-6">
                                            ~
                                        </div>
                                        <input
                                            onChange={handleDate}
                                            name={time.timeEndName}
                                            value={time.timeEnd}
                                            placeholder="20:00"
                                            className="SOMDP-frame-250"
                                            disabled={disabledDays.includes(time.day)}
                                        />
                                    </div>
                                    <div className="SOMDP-frame-319">
                                        <button
                                            className="SOMDP-container-8"
                                            onClick={() => toggleHoliday(time.day)}
                                            style={{backgroundColor: disabledDays.includes(time.day) ? 'rgba(255, 89, 37, 0.2)' : 'transparent'}}
                                        >
                                            휴무
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="DetailedPopupframe-575">
                        <button className="DetailedPopupmodify-button">
                            <div className="DetailedPopupcontainer-41">
                                수정
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}