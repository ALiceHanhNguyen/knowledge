import React from 'react';
import { Link } from 'react-router-dom';

import {user} from '../../const';

export const QuestionsSession = ({questions, findTopicFollowAskQuestionSession}) => (
  <div className="fullwidth-block" data-bg-color="#e6e6e6">
    <div className="container">
      <h2 className="section-title">{user['frequently.questions']}</h2><br />
      <div className="row">
        {(questions || []).map((item, index) => (
          <div className="col-md-6 col-12" key={index}>
            <dl>
              <dt className='ask-question-title'><Link to="#" onClick={ (e) => findTopicFollowAskQuestionSession(e, item.uri) }>{item.name + '?'}</Link></dt>
            </dl>
          </div>
        ))}
      </div>
    </div>
  </div>
);
