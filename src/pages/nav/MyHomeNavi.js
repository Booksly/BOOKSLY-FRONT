import './MyHomeNavi.css'
import React from 'react';
import MyHomeLeftNavi from "./MyHomeLeftNavi";
import MyHomeMain from "../MyHomeMainPage/MyHomeMain";

export default function MyHomeNavi() {
    return (
        <div className="MyHomeNavi">
            <div className="MyHomeNaviBack">
                <MyHomeLeftNavi/>
                <MyHomeMain/>
            </div>
        </div>
    );
}