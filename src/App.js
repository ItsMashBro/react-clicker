import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';

export default App = () => {
    return (
        <div>
            <div>
                <Navbar/>
                <Outlet/>
            </div>
        </div>
    )
}