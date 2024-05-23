import "./StoreRegist.css";
import storeimgadd from "../../assets/AddStoreImg_button.png";
import sort from "../../assets/Sort_button.png";
import LoginPageNav from "../nav/LoginPageNav";

export default function StoreRegist() {
  return (
    <div className="StoreRegist">
      <div className="StoreRegistBack">
        <LoginPageNav></LoginPageNav>
        <div className="container">
          <div className="allcontentcontainer">
            <div className="leftcontentcontainer">
              <div className="container-11">가게 등록</div>
              <div className="frame-550">
                <div className="frame-524">
                  <div className="container-1">업체명</div>
                  <div className="frame-406">
                    <span className="container-2">업체명을 입력해주세요.</span>
                  </div>
                </div>
                <div className="frame-526">
                  <div className="container-3">업종</div>
                  <div className="frame-512">
                    <span className="container-4">카테고리</span>
                    <img className="group-131" src={sort} alt={""} />
                  </div>
                </div>
                <div className="frame-529">
                  <div className="container-5">업체 전화번호</div>
                  <div className="frame-528">
                    <div className="frame-513">
                      <span className="container-6">
                        ‘-’빼고 숫자만 입력해주세요
                      </span>
                    </div>
                  </div>
                </div>
                <div className="frame-533">
                  <div className="container-7">업체 주소</div>
                  <div className="frame-531">
                    <div className="frame-515">
                      <span className="container-8">
                        도로명, 지번, 건물명 검색
                      </span>
                    </div>
                    <div className="frame-516">
                      <span className="container-9">검색</span>
                    </div>
                  </div>
                  <div className="frame-532">
                    <div className="frame-517">
                      <span className="container-10">
                        경기도 수원시 영통구 광교산로 154-42
                      </span>
                    </div>
                  </div>
                  <div className="frame-5331">
                    <div className="frame-5171">
                      <span className="container-12">
                        동, 호수와 같은 상세 주소 입력
                      </span>
                    </div>
                  </div>
                </div>
                <div className="frame-548">
                  <div className="sns">업체 SNS</div>
                  <div className="frame-547">
                    <div className="frame-407">
                      <span className="url">URL을 입력해주세요.</span>
                    </div>
                    <div className="frame-537">
                      <span className="container-13">추가</span>
                    </div>
                  </div>
                  <div className="frame-5281">
                    <div className="frame-5131">
                      <span className="www-booksly-com">www.booksly.com</span>
                    </div>
                  </div>
                </div>
                <div className="frame-549">
                  <div className="container-14">자동 예약 확정</div>
                  <div className="frame-133">
                    <div className="frame-317">
                      <span className="container-15">예</span>
                    </div>
                    <div className="frame-318">
                      <span className="container-16">아니오</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightcontentcontainer">
              <div className="frame-574">
                <div className="frame-572">
                  <div className="frame-571">
                    <div className="container-17">업체 영업시간</div>
                    <span className="container-18">
                      : 선택한 요일과 기입한 시간이 영업 시간으로 표시됩니다.
                    </span>
                  </div>
                  <div className="frame-569">
                    <div className="container-24"></div>
                    <div className="frame-558">
                      <div className="frame-254">
                        <div className="frame-251">
                          <span className="container-19">월</span>
                        </div>
                        <div className="frame-253">
                          <div className="frame-249">
                            <span className="container-20">10:00</span>
                          </div>
                          <div className="container-21">~</div>
                          <div className="frame-250">
                            <span className="container-22">20:00</span>
                          </div>
                        </div>
                        <div className="frame-319">
                          <span className="container-23">휴무</span>
                        </div>
                      </div>
                      <div className="frame-551">
                        <div className="frame-2511">
                          <span className="container-25">화</span>
                        </div>
                        <div className="frame-2531">
                          <div className="frame-2491">
                            <span className="container-26">10:00</span>
                          </div>
                          <div className="container-27">~</div>
                          <div className="frame-2501">
                            <span className="container-28">20:00</span>
                          </div>
                        </div>
                        <div className="frame-3191">
                          <span className="container-29">휴무</span>
                        </div>
                      </div>
                      <div className="frame-552">
                        <div className="frame-2512">
                          <span className="container-30">수</span>
                        </div>
                        <div className="frame-2532">
                          <div className="frame-2492">
                            <span className="container-31">10:00</span>
                          </div>
                          <div className="container-32">~</div>
                          <div className="frame-2502">
                            <span className="container-33">20:00</span>
                          </div>
                        </div>
                        <div className="frame-3192">
                          <span className="container-34">휴무</span>
                        </div>
                      </div>
                      <div className="frame-553">
                        <div className="frame-2513">
                          <span className="container-35">목</span>
                        </div>
                        <div className="frame-2533">
                          <div className="frame-2493">
                            <span className="container-36">10:00</span>
                          </div>
                          <div className="container-37">~</div>
                          <div className="frame-2503">
                            <span className="container-38">20:00</span>
                          </div>
                        </div>
                        <div className="frame-3193">
                          <span className="container-39">휴무</span>
                        </div>
                      </div>
                      <div className="frame-554">
                        <div className="frame-2514">
                          <span className="container-40">금</span>
                        </div>
                        <div className="frame-2534">
                          <div className="frame-2494">
                            <span className="container-41">10:00</span>
                          </div>
                          <div className="container-42">~</div>
                          <div className="frame-2504">
                            <span className="container-43">20:00</span>
                          </div>
                        </div>
                        <div className="frame-3194">
                          <span className="container-44">휴무</span>
                        </div>
                      </div>
                      <div className="frame-5521">
                        <div className="frame-2515">
                          <span className="container-45">토</span>
                        </div>
                        <div className="frame-2535">
                          <div className="frame-2495">
                            <span className="container-46">10:00</span>
                          </div>
                          <div className="container-47">~</div>
                          <div className="frame-2505">
                            <span className="container-48">20:00</span>
                          </div>
                        </div>
                        <div className="frame-3195">
                          <span className="container-49">휴무</span>
                        </div>
                      </div>
                      <div className="frame-555">
                        <div className="frame-2516">
                          <span className="container-50">일</span>
                        </div>
                        <div className="frame-2536">
                          <div className="frame-2496">
                            <span className="container-51">10:00</span>
                          </div>
                          <div className="container-52">~</div>
                          <div className="frame-2506">
                            <span className="container-53">20:00</span>
                          </div>
                        </div>
                        <div className="frame-3196">
                          <span className="container-54">휴무</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-560">
                  <div className="frame-5501">
                    <span className="container-55">예약 모집 시간 단위</span>
                  </div>
                  <div className="frame-559">
                    <div className="frame-5121">
                      <span className="container-56">시</span>
                      <img className="group-132" src={sort} alt={""} />
                    </div>
                    <div className="frame-514">
                      <span className="container-64">분</span>
                      <img className="group-1311" src={sort} alt={""} />
                    </div>
                  </div>
                </div>
                <div className="frame-567">
                  <div className="container-57">업체 소개글</div>
                  <div className="frame-566">
                    <div className="frame-4071">
                      <span className="container-58">
                        업체 소개 글을 입력해주세요.
                      </span>
                    </div>
                    <div className="frame-109">
                      <div className="container-59">0자</div>
                      <span className="container-60">/</span>
                      <div className="container-61">150자</div>
                    </div>
                  </div>
                </div>
                <div className="frame-573">
                  <div className="container-62">업체 대표 이미지</div>
                  <div className="frame-568">
                    <img className="vector-2" src={storeimgadd} alt={""} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-536">
            <span className="container-63">등록 완료</span>
          </div>
        </div>
      </div>
    </div>
  );
}
