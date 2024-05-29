import './StoreOwnerMainMenuPopup.css';
import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import Select from "react-select";

let options = [
    {value: "cut", label: "커트"},
    {value: "nomal-perm", label: "일반 펌"},
    {value: "dyeing", label: "염색"},
    {value: "design-perm", label: "디자인 펌"},
    {value: "etc", label: "기타"}
]

export default function StoreOwnerMainMenuPopup() {
    const navigate = useNavigate()
    const goToSOMMP = () => {
        navigate("/StoreOwnerMainMenuPopup")
    }
    const goToSOMCP = () => {
        navigate("/StoreOwnerMainCategPopup")
    }

    const [selectValue, setSelectValue] = useState('')
    const selectInputRef = useRef(null);

    const [menuName, setMenuName] = React.useState()
    const [price, setPrice] = React.useState()
    const [info, setInfo] = React.useState()
    const onChange = (e) => {
        const { name, value, type } = e.target;
        if (name === 'menuName') {
            setMenuName(value);
        } else if (name === 'price' && type === 'number') {
            setPrice(value);
        } else if (name === 'info' && value.length <= 28) {
            setInfo(value);
        }
    }

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
                    <div className="SOMMPline-31">
                    </div>
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
                            <button className="SOMMP-RegistButton" onClick={goToSOMMP}>
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
                                    <button className="SOMMP-MLBI-modify" onClick={goToSOMMP}>수정하기</button>
                                    <button className="SOMMP-MLBI-delete" onClick={goToSOMMP}>삭제</button>
                                </div>
                            </div>
                            <div className="SOMMP-menuListBox">
                                <div className="SOMMP-MLB-PI">
                                    <div className="SOMMP-categoryMenuPic">
                                    </div>
                                    <div className="SOMMP-MLB-Info">
                                        <div className="SOMMP-MLBI-name">
                                            남성 컷
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
                                    <button className="SOMMP-MLBI-modify" onClick={goToSOMMP}>수정하기</button>
                                    <button className="SOMMP-MLBI-delete" onClick={goToSOMMP}>삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SOMMP-MenuCategoryBox">
                        <div className="SOMMP-categoryName">
                            일반 펌
                        </div>
                        <div className="SOMMP-Box">
                            <div className="SOMMP-menuListBox">
                                <div className="SOMMP-MLB-PI">
                                    <div className="SOMMP-categoryMenuPic">
                                    </div>
                                    <div className="SOMMP-MLB-Info">
                                        <div className="SOMMP-MLBI-name">
                                            볼룸 펌
                                        </div>
                                        <div className="SOMMP-MLBI-price">
                                            50,000원
                                        </div>
                                        <div className="SOMMP-MLBI-info">
                                            어깨기장 50,000 가슴기장 60,000
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMMP-MLBI-button">
                                    <button className="SOMMP-MLBI-modify" onClick={goToSOMMP}>수정하기</button>
                                    <button className="SOMMP-MLBI-delete" onClick={goToSOMMP}>삭제</button>
                                </div>
                            </div>
                            <div className="SOMMP-menuListBox">
                                <div className="SOMMP-MLB-PI">
                                    <div className="SOMMP-categoryMenuPic">
                                    </div>
                                    <div className="SOMMP-MLB-Info">
                                        <div className="SOMMP-MLBI-name">
                                            애즈 펌
                                        </div>
                                        <div className="SOMMP-MLBI-price">
                                            50,000원
                                        </div>
                                        <div className="SOMMP-MLBI-info">
                                            어깨기장 50,000 가슴기장 60,000
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMMP-MLBI-button">
                                    <button className="SOMMP-MLBI-modify" onClick={goToSOMMP}>수정하기</button>
                                    <button className="SOMMP-MLBI-delete" onClick={goToSOMMP}>삭제</button>
                                </div>
                            </div>
                            <div className="SOMMP-menuListBox">
                                <div className="SOMMP-MLB-PI">
                                    <div className="SOMMP-categoryMenuPic">
                                    </div>
                                    <div className="SOMMP-MLB-Info">
                                        <div className="SOMMP-MLBI-name">
                                            아이롱펌
                                        </div>
                                        <div className="SOMMP-MLBI-price">
                                            50,000원
                                        </div>
                                        <div className="SOMMP-MLBI-info">
                                            어깨기장 50,000 가슴기장 60,000
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMMP-MLBI-button">
                                    <button className="SOMMP-MLBI-modify" onClick={goToSOMMP}>수정하기</button>
                                    <button className="SOMMP-MLBI-delete" onClick={goToSOMMP}>삭제</button>
                                </div>
                            </div>
                            <div className="SOMMP-menuListBox">
                                <div className="SOMMP-MLB-PI">
                                    <div className="SOMMP-categoryMenuPic">
                                    </div>
                                    <div className="SOMMP-MLB-Info">
                                        <div className="SOMMP-MLBI-name">
                                            베이직 펌
                                        </div>
                                        <div className="SOMMP-MLBI-price">
                                            50,000원
                                        </div>
                                        <div className="SOMMP-MLBI-info">
                                            어깨기장 50,000 가슴기장 60,000
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMMP-MLBI-button">
                                    <button className="SOMMP-MLBI-modify" onClick={goToSOMMP}>수정하기</button>
                                    <button className="SOMMP-MLBI-delete" onClick={goToSOMMP}>삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SOMMP-MenuCategoryBox">
                        <div className="SOMMP-categoryName">
                            염색
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
                                    <button className="SOMMP-MLBI-modify" onClick={goToSOMMP}>수정하기</button>
                                    <button className="SOMMP-MLBI-delete" onClick={goToSOMMP}>삭제</button>
                                </div>
                            </div>
                            <div className="SOMMP-menuListBox">
                                <div className="SOMMP-MLB-PI">
                                    <div className="SOMMP-categoryMenuPic">
                                    </div>
                                    <div className="SOMMP-MLB-Info">
                                        <div className="SOMMP-MLBI-name">
                                            남성 컷
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
                                    <button className="SOMMP-MLBI-modify" onClick={goToSOMMP}>수정하기</button>
                                    <button className="SOMMP-MLBI-delete" onClick={goToSOMMP}>삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SOMMP-MenuCategoryBox">
                        <div className="SOMMP-categoryName">
                            디자인 펌
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
                                    <button className="SOMMP-MLBI-modify" onClick={goToSOMMP}>수정하기</button>
                                    <button className="SOMMP-MLBI-delete" onClick={goToSOMMP}>삭제</button>
                                </div>
                            </div>
                            <div className="SOMMP-menuListBox">
                                <div className="SOMMP-MLB-PI">
                                    <div className="SOMMP-categoryMenuPic">
                                    </div>
                                    <div className="SOMMP-MLB-Info">
                                        <div className="SOMMP-MLBI-name">
                                            남성 컷
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
                                    <button className="SOMMP-MLBI-modify" onClick={goToSOMMP}>수정하기</button>
                                    <button className="SOMMP-MLBI-delete" onClick={goToSOMMP}>삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SOMMP-MenuCategoryBox">
                        <div className="SOMMP-categoryName">
                            기타
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
                                    <button className="SOMMP-MLBI-modify" onClick={goToSOMMP}>수정하기</button>
                                    <button className="SOMMP-MLBI-delete" onClick={goToSOMMP}>삭제</button>
                                </div>
                            </div>
                            <div className="SOMMP-menuListBox">
                                <div className="SOMMP-MLB-PI">
                                    <div className="SOMMP-categoryMenuPic">
                                    </div>
                                    <div className="SOMMP-MLB-Info">
                                        <div className="SOMMP-MLBI-name">
                                            남성 컷
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
                                    <button className="SOMMP-MLBI-modify" onClick={goToSOMMP}>수정하기</button>
                                    <button className="SOMMP-MLBI-delete" onClick={goToSOMMP}>삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}