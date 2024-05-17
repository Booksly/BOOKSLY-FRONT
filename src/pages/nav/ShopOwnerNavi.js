import './ShopOwnerNavi.css'
import React from 'react';
import ShopOwnerLeftNavi from "./ShopOwnerLeftNavi";

export default function ShopOwnerNavi() {
    return (
        <div className="ShopOwnerNavi">
            <div className="ShopOwnerNaviBack">
                <ShopOwnerLeftNavi/>
            </div>
        </div>
    );
}