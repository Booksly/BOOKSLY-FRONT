import './ShopOwnerTopNavi.css'

export default function ShopOwnerTopNavi() {
    return (
        <div className="back">
        <div className="ShopOwnerTopNavi">
        <div className="shop-top-navi">
            <div className="shop-top-navi-top">
                <div className="ShopTopNaviEtc">
                    <div className="container-3">
                        가게 추가 등록
                    </div>
                    <div className="alarm">
                        <div className="alarm-button">
                        </div>
                        <div className="container-2">
                            아이디
                        </div>
                    </div>
                    <div className="container-1">
                        로그아웃
                    </div>
                </div>
            </div>
            <div className="shop-top-navi-bottom-1">
                <div className="shop-top-navi-member-info">
                    <div className="shop-top-navi-profile">
                        <div className="profile-select">
                        </div>
                        <div className="profile">
                        </div>
                    </div>
                    <div className="member-info">
                        <div className="shop-top-navi-id">
                            <span className="container-7">
                                아이디
                            </span>
                            <div className="container-8">
                                정보 수정
                            </div>
                        </div>
                        <div className="numerical-summary">
                            <div className="visitors">
                                <div className="container-9">
                                    방문자수
                                </div>
                                <p className="container-4">
                                    <span className="container-4-sub-0"></span><span></span>
                                </p>
                            </div>
                            <div className="today-visitors">
                                <span className="container-10">
                                    오늘 방문자수
                                </span>
                                <span className="container-5">
                                    73
                                </span>
                            </div>
                            <div className="regular-customer-num">
                                <span className="container-11">
                                    단골손님
                                </span>
                                <span className="container-6">
                                    185
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shop-top-navi-bottom">
                    <span className="container">
                        제이제이 헤어
                    </span>
                    <div className="another-shop">
                        {/*<img className="vector" src="assets/vectors/Vector279_x2.svg" />*/}
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}