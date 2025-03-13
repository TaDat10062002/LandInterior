import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import About from '../pages/About';

export default function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='' element={<About />} />
                </Route>
            </Routes>
        </>
    );
}
