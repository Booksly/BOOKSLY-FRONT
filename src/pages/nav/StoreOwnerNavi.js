import './StoreOwnerNavi.css'
import React from 'react';
import StoreOwnerLeftNavi from "./StoreOwnerLeftNavi";
import StoreOwnerTopNavi from "./StoreOwnerTopNavi";

export default function StoreOwnerNavi() {
    return (
        <div className="StoreOwnerNavi">
            <div className="StoreOwnerNaviBack">
                <StoreOwnerLeftNavi/>
                <StoreOwnerTopNavi/>
            </div>
        </div>
    );
}