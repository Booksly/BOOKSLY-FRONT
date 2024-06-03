import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

//가게주인 나브바 왼쪽 + 위
import StoreOwnerLeftNavi from "../nav/StoreOwnerLeftNavi";
import StoreOwnerTopNavi from "../nav/StoreOwnerTopNavi";

//css 임폴트
import './RegisterLastEvent.css'

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
export default function RegisterLastEvent() {

    return(
        <div className="StoreOwnerMain">
                <div className="StoreOwnerMainBack">
                    <StoreOwnerLeftNavi/>
                    <div className="SOMcontainerAll">
                        <StoreOwnerTopNavi/>
                        <RegisterLastEvent_contents/>
                    </div>
                </div>
        </div>
    )
}

//마감 임박 이벤트 등록/수정 내용들
function RegisterLastEvent_contents() {
    const [eventRate, seteventRate] = useState(""); //이벤트 할인율
    const [eventMent, seteventMent] = useState(""); //이벤트 문구
  
    //직원 정보, 선택한 직원 정보
    const data_staffs = ["제이원장", "심화 디자이너", "캡 디자이너", "제이슨 디자이너", "미우 디자이너"];
    const [selectedStaff, setSelectedStaff] = useState(null); 
    const handleStaffClick = (index) => {
        setSelectedStaff(index);
    };
    
    //페이지 이동 (네비케이트)
    const navigate = useNavigate();
    const goToStoreOwnerLogin = () => {
      navigate("/StoreOwnerLogIn");
    };

    return (
        <div className="Last_Event_options_padding">
            <div className="Last_Event_options">
                <div className="RegistReservation_title">마감 임박 이벤트 등록/수정</div>

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
                    <div className="RegistReservation_mid_title">이벤트 문구</div>
                    <input
                        className="RegistReservation_sametime_max_int_input"
                        value={eventMent}
                        type="text"
                        placeholder="지금 예약시 20% 할인 행사"
                        onChange={(e) => seteventMent(e.target.value)}
                    />
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
                
                <div className="btns_padding_For_row">
                    <button className="ReservationRegist_fin_btn" onClick={goToStoreOwnerLogin}>
                        초기화
                    </button>
                    <button className="ReservationRegist_fin_btn" onClick={goToStoreOwnerLogin}>
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
    };


    //대분류 소분류 전체선택
    // const handleGlobalSelectAllSubCategories = () => {
    //     setSelectedSubCategories(prevSelectedSubCategories => {
    //         const allSubCategoryIds = categories.flatMap(category => category.subcategories.map(sub => sub.id));
    //         if (isGlobalSelectAll) {
    //             return {};
    //         } else {
    //             const newSelectedSubCategories = {};
    //             categories.forEach(category => {
    //                 newSelectedSubCategories[category.id] = category.subcategories.map(sub => sub.id);
    //             });
    //             return newSelectedSubCategories;
    //         }
    //     });
    //     setIsGlobalSelectAll(!isGlobalSelectAll);
    // };

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