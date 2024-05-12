// Main.js
import React from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Mainmain from './contents_in_main';

function Main() {
    return (
        <div className="main-content">
            여기는 메인 컨텐츠 입니다.
            <Mainmain/>
        </div>
    );
}

export default Main;

