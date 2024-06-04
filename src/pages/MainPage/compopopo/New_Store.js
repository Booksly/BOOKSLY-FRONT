import './New_Store.css'
import SimpleSlider from "./SimpleSlider";

// 로컬 이미지 파일 import
import Image1 from './ZZ_masa1.jpeg';
import Image2 from './ZZ_masage.jpeg';
import Image3 from './ZZ_masa2.jpeg';
import Image4 from './Z_Image1.jpeg';
import Image5 from './ZImage3.jpeg';
import Image6 from './ZZ_nail.jpeg';
import Image7 from './Z_Image4.jpeg';
import Image8 from './ZZ_hat.jpeg';
import Image9 from './Z_Image6.jpeg';
import Image10 from './ZZ_nail2.jpeg';

import { new_store_dummy } from "../../../data/new-store/dummy";
import { useState } from "react";

function New_Store () {

    //더미데이터
    const [newStores, setNewStores] = useState(new_store_dummy);

    return(
        <div className='new-store'>
            <div className='recommand-title'><h1>새로 입점한 STORE</h1></div>
            <SimpleSlider stores={newStores}/>
        </div>
    )
}

export default New_Store;
