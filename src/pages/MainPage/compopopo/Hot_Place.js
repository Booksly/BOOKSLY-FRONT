import SimpleSlider from "./SimpleSlider";
import './Hot_Place.css';

// 로컬 이미지 파일 import
import Image1 from './ZZ_hat.jpeg';
import Image2 from './ZZ_masage.jpeg';
import Image3 from './ZZ_nail.jpeg';
import Image4 from './Z_Image1.jpeg';
import Image5 from './Z_Image2.jpeg';
import Image6 from './ZZ_nail3.jpg';
import Image7 from './Z_Image4.jpeg';
import Image8 from './Z_Image5.jpeg';
import Image9 from './Z_Image6.jpeg';
import Image10 from './ZZ_nail2.jpeg';

import { hot_place_dummy } from "../../../data/hot-place/dummy";
import { useState } from "react";

export default function Hot_Place () {
    //더미데이터
    const [hotPlaces, setHotPlaces] = useState(hot_place_dummy);


    return (
        <div className='hot-place-padding'>
            <div className="recommand-title"><h1>이번주 Hot Place</h1></div>
            {/* props로 전달 */}
            <SimpleSlider stores={hotPlaces} />
        </div>
    );
}

