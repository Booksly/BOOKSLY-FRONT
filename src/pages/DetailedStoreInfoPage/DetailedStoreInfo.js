import searchbar from "../../assets/search_button.png";
import home from '../../assets/home_button.png';
import './DetailedStoreInfo.css'
import LoginAfterMainHeader from "../nav/LoginAfterMainHeader";
import {shops} from "../../data/detail-store/dummy";
import {useLocation, useNavigate} from "react-router-dom";

export default function DetailedStoreInfo() {
    const navigate = useNavigate();
    const location = useLocation();
    const goToNavigation = (shopId) => {
        navigate(`/Reservation?shopId=${shopId}`)
    }
    const queryParams = new URLSearchParams(location.search);
    const shopId = parseInt(queryParams.get('shopId'));
    console.log(shopId)

    // shops에서 shopId에 해당하는 가게 메뉴를 필터링
    const shop = shops.find(shop => shop.id === shopId);
    console.log(shop.id)

    if (shop == undefined) { //이거 뭔가 안되는 것 같아요
        return <div>해당 가게의 메뉴를 찾을 수 없습니다.</div>;
    }

    return (
        <div className="DetailedStoreInfo">
        <div className="DetailedStoreInfoBack">
            <LoginAfterMainHeader/>
            <div className="container">
                <div className="header-inner">
                    <div className="header-inner-left">
                        <div className="logo-goto-home">
                            <div className="image-13">
                            </div>
                        </div>
                        <div className="header-buttons">
                            <div className="nav-box">
                                <div className="frame-286">
                                    <span className="container-131">
                                        가게조회
                                    </span>
                                </div>
                            </div>
                            <div className="nav-box-1">
                                <span className="container-132">
                                당일예약
                                </span>
                            </div>
                            <div className="nav-box-2">
                                <span className="container-133">
                                예약조회
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="search-border">
                        <div className="icon-search">
                            <img className="vector" src={searchbar} alt={''}/>
                        </div>
                        <div className="input-search">
                            <span className="container-23">
                                어떤 가게를 찾으세요?
                            </span>
                        </div>
                    </div>
                    <div className="header-inner-right">
                        <div className="goto-mypage">
                            <div className="icon-home">
                                <img className="vector-1" src={home} alt={''}/>
                            </div>
                            <div className="go-mypage">
                                <span className="my-page">
                                    My Page
                                </span>
                            </div>
                        </div>
                        <div className="notice-todo">
                            <div className="icon-alect">
                                <div className="container-24">
                                </div>
                            </div>
                            <div className="user-id">
                                <span className="container-25">
                                    김송은
                                </span>
                            </div>
                        </div>
                        <div className="log-out-but">
                            <span className="container-26">
                                로그아웃
                            </span>
                        </div>
                    </div>
                </div>
                <div className="frame-storeInfo">
                    <div className="container-1" style={{ backgroundImage: `url(${shop.img})` }}>
                    </div>
                    <div className="frame-102">
                        <div className="container-2">
                            <div className="container-3">
                                [{shop.category}]
                            </div>
                            <span className="container-name">
                                {shop.name}
                            </span>
                            <div className="container-5">
                                {shop.address}
                            </div>
                            <div className="container-6">
                                {shop.rating}
                            </div>
                        </div>
                        <div className="container-7">
                                {shop.description}
                        </div>
                        <div className="frame-107">
                            <div className="frame-103">
                                <div className="DetailedStoreInfoIcon">
                                </div>
                                <div className="container-8">
                                    {shop.address} {shop.detailAddress}
                                </div>
                            </div>
                            <div className="frame-104">
                                <div className="container-9">
                                </div>
                                <div className="container-10">
                                    {shop.addressAlias}
                                </div>
                            </div>
                            <div className="frame-105">
                                <div className="container-11">
                                </div>
                                <p className="container-12">
                                    <span className="container-12-sub-17">{shop.phoneNumber} | </span>
                                    <a href="https://www.instagram.com/" target="_blank"
                                    rel="noopener noreferrer">인스타그램</a>
                                </p>

                            </div>
                            <div className="frame-106">
                                <div className="container-13">
                                </div>
                                <div className="container-14">
                                    {shop.workSchedule} ...
                                </div>
                            </div>
                        </div>
                        <div className="frame-283">
                            <button className="frame-reservationButton" onClick={()=>goToNavigation(shop.id)}>
                                <span className="container-15">
                                    예약하기
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="frame-115">
                    <div className="frame-menu">
                        <div className="container-boxTitle">
                            메뉴
                        </div>
                        <div className="frame-menuBox">
                            {shop.menuCategories.map((menuCategory, index) => (
                                <div key={index} className="container-menuBoxName">
                                    {menuCategory.categoryName}
                                    <div className="container-menuBox">
                                        {menuCategory.menus.map((menu,index) => (
                                            <div key={index} className="component-menu">
                                                <div className="rectangle-menu">
                                                </div>
                                                <div className="frame-menuNamePrice">
                                                    <div className="container-menuName">
                                                        {menu.name}
                                                    </div>
                                                    <span className="container-menuPipe">
                                                        |
                                                    </span>
                                                    <div className="container-menuPrice">
                                                        {menu.price}
                                                    </div>
                                                </div>
                                                <div className="frame-menuInfo">
                                                    <span className="container-menuInfo">
                                                        {menu.description}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="frame-employee">
                        <div className="container-boxTitle">
                            직원
                        </div>
                        <div className="frame-empBox">
                            {shop.employees.map((employee,index) =>(
                                <div key={index} className="component-emp">
                                    <div className="rectangle-emp">
                                    </div>
                                    <div className="frame-empNameRv">
                                        <div className="container-empName">
                                            {employee.name}
                                        </div>
                                        <span className="container-empPipe">
                                            |
                                        </span>
                                        <div className="container-empRv">
                                            리뷰 {employee.reviewNum}
                                        </div>
                                    </div>
                                    <div className="frame-empInfo">
                                        <span className="container-empInfo">
                                            {employee.description}
                                        </span>
                                    </div>
                                    </div>
                            ))}
                        </div>
                    </div>
                    <div className="frame-review">
                        <div className="frame-reviewTitle">
                            <span className="container-boxTitle">
                                리뷰
                            </span>
                            <div className="container-reviewPlus">
                                더보기 ...
                            </div>
                        </div>
                        <div className="frame-reviewBox">
                            <div className="container-menuBox">
                                {shop.reviews.map((review, index) => (
                                        <div key={index} className="component-review">
                                        <div className="rectangle-review">
                                        </div>
                                        <div className="frame-rvNameScore">
                                            <div className="container-rvName">
                                                {review.name}
                                            </div>
                                            <span className="container-rvPipe">
                                                |
                                            </span>
                                            <div className="container-rvScore">
                                                {review.rating}
                                            </div>
                                        </div>
                                        <div className="frame-rvMenuInfo">
                                            <div className="container-rvMenu">
                                                <span className="container-rvMenuTitle">
                                                    [{review.menuCategory}
                                                </span>
                                                -
                                                <span className="container-rvMenuName">
                                                    {review.menu}]
                                                </span>
                                            </div>
                                            <span className="container-rvInfo">
                                                {review.content}
                                            </span>
                                        </div>
                                    </div>
                                ))}     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}