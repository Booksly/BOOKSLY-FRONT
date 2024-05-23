import './MyHomeRegularStore.css'
import MyHomeLeftNavi from "../nav/MyHomeLeftNavi";
import MyHomeTopNavi from "../nav/MyHomeTopNavi";

export default function MyHomeRegularStore() {
    return (
        <div className="MyHomeRegularStore">
        <div className="MyHomeRegularStoreBack">
            <MyHomeLeftNavi/>
        <div className="containerAll">
            <MyHomeTopNavi/>
            <div className="MyHomeRegularStoreContainer">
                <div className="RegularStoreList">

                    <div className="RegularStoreContainer">
                        <div className="RegularStoreProfileInfo">
                            <div className="RegularStoreProfile">
                            </div>
                            <div className="RegularStoreInfo">
                                <div className="regularSign">
                                    ☆
                                </div>
                                <div className="StoreInfo">
                                    제이제이 헤어
                                </div>
                                <div className="partition">
                                    |
                                </div>
                                <div className="StoreInfo">
                                    수원시 영통구 이의동
                                </div>
                                <div className="partition">
                                    |
                                </div>
                                <div className="StoreInfo">
                                    헤어
                                </div>
                            </div>
                            <div className="ButtonFrame">
                                <div className="reservationButton">
                                    <span className="buttonName">
                                        예약하기
                                    </span>
                                </div>
                                <div className="InquiryButton">
                                    <span className="buttonName">
                                        가게조회
                                    </span>
                                </div>
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