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

    // //가게 Hot_Place 정보
    // const stores = [
    //     { name: "제이제이 헤어", image: Image1, rating: 4.4, category: "헤어" },
    //     { name: "네일 샵", image: Image2, rating: 4.8, category: "네일" },
    //     { name: "마사지 샵", image: Image3, rating: 4.7, category: "마사지" },
    //     { name: "피부 관리", image: Image4, rating: 4.9, category: "피부" },
    //     { name: "속눈썹 샵", image: Image5, rating: 4.3, category: "속눈썹" },
    //     { name: "뷰티 샵", image: Image6, rating: 4.5, category: "뷰티" },
    //     { name: "헤어 샵", image: Image7, rating: 4.6, category: "헤어" },
    //     { name: "네일 아트", image: Image8, rating: 4.8, category: "네일" },
    //     { name: "마사지 샵", image: Image9, rating: 4.7, category: "마사지" },
    //     { name: "피부 관리", image: Image10, rating: 4.9, category: "피부" },
    // ];

    return (
        <div className='hot-place-padding'>
            <div className="recommand-title"><h1>이번주 Hot Place</h1></div>
            {/* props로 전달 */}
            <SimpleSlider stores={hotPlaces} />
        </div>
    );
}

