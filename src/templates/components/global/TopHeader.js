import React from 'react';
import { Nav } from 'react-bootstrap';
import headerBanner from './../../../public/static/images/banner-header.png';
import { global } from '../../const/properties';

import {USERS} from '../../const/role';

const TopHeader = ({ categories, findTopicFollowNavigation, role=USERS }) => (
    <div className='header-top container'>
        <div className='header-banner'>
            <a href={ global['header.logo.link'] } title={ global['header.logo.name'] } rel="noopener noreferrer" target='_blank'>
                <img src={headerBanner} alt={ global['header.logo.name'] } role="presentation" />
            </a>
        </div>
        { role === USERS &&  <Nav defaultActiveKey="/"
            onSelect={(selectedKey) => findTopicFollowNavigation(selectedKey)}
        >
            <Nav.Item>
            <Nav.Link href="/">{ global['header.user.home'] }</Nav.Link>
            </Nav.Item>
            {(categories || []).map((item, index) => (
                <Nav.Item key={index}>
                    <Nav.Link eventKey={ item.khoi_lop.value }>{item.khoi_lop.value}</Nav.Link>
                </Nav.Item>
            ))}
            <Nav.Item>
            <Nav.Link eventKey={ global['header.user.question'] }>{ global['header.user.question'] }</Nav.Link>
            </Nav.Item>
        </Nav>}
    </div>
);

export default TopHeader;