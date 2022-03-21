import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Footer from './../components/global/Footer';
import TopHeader from './../components/global/TopHeader';

import SearchSession from './../components/SearchSession';
import TopicsSession from './../components/TopicsSession';
import AskQuestionsSession from './../components/AskQuestionsSession';

import { USERS } from './../const/role';
import {global, user, validateInput} from './../const/properties';

import banner from './../../public/static/images/banner.jpg';

const mapStateToProps = state => {
  return {
    data: state.homeData
  };
};

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      redirect: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findTopicFollowKeyword = this.findTopicFollowKeyword.bind(this);
    this.findTopicFollowNavigation = this.findTopicFollowNavigation.bind(this);
  }

  handleChange(event) {
    this.setState({value: validateInput.test(event.target.value) ? '' : event.target.value});
  }

  handleSubmit(event) {
    if (this.state.value) {
      this.setState({
        redirect: "/category"
      });
    }
    event.preventDefault();
  }
  findTopicFollowKeyword(e, value) {
    e.preventDefault();
    if (value && value !== '/') {
      this.setState({
        value: value,
        redirect: "/category"
      })
    }
  }
  findTopicFollowNavigation(value) {
    if (value && value !== '/') {
      this.setState({
        value: value,
        redirect: "/category"
      })
    }
  }
  render() {
    const { data } = this.props;
    const { value, redirect } = this.state;
    if (data.length <= 0) {
      return null;
    }
    if (redirect) {
      return <Redirect to={{ pathname: redirect, state: { question: value } }} />
    }
    const { features, questions, categories } = data;
    return (
      <div className="site-content">
        <div className='top-header-content'>
          <TopHeader categories={categories} findTopicFollowNavigation={ this.findTopicFollowNavigation } role={ USERS }/>
        </div>
        <div className="hero-content">
          <h1>{ global['nomatch.banner.text.first'] }<br /><strong>{ global['nomatch.banner.text.second'] }</strong></h1>
        </div>
        <header className="hero mb-30" style={{backgroundImage: "url(" + banner + ")"}}>
          <SearchSession value={ value } handleSubmit={ this.handleSubmit } handleChange={ this.handleChange } />
        </header>
        <main className="main-content">
          <div className="fullwidth-block">
            <div className="container">
              <h2 className="section-title">{user['feature.title']}</h2><br />
              <div className="row">
                {features.map((item, index) => (
                  <div className="col-md-3 col-sm-6" key={index}>
                    <div className="feature">
                      <div className="feature-icon"><img src={process.env.PUBLIC_URL + `/images/${item.hinh_anh.value}`} alt="" className="icon" /></div>
                      <h3 className="feature-title">{item.tieu_de.value}</h3>
                      <p>{item.noi_dung.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <TopicsSession categories={categories} findTopicFollowTopicSession={this.findTopicFollowKeyword} />

          <AskQuestionsSession questions={questions} findTopicFollowAskQuestionSession={ this.findTopicFollowKeyword } />
        </main>

        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Homepage);
