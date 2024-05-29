import './StoreOwnerMainCategPopup.css';
import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import Select from "react-select";

export default function StoreOwnerMainCategPopup() {
    const navigate = useNavigate()
    const goToSOMMP = () => {
        navigate("/StoreOwnerMainMenuPopup")
    }
    const goToSOMCP = () => {
        navigate("/StoreOwnerMainCategPopup")
    }

    const [categName, setCategName] = React.useState()
    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === 'categName') {
            setCategName(value);
        }
    }

    return (
        <div className="StoreOwnerMainCategPopup">
            <div className="StoreOwnerMain-CategPopup">
                <div className="SOMCPleft">
                    <div className="SOMCP-Button">
                        <button className="SOMCP-menubutton" onClick={goToSOMMP}>
                            메뉴 관리
                        </button>
                        <button className="SOMCP-categbutton" onClick={goToSOMCP}>
                            카테고리 관리
                        </button>
                    </div>
                    <div className="SOMCPline-31">
                    </div>
                    <div className="SOMCP-categoryBox">
                        <input onChange={onChange} name={categName} value={categName}
                               placeholder="카테고리 제목"
                               className="SOMCP-categName"/>
                        <button className="SOMCP-RegistButton" onClick={goToSOMCP}>
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
                                    <button className="SOMCP-MLBI-modify" onClick={goToSOMCP}>수정하기</button>
                                    <button className="SOMCP-MLBI-delete" onClick={goToSOMCP}>삭제</button>
                                </div>
                            </div>
                            <div className="SOMCP-menuListBox">
                                <div className="SOMCP-MLB-PI">
                                    <div className="SOMCP-categoryMenuPic">
                                    </div>
                                    <div className="SOMCP-MLB-Info">
                                        <div className="SOMCP-MLBI-name">
                                            남성 컷
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
                                    <button className="SOMCP-MLBI-modify" onClick={goToSOMCP}>수정하기</button>
                                    <button className="SOMCP-MLBI-delete" onClick={goToSOMCP}>삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SOMCP-MenuCategoryBox">
                        <div className="SOMCP-categoryName">
                            일반 펌
                        </div>
                        <div className="SOMCP-Box">
                            <div className="SOMCP-menuListBox">
                                <div className="SOMCP-MLB-PI">
                                    <div className="SOMCP-categoryMenuPic">
                                    </div>
                                    <div className="SOMCP-MLB-Info">
                                        <div className="SOMCP-MLBI-name">
                                            볼룸 펌
                                        </div>
                                        <div className="SOMCP-MLBI-price">
                                            50,000원
                                        </div>
                                        <div className="SOMCP-MLBI-info">
                                            어깨기장 50,000 가슴기장 60,000
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMCP-MLBI-button">
                                    <button className="SOMCP-MLBI-modify" onClick={goToSOMCP}>수정하기</button>
                                    <button className="SOMCP-MLBI-delete" onClick={goToSOMCP}>삭제</button>
                                </div>
                            </div>
                            <div className="SOMCP-menuListBox">
                                <div className="SOMCP-MLB-PI">
                                    <div className="SOMCP-categoryMenuPic">
                                    </div>
                                    <div className="SOMCP-MLB-Info">
                                        <div className="SOMCP-MLBI-name">
                                            애즈 펌
                                        </div>
                                        <div className="SOMCP-MLBI-price">
                                            50,000원
                                        </div>
                                        <div className="SOMCP-MLBI-info">
                                            어깨기장 50,000 가슴기장 60,000
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMCP-MLBI-button">
                                    <button className="SOMCP-MLBI-modify" onClick={goToSOMCP}>수정하기</button>
                                    <button className="SOMCP-MLBI-delete" onClick={goToSOMCP}>삭제</button>
                                </div>
                            </div>
                            <div className="SOMCP-menuListBox">
                                <div className="SOMCP-MLB-PI">
                                    <div className="SOMCP-categoryMenuPic">
                                    </div>
                                    <div className="SOMCP-MLB-Info">
                                        <div className="SOMCP-MLBI-name">
                                            아이롱펌
                                        </div>
                                        <div className="SOMCP-MLBI-price">
                                            50,000원
                                        </div>
                                        <div className="SOMCP-MLBI-info">
                                            어깨기장 50,000 가슴기장 60,000
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMCP-MLBI-button">
                                    <button className="SOMCP-MLBI-modify" onClick={goToSOMCP}>수정하기</button>
                                    <button className="SOMCP-MLBI-delete" onClick={goToSOMCP}>삭제</button>
                                </div>
                            </div>
                            <div className="SOMCP-menuListBox">
                                <div className="SOMCP-MLB-PI">
                                    <div className="SOMCP-categoryMenuPic">
                                    </div>
                                    <div className="SOMCP-MLB-Info">
                                        <div className="SOMCP-MLBI-name">
                                            베이직 펌
                                        </div>
                                        <div className="SOMCP-MLBI-price">
                                            50,000원
                                        </div>
                                        <div className="SOMCP-MLBI-info">
                                            어깨기장 50,000 가슴기장 60,000
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMCP-MLBI-button">
                                    <button className="SOMCP-MLBI-modify" onClick={goToSOMCP}>수정하기</button>
                                    <button className="SOMCP-MLBI-delete" onClick={goToSOMCP}>삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SOMCP-MenuCategoryBox">
                        <div className="SOMCP-categoryName">
                            염색
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
                                    <button className="SOMCP-MLBI-modify" onClick={goToSOMCP}>수정하기</button>
                                    <button className="SOMCP-MLBI-delete" onClick={goToSOMCP}>삭제</button>
                                </div>
                            </div>
                            <div className="SOMCP-menuListBox">
                                <div className="SOMCP-MLB-PI">
                                    <div className="SOMCP-categoryMenuPic">
                                    </div>
                                    <div className="SOMCP-MLB-Info">
                                        <div className="SOMCP-MLBI-name">
                                            남성 컷
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
                                    <button className="SOMCP-MLBI-modify" onClick={goToSOMCP}>수정하기</button>
                                    <button className="SOMCP-MLBI-delete" onClick={goToSOMCP}>삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SOMCP-MenuCategoryBox">
                        <div className="SOMCP-categoryName">
                            디자인 펌
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
                                    <button className="SOMCP-MLBI-modify" onClick={goToSOMCP}>수정하기</button>
                                    <button className="SOMCP-MLBI-delete" onClick={goToSOMCP}>삭제</button>
                                </div>
                            </div>
                            <div className="SOMCP-menuListBox">
                                <div className="SOMCP-MLB-PI">
                                    <div className="SOMCP-categoryMenuPic">
                                    </div>
                                    <div className="SOMCP-MLB-Info">
                                        <div className="SOMCP-MLBI-name">
                                            남성 컷
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
                                    <button className="SOMCP-MLBI-modify" onClick={goToSOMCP}>수정하기</button>
                                    <button className="SOMCP-MLBI-delete" onClick={goToSOMCP}>삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SOMCP-MenuCategoryBox">
                        <div className="SOMCP-categoryName">
                            기타
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
                                    <button className="SOMCP-MLBI-modify" onClick={goToSOMCP}>수정하기</button>
                                    <button className="SOMCP-MLBI-delete" onClick={goToSOMCP}>삭제</button>
                                </div>
                            </div>
                            <div className="SOMCP-menuListBox">
                                <div className="SOMCP-MLB-PI">
                                    <div className="SOMCP-categoryMenuPic">
                                    </div>
                                    <div className="SOMCP-MLB-Info">
                                        <div className="SOMCP-MLBI-name">
                                            남성 컷
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
                                    <button className="SOMCP-MLBI-modify" onClick={goToSOMCP}>수정하기</button>
                                    <button className="SOMCP-MLBI-delete" onClick={goToSOMCP}>삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}