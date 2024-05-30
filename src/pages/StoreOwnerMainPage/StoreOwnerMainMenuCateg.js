import React, {useRef} from "react";
import './StoreOwnerMainMenuCateg.css'
import {useState} from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Select from "react-select";

let options = [
    {value: "cut", label: "커트"},
    {value: "nomal-perm", label: "일반 펌"},
    {value: "dyeing", label: "염색"},
    {value: "design-perm", label: "디자인 펌"},
    {value: "etc", label: "기타"}
]

export default function StoreOwnerMainMenuCateg() {
    const [selectValue, setSelectValue] = useState('')
    const selectInputRef = useRef(null);

    const [menuName, setMenuName] = React.useState()
    const [price, setPrice] = React.useState()
    const [info, setInfo] = React.useState()
    const [categName, setCategName] = React.useState()
    const onChange = (e) => {
        const { name, value, type } = e.target;
        if (name === 'menuName') {
            setMenuName(value);
        } else if (name === 'price' && type === 'number') {
            setPrice(value);
        } else if (name === 'info' && value.length <= 28) {
            setInfo(value);
        } else if (name === 'categName') {
            setCategName(value);
        }
    }

    const [key, setKey] = useState('home');
    const data_menulist = [
        {

        }
    ]

    return (
        <>
            <div className="StoreOwnerMainMenuPopup">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    transition={false}
                >
                    <Tab eventKey="home" title="메뉴 관리">
                        <div className="StoreOwnerMainMenuPopup">
                            <div className="StoreOwnerMain-MenuPopup">
                                <div className="SOMMPleft">
                                    <div className="SOMMP-menuInfoBox">
                                        <div className="SOMMP-menuInfoLeft">
                                            <div className="SOMMP-pic">
                                                <div className="SOMMPPicSelect">
                                                </div>
                                            </div>
                                            <>
                                                <Select
                                                    ref={selectInputRef}
                                                    onChange={(e) => {
                                                        if (e) {
                                                            setSelectValue(e.value);
                                                        } else {
                                                            setSelectValue("");
                                                        }
                                                    }}
                                                    options={options}
                                                    placeholder="전체"
                                                    className="custom-select"
                                                />
                                            </>
                                        </div>
                                        <div className="SOMMP-menuInfo">
                                            <input onChange={onChange} name={menuName} value={menuName}
                                                   placeholder="메뉴 제목"
                                                   className="SOMMP-menuName"/>
                                            <input onChange={onChange} name={price} value={price}
                                                   type="number"
                                                   placeholder="가격"
                                                   className="SOMMP-menuPrice"/>
                                            <textarea onChange={onChange} name={info} value={info}
                                                      maxLength="28"
                                                      placeholder="설명" className="SOMMP-info"/>
                                            <button className="SOMMP-RegistButton">
                                                등록
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMMPline-30">
                                </div>
                                <div className="SOMMP-menulist">
                                    <div className="SOMMP-MenuCategoryBox">
                                        <div className="SOMMP-categoryName">
                                            커트
                                        </div>
                                        <div className="SOMMP-Box">
                                            <div className="SOMMP-menuListBox">
                                                <div className="SOMMP-MLB-PI">
                                                    <div className="SOMMP-categoryMenuPic">
                                                    </div>
                                                    <div className="SOMMP-MLB-Info">
                                                        <div className="SOMMP-MLBI-name">
                                                            여성 컷
                                                        </div>
                                                        <div className="SOMMP-MLBI-price">
                                                            30,000원
                                                        </div>
                                                        <div className="SOMMP-MLBI-info">
                                                            얼굴형에 맞는 헤어스타일을 추천
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="SOMMP-MLBI-button">
                                                    <button className="SOMMP-MLBI-modify">수정하기
                                                    </button>
                                                    <button className="SOMMP-MLBI-delete">삭제
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="Categ" title="카테고리 관리">
                        <div className="StoreOwnerMainCategPopup">
                            <div className="StoreOwnerMain-CategPopup">
                                <div className="SOMCPleft">
                                    <div className="SOMCP-categoryBox">
                                        <input onChange={onChange} name={categName} value={categName}
                                               placeholder="카테고리 제목"
                                               className="SOMCP-categName"/>
                                        <button className="SOMCP-RegistButton">
                                            등록
                                        </button>
                                    </div>
                                    <div className="SOMCPline-3">
                                    </div>
                                    <div className="SOMCPCategList">
                                        <div className="SOMCP-CL-location-button">
                                            {/*<img className="frame-446" src="assets/vectors/Frame44614_x2.svg"/>*/}
                                            {/*<img className="frame-137" src="assets/vectors/Frame1379_x2.svg"/>*/}
                                        </div>
                                        <div className="SOMCP-CL-Name">
                                            커트
                                        </div>
                                        <div className="SOMCP-CL-button">
                                            <button className="SOMCP-CL-modify">
                                                수정하기
                                            </button>
                                            <button className="SOMCP-CL-delete">
                                                삭제
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMCPline-30">
                                </div>
                                <div className="SOMCP-menulist">
                                    <div className="SOMCP-MenuCategoryBox">
                                        <div className="SOMCP-categoryName">
                                            커트
                                        </div>
                                        <div className="SOMCP-Box">
                                            <div className="SOMCP-menuListBox">
                                                <div className="SOMCP-MLB-PI">
                                                    <div className="SOMCP-categoryMenuPic">
                                                    </div>
                                                    <div className="SOMCP-MLB-Info">
                                                        <div className="SOMCP-MLBI-name">
                                                            여성 컷
                                                        </div>
                                                        <div className="SOMCP-MLBI-price">
                                                            30,000원
                                                        </div>
                                                        <div className="SOMCP-MLBI-info">
                                                            얼굴형에 맞는 헤어스타일을 추천
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="SOMCP-MLBI-button">
                                                    <button className="SOMCP-MLBI-modify">수정하기
                                                    </button>
                                                    <button className="SOMCP-MLBI-delete">삭제
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>

            </div>
        </>
)
}