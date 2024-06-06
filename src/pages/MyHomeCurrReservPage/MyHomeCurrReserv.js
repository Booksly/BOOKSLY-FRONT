import "./MyHomeCurrReserv.css";
import MyHomeLeftNavi from "../nav/MyHomeLeftNavi";
import MyHomeTopNavi from "../nav/MyHomeTopNavi";
import Select from "react-select";
import React, { useEffect, useState, useRef } from "react";

let options = [
  { value: "all", label: "전체" },
  { value: "hair", label: "헤어" },
  { value: "nail", label: "네일" },
  { value: "eye", label: "속눈썹 / 눈썹" },
  { value: "massage", label: "마사지" },
  { value: "makeup", label: "메이크업" },
  { value: "etc", label: "기타" },
];

export default function MyHomeCurrReserv() {
  const [selectValue, setSelectValue] = useState("");
  const selectInputRef = useRef(null);

  return (
    <div className="MyHomeCurrReserv">
      <div className="MyHomeCurrReservBack">
        <MyHomeLeftNavi />
        <div className="containerAll">
          <MyHomeTopNavi />
          <div className="MyHomeCurrReservContainer">
            <div className="Content">
              <div className="sortingBox">
                <>
                  <Select
                    className="sortBox"
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
                  />
                </>
              </div>
              <div className="reservList">
                <div className="currentReservBox">
                  <div className="storeInfoFrame">
                    <div className="storeProfile"></div>
                    <div className="storeInfoTime">
                      <div className="storeInfoList">
                        <div className="storeInfo">글래드뷰티</div>
                        <div className="storePartition">|</div>
                        <div className="storeInfo">수원시 영통구 광교산로</div>
                        <div className="storePartition">|</div>
                        <div className="storeInfo">메이크업</div>
                        <div className="storePartition">|</div>
                        <div className="regularSign">☆</div>
                      </div>
                      <div className="reservInfo">
                        <div className="reservDate">24. 6. 13 목</div>
                        <div className="reservTime">12:30</div>
                      </div>
                    </div>
                  </div>
                  <div className="reservFrame">
                    <div className="EmpBox">
                      <div className="EmpNameTime">
                        <div className="EmpName">김예은 -</div>
                        <div className="EmpTime">12:30 타임</div>
                      </div>
                      <div className="reservBoxLine"></div>
                    </div>
                    <div className="reservContent">
                      <div className="reservMenuList">
                        기본 메이크업, 웨딩 메이크업
                      </div>
                    </div>
                    <div className="reservBoxLine"></div>
                  </div>
                  <div className="cancelButton">예약취소</div>
                </div>
                <div className="currentReservBox">
                  <div className="storeInfoFrame">
                    <div className="storeProfile"></div>
                    <div className="storeInfoTime">
                      <div className="storeInfoList">
                        <div className="storeInfo">레이슨 네일샵</div>
                        <div className="storePartition">|</div>
                        <div className="storeInfo">서울시 마포구 창전동</div>
                        <div className="storePartition">|</div>
                        <div className="storeInfo">네일</div>
                        <div className="storePartition">|</div>
                        <div className="regularSign">☆</div>
                      </div>
                      <div className="reservInfo">
                        <div className="reservDate">24. 2. 20 화</div>
                        <div className="reservTime">9:30</div>
                      </div>
                    </div>
                  </div>
                  <div className="reservFrame">
                    <div className="EmpBox">
                      <div className="EmpNameTime">
                        <div className="EmpName">노진영 디자이너 -</div>
                        <div className="EmpTime">9:30 타임</div>
                      </div>
                      <div className="reservBoxLine"></div>
                    </div>
                    <div className="reservContent">
                      <div className="reservMenuList">
                        [가게주인이 적은 타이틀], 소분류메뉴, 소분류메뉴
                      </div>
                    </div>
                    <div className="reservBoxLine"></div>
                  </div>
                  <div className="cancelButton">예약취소</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
