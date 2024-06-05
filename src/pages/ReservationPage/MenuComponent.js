import React, { useState } from 'react';
import './MenuComponent.css';
import checkNon from '../../assets/checkNon.png';
import checkSelect from '../../assets/checkSelect.png';
import { shops } from '../../data/detail-store/dummy';

export default function MenuComponent() {
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [selectedServices, setSelectedServices] = useState([]);

    // 제롬헤어 샵의 데이터를 가져옴
    const shop = shops[0];

    const menuItems = [
        { id: 1, label: "이벤트" },
        ...shop.menuCategories.map((category, index) => ({
            id: index + 2,
            label: category.categoryName
        }))
    ];

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
