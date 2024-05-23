import './MyHomeAllReserv.css'
import MyHomeLeftNavi from "../nav/MyHomeLeftNavi";
import MyHomeTopNavi from "../nav/MyHomeTopNavi";
import React, {useEffect, useState, useRef} from "react";
import Select from "react-select";

let options = [
    {value: "all", label: "전체"},
    {value: "hair", label: "헤어"},
    {value: "nail", label: "네일"},
    {value: "eye", label: "속눈썹 / 눈썹"},
    {value: "massage", label: "마사지"},
    {value: "makeup", label: "메이크업"},
    {value: "etc", label: "기타"}
]

export default function MyHomeAllReserv() {
    const [selectValue, setSelectValue] = useState('')
    const selectInputRef = useRef(null);

    return (
        <div className="MyHomeAllReserv">
        <div className="MyHomeAllReservBack">
            <MyHomeLeftNavi/>
            <div className="containerAll">
                <MyHomeTopNavi/>
                <div className="MyHomeAllReservContainer">
                    <div className="Content">
                        <div className="sortingBox">
                            <>
                                <Select
                                    className="sortBox"
                                    ref = {selectInputRef}
                                    onChange={(e) => {
                                        if (e) {
                                            setSelectValue(e.value);
                                        } else {
                                            setSelectValue("");
                                        }
                                    }}
                                    options={options}
                                    placeholder="전체"
                                />
                            </>
                        </div>

                        <div className="reservList">
                            <div className="currentReservBox">
                                <div className="storeInfoFrame">
                                    <div className="storeProfile">
                                    </div>
                                    <div className="storeInfoTime">
                                        <div className="storeInfoList">
                                            <div className="storeInfo">
                                                제이제이 헤어
                                            </div>
                                            <div className="storePartition">
                                                |
                                            </div>
                                            <div className="storeInfo">
                                                수원시 영통구 이의동
                                            </div>
                                            <div className="storePartition">
                                                |
                                            </div>
                                            <div className="storeInfo">
                                                헤어
                                            </div>
                                            <div className="storePartition">
                                                |
                                            </div>
                                            <div className="regularSign">
                                                ☆
                                            </div>
                                        </div>
                                        <div className="reservInfo">
                                            <div className="reservDate">
                                                24. 3. 4 월
                                            </div>
                                            <div className="reservTime">
                                                11:30
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="reservFrame">
                                    <div className="EmpBox">
                                        <div className="EmpNameTime">
                                            <div className="EmpName">
                                                김진영 디자이너 -
                                            </div>
                                            <div className="EmpTime">
                                                11:30 타임
                                            </div>
                                        </div>
                                        <div className="reservBoxLine">
                                        </div>
                                    </div>
                                    <div className="reservContent">
                                        <div className="reservMenuList">
                                            [가게주인이 적은 타이틀], 소분류메뉴, 소분류메뉴
                                        </div>
                                    </div>
                                    <div className="reservBoxLine">
                                    </div>
                                </div>
                                <div className="cancelButton">
                                    예약취소
                                </div>
                            </div>
                            <div className="cancelReservBox">
                                <div className="storeInfoFrame">
                                    <div className="storeProfile">
                                    </div>
                                    <div className="storeInfoTime">
                                        <div className="storeInfoList">
                                            <div className="storeInfo">
                                                제이제이 헤어
                                            </div>
                                            <div className="storePartition">
                                                |
                                            </div>
                                            <div className="storeInfo">
                                                수원시 영통구 이의동
                                            </div>
                                            <div className="storePartition">
                                                |
                                            </div>
                                            <div className="storeInfo">
                                                헤어
                                            </div>
                                            <div className="storePartition">
                                                |
                                            </div>
                                            <div className="regularSign">
                                                ☆
                                            </div>
                                        </div>
                                        <div className="reservInfo">
                                            <div className="reservDate">
                                                24. 3. 4 월
                                            </div>
                                            <div className="reservTime">
                                                10:30
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="reservFrame">
                                    <div className="EmpBox">
                                        <div className="EmpNameTime">
                                            <div className="cancelLine">
                                                <div className="EmpName">
                                                    김진영 디자이너 -
                                                </div>
                                                <div className="EmpTime">
                                                    10:30 타임
                                                </div>
                                            </div>
                                            <span className="cancelPartition">
                                                |
                                            </span>
                                            <div className="cancelReserv">
                                                취소된 예약
                                            </div>
                                        </div>
                                        <div className="reservBoxLine">
                                        </div>
                                    </div>
                                    <div className="reservContent">
                                        <div className="reservMenuList">
                                            [가게주인이 적은 타이틀], 소분류메뉴, 소분류메뉴
                                        </div>
                                    </div>
                                    <div className="reservBoxLine">
                                    </div>
                                </div>
                                <div className="cancelDelButton">
                                    취소내역삭제
                                </div>
                            </div>
                            <div className="currentReservBox">
                                <div className="storeInfoFrame">
                                    <div className="storeProfile">
                                    </div>
                                    <div className="storeInfoTime">
                                        <div className="storeInfoList">
                                            <div className="storeInfo">
                                                레이슨 네일샵
                                            </div>
                                            <div className="storePartition">
                                                |
                                            </div>
                                            <div className="storeInfo">
                                                서울시 마포구 창전동
                                            </div>
                                            <div className="storePartition">
                                                |
                                            </div>
                                            <div className="storeInfo">
                                                네일
                                            </div>
                                            <div className="storePartition">
                                                |
                                            </div>
                                            <div className="regularSign">
                                                ☆
                                            </div>
                                        </div>
                                        <div className="reservInfo">
                                            <div className="reservDate">
                                                24. 2. 20 화
                                            </div>
                                            <div className="reservTime">
                                                9:30
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="reservFrame">
                                    <div className="EmpBox">
                                        <div className="EmpNameTime">
                                            <div className="EmpName">
                                                노진영 디자이너 -
                                            </div>
                                            <div className="EmpTime">
                                                9:30 타임
                                            </div>
                                        </div>
                                        <div className="reservBoxLine">
                                        </div>
                                    </div>
                                    <div className="reservContent">
                                        <div className="reservMenuList">
                                            [가게주인이 적은 타이틀], 소분류메뉴, 소분류메뉴
                                        </div>
                                    </div>
                                    <div className="reservBoxLine">
                                    </div>
                                </div>
                                <div className="cancelButton">
                                    예약취소
                                </div>
                            </div>
                            <div className="review">
                                <div className="storeInfoFrame">
                                    <div className="storeProfile">
                                    </div>
                                    <div className="storeInfoTime">
                                        <div className="storeInfoList">
                                            <div className="storeInfo">
                                                레이디 헤어
                                            </div>
                                            <div className="storePartition">
                                                |
                                            </div>
                                            <div className="storeInfo">
                                                서울시 마포구 창전동
                                            </div>
                                            <div className="storePartition">
                                                |
                                            </div>
                                            <div className="storeInfo">
                                                네일
                                            </div>
                                            <div className="storePartition">
                                                |
                                            </div>
                                            <div className="regularSign">
                                                ☆
                                            </div>
                                        </div>
                                        <div className="reservInfo">
                                            <div className="reservDate">
                                                24. 2. 4 월
                                            </div>
                                            <div className="reservTime">
                                                19:30
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="reservFrame">
                                    <div className="EmpBox">
                                        <div className="EmpNameTime">
                                            <div className="EmpName">
                                                금용구 디자이너 -
                                            </div>
                                            <div className="EmpTime">
                                                19:30 타임
                                            </div>
                                            <div className="reviewPartition">
                                                |
                                            </div>
                                            <div className="reviewScore">
                                                4.5
                                            </div>
                                        </div>
                                        <div className="reservBoxLine">
                                        </div>
                                    </div>
                                    <div className="reservContent">
                                        <div className="reservMenuList">
                                            [가게주인이 적은 타이틀], 소분류메뉴, 소분류메뉴
                                        </div>
                                    </div>
                                    <div className="reservBoxLine">
                                    </div>
                                    <div className="reviewBox">
                                        <div className="reviewLine">
                                        </div>
                                        <div className="rvBoxIcon">
                                            <div className="rvBox">
                                                Review
                                            </div>
                                            <div className="rvDel">
                                                리뷰삭제
                                            </div>
                                        </div>
                                        <div className="reviewContent">
                                            <div className="rvContent">
                                                마지막 타임 예약이 취소되서 북슬리에 올라온 거 빠르게 잡았어요. <br/>
                                                원래는 이 시간에 미용실 가려면 이곳 저곳 전화해서 예약이 다찼는지 확인했어야 하는데, 비어있는 예약을 한번에 볼 수있어서
                                                좋았습니다. 금용구 디자이너님 감사합니다~~
                                            </div>
                                            <div className="rvPhoto">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="DelButton">
                                    예약내역삭제
                                </div>
                            </div>
                            <div className="pre-writing-review">
                                <div className="storeInfoFrame">
                                    <div className="storeProfile">
                                    </div>
                                    <div className="storeInfoTime">
                                        <div className="storeInfoList">
                                            <div className="storeInfo">
                                                제이제이 헤어
                                            </div>
                                            <div className="storePartition">
                                                |
                                            </div>
                                            <div className="storeInfo">
                                                수원시 영통구 이의동
                                            </div>
                                            <div className="storePartition">
                                                |
                                            </div>
                                            <div className="storeInfo">
                                                네일
                                            </div>
                                            <div className="storePartition">
                                                |
                                            </div>
                                            <div className="regularSign">
                                                ☆
                                            </div>
                                        </div>
                                        <div className="reservInfo">
                                            <div className="reservDate">
                                                23. 12. 28 월
                                            </div>
                                            <div className="reservTime">
                                                21:30
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="reservFrame">
                                    <div className="EmpBox">
                                        <div className="EmpNameTime">
                                            <div className="EmpName">
                                                김진영 디자이너 -
                                            </div>
                                            <div className="EmpTime">
                                                21:30 타임
                                            </div>
                                            <div className="reviewPartition">
                                                |
                                            </div>
                                            <div className="reviewCreateButton">
                                                리뷰작성
                                            </div>
                                        </div>
                                        <div className="reservBoxLine">
                                        </div>
                                    </div>
                                    <div className="reservContent">
                                        <div className="reservMenuList">
                                            [가게주인이 적은 타이틀], 소분류메뉴, 소분류메뉴
                                        </div>
                                    </div>
                                    <div className="reservBoxLine">
                                    </div>
                                    <div className="reviewBox">
                                        <div className="reviewLine">
                                        </div>
                                        <div className="rvBoxIcon">
                                            <div className="rvBox">
                                                Review
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="DelButton">
                                    예약내역삭제
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}