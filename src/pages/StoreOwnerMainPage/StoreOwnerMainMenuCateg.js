import React, { useRef, useState } from "react";
import './StoreOwnerMainMenuCateg.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Select from "react-select";

const options = [
    { value: "cut", label: "커트" },
    { value: "nomal-perm", label: "일반 펌" },
    { value: "dyeing", label: "염색" },
    { value: "design-perm", label: "디자인 펌" },
    { value: "etc", label: "기타" }
];

const MenuCategoryBox = ({ categoryName, menuList }) => {
    return (
        <div className="SOMCP-MenuCategoryBox">
            <div className="SOMCP-categoryName">{categoryName}</div>
            <div className="SOMCP-Box">
                {menuList.map((menu, index) => (
                    <div key={index} className="SOMCP-menuListBox">
                        <div className="SOMCP-MLB-PI">
                            <div className="SOMCP-categoryMenuPic"></div>
                            <div className="SOMCP-MLB-Info">
                                <div className="SOMCP-MLBI-name">{menu.name}</div>
                                <div className="SOMCP-MLBI-price">{menu.price}</div>
                                <div className="SOMCP-MLBI-info">{menu.info}</div>
                            </div>
                        </div>
                        <div className="SOMCP-MLBI-button">
                            <button className="SOMCP-MLBI-modify">수정하기</button>
                            <button className="SOMCP-MLBI-delete">삭제</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function StoreOwnerMainMenuCateg() {
    const [selectValue, setSelectValue] = useState('');
    const selectInputRef = useRef(null);

    const [menuName, setMenuName] = useState('');
    const [price, setPrice] = useState('');
    const [info, setInfo] = useState('');
    const [categName, setCategName] = useState('');
    const [menuLists, setMenuLists] = useState({
        cut: [
            { name: '여성 컷', price: '30,000원', info: '얼굴형에 맞는 헤어스타일을 추천' },
            { name: '남성 컷', price: '30,000원', info: '얼굴형에 맞는 헤어스타일을 추천' },
            { name: '학생 컷', price: '30,000원', info: '얼굴형에 맞는 헤어스타일을 추천' }
        ],
        "nomal-perm": [
            { name: '일반 펌', price: '50,000원', info: '자연스러운 펌 스타일' },
            { name: '볼륨 펌', price: '55,000원', info: '풍성한 볼륨을 살리는 펌' }
        ],
        dyeing: [
            { name: '염색', price: '70,000원', info: '자연스러운 컬러' },
            { name: '탈색', price: '80,000원', info: '밝은 컬러로 탈색' }
        ],
        "design-perm": [
            { name: '디자인 펌', price: '100,000원', info: '맞춤형 디자인 펌' }
        ],
        etc: []
    });

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }
    };

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
    };

    const [key, setKey] = useState('home');
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <div className="StoreOwnerMainMenuCateg">
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
                                            <div className="SOMMP-pic"
                                                 onClick={() => document.getElementById('fileInput1').click()}>
                                                {selectedImage ? (
                                                    <img src={selectedImage} alt="Selected"
                                                         className="SOMMP-pic-image"/>
                                                ) : (
                                                    <div className="SOMMPPicSelect"></div>
                                                )}
                                            </div>
                                            <input
                                                type="file"
                                                id="fileInput1"
                                                style={{display: 'none'}}
                                                onChange={handleImageChange}
                                                accept="image/*"
                                            />
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
                                        </div>
                                        <div className="SOMMP-menuInfo">
                                            <input
                                                onChange={onChange}
                                                name="menuName"
                                                value={menuName}
                                                placeholder="메뉴 제목"
                                                className="SOMMP-menuName"
                                            />
                                            <input
                                                onChange={onChange}
                                                name="price"
                                                value={price}
                                                type="number"
                                                placeholder="가격"
                                                className="SOMMP-menuPrice"
                                            />
                                            <textarea
                                                onChange={onChange}
                                                name="info"
                                                value={info}
                                                maxLength="28"
                                                placeholder="설명"
                                                className="SOMMP-info"
                                            />
                                            <button className="SOMMP-RegistButton">
                                                등록
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMCPline-30"></div>
                                <div className="CategBoxList">
                                    {options.map(option => (
                                        <MenuCategoryBox key={option.value} categoryName={option.label}
                                                         menuList={menuLists[option.value]}/>
                                        ))}
                                </div>
                                </div>
                            </div>
                    </Tab>
                    <Tab eventKey="Categ" title="카테고리 관리">
                        <div className="StoreOwnerMainCategPopup">
                            <div className="StoreOwnerMain-CategPopup">
                                <div className="SOMCPleft">
                                    <div className="SOMCP-categoryBox">
                                        <input
                                            onChange={onChange}
                                            name="categName"
                                            value={categName}
                                            placeholder="카테고리 제목"
                                            className="SOMCP-categName"
                                        />
                                        <button className="SOMCP-RegistButton">등록</button>
                                    </div>
                                    <div className="SOMCPline-3"></div>
                                    <div className="SOMCPCategList">
                                        <div className="SOMCP-CL-location-button"></div>
                                        <div className="SOMCP-CL-Name">커트</div>
                                        <div className="SOMCP-CL-button">
                                            <button className="SOMCP-CL-modify">수정하기</button>
                                            <button className="SOMCP-CL-delete">삭제</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMCPline-30"></div>
                                <div className="CategBoxList">
                                {options.map(option => (
                                    <MenuCategoryBox key={option.value} categoryName={option.label} menuList={menuLists[option.value]} />
                                ))}
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
}
