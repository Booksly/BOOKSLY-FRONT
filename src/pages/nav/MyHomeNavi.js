import './MyHomeNavi.css'
import React from 'react';
import MyHomeLeftNavi from "./MyHomeLeftNavi";

export default function MyHomeNavi() {
    return (
        <div className="back">
            <div className="MyHomeNavi">
                <MyHomeLeftNavi/>
            </div>
        </div>
    );
}