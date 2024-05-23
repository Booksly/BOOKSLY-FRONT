import './MyHomeCurrReserv.css'
import MyHomeLeftNavi from "../nav/MyHomeLeftNavi";
import MyHomeTopNavi from "../nav/MyHomeTopNavi";

export default function MyHomeCurrReserv() {
    return (
        <div className="MyHomeCurrReserv">
            <div className="MyHomeCurrReservBack">
                <MyHomeLeftNavi/>
                <div className="containerAll">
                    <MyHomeTopNavi/>
                    <div className="MyHomeCurrReservContainer">
                        <div className="Content">
                            <div className="sortingBox">
                                <div className="container-sortBox">
                                    <div className="sortName">
                                        전체
                                    </div>
                                    <div className="sortButton"/>
                                </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}