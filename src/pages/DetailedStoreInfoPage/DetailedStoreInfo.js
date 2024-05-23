import searchbar from "../../assets/search_button.png";
import home from '../../assets/home_button.png';
import './DetailedStoreInfo.css'
import LoginAfterMainHeader from "../nav/LoginAfterMainHeader";
import {useNavigate} from "react-router-dom";

export default function DetailedStoreInfo() {
    const navigate = useNavigate()
    const goToNavigation = () => {
        navigate("/Reservation")
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
                                김아무개
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
                    <div className="container-1">
                    </div>
                    <div className="frame-102">
                        <div className="container-2">
                            <div className="container-3">
                                [헤어]
                            </div>
                            <span className="container-name">
                                제이제이 헤어
                            </span>
                            <div className="container-5">
                                수원시 영통수 이의동
                            </div>
                            <div className="container-6">
                                4.0
                            </div>
                        </div>
                        <div className="container-7">
                            고객 맞춤 프리미엄 서비스를 제공하는 제이제이 헤어입니다.
                        </div>
                        <div className="frame-107">
                            <div className="frame-103">
                                <div className="DetailedStoreInfoIcon">
                                </div>
                                <div className="container-8">
                                    경기도 수원시 영통구 광교산로 154-42 206호
                                </div>
                            </div>
                            <div className="frame-104">
                                <div className="container-9">
                                </div>
                                <div className="container-10">
                                    경기대학교 후문사거리
                                </div>
                            </div>
                            <div className="frame-105">
                                <div className="container-11">
                                </div>
                                <p className="container-12">
                                    <span className="container-12-sub-17">031-249-9114 | </span>
                                    <a href="https://www.instagram.com/" target="_blank"
                                    rel="noopener noreferrer">인스타그램</a>
                                </p>

                            </div>
                            <div className="frame-106">
                                <div className="container-13">
                                </div>
                                <div className="container-14">
                                    월 10:00 - 20:00 ...
                                </div>
                            </div>
                        </div>
                        <div className="frame-283">
                            <button className="frame-reservationButton" onClick={goToNavigation}>
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
                            <div className="container-menuBoxName">
                                커트
                            </div>
                            <div className="container-menuBox">
                                <div className="component-menu">
                                    <div className="rectangle-menu">
                                    </div>
                                    <div className="frame-menuNamePrice">
                                        <div className="container-menuName">
                                            여성커트
                                        </div>
                                        <span className="container-menuPipe">
                                             |
                                       </span>
                                        <div className="container-menuPrice">
                                            30,000
                                        </div>
                                    </div>
                                    <div className="frame-menuInfo">
                                      <span className="container-menuInfo">
                                        얼굴에 맞는 헤어스타일로 잘라 드립니다.
                                      </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-menuBox">
                            <div className="container-menuBoxName">
                                펌
                            </div>
                            <div className="container-menuBox">
                                <div className="component-menu">
                                    <div className="rectangle-menu">
                                    </div>
                                    <div className="frame-menuNamePrice">
                                        <div className="container-menuName">
                                            여성펌
                                        </div>
                                        <span className="container-menuPipe">
                                            |
                                        </span>
                                        <div className="container-menuPrice">
                                            30,000
                                        </div>
                                    </div>
                                    <div className="frame-menuInfo">
                                      <span className="container-menuInfo">
                                        얼굴에 맞는 헤어스타일로 잘라 드립니다.
                                      </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="frame-menuBox">
                            <div className="container-menuBoxName">
                                염색
                            </div>
                            <div className="container-menuBox">
                                <div className="component-menu">
                                    <div className="rectangle-menu">
                                    </div>
                                    <div className="frame-menuNamePrice">
                                        <div className="container-menuName">
                                            탈색
                                        </div>
                                        <span className="container-menuPipe">
                                            |
                                        </span>
                                        <div className="container-menuPrice">
                                            20,000
                                        </div>
                                    </div>
                                    <div className="frame-menuInfo">
                                      <span className="container-menuInfo">
                                        얼굴에 맞는 헤어스타일로 잘라 드립니다.
                                      </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-employee">
                        <div className="container-boxTitle">
                            직원
                        </div>
                        <div className="frame-empBox">
                            <div className="component-emp">
                                <div className="rectangle-emp">
                                </div>
                                <div className="frame-empNameRv">
                                    <div className="container-empName">
                                        제이 원장
                                    </div>
                                    <span className="container-empPipe">
                                      |
                                    </span>
                                    <div className="container-empRv">
                                        리뷰 302건
                                    </div>
                                </div>
                                <div className="frame-empInfo">
                                    <span className="container-empInfo">
                                      수원 재방문률 1위 / 남성 전문 헤어 디자이너
                                    </span>
                                </div>
                            </div>
                            <div className="component-emp">
                                <div className="rectangle-emp">
                                </div>
                                <div className="frame-empNameRv">
                                    <div className="container-empName">
                                        심화 디자이너
                                    </div>
                                    <span className="container-empPipe">
                                      |
                                    </span>
                                    <div className="container-empRv">
                                        리뷰 241건
                                    </div>
                                </div>
                                <div className="frame-empInfo">
                                    <span className="container-empInfo">
                                      수원 재방문률 1위 / 여성 전문 헤어 디자이너
                                    </span>
                                </div>
                            </div>
                            <div className="component-emp">
                                <div className="rectangle-emp">
                                </div>
                                <div className="frame-empNameRv">
                                    <div className="container-empName">
                                        캡 디자이너
                                    </div>
                                    <span className="container-empPipe">
                                      |
                                    </span>
                                    <div className="container-empRv">
                                        리뷰 173건
                                    </div>
                                </div>
                                <div className="frame-empInfo">
                                    <span className="container-empInfo">
                                      수원 재방문률 1위 / 여성 전문 헤어 디자이너
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-review">
                        <div className="frame-reviewTitle">
                            <span className="container-boxTitle">
                              리뷰조회
                            </span>
                            <div className="container-reviewPlus">
                                더보기 ...
                            </div>
                        </div>
                        <div className="frame-reviewBox">
                            <div className="container-menuBox">
                                <div className="component-review">
                                    <div className="rectangle-review">
                                    </div>
                                    <div className="frame-rvNameScore">
                                        <div className="container-rvName">
                                            원장 디자이너
                                        </div>
                                        <span className="container-rvPipe">
                                            |
                                        </span>
                                        <div className="container-rvScore">
                                            4.8
                                        </div>
                                    </div>
                                    <div className="frame-rvMenuInfo">
                                        <div className="container-rvMenu">
                                            <span className="container-rvMenuTitle">
                                                [메뉴]
                                            </span>
                                            -
                                            <span className="container-rvMenuName">
                                                [[소분류]]
                                            </span>
                                        </div>
                                        <span className="container-rvInfo">
                                            정말 감사했습니다. 인생 미용실 정말 감사했습니다.
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