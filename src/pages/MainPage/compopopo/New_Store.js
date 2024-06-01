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

function New_Store () {
    //가게 New_Store 정보
    const stores = [
        { name: "제이제이 헤어", image: Image1, rating: 4.4, category: "헤어" },
        { name: "네일 샵", image: Image2, rating: 4.8, category: "네일" },
        { name: "마사지 샵", image: Image3, rating: 4.7, category: "마사지" },
        { name: "피부 관리", image: Image4, rating: 4.9, category: "피부" },
        { name: "속눈썹 샵", image: Image5, rating: 4.3, category: "속눈썹" },
        { name: "뷰티 샵", image: Image6, rating: 4.5, category: "뷰티" },
        { name: "헤어 샵", image: Image7, rating: 4.6, category: "헤어" },
        { name: "네일 아트", image: Image8, rating: 4.8, category: "네일" },
        { name: "마사지 샵", image: Image9, rating: 4.7, category: "마사지" },
        { name: "피부 관리", image: Image10, rating: 4.9, category: "피부" },
    ];

    return(
        <div className='new-store'>
            <div className='recommand-title'><h1>새로 입점한 STORE</h1></div>
            <SimpleSlider stores={stores}/>
        </div>
    )
}

export default New_Store;
