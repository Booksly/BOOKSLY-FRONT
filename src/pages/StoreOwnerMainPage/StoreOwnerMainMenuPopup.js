import './StoreOwnerMainMenuPopup.css';
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

let options = [
    { value: "cut", label: "커트" },
    { value: "nomal-perm", label: "일반 펌" },
    { value: "dyeing", label: "염색" },
    { value: "design-perm", label: "디자인 펌" },
    { value: "etc", label: "기타" }
];

export default function StoreOwnerMainMenuPopup() {
    const navigate = useNavigate();
    const goToSOMMP = () => {
        navigate("/StoreOwnerMainMenuPopup");
    };
    const goToSOMCP = () => {
        navigate("/StoreOwnerMainCategPopup");
    };

    const [selectValue, setSelectValue] = useState('');
    const selectInputRef = useRef(null);

    const [menuName, setMenuName] = React.useState();
    const [price, setPrice] = React.useState();
    const [info, setInfo] = React.useState();
    const onChange = (e) => {
        const { name, value, type } = e.target;
        if (name === 'menuName') {
            setMenuName(value);
        } else if (name === 'price' && type === 'number') {
            setPrice(value);
        } else if (name === 'info' && value.length <= 28) {
            setInfo(value);
        }
    };

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    return (
        <div className="StoreOwnerMainMenuPopup">
            <div className="StoreOwnerMain-MenuPopup">
                <div className="SOMMPleft">
                    <div className="SOMMP-Button">
                        <button className="SOMMP-menubutton" onClick={goToSOMMP}>
                            메뉴 관리
                        </button>
                        <button className="SOMMP-categbutton" onClick={goToSOMCP}>
                            카테고리 관리
                        </button>
                    </div>
                    <div className="SOMMPline-31"></div>
                    <div className="SOMMP-menuInfoBox">
                        <div className="SOMMP-menuInfoLeft">
                            <div className="SOMMP-pic" onClick={() => document.getElementById('fileInput1').click()}>
                                {selectedImage ? (
                                    <img src={selectedImage} alt="Selected" className="SOMMP-pic-image" />
                                ) : (
                                    <div className="SOMMPPicSelect"></div>
                                )}
                            </div>
                            <input
                                type="file"
                                id="fileInput1"
                                style={{ display: 'none' }}
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
                            <button className="SOMMP-RegistButton" onClick={goToSOMMP}>
                                등록
                            </button>
                        </div>
                    </div>
                </div>
                <div className="SOMMPline-30"></div>
                <div className="SOMMP-menulist">
                    {/* 메뉴 리스트 영역 */}
                </div>
            </div>
        </div>
    );
}
