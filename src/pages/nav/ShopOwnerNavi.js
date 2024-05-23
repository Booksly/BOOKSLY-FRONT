import './ShopOwnerNavi.css'
import React from 'react';
import ShopOwnerLeftNavi from "./ShopOwnerLeftNavi";
import ShopOwnerTopNavi from "./ShopOwnerTopNavi";

export default function ShopOwnerNavi() {
    return (
        <div className="ShopOwnerNavi">
            <div className="ShopOwnerNaviBack">
                <ShopOwnerLeftNavi/>
                <ShopOwnerTopNavi/>
            </div>
        </div>
    );
}