import React from 'react';
import { Link } from 'react-router-dom';

import {DisplayContent} from '../components';
import {user} from '../../const';

export const AskQuestionsSession = ({questions, findTopicFollowAskQuestionSession}) => (
  <div className="fullwidth-block" data-bg-color="#e6e6e6">
    <div className="container">
      <h2 className="section-title">{user['frequently.questions']}</h2><br />
      <div className="row">
        {(questions || []).map((item, index) => (
          <div className="col-md-4" key={index}>
            <dl>
              <dt><Link to="#" onClick={ (e) => findTopicFollowAskQuestionSession(e, item.kien_thuc_toan_uri) }>{item.ds_cau_hoi_goi_y[0] + '?'}</Link></dt>
              <dd className='ask-question-content'><DisplayContent content={item.dinh_nghia}></DisplayContent></dd>
            </dl>
          </div>
        ))}
      </div>
      <div className="row"><Link to='recomment-questions' className='col' style={{textAlign: "right", display: "block", fontStyle: 'italic'}}>{ user['readmore'] }</Link></div>
    </div>
  </div>
);
