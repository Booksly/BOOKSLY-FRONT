import StoreOwnerLeftNavi from "../nav/StoreOwnerLeftNavi";
import StoreOwnerTopNavi from "../nav/StoreOwnerTopNavi";
import { useState } from "react";
import './RegisterLastEvent.css'

export default function RegisterLastEvent() {
    const data_staffs = ["제이원장", "심화 디자이너", "캡 디자이너"];
    const [selectedStaff, setSelectedStaff] = useState(null);
    const handleStaffClick = (index) => {
        setSelectedStaff(index);
    };

    


    return(
        <div className="StoreOwnerMain">
                <div className="StoreOwnerMainBack">
                    <StoreOwnerLeftNavi/>
                    <div className="SOMcontainerAll">
                        <StoreOwnerTopNavi/>
                        <div className="SOMcontainer">
                            <div className="Last_Event_options">
                                <div className='reserve_select_option'>
                                    <div className='reserve_title'>직원 선택</div>
                                    <div className='option_boxs_row'>
                                    {data_staffs.map((staff, index) => (
                                        <div
                                        key={index}
                                        className={`staff_box ${selectedStaff === index ? 'isSelect' : ''}`}
                                        onClick={() => handleStaffClick(index)}
                                        >
                                            <div className='staff_name'>{staff}</div>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='reserve_select_option'>
                                    <div className='reserve_title'>이벤트 문구</div>
                                    <div className='option_boxs_row'>
                                        <input type="text" value={"지금 예약시 20% 할인 행사"}></input>
                                    </div>
                                </div>
                                <div className='reserve_select_option'>
                                    <div className='reserve_title'>직원 선택</div>
                                    <div className='option_boxs_row'>
                                        <input type="text" value={"20"}></input>%
                                    </div>
                                </div>
                                <div className='reserve_select_option'>
                                    <div className='reserve_title'>메뉴 선택</div>
                                    <div className='option_boxs_row'>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

