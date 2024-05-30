import './StoreOwnerMainEmpPopup.css'
import React, {useState, useEffect} from "react";

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

export default function StoreOwnerMainEmpPopup() {

    const [text, setText] = useState({
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
        const { name, value, type } = e.target;
        if (name === 'menuName') {
            setEmpName(value);
        } else if (name === 'empInfo' && value.length <= 50) {
            setEmpInfo(value);
        } else {
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
    }

    const [empName, setEmpName] = React.useState()
    const [empInfo, setEmpInfo] = React.useState()
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

    const [mainCategory, setMainCategory] = useState('');
    const [subCategories, setSubCategories] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState({});
    const [isAllSelected, setIsAllSelected] = useState(false);
    const [isGlobalSelectAll, setIsGlobalSelectAll] = useState(false);

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

    const handleMainCategoryChange = (event) => {
        setMainCategory(event.target.value);
        setIsAllSelected(false);
    };

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

    const handleSelectAllSubCategories = () => {
        if (mainCategory) {
            setSelectedSubCategories(prevSelectedSubCategories => {
                const allSubCategoryIds = subCategories.map(sub => sub.id);
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
            const allSubCategoryIds = categories.flatMap(category => category.subcategories.map(sub => sub.id));
            if (isGlobalSelectAll) {
                return {};
            } else {
                const newSelectedSubCategories = {};
                categories.forEach(category => {
                    newSelectedSubCategories[category.id] = category.subcategories.map(sub => sub.id);
                });
                return newSelectedSubCategories;
            }
        });
        setIsGlobalSelectAll(!isGlobalSelectAll);
    };

    const getSelectedSubCategories = () => {
        return Object.entries(selectedSubCategories).flatMap(([mainCatId, subCatIds]) => {
            const mainCategory = categories.find(category => category.id === parseInt(mainCatId));
            return subCatIds.map(subCatId => {
                const subCategory = mainCategory.subcategories.find(sub => sub.id === subCatId);
                return { mainCategoryName: mainCategory.name, subCategoryName: subCategory.name };
            });
        });
    };

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
        <div className="StoreOwnerMainEmpPopup">
            <div className="SOMEP-left">
                <div className="SOMEPcontainer">
                    직원 등록 / 수정
                </div>
                <div className="SOMEPframe-598">
                    <div className="SOMEPframe-21">
                        <div className="SOMEP-profile-select">
                        </div>
                    </div>
                    <div className="SOMEPframe-592">
                            <input onChange={onChange} name="empName"
                            placeholder="직원 이름"
                            className="SOMEPframe-590"/>
                        <div className="SOMEPframe-589">
                            <textarea onChange={onChange} name={empInfo} value={empInfo}
                                      maxLength="50"
                                      placeholder="설명" className="SOMEPframe-591"/>
                            {/*<input onChange={onChange} name="empInfo"*/}
                            {/*placeholder="설명"*/}
                            {/*className="SOMEPframe-591"/>*/}
                            <div className="SOMEPcontainer-21">
                                0/50
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SOMEP-menuSelect">
                    <div className="SOMEPframe-593">
                        <button onClick={handleGlobalSelectAllSubCategories} className="SOMEPframe-120">
                            {isGlobalSelectAll ? '전체 삭제' : '전체 선택'}
                        </button>
                        <div className="SOMEP-menuCategSelect">
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
                                {mainCategory && subCategories.map(subcategory => (
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

                        {/*<div className="SOMEPgroup-111">*/}
                        {/*    <div className="SOMEPframe-132">*/}
                        {/*        <div className="SOMEPcontainer-23">*/}
                        {/*            카테고리*/}
                        {/*        </div>*/}
                        {/*        /!*<img className="group-89" src="assets/vectors/Group891_x2.svg" />*!/*/}
                        {/*    </div>*/}
                        {/*    <div className="SOMEPframe-133">*/}
                        {/*        <div className="SOMEPcontainer-24">*/}
                        {/*            소분류*/}
                        {/*        </div>*/}
                        {/*        /!*<img className="group-90" src="assets/vectors/Group902_x2.svg" />*!/*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="SOMEPframe-134">
                        <ul>
                            {renderSelectedSubCategories()}
                        </ul>
                    </div>
                </div>
                <div className="SOMEPframe-597">
                    <div className="SOMEP-time-time-space">
                        <div className="SOMEP-time-frame-254">
                            <div className="SOMEP-time-frame-251">
                                <div className="SOMEP-time-container-4">
                                    월
                                </div>
                            </div>
                            <div className="SOMEP-time-frame-253">
                                <input onChange={onChange} name="timeStartMon" value={timeStartMon}
                                       placeholder="10:00"
                                       className="SOMEP-time-frame-249"
                                />
                                <div className="SOMEP-time-container-6">
                                    ~
                                </div>
                                <input onChange={onChange} name="timeEndMon" value={timeEndMon}
                                       placeholder="20:00"
                                       className="SOMEP-time-frame-250"
                                />
                            </div>
                            <div className="SOMEP-time-frame-319">
                                <div className="SOMEP-time-container-8">
                                    휴무
                                </div>
                            </div>
                        </div>
                        <div className="SOMEP-time-frame-551">
                            <div className="SOMEP-time-frame-251">
                                <div className="SOMEP-time-container-4">
                                    화
                                </div>
                            </div>
                            <div className="SOMEP-time-frame-253">
                                <input onChange={onChange} name="timeStartTue" value={timeStartTue}
                                       placeholder="10:00"
                                       className="SOMEP-time-frame-249"
                                />
                                <div className="SOMEP-time-container-6">
                                    ~
                                </div>
                                <input onChange={onChange} name="timeEndTue" value={timeEndTue}
                                       placeholder="20:00"
                                       className="SOMEP-time-frame-250"
                                />
                            </div>
                            <div className="SOMEP-time-frame-319">
                                <div className="SOMEP-time-container-8">
                                    휴무
                                </div>
                            </div>
                        </div>
                        <div className="SOMEP-time-frame-254">
                            <div className="SOMEP-time-frame-251">
                                <div className="SOMEP-time-container-4">
                                    수
                                </div>
                            </div>
                            <div className="SOMEP-time-frame-253">
                                <input onChange={onChange} name="timeStartWed" value={timeStartWed}
                                       placeholder="10:00"
                                       className="SOMEP-time-frame-249"
                                />
                                <div className="SOMEP-time-container-6">
                                    ~
                                </div>
                                <input onChange={onChange} name="timeEndWed" value={timeEndWed}
                                       placeholder="20:00"
                                       className="SOMEP-time-frame-250"
                                />
                            </div>
                            <div className="SOMEP-time-frame-319">
                                <div className="SOMEP-time-container-8">
                                    휴무
                                </div>
                            </div>
                        </div>
                        <div className="SOMEP-time-frame-254">
                            <div className="SOMEP-time-frame-251">
                                <div className="SOMEP-time-container-4">
                                    목
                                </div>
                            </div>
                            <div className="SOMEP-time-frame-253">
                                <input onChange={onChange} name="timeStartThu" value={timeStartThu}
                                       placeholder="10:00"
                                       className="SOMEP-time-frame-249"
                                />
                                <div className="SOMEP-time-container-6">
                                    ~
                                </div>
                                <input onChange={onChange} name="timeEndThu" value={timeEndThu}
                                       placeholder="20:00"
                                       className="SOMEP-time-frame-250"
                                />
                            </div>
                            <div className="SOMEP-time-frame-319">
                                <div className="SOMEP-time-container-8">
                                    휴무
                                </div>
                            </div>
                        </div>
                        <div className="SOMEP-time-frame-254">
                            <div className="SOMEP-time-frame-251">
                                <div className="SOMEP-time-container-4">
                                    금
                                </div>
                            </div>
                            <div className="SOMEP-time-frame-253">
                                <input onChange={onChange} name="timeStartFri" value={timeStartFri}
                                       placeholder="10:00"
                                       className="SOMEP-time-frame-249"
                                />
                                <div className="SOMEP-time-container-6">
                                    ~
                                </div>
                                <input onChange={onChange} name="timeEndFri" value={timeEndFri}
                                       placeholder="20:00"
                                       className="SOMEP-time-frame-250"
                                />
                            </div>
                            <div className="SOMEP-time-frame-319">
                                <div className="SOMEP-time-container-8">
                                    휴무
                                </div>
                            </div>
                        </div>
                        <div className="SOMEP-time-frame-254">
                            <div className="SOMEP-time-frame-251">
                                <div className="SOMEP-time-container-4">
                                    토
                                </div>
                            </div>
                            <div className="SOMEP-time-frame-253">
                                <input onChange={onChange} name="timeStartSat" value={timeStartSat}
                                       placeholder="10:00"
                                       className="SOMEP-time-frame-249"
                                />
                                <div className="SOMEP-time-container-6">
                                    ~
                                </div>
                                <input onChange={onChange} name="timeEndSat" value={timeEndSat}
                                       placeholder="20:00"
                                       className="SOMEP-time-frame-250"
                                />
                            </div>
                            <div className="SOMEP-time-frame-319">
                                <div className="SOMEP-time-container-8">
                                    휴무
                                </div>
                            </div>
                        </div>
                        <div className="SOMEP-time-frame-254">
                            <div className="SOMEP-time-frame-251">
                                <div className="SOMEP-time-container-4">
                                    일
                                </div>
                            </div>
                            <div className="SOMEP-time-frame-253">
                                <input onChange={onChange} name="timeStartSun" value={timeStartSun}
                                       placeholder="10:00"
                                       className="SOMEP-time-frame-249"
                                />
                                <div className="SOMEP-time-container-6">
                                    ~
                                </div>
                                <input onChange={onChange} name="timeEndSun" value={timeEndSun}
                                       placeholder="20:00"
                                       className="SOMEP-time-frame-250"
                                />
                            </div>
                            <div className="SOMEP-time-frame-319">
                                <div className="SOMEP-time-container-8">
                                    휴무
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="SOMEPgroup-110">*/}
                    {/*    <div className="SOMEPframe-254">*/}
                    {/*        <div className="SOMEPframe-2512">*/}
                    {/*            <div className="SOMEPcontainer-26">*/}
                    {/*                월*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="SOMEPframe-2532">*/}
                    {/*            <div className="SOMEPframe-2492">*/}
                    {/*                <div className="SOMEPcontainer-27">*/}
                    {/*                    10:00*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="SOMEPcontainer-28">*/}
                    {/*                ~*/}
                    {/*            </div>*/}
                    {/*            <div className="SOMEPframe-2502">*/}
                    {/*                <div className="SOMEPcontainer-29">*/}
                    {/*                    20:00*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="SOMEPframe-3192">*/}
                    {/*            <div className="SOMEPcontainer-30">*/}
                    {/*                휴무*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="SOMEPframe-255">*/}
                    {/*        <div className="SOMEPframe-2513">*/}
                    {/*    <div className="SOMEPcontainer-31">*/}
                    {/*      화*/}
                    {/*    </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="SOMEPframe-2533">*/}
                    {/*            <div className="SOMEPframe-2493">*/}
                    {/*          <div className="SOMEPcontainer-32">*/}
                    {/*            10:00*/}
                    {/*          </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="SOMEPcontainer-33">*/}
                    {/*                ~*/}
                    {/*            </div>*/}
                    {/*            <div className="SOMEPframe-2503">*/}
                    {/*          <div className="SOMEPcontainer-34">*/}
                    {/*            20:00*/}
                    {/*          </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="SOMEPframe-3193">*/}
                    {/*        <div className="SOMEPcontainer-35">*/}
                    {/*          휴무*/}
                    {/*        </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="SOMEPframe-256">*/}
                    {/*        <div className="SOMEPframe-2514">*/}
                    {/*        <div className="SOMEPcontainer-36">*/}
                    {/*          수*/}
                    {/*        </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="SOMEPframe-2534">*/}
                    {/*            <div className="SOMEPframe-2494">*/}
                    {/*          <div className="SOMEPcontainer-37">*/}
                    {/*            10:00*/}
                    {/*          </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="SOMEPcontainer-38">*/}
                    {/*                ~*/}
                    {/*            </div>*/}
                    {/*            <div className="SOMEPframe-2504">*/}
                    {/*          <div className="SOMEPcontainer-39">*/}
                    {/*            20:00*/}
                    {/*          </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="SOMEPframe-3194">*/}
                    {/*    <div className="SOMEPcontainer-40">*/}
                    {/*      휴무*/}
                    {/*    </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="SOMEPframe-257">*/}
                    {/*        <div className="SOMEPframe-2515">*/}
                    {/*        <div className="SOMEPcontainer-41">*/}
                    {/*          목*/}
                    {/*        </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="SOMEPframe-2535">*/}
                    {/*            <div className="SOMEPframe-2495">*/}
                    {/*          <div className="SOMEPcontainer-42">*/}
                    {/*            :*/}
                    {/*          </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="SOMEPcontainer-43">*/}
                    {/*                ~*/}
                    {/*            </div>*/}
                    {/*            <div className="SOMEPframe-2505">*/}
                    {/*          <div className="SOMEPcontainer-44">*/}
                    {/*            :*/}
                    {/*          </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="SOMEPframe-3195">*/}
                    {/*        <div className="SOMEPcontainer-45">*/}
                    {/*          휴무*/}
                    {/*        </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="SOMEPframe-258">*/}
                    {/*        <div className="SOMEPframe-2516">*/}
                    {/*        <div className="SOMEPcontainer-46">*/}
                    {/*          금*/}
                    {/*        </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="SOMEPframe-2536">*/}
                    {/*            <div className="SOMEPframe-2496">*/}
                    {/*          <div className="SOMEPcontainer-47">*/}
                    {/*            10:00*/}
                    {/*          </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="SOMEPcontainer-48">*/}
                    {/*                ~*/}
                    {/*            </div>*/}
                    {/*            <div className="SOMEPframe-2506">*/}
                    {/*          <div className="SOMEPcontainer-49">*/}
                    {/*            20:00*/}
                    {/*          </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="SOMEPframe-3196">*/}
                    {/*        <div className="SOMEPcontainer-50">*/}
                    {/*          휴무*/}
                    {/*        </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="SOMEPframe-259">*/}
                    {/*        <div className="SOMEPframe-251">*/}
                    {/*        <div className="SOMEPcontainer-1">*/}
                    {/*          토*/}
                    {/*        </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="SOMEPframe-253">*/}
                    {/*            <div className="SOMEPframe-249">*/}
                    {/*          <div className="SOMEPcontainer-2">*/}
                    {/*            10:00*/}
                    {/*          </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="SOMEPcontainer-3">*/}
                    {/*                ~*/}
                    {/*            </div>*/}
                    {/*            <div className="SOMEPframe-250">*/}
                    {/*          <div className="SOMEPcontainer-4">*/}
                    {/*            20:00*/}
                    {/*          </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="SOMEPframe-319">*/}
                    {/*        <div className="SOMEPcontainer-5">*/}
                    {/*          휴무*/}
                    {/*        </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="SOMEPframe-260">*/}
                    {/*        <div className="SOMEPframe-2511">*/}
                    {/*        <div className="SOMEPcontainer-6">*/}
                    {/*          일*/}
                    {/*        </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="SOMEPframe-2531">*/}
                    {/*            <div className="SOMEPframe-2491">*/}
                    {/*          <div className="SOMEPcontainer-7">*/}
                    {/*            10:00*/}
                    {/*          </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="SOMEPcontainer-8">*/}
                    {/*                ~*/}
                    {/*            </div>*/}
                    {/*            <div className="SOMEPframe-2501">*/}
                    {/*          <div className="SOMEPcontainer-9">*/}
                    {/*            20:00*/}
                    {/*          </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="SOMEPframe-3191">*/}
                    {/*        <div className="SOMEPcontainer-10">*/}
                    {/*          휴무*/}
                    {/*     </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <button className="SOMEPframe-248">
                        등록
                    </button>
                </div>
            </div>
            <div className="SOMEPline-23">
            </div>
            <div className="SOMEPframe-602">
                <div className="SOMEPframe-595">
                    <div className="SOMEPframe-594">
                        <div className="SOMEPrectangle-108">
                        </div>
                        <div className="SOMEP-MdDl">
                            <button className="SOMEP-modify">
                                수정하기
                            </button>
                            <button className="SOMEP-delete">
                                삭제
                            </button>
                        </div>
                    </div>
                    <div className="SOMEP-empInfoBox">
                        <div className="SOMEP-EIB-name">
                            제이 원장
                        </div>
                        <div className="SOMEP-EIB-Info">
                            수원 재방률 1위 / 남성펌 전문 디자이너 / 강남 대형 체인 헤어살롱 출신!
                            1:1로 꼼꼼하게 봐드립니다
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}