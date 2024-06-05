import React, { useState } from 'react';
import './MenuComponent.css';
import checkNon from '../../assets/checkNon.png';
import checkSelect from '../../assets/checkSelect.png';

export default function MenuComponent() {
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [selectedServices, setSelectedServices] = useState([]);

    const menuItems = [
        { id: 1, label: "이벤트" },
        { id: 2, label: "커트" },
        { id: 3, label: "펌" },
        { id: 4, label: "염색" },
        // 추가적인 항목들이 여기에 추가될 수 있습니다.
    ];

    const services = {
        2: [
            { id: 1, label: "여성 컷", price: "30,000" },
            { id: 2, label: "남성 컷", price: "25,000" },
        ],
        3: [
            { id: 3, label: "기본 펌", price: "50,000" },
            { id: 4, label: "매직 펌", price: "70,000" },
        ],
        4: [
            { id: 5, label: "염색", price: "40,000" },
            { id: 6, label: "탈색", price: "60,000" },
        ],
    };

    const handleMenuClick = (menuId) => {
        setSelectedMenu(menuId);
    };

    const handleServiceClick = (service) => {
        setSelectedServices(prevSelectedServices => {
            if (prevSelectedServices.some(s => s.id === service.id)) {
                return prevSelectedServices.filter(s => s.id !== service.id);
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
                            key={service.id}
                            className={`MC-frame-service ${selectedServices.some(s => s.id === service.id) ? "MC-selected" : ""}`}
                            onClick={() => handleServiceClick(service)}
                        >
                            <div className="MC-iconoirpage-down">
                                <img
                                    className="MC-group"
                                    src={selectedServices.some(s => s.id === service.id) ? checkSelect : checkNon}
                                    alt=""
                                />
                            </div>
                            <div className="MC-frame-697">
                                <div className="MC-container">
                                    {service.label}
                                </div>
                                <div className="MC-container">
                                    {service.price}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="MC-frame-699">
                    {selectedServices.map((service, index) => (
                        <span key={index} className="MC-selected-service">
                            {service.label}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
