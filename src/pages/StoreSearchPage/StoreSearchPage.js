import "./StoreSearchPage.css";
import search_button from "../../assets/search_button.png";
import home_button from "../../assets/home_button.png";

export default function StoreSearchPage() {
  return (
    <div className="StoreSearchPage">
      <div className="container-4">
        <div className="header-inner">
          <div className="header-inner-left">
            <div className="logo-goto-home">
              <div className="image-13"></div>
            </div>
            <div className="header-buttons">
              <div className="nav-box">
                <div className="frame-286">
                  <span className="container-16">가게조회</span>
                </div>
              </div>
              <div className="nav-box-1">
                <span className="container-17">당일예약</span>
              </div>
              <div className="nav-box-2">
                <span className="container-18">예약조회</span>
              </div>
            </div>
          </div>
          <div className="search-border">
            <div className="icon-search">
              <img className="vector" src={search_button} alt={""} />
            </div>
            <div className="input-search">
              <span className="container">어떤 가게를 찾으세요?</span>
            </div>
          </div>
          <div className="header-inner-right">
            <div className="goto-mypage">
              <div className="icon-home">
                <img className="vector-1" src={home_button} alt={""} />
              </div>
              <div className="go-mypage">
                <span className="my-page">My Page</span>
              </div>
            </div>
            <div className="notice-todo">
              <div className="icon-alect">
                <div className="container-1"></div>
              </div>
              <div className="user-id">
                <span className="container-2">김아무개</span>
              </div>
            </div>
            <div className="log-out-but">
              <span className="container-3">로그아웃</span>
            </div>
          </div>
        </div>
        <div className="frame-3">
          <div className="select-option-padding">
            <div className="container-5">
              <div className="container-6">
                <span className="container-7">지역을 선택해 주세요</span>
              </div>
            </div>
            <div className="container-8">
              <div className="frame-157">
                <span className="container-9">
                  날짜 및 시간을 설정해 주세요
                </span>
              </div>
            </div>
            <div className="frame-288">
              <div className="container-1">
                <div className="frame-247">
                  <div className="frame-156">
                    <span className="container-19">전체</span>
                  </div>
                  <div className="frame-155">
                    <img className="container-20" />
                  </div>
                </div>
                <div className="frame-240">
                  <div className="frame-1561">
                    <span className="container-21">헤어</span>
                  </div>
                  <div className="frame-1551">
                    <img className="container-22" />
                  </div>
                </div>
                <div className="frame-241">
                  <div className="frame-1562">
                    <span className="container-23">네일</span>
                  </div>
                  <div className="frame-1552">
                    <img className="container-24" />
                  </div>
                </div>
                <div className="frame-242">
                  <div className="frame-1563">
                    <span className="container-25">마사지</span>
                  </div>
                  <div className="frame-1553">
                    <img className="container-26" />
                  </div>
                </div>
                <div className="frame-243">
                  <div className="frame-1564">
                    <span className="container-27">눈썹/속눈썹</span>
                  </div>
                  <div className="frame-1554">
                    <img className="container-28" />
                  </div>
                </div>
                <div className="frame-244">
                  <div className="frame-1565">
                    <span className="container-29">메이크업</span>
                  </div>
                  <div className="frame-1555">
                    <img className="container-30" />
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="frame-245">
                  <div className="frame-1566">
                    <span className="container-31">왁싱/제모</span>
                  </div>
                  <div className="frame-1556">
                    <img className="container-32" />
                  </div>
                </div>
                <div className="frame-248">
                  <div className="frame-1567">
                    <span className="container-33">기타</span>
                  </div>
                  <div className="frame-1557">
                    <img className="container-34" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="somthings-padding">
            <div className="top-100-list">
              <div className="top-test">
                <span className="top-100">TOP 100</span>
              </div>
              <div className="research-results">
                <div className="research-result">
                  <div className="store-info-padding">
                    <div className="frame-287">
                      <div className="store-infos">
                        <span className="container-10">[헤어]</span>
                        <span className="container-11">제이제이 헤어</span>
                      </div>
                      <div className="store-infos-1">
                        <span className="container-12">
                          수원시 영통수 이의동
                        </span>
                      </div>
                    </div>
                    <div className="mene-names">
                      <span className="container-13">여성커트, 남성커트</span>
                    </div>
                  </div>
                  <div className="reserve-look-buts">
                    <div className="reserve-but">
                      <span className="container-14">예약하기</span>
                    </div>
                    <div className="look-store-but">
                      <span className="container-15">가게조회</span>
                    </div>
                  </div>
                </div>
                <div className="research-result-1">
                  <div className="store-info-padding-1">
                    <div className="frame-2871">
                      <div className="store-infos-2">
                        <span className="container-35">[헤어]</span>
                        <span className="container-36">제이제이 헤어</span>
                      </div>
                      <div className="store-infos-3">
                        <span className="container-37">
                          수원시 영통수 이의동
                        </span>
                      </div>
                    </div>
                    <div className="mene-names-1">
                      <span className="container-38">여성커트, 남성커트</span>
                    </div>
                  </div>
                  <div className="reserve-look-buts-1">
                    <div className="reserve-but-1">
                      <span className="container-39">예약하기</span>
                    </div>
                    <div className="look-store-but-1">
                      <span className="container-40">가게조회</span>
                    </div>
                  </div>
                </div>
                <div className="research-result-2">
                  <div className="store-info-padding-2">
                    <div className="frame-2872">
                      <div className="store-infos-4">
                        <span className="container-41">[헤어]</span>
                        <span className="container-42">제이제이 헤어</span>
                      </div>
                      <div className="store-infos-5">
                        <span className="container-43">
                          수원시 영통수 이의동
                        </span>
                      </div>
                    </div>
                    <div className="mene-names-2">
                      <span className="container-44">여성커트, 남성커트</span>
                    </div>
                  </div>
                  <div className="reserve-look-buts-2">
                    <div className="reserve-but-2">
                      <span className="container-45">예약하기</span>
                    </div>
                    <div className="look-store-but-2">
                      <span className="container-46">가게조회</span>
                    </div>
                  </div>
                </div>
                <div className="research-result-3">
                  <div className="store-info-padding-3">
                    <div className="frame-2873">
                      <div className="store-infos-6">
                        <span className="container-47">[헤어]</span>
                        <span className="container-48">제이제이 헤어</span>
                      </div>
                      <div className="store-infos-7">
                        <span className="container-49">
                          수원시 영통수 이의동
                        </span>
                      </div>
                    </div>
                    <div className="mene-names-3">
                      <span className="container-50">여성커트, 남성커트</span>
                    </div>
                  </div>
                  <div className="reserve-look-buts-3">
                    <div className="reserve-but-3">
                      <span className="container-51">예약하기</span>
                    </div>
                    <div className="look-store-but-3">
                      <span className="container-52">가게조회</span>
                    </div>
                  </div>
                </div>
                <div className="research-result-4">
                  <div className="store-info-padding-4">
                    <div className="frame-2874">
                      <div className="store-infos-8">
                        <span className="container-53">[헤어]</span>
                        <span className="container-54">제이제이 헤어</span>
                      </div>
                      <div className="store-infos-9">
                        <span className="container-55">
                          수원시 영통수 이의동
                        </span>
                      </div>
                    </div>
                    <div className="mene-names-4">
                      <span className="container-56">여성커트, 남성커트</span>
                    </div>
                  </div>
                  <div className="reserve-look-buts-4">
                    <div className="reserve-but-4">
                      <span className="container-57">예약하기</span>
                    </div>
                    <div className="look-store-but-4">
                      <span className="container-58">가게조회</span>
                    </div>
                  </div>
                </div>
                <div className="research-result-5">
                  <div className="store-info-padding-5">
                    <div className="frame-2875">
                      <div className="store-infos-10">
                        <span className="container-59">[헤어]</span>
                        <span className="container-60">제이제이 헤어</span>
                      </div>
                      <div className="store-infos-11">
                        <span className="container-61">
                          수원시 영통수 이의동
                        </span>
                      </div>
                    </div>
                    <div className="mene-names-5">
                      <span className="container-62">여성커트, 남성커트</span>
                    </div>
                  </div>
                  <div className="reserve-look-buts-5">
                    <div className="reserve-but-5">
                      <span className="container-63">예약하기</span>
                    </div>
                    <div className="look-store-but-5">
                      <span className="container-64">가게조회</span>
                    </div>
                  </div>
                </div>
                <div className="research-result-6">
                  <div className="store-info-padding-6">
                    <div className="frame-2876">
                      <div className="store-infos-12">
                        <span className="container-65">[헤어]</span>
                        <span className="container-66">제이제이 헤어</span>
                      </div>
                      <div className="store-infos-13">
                        <span className="container-67">
                          수원시 영통수 이의동
                        </span>
                      </div>
                    </div>
                    <div className="mene-names-6">
                      <span className="container-68">여성커트, 남성커트</span>
                    </div>
                  </div>
                  <div className="reserve-look-buts-6">
                    <div className="reserve-but-6">
                      <span className="container-69">예약하기</span>
                    </div>
                    <div className="look-store-but-6">
                      <span className="container-70">가게조회</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
