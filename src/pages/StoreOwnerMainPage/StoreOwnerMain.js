import './StoreOwnerMain.css'
import StoreOwnerLeftNavi from "../nav/StoreOwnerLeftNavi";
import StoreOwnerTopNavi from "../nav/StoreOwnerTopNavi";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function StoreOwnerMain() {
    const navigate = useNavigate()
    return (
        <div className="StoreOwnerMain">
        <div className="StoreOwnerMainBack">
            <StoreOwnerLeftNavi/>
            <div className="SOMcontainerAll">
                <StoreOwnerTopNavi/>
                <div className="SOMcontainer">
                    <div className="SOMframe">
                        <div className="SOMstore-detailed">
                            <div className="SOMstore-detailed-name-rv">
                                <div className="SOMStoreDetailedName">
                                    제이제이 헤어
                                </div>
                                <div className="SOMstar">
                                    <div className="star"/>
                                    <div className="SOMstar-figure">
                                        <div className="SOMcontainerRvScore">
                                            4.8
                                        </div>
                                        <div className="SOMcontainer-93">
                                            /5.0
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMstore-detailed-review">
                                    <div className="SOMcontainer-83">
                                        리뷰
                                    </div>
                                    <div className="SOMcontainer-94">
                                        372
                                    </div>
                                </div>
                            </div>
                            <div className="SOMstore-detailed-info">
                                <div className="SOMstore-detailed-info-left">
                                    <div className="SOMStoreDetailedInfo">
                                        <div className="SOMDetailedInfoIcon">
                                          메인
                                        </div>
                                        <div className="SOMDetailedInfoContent">
                                          고객 맞춤 프리미엄 서비스를 제공하는 제이제이 헤어입니다.
                                        </div>
                                    </div>
                                    <div className="SOMStoreDetailedInfo">
                                        <div className="SOMDetailedInfoIcon">
                                            <div className="SOMlocation-icon">
                                            </div>
                                        </div>
                                        <div className="SOMDetailedInfoContent">
                                          경기도 수원시 영통구 광교산로 154-42 206호
                                        </div>
                                    </div>
                                    <div className="SOMStoreDetailedInfo">
                                        <div className="SOMDetailedInfoIcon">
                                            <div className="SOMcontainer-87">
                                            </div>
                                        </div>
                                        <div className="SOMDetailedInfoContent">
                                          경기대학교 후문사거리
                                        </div>
                                    </div>
                                    <div className="SOMStoreDetailedInfo">
                                        <div className="SOMDetailedInfoIcon">
                                            <div className="SOMcontainer-86">
                                            </div>
                                        </div>
                                        <div className="SOMstore-detailed-info-phones">
                                          <div className="SOMcontainer-91">
                                            031-249-9114
                                          </div>
                                            <div className="SOMcontainer-97">
                                                |
                                            </div>
                                            <div className="SOMcontainer-96">
                                                인스타그램
                                            </div>
                                        </div>
                                    </div>
                                    <div className="SOMStoreDetailedInfo">
                                        <div className="SOMDetailedInfoIcon">
                                            <div className="SOMcontainer-85">
                                            </div>
                                        </div>
                                        <div className="SOMDetailedInfoContent">
                                          월 10:00 - 20:00 ...
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMstore-detailed-info-pic">
                                    <div className="SOMprofile-select-1">
                                    </div>
                                </div>
                            </div>
                            <div className="SOMmodify-1">
                                <div className="SOMcontainer-84">
                                  수정하기
                                </div>
                            </div>
                        </div>
                        <div className="SOMreservation">
                            <div className="SOMframe-522">
                                <div className="SOMtoday-reserv">
                                    <div className="SOMtoday">
                                        <div className="SOMcontainer-98">
                                          오늘 예약 -
                                        </div>
                                        <div className="SOMgroup-502">
                                            <div className="SOMselect-box-before">
                                                <div className="SOMcontainer-99">
                                                  제이 원장
                                                </div>
                                                {/*<img className="SOMarrow-button-before" src="SOMassets/vectors/ArrowButtonBefore2_x2.svg" />*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="SOMdldccheck">
                                        <div className="SOMtime-memo">
                                            <div className="SOMtime-note">
                                                <div className="SOMcontainer-100">
                                                  12:30
                                                </div>
                                                <div className="SOMcontainer-101">
                                                  |
                                                </div>
                                                <div className="SOMmenu-list-1">
                                                  <div className="SOMcontainer-102">
                                                    여성 커트, 클리닉
                                                  </div>
                                                </div>
                                            </div>
                                            <div className="SOMtime-note-1">
                                                <div className="SOMcontainer-103">
                                                  13:00
                                                </div>
                                                <div className="SOMcontainer-104">
                                                  |
                                                </div>
                                                <div className="SOMmenu-list-2">
                                                  <div className="SOMcontainer-105">
                                                    여성 커트, 클리닉
                                                  </div>
                                                </div>
                                            </div>
                                            <div className="SOMtime-note-2">
                                                <div className="SOMcontainer-106">
                                                  13:30
                                                </div>
                                                <div className="SOMcontainer-107">
                                                  |
                                                </div>
                                                <div className="SOMmenu-list-3">
                                                  <div className="SOMcontainer-108">
                                                    여성 커트, 클리닉
                                                  </div>
                                                </div>
                                            </div>
                                            <div className="SOMtime-note-3">
                                                <div className="SOMcontainer-109">
                                                  14:00
                                                </div>
                                                <div className="SOMcontainer-110">
                                                  |
                                                </div>
                                                <div className="SOMmenu-list-2">
                                                  <div className="SOMcontainer-111">
                                                    여성 커트, 클리닉
                                                  </div>
                                                </div>
                                            </div>
                                            <div className="SOMtime-note-4">
                                                <div className="SOMcontainer-112">
                                                  14:30
                                                </div>
                                                <div className="SOMcontainer-113">
                                                  |
                                                </div>
                                                <div className="SOMmenu-list-21">
                                                  <div className="SOMcontainer-114">
                                                    여성 커트, 클리닉
                                                  </div>
                                                </div>
                                            </div>
                                            <div className="SOMtime-note-5">
                                                <div className="SOMcontainer-115">
                                                  15:00
                                                </div>
                                                <div className="SOMcontainer-116">
                                                  |
                                                </div>
                                                <div className="SOMmenu-list-22">
                                                  <div className="SOMcontainer-117">
                                                    여성 커트, 클리닉
                                                  </div>
                                                </div>
                                            </div>
                                            <div className="SOMtime-note-6">
                                                <div className="SOMcontainer-118">
                                                  15:30
                                                </div>
                                                <div className="SOMcontainer-119">
                                                  |
                                                </div>
                                                <div className="SOMmenu-list-23">
                                                  <div className="SOMcontainer-120">
                                                    여성 커트, 클리닉
                                                  </div>
                                                </div>
                                            </div>
                                            <div className="SOMtime-note-7">
                                                <div className="SOMcontainer-121">
                                                  16:00
                                                </div>
                                                <div className="SOMcontainer-122">
                                                  |
                                                </div>
                                                <div className="SOMmenu-list-24">
                                                  <div className="SOMcontainer-123">
                                                    여성 커트, 클리닉
                                                  </div>
                                                </div>
                                            </div>
                                            <div className="SOMtime-note-8">
                                                <div className="SOMcontainer-124">
                                                  16:30
                                                </div>
                                                <div className="SOMcontainer-125">
                                                  |
                                                </div>
                                                <div className="SOMmenu-list-25">
                                                  <div className="SOMcontainer-126">
                                                    여성 커트, 클리닉
                                                  </div>
                                                </div>
                                            </div>
                                            <div className="SOMtime-note-9">
                                                <div className="SOMcontainer-129">
                                                  16:30
                                                </div>
                                                <div className="SOMcontainer-130">
                                                  |
                                                </div>
                                                <div className="SOMmenu-list-26">
                                                  <div className="SOMcontainer-131">
                                                    여성 커트, 클리닉
                                                  </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="SOMdeadline-dccheck">
                                            <div className="SOMcheck">
                                                <div className="SOMcontainer-127">
                                                  예약마감
                                                </div>
                                                <div className="SOMcontainer-128">
                                                  마감임박할인
                                                </div>
                                            </div>
                                            <div className="SOMcheck-box">
                                                <div className="SOMrectangle-246">
                                                </div>
                                                <div className="SOMrectangle-247">
                                                </div>
                                            </div>
                                            <div className="SOMcheck-box-1">
                                                <div className="SOMrectangle-2461">
                                                </div>
                                                <div className="SOMrectangle-2471">
                                                </div>
                                            </div>
                                            <div className="SOMcheck-box-2">
                                                <div className="SOMrectangle-2462">
                                                </div>
                                                <div className="SOMrectangle-2472">
                                                </div>
                                            </div>
                                            <div className="SOMcheck-box-3">
                                                <div className="SOMrectangle-2463">
                                                </div>
                                                <div className="SOMrectangle-2473">
                                                </div>
                                            </div>
                                            <div className="SOMcheck-box-4">
                                                <div className="SOMrectangle-2464">
                                                </div>
                                                <div className="SOMrectangle-2474">
                                                </div>
                                            </div>
                                            <div className="SOMcheck-box-5">
                                                <div className="SOMrectangle-2465">
                                                </div>
                                                <div className="SOMrectangle-2475">
                                                </div>
                                            </div>
                                            <div className="SOMcheck-box-6">
                                                <div className="SOMrectangle-2466">
                                                </div>
                                                <div className="SOMrectangle-2476">
                                                </div>
                                            </div>
                                            <div className="SOMcheck-box-7">
                                                <div className="SOMrectangle-2467">
                                                </div>
                                                <div className="SOMrectangle-2477">
                                                </div>
                                            </div>
                                            <div className="SOMcheck-box-8">
                                                <div className="SOMrectangle-2468">
                                                </div>
                                                <div className="SOMrectangle-2478">
                                                </div>
                                            </div>
                                            <div className="SOMcheck-box-9">
                                                <div className="SOMrectangle-2469">
                                                </div>
                                                <div className="SOMrectangle-2479">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMgroup-57">
                                    <div className="SOMrectangle-138">
                                    </div>
                                </div>
                            </div>
                            <div className="SOMall-reserv">
                                <div className="SOMcontainer-132">
                                    전체 예약
                                </div>
                                <div className="SOMcalendar-example-2">
                                    <div className="SOMmonth-header">
                                        <div className="SOMicon-button">
                                            {/*<img className="SOMvector-10" src="SOMassets/vectors/Vector938_x2.svg" />*/}
                                        </div>
                                        <div className="SOMmonth-yyyy">
                                          March 2024
                                        </div>
                                        <div className="SOMicon-button-1">
                                            {/*<img className="SOMvector-11" src="SOMassets/vectors/Vector338_x2.svg" />*/}
                                        </div>
                                    </div>
                                    <div className="SOMweek-header">
                                        <div className="SOMbox">
                                          <div className="SOMsun">
                                            SUN
                                          </div>
                                        </div>
                                        <div className="SOMbox-1">
                                          <div className="SOMmon">
                                            MON
                                          </div>
                                        </div>
                                        <div className="SOMbox-2">
                                          <div className="SOMtue">
                                            TUE
                                          </div>
                                        </div>
                                        <div className="SOMbox-3">
                                          <div className="SOMwed">
                                            WED
                                          </div>
                                        </div>
                                        <div className="SOMbox-4">
                                          <div className="SOMthu">
                                            THU
                                          </div>
                                        </div>
                                        <div className="SOMbox-5">
                                          <div className="SOMfri">
                                            FRI
                                          </div>
                                        </div>
                                        <div className="SOMbox-6">
                                          <div className="SOMsat">
                                            SAT
                                          </div>
                                        </div>
                                    </div>
                                    <div className="SOMweek-days">
                                        <div className="SOMcalendar-day">
                                          <div className="SOMvalue">
                                            25
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-1">
                                          <div className="SOMvalue-1">
                                            26
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-2">
                                          <div className="SOMvalue-2">
                                            27
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-3">
                                          <div className="SOMvalue-3">
                                            28
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-4">
                                          <div className="SOMvalue-4">
                                            29
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-5">
                                          <div className="SOMvalue-5">
                                            1
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-6">
                                          <div className="SOMvalue-6">
                                            2
                                          </div>
                                        </div>
                                    </div>
                                    <div className="SOMweek-days-1">
                                        <div className="SOMcalendar-day-7">
                                          <div className="SOMvalue-7">
                                            3
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-8">
                                          <div className="SOMvalue-8">
                                            4
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-9">
                                          <div className="SOMvalue-9">
                                            5
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-10">
                                          <div className="SOMvalue-10">
                                            6
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-11">
                                          <div className="SOMvalue-11">
                                            7
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-12">
                                          <div className="SOMvalue-12">
                                            8
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-13">
                                          <div className="SOMvalue-13">
                                            9
                                          </div>
                                        </div>
                                    </div>
                                    <div className="SOMweek-days-2">
                                        <div className="SOMcalendar-day-14">
                      <div className="SOMvalue-14">
                        10
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-15">
                      <div className="SOMvalue-15">
                        11
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-16">
                      <div className="SOMvalue-16">
                        12
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-17">
                      <div className="SOMvalue-17">
                        13
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-18">
                      <div className="SOMvalue-18">
                        14
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-19">
                      <div className="SOMvalue-19">
                        15
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-20">
                      <div className="SOMvalue-20">
                        16
                      </div>
                                        </div>
                                    </div>
                                    <div className="SOMweek-days-3">
                                        <div className="SOMcalendar-day-21">
                      <div className="SOMvalue-21">
                        17
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-22">
                      <div className="SOMvalue-22">
                        18
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-23">
                      <div className="SOMvalue-23">
                        19
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-24">
                      <div className="SOMvalue-24">
                        20
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-25">
                      <div className="SOMvalue-25">
                        21
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-26">
                      <div className="SOMvalue-26">
                        22
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-27">
                      <div className="SOMvalue-27">
                        23
                      </div>
                                        </div>
                                    </div>
                                    <div className="SOMweek-days-4">
                                        <div className="SOMcalendar-day-28">
                      <div className="SOMvalue-28">
                        24
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-29">
                      <div className="SOMvalue-29">
                        25
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-30">
                      <div className="SOMvalue-30">
                        26
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-31">
                      <div className="SOMvalue-31">
                        27
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-32">
                      <div className="SOMvalue-32">
                        28
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-33">
                      <div className="SOMvalue-33">
                        29
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-34">
                      <div className="SOMvalue-34">
                        30
                      </div>
                                        </div>
                                    </div>
                                    <div className="SOMweek-days-5">
                                        <div className="SOMcalendar-day-35">
                      <div className="SOMvalue-35">
                        31
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-36">
                      <div className="SOMvalue-36">
                        1
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-37">
                      <div className="SOMvalue-37">
                        2
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-38">
                      <div className="SOMvalue-38">
                        3
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-39">
                      <div className="SOMvalue-39">
                        4
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-40">
                      <div className="SOMvalue-40">
                        5
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-41">
                      <div className="SOMvalue-41">
                        6
                      </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="SOMwait-reservation">
                            <div className="SOMframe-527">
                                <div className="SOMcontainerReservCheck">
                                  예약 확인
                                </div>
                            </div>
                            <div className="SOMwait-reserv-list-calen">
                                <div className="SOMwait-reserv-list">
                                    <div className="SOMnew-wait-list">
                                        <div className="SOMcontainer-1">
                                            신규
                                        </div>
                                        <div className="SOMwait-list">
                                            <div className="SOMwait-reserv-date">
                        <div className="SOMcontainer-2">
                          3.26
                        </div>
                                                <div className="SOMcontainer-3">
                          17:00
                        </div>
                                                <div className="SOMcontainer-4">
                          심화 디자이너
                        </div>
                                            </div>
                                            <div className="SOMwait-reserv-button">
                                                <div className="SOMconfirm-button">
                          <div className="SOMcontainer-5">
                            확정
                          </div>
                                                </div>
                                                <div className="SOMrefuse-button">
                          <div className="SOMcontainer-5">
                            거절
                          </div>
                                                </div>
                                                <div className="SOMplus-button">
                          <div className="SOMcontainer-7">
                            ...
                          </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="SOMwait-list-1">
                                            <div className="SOMwait-reserv-date-1">
                        <div className="SOMcontainer-8">
                          3.24
                        </div>
                                                <div className="SOMcontainer-9">
                          19:00
                        </div>
                                                <div className="SOMcontainer-10">
                          캡 디자이너
                        </div>
                                            </div>
                                            <div className="SOMwait-reserv-button-1">
                                                <div className="SOMconfirm-button-1">
                          <div className="SOMcontainer-5">
                            확정
                          </div>
                                                </div>
                                                <div className="SOMrefuse-button-1">
                          <div className="SOMcontainer-5">
                            거절
                          </div>
                                                </div>
                                                <div className="SOMplus-button-1">
                          <div className="SOMcontainer-13">
                            ...
                          </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="SOMwait-list-2">
                                            <div className="SOMwait-reserv-date-1">
                        <div className="SOMcontainer-14">
                          4.3
                        </div>
                                                <div className="SOMcontainer-3">
                          <div className="SOMcontainer-9">
                            19:30
                          </div>
                                                    <div className="SOMcontainer-16">
                            제이 원장
                          </div>
                                                </div>
                                            </div>
                                            <div className="SOMwait-reserv-button-2">
                                                <div className="SOMconfirm-button-2">
                          <div className="SOMcontainer-5">
                            확정
                          </div>
                                                </div>
                                                <div className="SOMrefuse-button-2">
                          <div className="SOMcontainer-5">
                            거절
                          </div>
                                                </div>
                                                <div className="SOMplus-button-2">
                          <div className="SOMcontainer-19">
                            ...
                          </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="SOMframe-523">
                      <div className="SOMcontainer-20">
                        전체보기
                      </div>
                                        </div>
                                    </div>
                                    <div className="SOMimminent-wait-list">
                                        <div className="SOMcontainer-21">
                                            임박
                                        </div>
                                        <div className="SOMwait-list-3">
                                            <div className="SOMwait-reserv-date-3">
                        <div className="SOMcontainer-22">
                          3.20
                        </div>
                                                <div className="SOMcontainer-23">
                          13:00
                        </div>
                                                <div className="SOMcontainer-24">
                          심화 디자이너
                        </div>
                                            </div>
                                            <div className="SOMwait-reserv-button-3">
                                                <div className="SOMconfirm-button-3">
                          <div className="SOMcontainer-5">
                            확정
                          </div>
                                                </div>
                                                <div className="SOMrefuse-button-3">
                          <div className="SOMcontainer-5">
                            거절
                          </div>
                                                </div>
                                                <div className="SOMplus-button-3">
                          <div className="SOMcontainer-27">
                            ...
                          </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="SOMwait-list-4">
                                            <div className="SOMwait-reserv-date-4">
                        <div className="SOMcontainer-28">
                          3.20
                        </div>
                                                <div className="SOMcontainer-29">
                          15:30
                        </div>
                                                <div className="SOMcontainer-30">
                          캡 디자이너
                        </div>
                                            </div>
                                            <div className="SOMwait-reserv-button-4">
                                                <div className="SOMconfirm-button-4">
                          <div className="SOMcontainer-5">
                            확정
                          </div>
                                                </div>
                                                <div className="SOMrefuse-button-4">
                          <div className="SOMcontainer-5">
                            거절
                          </div>
                                                </div>
                                                <div className="SOMplus-button-4">
                          <div className="SOMcontainer-33">
                            ...
                          </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="SOMwait-list-5">
                                            <div className="SOMwait-reserv-date-5">
                        <div className="SOMcontainer-34">
                          3.22
                        </div>
                                                <div className="SOMcontainer-35">
                          18:00
                        </div>
                                                <div className="SOMcontainer-36">
                          제이 원장
                        </div>
                                            </div>
                                            <div className="SOMwait-reserv-button-5">
                                                <div className="SOMconfirm-button-5">
                          <div className="SOMcontainer-5">
                            확정
                          </div>
                                                </div>
                                                <div className="SOMrefuse-button-5">
                          <div className="SOMcontainer-5">
                            거절
                          </div>
                                                </div>
                                                <div className="SOMplus-button-5">
                          <div className="SOMcontainer-39">
                            ...
                          </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="SOMframe-5231">
                      <div className="SOMcontainer-40">
                        전체보기
                      </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMframe-536">
                                    <div className="SOMmonth-header-1">
                                        <div className="SOMicon-button-2">
                                            {/*<img className="SOMvector-12" src="SOMassets/vectors/Vector916_x2.svg" />*/}
                                        </div>
                                        <div className="SOMmonth-yyyy-1">
                                          March 2024
                                        </div>
                                        <div className="SOMicon-button-3">
                                            {/*<img className="SOMvector-13" src="SOMassets/vectors/Vector533_x2.svg" />*/}
                                        </div>
                                    </div>
                                    <div className="SOMweek-header-1">
                                        <div className="SOMbox-7">
                                          <div className="SOMsun-1">
                                            SUN
                                          </div>
                                        </div>
                                        <div className="SOMbox-8">
                                          <div className="SOMmon-1">
                                            MON
                                          </div>
                                        </div>
                                        <div className="SOMbox-9">
                                          <div className="SOMtue-1">
                                            TUE
                                          </div>
                                        </div>
                                        <div className="SOMbox-10">
                                          <div className="SOMwed-1">
                                            WED
                                          </div>
                                        </div>
                                        <div className="SOMbox-11">
                                          <div className="SOMthu-1">
                                            THU
                                          </div>
                                        </div>
                                        <div className="SOMbox-12">
                                          <div className="SOMfri-1">
                                            FRI
                                          </div>
                                        </div>
                                        <div className="SOMbox-13">
                                          <div className="SOMsat-1">
                                            SAT
                                          </div>
                                        </div>
                                    </div>
                                    <div className="SOMweek-days-6">
                                        <div className="SOMcalendar-day-42">
                                          <div className="SOMvalue-42">
                                            25
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-43">
                                          <div className="SOMvalue-43">
                                            26
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-44">
                                          <div className="SOMvalue-44">
                                            27
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-45">
                                          <div className="SOMvalue-45">
                                            28
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-46">
                                          <div className="SOMvalue-46">
                                            29
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-47">
                                          <div className="SOMvalue-47">
                                            1
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-48">
                                          <div className="SOMvalue-48">
                                            2
                                          </div>
                                        </div>
                                    </div>
                                    <div className="SOMweek-days-7">
                                        <div className="SOMcalendar-day-49">
                                          <div className="SOMvalue-49">
                                            3
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-50">
                                          <div className="SOMvalue-50">
                                            4
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-51">
                                          <div className="SOMvalue-51">
                                            5
                                          </div>
                                        </div>
                                        <div className="SOMcalendar-day-52">
                      <div className="SOMvalue-52">
                        6
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-53">
                      <div className="SOMvalue-53">
                        7
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-54">
                      <div className="SOMvalue-54">
                        8
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-55">
                      <div className="SOMvalue-55">
                        9
                      </div>
                                        </div>
                                    </div>
                                    <div className="SOMweek-days-8">
                                        <div className="SOMcalendar-day-56">
                      <div className="SOMvalue-56">
                        10
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-57">
                      <div className="SOMvalue-57">
                        11
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-58">
                      <div className="SOMvalue-58">
                        12
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-59">
                      <div className="SOMvalue-59">
                        13
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-60">
                      <div className="SOMvalue-60">
                        14
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-61">
                      <div className="SOMvalue-61">
                        15
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-62">
                      <div className="SOMvalue-62">
                        16
                      </div>
                                        </div>
                                    </div>
                                    <div className="SOMweek-days-9">
                                        <div className="SOMcalendar-day-63">
                      <div className="SOMvalue-63">
                        17
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-64">
                      <div className="SOMvalue-64">
                        18
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-65">
                      <div className="SOMvalue-65">
                        19
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-66">
                      <div className="SOMvalue-66">
                        20
                      </div>
                                            <div className="SOMellipse-8">
                                            </div>
                                        </div>
                                        <div className="SOMcalendar-day-67">
                      <div className="SOMvalue-67">
                        21
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-68">
                      <div className="SOMvalue-68">
                        22
                      </div>
                                            <div className="SOMellipse-7">
                                            </div>
                                        </div>
                                        <div className="SOMcalendar-day-69">
                      <div className="SOMvalue-69">
                        23
                      </div>
                                        </div>
                                    </div>
                                    <div className="SOMweek-days-10">
                                        <div className="SOMcalendar-day-70">
                      <div className="SOMvalue-70">
                        24
                      </div>
                                            <div className="SOMellipse-5">
                                            </div>
                                        </div>
                                        <div className="SOMcalendar-day-71">
                      <div className="SOMvalue-71">
                        25
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-72">
                      <div className="SOMvalue-72">
                        26
                      </div>
                                            <div className="SOMellipse-6">
                                            </div>
                                        </div>
                                        <div className="SOMcalendar-day-73">
                      <div className="SOMvalue-73">
                        27
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-74">
                      <div className="SOMvalue-74">
                        28
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-75">
                      <div className="SOMvalue-75">
                        29
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-76">
                      <div className="SOMvalue-76">
                        30
                      </div>
                                        </div>
                                    </div>
                                    <div className="SOMweek-days-11">
                                        <div className="SOMcalendar-day-77">
                      <div className="SOMvalue-77">
                        31
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-78">
                      <div className="SOMvalue-78">
                        1
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-79">
                      <div className="SOMvalue-79">
                        2
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-80">
                      <div className="SOMvalue-80">
                        3
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-81">
                      <div className="SOMvalue-81">
                        4
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-82">
                      <div className="SOMvalue-82">
                        5
                      </div>
                                        </div>
                                        <div className="SOMcalendar-day-83">
                      <div className="SOMvalue-83">
                        6
                      </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="SOMmenu-box">
                            <div className="SOMmenu-list">
                                <div className="SOMmenu-info">
                                    <div className="SOMrectangle-62">
                                    </div>
                                    <div className="SOMmenu">
                                        <div className="SOMcontainer-41">
                                          여성 커트
                                        </div>
                                        <div className="SOMcontainer-42">
                                          |
                                        </div>
                                        <div className="SOMcontainer-43">
                                          30,000
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMmenu-info-1">
                                    <div className="SOMrectangle-621">
                                    </div>
                                    <div className="SOMmenu-1">
                                        <div className="SOMcontainer-44">
                                          남성 커트
                                        </div>
                                        <div className="SOMcontainer-45">
                                          |
                                        </div>
                                        <div className="SOMcontainer-46">
                                          30,000
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMmenu-info-2">
                                    <div className="SOMrectangle-622">
                                    </div>
                                    <div className="SOMmenu-2">
                                        <div className="SOMcontainer-47">
                                          볼륨펌
                                        </div>
                                        <div className="SOMcontainer-48">
                                          |
                                        </div>
                                        <div className="SOMcontainer-49">
                                          50,000
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMmenu-info-3">
                                    <div className="SOMrectangle-623">
                                    </div>
                                    <div className="SOMmenu-3">
                                        <div className="SOMcontainer-50">
                                          펌
                                        </div>
                                        <div className="SOMcontainer-51">
                                          |
                                        </div>
                                        <div className="SOMcontainer-52">
                                          30,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="SOMframe-544">
                                <div className="SOMcontainer-53">
                                  등록 / 수정
                                </div>
                            </div>
                        </div>
                        <div className="SOMstaff-box">
                            <div className="SOMstaff-list">
                                <div className="SOMstaff-info">
                                    <div className="SOMstaff-img">
                                    </div>
                                    <div className="SOMstaff">
                                        <div className="SOMcontainer-54">
                                            제이 원장
                                        </div>
                                        <div className="SOMcontainer-55">
                                          수원 재방률 1위 / 남...
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMstaff-info-1">
                                    <div className="SOMstaff-img-1">
                                    </div>
                                    <div className="SOMstaff-1">
                                        <div className="SOMcontainer-56">
                                            심화 디자이너
                                        </div>
                                        <div className="SOMcontainer-57">
                                          수원 재방률 1위 / 여...
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMstaff-info-2">
                                    <div className="SOMstaff-img-2">
                                    </div>
                                    <div className="SOMstaff-2">
                                        <div className="SOMcontainer-58">
                                            캡 디자이너
                                        </div>
                                        <div className="SOMcontainer-59">
                                          수원 재방률 1위 / 여...
                                        </div>
                                    </div>
                                </div>
                                <div className="SOMstaff-info-3">
                                    <div className="SOMstaff-img-3">
                                    </div>
                                    <div className="SOMstaff-3">
                                        <div className="SOMcontainer-60">
                                            제이 원장
                                        </div>
                                        <div className="SOMcontainer-61">
                                          수원 재방률 1위 / 남...
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="SOMmodify">
                                <div className="SOMcontainer-62">
                                  등록 / 수정
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