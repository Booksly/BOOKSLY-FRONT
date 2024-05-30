import React from "react";
import './StoreOwnerMainMenuCateg.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react";

export default function StoreOwnerMainMenuCateg() {
    const [key, setKey] = useState('home');
    const data_menulist = [
        {

        }
    ]

    return (
        <>
            <div className="StoreOwnerMainMenuPopup">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    transition={false}
                >
                    <Tab eventKey="home" title="메뉴 관리">
                    </Tab>
                    <Tab eventKey="Categ" title="카테고리 관리">
                    </Tab>
                </Tabs>

            </div>
        </>
    )
}