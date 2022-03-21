import React from 'react';
import { Link } from 'react-router-dom';
import DisplayContent from './DisplayContent';

import {user} from './../const/properties';

const AskQuestionsSession = ({questions, findTopicFollowAskQuestionSession}) => (
  <div className="fullwidth-block" data-bg-color="#e6e6e6">
    <div className="container">
      <h2 className="section-title">{user['frequently.questions']}</h2><br />
      <div className="row">
        {(questions || []).map((item, index) => (
          <div className="col-md-4" key={index}>
            <dl>
              <dt><Link to="#" onClick={ (e) => findTopicFollowAskQuestionSession(e, item.ds_cau_hoi_goi_y[0].value) }>{item.ds_cau_hoi_goi_y[0].value + '?'}</Link></dt>
              <dd className='ask-question-content'><DisplayContent content={item.dinh_nghia.value}></DisplayContent></dd>
            </dl>
          </div>
        ))}
      </div>
      <div className="row"><Link to="#" onClick={ (e) => findTopicFollowAskQuestionSession(e, global['readmore'])} style={{textAlign: "right", display: "block", fontStyle: 'italic'}}>{ user['readmore'] }</Link></div>
    </div>
  </div>
);

export default AskQuestionsSession;