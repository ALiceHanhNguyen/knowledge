import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Footer from '../components/global/Footer';
import TopHeader from '../components/global/TopHeader';
import { global } from '../const/properties';

import SearchSession from '../components/SearchSession';

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
      value: '',
      redirect: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findTopicFollowNavigation = this.findTopicFollowNavigation.bind(this);
  }

  handleChange(event) {
    const format = /[`!@#$%^&*()_+\-=[\]{}'"\\|<>/~]/;
    this.setState({value: format.test(event.target.value) ? '' : event.target.value});
  }

  handleSubmit(event) {
    if (this.state.value) {
      this.setState({
        redirect: '/category'
      });
    }
    event.preventDefault();
  }
  findTopicFollowNavigation(value) {
    if (value) {
      this.setState({
        value: value,
        redirect: '/category'
      })
    }
  }
  render() {
    const { globalData } = this.props;
    if (globalData.length <= 0) {
      return null;
    }
    const { value, redirect } = this.state;
    if (redirect) {
      return <Redirect to={{ pathname: redirect, state: { question: value } }} />
    }
    const { categories } = globalData;
    return (
      <div className="site-content">
        <div className='top-header-content'>
          <TopHeader categories={categories} findTopicFollowNavigation={ this.findTopicFollowNavigation } />
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
