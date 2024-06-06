import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

//가게주인 나브바 왼쪽 + 위
import StoreOwnerLeftNavi from "../nav/StoreOwnerLeftNavi";
import StoreOwnerTopNavi from "../nav/StoreOwnerTopNavi";

//css 임폴트
import './RegisterTimeEvent.css'

//카테고리 배렬 - MenuSelect에서 쓰임
const categories = [
    {
        id: 1,
        name: '커트',
        subcategories: [
            { id: 11, name: '여성커트' },
            { id: 12, name: '남성커트' }
        ]
    },
    {
        id: 2,
        name: '펌',
        subcategories: [
            { id: 21, name: 'perm1' },
            { id: 22, name: 'perm2' }
        ]
    }
];

// 직원별 메뉴 설정
const staffMenus = {
    "제이원장": [11, 12],
    "심화 디자이너": [21],
    "캡 디자이너": [12, 22],
    "제이슨 디자이너": [11, 21],
    "미우 디자이너": [12, 21, 22]
};

//마감 임박 이벤트 등록/수정
export default function RegisterTimeEvent() {

    return(
        <div className="StoreOwnerMain">
                <div className="StoreOwnerMainBack">
                    <StoreOwnerLeftNavi/>
                    <div className="SOMcontainerAll">
                        <StoreOwnerTopNavi/>
                        <RegisterTimeEvent_contents/>
                    </div>
                </div>
        </div>
    )
}

//마감 임박 이벤트 등록/수정 내용들
function RegisterTimeEvent_contents() {
    const [eventRate, seteventRate] = useState(""); //이벤트 할인율
    const [eventMent, seteventMent] = useState(""); //이벤트 문구
    const [maxCapacity, setMaxCapacity] = useState("");
    const [storeInfo, setStoreInfo] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedHour, setSelectedHour] = useState("");
    const [selectedMinute, setSelectedMinute] = useState("");
    const [maxDays, setMaxDays] = useState("");

    const [selectedDays, setSelectedDays] = useState([]);
    const [disabledDays, setDisabledDays] = useState([]);
    //직원 정보, 선택한 직원 정보
    const data_staffs = ["제이원장", "심화 디자이너", "캡 디자이너", "제이슨 디자이너", "미우 디자이너"];
    const [selectedStaff, setSelectedStaff] = useState(null); 
    const handleStaffClick = (index) => {
        setSelectedStaff(index);
    };
    
    //페이지 이동 (네비케이트)
    const navigate = useNavigate()
    const goToMain = () => {
        navigate("/StoreOwnerMain")
    }
    const goToDetail = () => {
        navigate("/StoreOwnerMain")
    }
    const goToSetting = () => {
        navigate("/StoreOwnerSetting")
    }
    //마감 임박 메뉴 등록
    const goToRegisterLastEvent = () => {
        navigate("/RegisterLastEvent")
    }
    //타임세일 메뉴 등록
    const goToRegisterTimeEvent = () => {
        navigate("/RegisterTimeEvent")
    }
    //이벤트 메뉴 - 타임 세일 메뉴 확인
    const goToCheckTimeEvent = () => {
        navigate("/CheckTimeEvent")
    }
    //이벤트 메뉴 - 마감 임박 메뉴 확인
    const goToCheckLastEvent = () => {
        navigate("/CheckLastEvent")
    }
    //예약설정
    const goToRegisterReservation = () => {
        navigate("/RegisterReservation")
    }

    const handleYesClick = () => {
        setSelectedOption("yes");
    };
    const handleNoClick = () => {
        setSelectedOption("no");
    };

    const hourOptions = Array.from({ length: 13 }, (v, k) => ({
        value: k,
        label: k < 10 ? `0${k}` : `${k}`,
    }));
    const minuteOptions = Array.from({ length: 60 }, (v, k) => ({
        value: k,
        label: k < 10 ? `0${k}` : `${k}`,
    }));
    const handleHourChange = (e) => {
        setSelectedHour(e.target.value);
    };
    const handleMinuteChange = (e) => {
        setSelectedMinute(e.target.value);
    };

    const toggleDay = (day) => {
        if (selectedDays.includes(day)) {
          setSelectedDays(selectedDays.filter((d) => d !== day));
          setDisabledDays([...disabledDays, day]);
        } else {
          setSelectedDays([...selectedDays, day]);
          setDisabledDays(disabledDays.filter((d) => d !== day));
        }
      };

    return (
        <div className="Time_Event_options_padding">
            <div className="Last_Event_options">
                <div className="RegistReservation_title">타임 예약 이벤트 등록/수정</div>

                {/* 직원 선택 */}
                <div className="RegistLastEvent_select_staff">
                    <div className="RegistReservation_mid_title">직원 선택</div>
                    <div className='option_boxs_row'>
                        {data_staffs.map((staff, index) => (
                            <div
                            key={index}
                            className={`staff_box ${selectedStaff === index ? 'isSelect' : ''}`}
                            onClick={() => handleStaffClick(index)}
                            >
                                <div className='staff_name'>{staff}</div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* 이벤트 문구 */}
                <div className="RegistLastEvent_event_title">
                    <div className="RegistReservation_mid_title">타임 예약 타이틀</div>
                    <input
                        className="RegistReservation_sametime_max_int_input"
                        value={eventMent}
                        type="text"
                        placeholder="지금 예약시 20% 할인 행사"
                        onChange={(e) => seteventMent(e.target.value)}
                    />
                </div>
                
                {/* 예약 모집 시간 단위 */}
                <div className="time_select_all_padding">
                    <div className="RegistReservation_mid_title">타임 예약 시간 등록</div>
                    <div className="time_select_box_padding">
                        <div className="time_select_box">
                            <select value={selectedHour} onChange={handleHourChange}>
                                {hourOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <div className="time_text">시</div>
                        </div>
                        <div className="time_select_box">
                            <select value={selectedMinute} onChange={handleMinuteChange}>
                                {minuteOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <div className="time_text">분</div>
                        </div>
                        <div style={{fontSize: '30px', marginRight: '7px'}}>~</div>
                        <div className="time_select_box">
                            <select value={selectedHour} onChange={handleHourChange}>
                                {hourOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <div className="time_text">시</div>
                        </div>
                        <div className="time_select_box">
                            <select value={selectedMinute} onChange={handleMinuteChange}>
                                {minuteOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label} 
                                    </option>
                                ))}
                            </select>
                            <div className="time_text">분</div>
                        </div>
                    </div>
                </div>


                {/* 할인율 */}
                <div className="RegistLastEvent_event_rate">
                    <div className="RegistReservation_mid_title">할인율(%)</div>
                    <input
                        className="RegistReservation_sametime_max_int_input"
                        value={eventRate}
                        type="number"
                        placeholder="20"
                        onChange={(e) => seteventRate(e.target.value)}
                    />
                </div>

                    
                {/* 메뉴 */}
                <div className="ResisterLastEvent_menu_select">
                    <div className="RegistReservation_mid_title">메뉴 선택</div>
                    <MenuSelect selectedStaff={selectedStaff !== null ? data_staffs[selectedStaff] : null}/>
                </div>
                

                {/* 자동 예약 확정 */}
                <div className="RegistReservation_auto_check_padding">
                    {/* 자동 예약 확정 버튼*/}
                    <div className="RegistReservation_auto_check">
                        <div className="RegistReservation_mid_title">반복 설정</div>
                        <div className="auto_check_btn_padding">
                            <div
                                className={`auto_check_btn ${selectedOption === "yes" ? "active" : ""}`}
                                onClick={handleYesClick}
                            >
                                <div className="auto_check_a_yes">예</div>
                            </div>
                            <div
                                className={`auto_check_btn ${selectedOption === "no" ? "active" : ""}`}
                                onClick={handleNoClick}
                            >
                                <div className="auto_check_a_no">아니오</div>
                            </div>
                        </div>
                    </div>   
                </div>
                
                {/* 기간 반복 */}
                <div className="time_select_all_padding">
                    <div className="RegistReservation_mid_title">기간 반복</div>
                    <div className="time_select_box_padding">
                        <div className="time_select_box">
                            <select value={selectedHour} onChange={handleHourChange}>
                                {hourOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <div className="time_text">시</div>
                        </div>
                        <div className="time_select_box">
                            <select value={selectedMinute} onChange={handleMinuteChange}>
                                {minuteOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <div className="time_text">분</div>
                        </div>
                        <div style={{fontSize: '30px', marginRight: '7px'}}>~</div>
                        <div className="time_select_box">
                            <select value={selectedHour} onChange={handleHourChange}>
                                {hourOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <div className="time_text">시</div>
                        </div>
                        <div className="time_select_box">
                            <select value={selectedMinute} onChange={handleMinuteChange}>
                                {minuteOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <div className="time_text">분</div>
                        </div>
                    </div>
                </div>
                
                <div className="SR-time-space">
                {[
                    { day: "Mon", label: "월" },
                    { day: "Tue", label: "화" },
                    { day: "Wed", label: "수" },
                    { day: "Thu", label: "목" },
                    { day: "Fri", label: "금" },
                    { day: "Sat", label: "토" },
                    { day: "Sun", label: "일" },
                ].map((time, index) => (
                    <div className="SR-frame-254" key={index}>
                    <div className="SR-frame-251">
                        <button
                        className="SR-container-4"
                        onClick={() => toggleDay(time.day)}
                        style={{
                            backgroundColor: selectedDays.includes(time.day)
                            ? "rgba(255, 89, 37, 0.2)"
                            : "transparent",
                        }}
                        >
                        {time.label}
                        </button>
                    </div>
                    </div>
                ))}
                </div>

                <div className="btns_padding_For_row">
                    <button className="ReservationRegist_fin_btn" onClick={goToRegisterTimeEvent}>
                        초기화
                    </button>
                    <button className="ReservationRegist_fin_btn" onClick={goToCheckTimeEvent}>
                        등록 
                    </button>
                </div>
 
            </div>
        </div>
    );
}


function MenuSelect({selectedStaff}) {
    const [mainCategory, setMainCategory] = useState('');
    const [subCategories, setSubCategories] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState({});
    const [isAllSelected, setIsAllSelected] = useState(false);
    const [isGlobalSelectAll, setIsGlobalSelectAll] = useState(false);

    //카테고리
    useEffect(() => {
        if (mainCategory) {
            const selectedCategory = categories.find(category => category.id === parseInt(mainCategory));
            setSubCategories(selectedCategory ? selectedCategory.subcategories : []);
            setIsAllSelected(
                selectedSubCategories[mainCategory] &&
                selectedSubCategories[mainCategory].length === (selectedCategory ? selectedCategory.subcategories.length : 0)
            );
        } else {
            setSubCategories([]);
        }
    }, [mainCategory, selectedSubCategories]);

    useEffect(() => {
        // 직원이 변경될 때 선택된 서브 카테고리 초기화
        setSelectedSubCategories({});
        setIsAllSelected(false);
        setIsGlobalSelectAll(false);
    }, [selectedStaff]);

    // 필터된 서브 카테고리
    const filteredSubCategories = subCategories.filter(subCategory => 
        selectedStaff ? staffMenus[selectedStaff].includes(subCategory.id) : true
    );

    //메인 카테고리 바꾸기
    const handleMainCategoryChange = (event) => {
        setMainCategory(event.target.value);
        setIsAllSelected(false);
    };
    //서브 카테고리 바꾸기
    const handleSubCategoryChange = (event) => {
        const value = parseInt(event.target.value);
        setSelectedSubCategories(prevSelectedSubCategories => {
            const currentSubCategories = prevSelectedSubCategories[mainCategory] || [];
            if (event.target.checked) {
                return {
                    ...prevSelectedSubCategories,
                    [mainCategory]: [...currentSubCategories, value]
                };
            } else {
                return {
                    ...prevSelectedSubCategories,
                    [mainCategory]: currentSubCategories.filter(subCategoryId => subCategoryId !== value)
                };
            }
        });
    };

    //소분류 전체 선택
    const handleSelectAllSubCategories = () => {
        if (mainCategory) {
            setSelectedSubCategories(prevSelectedSubCategories => {
                const allSubCategoryIds = filteredSubCategories.map(sub => sub.id);
                if (isAllSelected) {
                    return {
                        ...prevSelectedSubCategories,
                        [mainCategory]: []
                    };
                } else {
                    return {
                        ...prevSelectedSubCategories,
                        [mainCategory]: allSubCategoryIds
                    };
                }
            });
            setIsAllSelected(!isAllSelected);
            // 소분류 전체 선택 버튼 상태 업데이트
            if (!isAllSelected && filteredSubCategories.length === 1) {
                setIsGlobalSelectAll(false);
            }
        }
    };


    const handleGlobalSelectAllSubCategories = () => {
        setSelectedSubCategories(prevSelectedSubCategories => {
            const filteredAllSubCategoryIds = categories.flatMap(category => 
                category.subcategories.filter(sub => selectedStaff ? staffMenus[selectedStaff].includes(sub.id) : true)
                .map(sub => sub.id)
            );
            if (isGlobalSelectAll) {
                return {};
            } else {
                const newSelectedSubCategories = {};
                categories.forEach(category => {
                    newSelectedSubCategories[category.id] = category.subcategories
                        .filter(sub => selectedStaff ? staffMenus[selectedStaff].includes(sub.id) : true)
                        .map(sub => sub.id);
                });
                return newSelectedSubCategories;
            }
        });
        setIsGlobalSelectAll(!isGlobalSelectAll);
        setIsAllSelected(false);
    };

    //선택한 서브카테고리 데려오기
    const getSelectedSubCategories = () => {
        return Object.entries(selectedSubCategories).flatMap(([mainCatId, subCatIds]) => {
            const mainCategory = categories.find(category => category.id === parseInt(mainCatId));
            return subCatIds.map(subCatId => {
                const subCategory = mainCategory.subcategories.find(sub => sub.id === subCatId);
                return { mainCategoryName: mainCategory.name, subCategoryName: subCategory.name };
            });
        });
    };

    //선택한 서브카테고리 렌더링
    const renderSelectedSubCategories = () => {
        const selected = getSelectedSubCategories();
        const groupedByMainCategory = selected.reduce((acc, curr) => {
            if (!acc[curr.mainCategoryName]) {
                acc[curr.mainCategoryName] = [];
            }
            acc[curr.mainCategoryName].push(curr.subCategoryName);
            return acc;
        }, {});

        return Object.entries(groupedByMainCategory).map(([mainCategoryName, subCategoryNames]) => (
            <li key={mainCategoryName}>
                {mainCategoryName} - {subCategoryNames.join(', ')}
            </li>
        ));
    };



    return (
        <div className="select_menu_categori_padding">
            {/* 메뉴 선택하는 곳 */}
            <div className="select_menu_categori">
                <div className="all_select_menu_categori">
                    <button onClick={handleGlobalSelectAllSubCategories} className="all_select_menu_btn">
                        {isGlobalSelectAll ? '전체 삭제' : '전체 선택'}
                    </button>
                    <div className="select_menu_categori_in">
                        <div>
                            <select value={mainCategory} onChange={handleMainCategoryChange}>
                                <option value="">카테고리</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <button onClick={handleSelectAllSubCategories} disabled={!mainCategory}>
                                {isAllSelected ? '소분류 전체 삭제' : '소분류 전체 선택'}
                            </button>
                            {mainCategory && filteredSubCategories.map(subcategory => (
                                <div key={subcategory.id}>
                                    <input
                                        type="checkbox"
                                        id={`sub-${subcategory.id}`}
                                        value={subcategory.id}
                                        onChange={handleSubCategoryChange}
                                        checked={selectedSubCategories[mainCategory]?.includes(subcategory.id) || false}
                                    />
                                    <label htmlFor={`sub-${subcategory.id}`}>{subcategory.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* 결과 노출되는 div */}
                <div className="select_menu_result">
                    <ul>
                        {renderSelectedSubCategories()}
                    </ul>
                </div>
            </div>
                
            
           
        </div>
    )
}
