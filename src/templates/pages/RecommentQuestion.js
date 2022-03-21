import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {Footer, TopHeader, SearchSession, TopicsSession, QuestionsSession} from '../components';
import {global, validateInput, convertURIToPhrase, URI, CUM_TU} from '../../const';

import banner from './../../public/static/images/banner.jpg';

const mapStateToProps = state => {
  return {
    data: state.homeData,
    category: state.categoryData
  };
};

class RecommentQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionPhrase: '',
      questionURI: '',
      type: null,
      redirect: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findByURI = this.findByURI.bind(this);
    this.findByNavigation = this.findByNavigation.bind(this);
  }

  handleChange(event) {
    this.setState({
      questionPhrase: validateInput.test(event.target.value) ? '' : event.target.value,
      questionURI: validateInput.test(event.target.value) ? '' : event.target.value});
  }

  handleSubmit(event) {
    if (this.state.questionPhrase) {
      this.setState({
        redirect: '/category',
        type: CUM_TU
      });
    }
    event.preventDefault();
  }
  findByNavigation(value) {
    if (value && value !== '/' && value !== global['header.user.question']) {
        const {category} = this.props;
        this.setState({
          questionPhrase: convertURIToPhrase(value, category ? category.questions : []),
          questionURI: value,
          redirect: '/category',
          type: URI
        })
    }
  }
  findByURI(e, value) {
    e.preventDefault();
    this.findByNavigation(value);
  }

  render() {
    const { data } = this.props;
    const { questionPhrase, redirect, type, questionURI } = this.state;
    if (data.length <= 0) {
      return null;
    }
    if (redirect) {
      return <Redirect to={{ pathname: redirect, state: { question: questionURI, type } }} />
    }
    const { questions, categories } = data;
    return (
      <div className='site-content'>
        <div className='top-header-content'>
          <TopHeader categories={categories} findByNavigation={ this.findByNavigation }/>
        </div>
        <div className='hero-content'>
          <h1>{ global['nomatch.banner.text.first'] }<br /><strong>{ global['nomatch.banner.text.second'] }</strong></h1>
        </div>
        <header className='hero mb-30' style={{backgroundImage: 'url(' + banner + ')'}}>
          <SearchSession value={ questionPhrase } handleSubmit={ this.handleSubmit } handleChange={ this.handleChange } />
        </header>
        <main className='main-content'>
            <QuestionsSession questions={questions} findTopicFollowAskQuestionSession={ this.findByURI }/>
            <TopicsSession categories={categories} findTopicFollowTopicSession={this.findByURI} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(RecommentQuestion);
