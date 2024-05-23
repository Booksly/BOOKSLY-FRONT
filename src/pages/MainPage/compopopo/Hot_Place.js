import SimpleSlider from "./SimpleSlider";
import './Hot_Place.css';

function Hot_Place () {
    return (
        <div className='hot-place-padding'>
            <div className="recommand-title"><h1>이번주 Hot Place</h1></div>
            <SimpleSlider/>
        </div>
    );
}

export default Hot_Place;
