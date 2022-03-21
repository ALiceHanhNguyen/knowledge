import React from 'react';
import { Link } from 'react-router-dom';

import {user} from '../../const';

export const TopicsSession = ({categories, findTopicFollowTopicSession}) => (
    <div className="fullwidth-block">
        <div className="container">
            <h2 className="section-title">{ user['object.title'] }</h2><br />
            <div className="row">
                {(categories || []).map((item, index) => (
                    <div className="col-sm-4" key={index}>
                        <div className={`pricing ${index % 2 !== 0 ? 'featured' : ''}`}>
                            <div className="pricing-header">
                                <Link to="#" onClick={ (e) => findTopicFollowTopicSession(e, item.khoi_lop_uri) }>
                                    <h3 className="pricing-title">{item.khoi_lop}</h3>
                                    <div className="price">
                                        <span className="num">{item.nhom_chuyen_de.length}<small>{ user['object.per.year'] }</small></span>
                                    </div>
                                </Link>
                            </div>
                            <div className="pricing-checklist">
                                <ul>
                                    {item.nhom_chuyen_de.map((i, ix) => (
                                        <li className="check" key={ix}>
                                            <Link to="#" onClick={ (e) => findTopicFollowTopicSession(e, i.chuyen_de_uri) }>{i.chuyen_de}</Link>
                                        </li>
                                    ))}
                                </ul>
                          </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
