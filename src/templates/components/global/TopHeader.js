import React from 'react';
import { Nav } from 'react-bootstrap';

import headerBanner from './../../../public/static/images/banner-header.png';
import { global } from '../../../const';

export const TopHeader = ({ categories, findByNavigation}) => (
    <div className='header-top container'>
        <div className='header-banner'>
            <a href={ global['header.logo.link'] } title={ global['header.logo.name'] } rel="noopener noreferrer" target='_blank'>
                <img src={headerBanner} alt={ global['header.logo.name'] } role="presentation" />
            </a>
        </div>
        <Nav defaultActiveKey="/knowledge"
            onSelect={(selectedKey) => findByNavigation(selectedKey)}
        >
            <Nav.Item>
            <Nav.Link href="/knowledge">{ global['header.user.home'] }</Nav.Link>
            </Nav.Item>
            {(categories || []).map((item, index) => (
                <Nav.Item key={index}>
                    <Nav.Link eventKey={ item.khoi_lop_uri }>{item.khoi_lop}</Nav.Link>
                </Nav.Item>
            ))}
            <Nav.Item>
            <Nav.Link eventKey={ global['header.user.question'] }>{ global['header.user.question'] }</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
);
