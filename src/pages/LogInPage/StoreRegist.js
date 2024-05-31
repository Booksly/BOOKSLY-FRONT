import "./StoreRegist.css";
import storeimgadd from "../../assets/AddStoreImg_button.png";
import sort from "../../assets/sort_button.png";
import LoginPageNav from "../nav/LoginPageNav";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import DaumPostcode from "react-daum-postcode";

const options = [
  { value: "all", label: "전체" },
  { value: "hair", label: "헤어" },
  { value: "nail", label: "네일" },
  { value: "massage", label: "마사지" },
  { value: "eyebrow_eyelash", label: "눈썹/속눈썹" },
  { value: "makeup", label: "메이크업" },
  { value: "waxing_hair_removal", label: "왁싱/제모" },
  { value: "etc", label: "기타" }
];

export default function StoreRegist() {
  const [storeName, setStoreName] = useState('')
  // const [storeType, setStoreType]
  const [storePhone, setStorePhone] = useState('')
  const [address, setAddress] = useState('')
  const [addrDetail, setAddrDetail] = useState('')
  const [snsURL, setSnsURL] = useState('')
  const [storeInfo, setStoreInfo] = useState('')
  const [timeStartMon, setTimeStartMon] = useState('');
  const [timeEndMon, setTimeEndMon] = useState('');
  const [timeStartTue, setTimeStartTue] = useState('');
  const [timeEndTue, setTimeEndTue] = useState('');
  const [timeStartWed, setTimeStartWed] = useState('');
  const [timeEndWed, setTimeEndWed] = useState('');
  const [timeStartThu, setTimeStartThu] = useState('');
  const [timeEndThu, setTimeEndThu] = useState('');
  const [timeStartFri, setTimeStartFri] = useState('');
  const [timeEndFri, setTimeEndFri] = useState('');
  const [timeStartSat, setTimeStartSat] = useState('');
  const [timeEndSat, setTimeEndSat] = useState('');
  const [timeStartSun, setTimeStartSun] = useState('');
  const [timeEndSun, setTimeEndSun] = useState('');

  const [selectedCategory, setSelectedCategory] = useState('');
  const [isPostOpen, setIsPostOpen] = useState(false);

  const handlePostCodeComplete = (data) => {
    setAddress(data.address);
    setIsPostOpen(false);
  };

  const openPostCode = () => {
    setIsPostOpen(true);
  };

  const onChange = (e) => {
    setAddrDetail(e.target.value);
  };

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const navigate = useNavigate();
  const goToStoreOwnerMain = () => {
    navigate("/StoreOwnerMain");
  };
  return (
    <div className="StoreRegist">
      <div className="StoreRegistBack">
        <LoginPageNav/>
        <div className="SR-container">
          <div className="SR-allcontentcontainer">
            <div className="SR-leftcontentcontainer">
              <div className="SR-container-11">가게 등록</div>
              <div className="SR-frame-550">
                <div className="SR-frame-524">
                  <div className="SR-container-1">업체명</div>
                  <input className="SR-frame-406"
                         placeholder="업체명을 입력해주세요."
                         value={storeName}
                         onChange={(e) => setStoreName(e.target.value)}/>
                  {/*  <div className="SR-container-2">업체명을 입력해주세요.</div>*/}
                  {/*</input>*/}
                </div>
                {/*<div className="SR-frame-526">*/}
                {/*  <div className="SR-container-3">업종</div>*/}
                {/*  <div className="SR-frame-512">*/}
                {/*    <div className="SR-container-4">카테고리</div>*/}
                {/*    /!*<img className="SR-group-131" src={sort} alt={""} />*!/*/}
                {/*  </div>*/}
                {/*</div>*/}
                <div className="SR-frame-526">
                  <div className="SR-container-3">업종</div>
                    <select className="SR-frame-512" value={selectedCategory} onChange={handleChange}>
                      {options.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                      ))}
                    </select>
                </div>
                <div className="SR-frame-529">
                  <div className="SR-container-5">업체 전화번호</div>
                  <div className="SR-frame-528">
                    <div className="SR-frame-513">
                      <div className="SR-container-6">
                        ‘-’빼고 숫자만 입력해주세요
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SR-frame-533">
                  <div className="SR-container-7">업체 주소</div>
                  <div>
                    <div className="SR-frame-531">
                      <div className="SR-container-8">
                        <input
                              type="text"
                              value={address}
                              readOnly
                              className="SR-frame-515"
                              placeholder="도로명, 지번, 건물명 검색"
                              autoComplete="address"
                        />
                      </div>
                      <button onClick={openPostCode} className="SR-frame-516">
                        검색
                      </button>
                    </div>
                    <input
                        onChange={onChange}
                        name="addrDetail"
                        value={addrDetail}
                        className="SR-frame-5171"
                    />
                    {isPostOpen && (
                        <div style={{
                          display: 'block',
                          position: 'absolute',
                          top: '100px',
                          zIndex: '100',
                          border: '1px solid',
                          backgroundColor: '#ffffff'
                        }}>
                          <DaumPostcode
                              onComplete={handlePostCodeComplete}
                              width={600}
                              height={450}
                              style={{display: 'block'}}
                          />
                          <button type="button" onClick={() => setIsPostOpen(false)}
                                  style={{margin: '0 0 10px 10px', cursor: 'pointer'}}>
                            닫기
                          </button>
                        </div>
                    )}
                  </div>
                  {/*<div className="SR-frame-531">*/}
                  {/*  <div className="SR-frame-515">*/}
                  {/*    <div className="SR-container-8">*/}
                  {/*      도로명, 지번, 건물명 검색*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*  <div className="SR-frame-516">*/}
                  {/*    <div className="SR-container-9">검색</div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="SR-frame-532">*/}
                  {/*  <div className="SR-frame-517">*/}
                  {/*    <div className="SR-container-10">*/}
                  {/*      경기도 수원시 영통구 광교산로 154-42*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="SR-frame-5331">*/}
                  {/*  <div className="SR-frame-5171">*/}
                  {/*    <div className="SR-container-12">*/}
                  {/*      동, 호수와 같은 상세 주소 입력*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
                <div className="SR-frame-548">
                  <div className="SR-sns">업체 SNS</div>
                  <div className="SR-frame-547">
                    <div className="SR-frame-407">
                      <div className="SR-url">URL을 입력해주세요.</div>
                    </div>
                    <div className="SR-frame-537">
                      <div className="SR-container-13">추가</div>
                    </div>
                  </div>
                  <div className="SR-frame-5281">
                    <div className="SR-frame-5131">
                      <div className="SR-www-booksly-com">www.booksly.com</div>
                    </div>
                  </div>
                </div>
                <div className="SR-frame-549">
                  <div className="SR-container-14">자동 예약 확정</div>
                  <div className="SR-frame-133">
                    <div className="SR-frame-317">
                      <div className="SR-container-15">예</div>
                    </div>
                    <div className="SR-frame-318">
                      <div className="SR-container-16">아니오</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="SR-rightcontentcontainer">
              <div className="SR-frame-574">
                <div className="SR-frame-572">
                  <div className="SR-frame-571">
                    <div className="SR-container-17">업체 영업시간</div>
                    <div className="SR-container-18">
                      : 선택한 요일과 기입한 시간이 영업 시간으로 표시됩니다.
                    </div>
                  </div>
                  <div className="SR-frame-569">
                    <div className="SR-container-24"></div>
                    <div className="SR-frame-558">
                      <div className="SR-frame-254">
                        <div className="SR-frame-251">
                        <div className="SR-container-19">월</div>
                        </div>
                        <div className="SR-frame-253">
                          <div className="SR-frame-249">
                            <div className="SR-container-20">10:00</div>
                          </div>
                          <div className="SR-container-21">~</div>
                          <div className="SR-frame-250">
                            <div className="SR-container-22">20:00</div>
                          </div>
                        </div>
                        <div className="SR-frame-319">
                          <div className="SR-container-23">휴무</div>
                        </div>
                      </div>
                      <div className="SR-frame-551">
                        <div className="SR-frame-2511">
                          <div className="SR-container-25">화</div>
                        </div>
                        <div className="SR-frame-2531">
                          <div className="SR-frame-2491">
                            <div className="SR-container-26">10:00</div>
                          </div>
                          <div className="SR-container-27">~</div>
                          <div className="SR-frame-2501">
                            <div className="SR-container-28">20:00</div>
                          </div>
                        </div>
                        <div className="SR-frame-3191">
                          <div className="SR-container-29">휴무</div>
                        </div>
                      </div>
                      <div className="SR-frame-552">
                        <div className="SR-frame-2512">
                          <div className="SR-container-30">수</div>
                        </div>
                        <div className="SR-frame-2532">
                          <div className="SR-frame-2492">
                            <div className="SR-container-31">10:00</div>
                          </div>
                          <div className="SR-container-32">~</div>
                          <div className="SR-frame-2502">
                            <div className="SR-container-33">20:00</div>
                          </div>
                        </div>
                        <div className="SR-frame-3192">
                          <div className="SR-container-34">휴무</div>
                        </div>
                      </div>
                      <div className="SR-frame-553">
                        <div className="SR-frame-2513">
                          <div className="SR-container-35">목</div>
                        </div>
                        <div className="SR-frame-2533">
                          <div className="SR-frame-2493">
                            <div className="SR-container-36">10:00</div>
                          </div>
                          <div className="SR-container-37">~</div>
                          <div className="SR-frame-2503">
                            <div className="SR-container-38">20:00</div>
                          </div>
                        </div>
                        <div className="SR-frame-3193">
                          <div className="SR-container-39">휴무</div>
                        </div>
                      </div>
                      <div className="SR-frame-554">
                        <div className="SR-frame-2514">
                          <div className="SR-container-40">금</div>
                        </div>
                        <div className="SR-frame-2534">
                          <div className="SR-frame-2494">
                            <div className="SR-container-41">10:00</div>
                          </div>
                          <div className="SR-container-42">~</div>
                          <div className="SR-frame-2504">
                            <div className="SR-container-43">20:00</div>
                          </div>
                        </div>
                        <div className="SR-frame-3194">
                          <div className="SR-container-44">휴무</div>
                        </div>
                      </div>
                      <div className="SR-frame-5521">
                        <div className="SR-frame-2515">
                          <div className="SR-container-45">토</div>
                        </div>
                        <div className="SR-frame-2535">
                          <div className="SR-frame-2495">
                            <div className="SR-container-46">10:00</div>
                          </div>
                          <div className="SR-container-47">~</div>
                          <div className="SR-frame-2505">
                            <div className="SR-container-48">20:00</div>
                          </div>
                        </div>
                        <div className="SR-frame-3195">
                          <div className="SR-container-49">휴무</div>
                        </div>
                      </div>
                      <div className="SR-frame-555">
                        <div className="SR-frame-2516">
                          <div className="SR-container-50">일</div>
                        </div>
                        <div className="SR-frame-2536">
                          <div className="SR-frame-2496">
                            <div className="SR-container-51">10:00</div>
                          </div>
                          <div className="SR-container-52">~</div>
                          <div className="SR-frame-2506">
                            <div className="SR-container-53">20:00</div>
                          </div>
                        </div>
                        <div className="SR-frame-3196">
                          <div className="SR-container-54">휴무</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SR-frame-560">
                  <div className="SR-frame-5501">
                    <div className="SR-container-55">예약 모집 시간 단위</div>
                  </div>
                  <div className="SR-frame-559">
                    <div className="SR-frame-5121">
                      <div className="SR-container-56">시</div>
                      <img className="SR-group-132" src={sort} alt={""} />
                    </div>
                    <div className="SR-frame-514">
                      <div className="SR-container-64">분</div>
                      <img className="SR-group-1311" src={sort} alt={""} />
                    </div>
                  </div>
                </div>
                <div className="SR-frame-567">
                  <div className="SR-container-57">업체 소개글</div>
                  <div className="SR-frame-566">
                    <div className="SR-frame-4071">
                      <div className="SR-container-58">
                        업체 소개 글을 입력해주세요.
                      </div>
                    </div>
                    <div className="SR-frame-109">
                      <div className="SR-container-59">0자</div>
                      <div className="SR-container-60">/</div>
                      <div className="SR-container-61">150자</div>
                    </div>
                  </div>
                </div>
                <div className="SR-frame-573">
                  <div className="SR-container-62">업체 대표 이미지</div>
                  <div className="SR-frame-568">
                    <img className="SR-vector-2" src={storeimgadd} alt={""} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="SR-frame-536">
            <button
              className="SR-frame-StoreRegistFinButton"
              onClick={goToStoreOwnerMain}
            >등록 완료
              {/*<div className="SR-container-63">등록 완료</div>*/}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
