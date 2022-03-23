import React from 'react';
import { TopBar } from '../components/TopBar/TopBar';
import { NavMenu } from "../components/NavMenu/NavMenu";

import '../index.css';

const Header = () => {
    return (
        <div className='header' data-test-id='header'>
            <TopBar />
            <NavMenu />
        </div>
    )
}

export {Header};