import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MenuComponent.css';
import checkNon from '../../assets/checkNon.png';
import checkSelect from '../../assets/checkSelect.png';
import { shops } from '../../data/detail-store/dummy';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function MenuComponent() {
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [selectedServices, setSelectedServices] = useState([]);

    const query = useQuery();
    const shopId = parseInt(query.get('shopId'), 10);

    // shopId를 기반으로 해당 샵의 데이터를 가져옴
    const shop = shops.find(shop => shop.id === shopId);

    // 데이터가 존재하지 않을 경우 로딩 상태를 반환
    if (!shop) {
        return <div>Loading...</div>;
    }

    // "이벤트"를 항상 첫 번째 항목으로 추가하고, 나머지 메뉴 항목들을 추가
    const menuItems = [
        { id: 1, label: "이벤트" },
        ...shop.menuCategories.map((category, index) => ({
            id: index + 2,
            label: category.categoryName
        }))
    ];

    // services를 menuCategories를 기반으로 생성
    const services = shop.menuCategories.reduce((acc, category, index) => {
        acc[index + 2] = category.menus;
        return acc;
    }, {});

    const handleMenuClick = (menuId) => {
        setSelectedMenu(menuId);
    };

    const handleServiceClick = (service) => {
        setSelectedServices(prevSelectedServices => {
            if (prevSelectedServices.some(s => s.menuId === service.menuId)) {
                return prevSelectedServices.filter(s => s.menuId !== service.menuId);
            } else {
                return [...prevSelectedServices, service];
            }
        });
    };

    return (
        <div className="MenuComponent">
            <div className="MC-frame-703">
                <div className="MC-frame-696">
                    {menuItems.map(item => (
                        <button
                            key={item.id}
                            className={`MC-frame-item MC-menu-button ${selectedMenu === item.id ? 'MC-selected-menu' : ''}`}
                            onClick={() => handleMenuClick(item.id)}
                        >
                            <div className="MC-container">
                                {item.label}
                            </div>
                        </button>
                    ))}
                </div>
                <div className="MC-frame-700">
                    {selectedMenu && services[selectedMenu] && services[selectedMenu].map(service => (
                        <div
                            key={service.menuId}
                            className={`MC-frame-service ${selectedServices.some(s => s.menuId === service.menuId) ? "MC-selected" : ""}`}
                            onClick={() => handleServiceClick(service)}
                        >
                            <div className="MC-iconoirpage-down">
                                <img
                                    className="MC-group"
                                    src={selectedServices.some(s => s.menuId === service.menuId) ? checkSelect : checkNon}
                                    alt=""
                                />
                            </div>
                            <div className="MC-frame-697">
                                <div className="MC-container">
                                    {service.name}
                                </div>
                                <div className="MC-container">
                                    {service.price.toLocaleString()}원
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="MC-frame-699">
                    {selectedServices.map((service, index) => (
                        <span key={index} className="MC-selected-service">
                            {service.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
