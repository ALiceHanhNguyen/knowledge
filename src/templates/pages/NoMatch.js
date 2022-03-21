import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {global, validateInput, convertURIToPhrase, URI, CUM_TU} from '../../const';
import {SearchSession, TopHeader, Footer} from '../components';

import banner from './../../public/static/images/banner.jpg';

const mapStateToProps = state => {
  return {
      globalData: state.homeData
  };
};
class NoMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionPhrase: '',
      questionURI: '',
      type: null,
      redirect: null,
      generalQuestionRdc: false
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
    if (value && value !== '/') {
      if (value === global['header.user.question']) {
        this.setState({generalQuestionRdc: true});
      } else {
        const {category} = this.props;
        this.setState({
          questionPhrase: convertURIToPhrase(value, category ? category.questions : []),
          questionURI: value,
          redirect: '/category',
          type: URI
        })
      }
    }
  }
  findByURI(e, value) {
    e.preventDefault();
    this.findByNavigation(value);
  }
  render() {
    const { globalData } = this.props;
    if (globalData.length <= 0) {
      return null;
    }
    const { questionPhrase, redirect, type, questionURI, generalQuestionRdc } = this.state;
    if (redirect) {
      return <Redirect to={{ pathname: redirect, state: { question: questionURI, type } }} />
    }
    if (generalQuestionRdc) {
      return <Redirect to={{ pathname: 'recomment-questions'}} />
    }
    const { categories } = globalData;
    return (
      <div className="site-content">
        <div className='top-header-content'>
          <TopHeader categories={categories} findByNavigation={ this.findByNavigation } />
        </div>
        <div className="hero-content">
          <h1>{ global['nomatch.banner.text.first'] }<br /><strong>{ global['nomatch.banner.text.second'] }</strong></h1>
        </div>
        <header className="hero mb-30" style={{backgroundImage: "url(" + banner + ")"}}>
          <SearchSession value={ questionPhrase } handleSubmit={ this.handleSubmit } handleChange={ this.handleChange } />
        </header>
        <main className="main-content">
          <div className="fullwidth-block">
            <div className="container">
              <h2 className="section-title">{ global['nomatch.no.found.page'] }</h2>
              <small className="section-subtitle">{ global['nomatch.recomment'] }</small>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(NoMatch);
