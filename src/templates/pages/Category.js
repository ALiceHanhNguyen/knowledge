import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { searchQuestion } from './../../actions';
import {Footer, TopHeader, SearchSession, TopicsSession, AskQuestionsSession, ResultQuestion, TreeContent} from '../components';
import {validateInput, convertURIToPhrase, user, global, URI, CUM_TU} from '../../const';

import banner from './../../public/static/images/banner.jpg';

const mapDispatchToProps = dispatch => ({
    searchQuestion: (question, keywordList, type) => dispatch(searchQuestion(question, keywordList, type))
});

const mapStateToProps = state => {
    return {
        data: state.categoryData,
        globalData: state.homeData
    };
};
class Category extends Component {
    constructor(props) {
      super(props);
      const state = props.location.state;
      let questionURI = '', questionPhrase = '';
      if (state) {
        questionURI = state.question;
        questionPhrase = convertURIToPhrase(state.question, props.data.questions);
      }
      this.state = {questionURI, questionPhrase, generalQuestionRdc: false};
      window.history.replaceState(null, '');
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.findByURI = this.findByURI.bind(this);
      this.findByNavigation = this.findByNavigation.bind(this);
    }
    componentDidMount() {
      const {location, data, searchQuestion} = this.props;
      if (location.state && location.state.question && location.state.type && data) {
        const {question, type} = location.state;
        searchQuestion(question, data, type);
      }
    }
    handleChange(event) {
      this.setState({
        questionURI: validateInput.test(event.target.value) ? '' : event.target.value,
        questionPhrase: validateInput.test(event.target.value) ? '' : event.target.value
      });
    }

    handleSubmit(event) {
      event.preventDefault();
      const {questionPhrase, questionURI} = this.state;
      if (questionURI) {
        this.setState({type: CUM_TU});
        const { searchQuestion, data } = this.props;
        searchQuestion(questionPhrase, data, CUM_TU);
        window.scrollTo(0, 0);
      }
    }
    findByNavigation(value) {
      if (value && value !== '/') {
        if (value === global['header.user.question']) {
          this.setState({generalQuestionRdc: true});
        } else {
          const { searchQuestion, data } = this.props;
          this.setState({
            questionURI: value,
            type: URI,
            questionPhrase: convertURIToPhrase(value, data.questions)
          });
          searchQuestion(value, data, URI);
          window.scrollTo(0, 0);
        }
      }
    }
    findByURI(event, value) {
      event.preventDefault();
      this.findByNavigation(value);
    }
    render() {
        const { data, globalData } = this.props;
        const { questionPhrase, generalQuestionRdc } = this.state;
      if (generalQuestionRdc) {
          return <Redirect to={{ pathname: 'recomment-questions'}} />
        }
        if (data.length <= 0 || globalData.length <= 0) {
          return null;
        }
        const { questions, categories } = globalData;
        const { answers } = data;
        return (
            <div className="site-content site-content-category">
              <div className='top-header-content'>
                <TopHeader categories={categories} findByNavigation={ this.findByNavigation }/>
              </div>
              <header className="hero">
                <div className="fullwidth-block footer-cta" style={{backgroundImage: "url(" + banner + ")"}}>
                  <SearchSession value={ questionPhrase } handleSubmit={ this.handleSubmit } handleChange={ this.handleChange } />
                </div>
              </header>
              <main className="main-content">
                {answers && answers.length && (
                  <div className='fullwidth-block container'>
                    <h2 className='section-title'>{user.result}</h2>
                    {answers.map((item, index) => {
                      if (item.type === 'level') {
                        return (
                          <div key={index} className='dashboard-sidebar'>
                            <TreeContent data={item.data} handleClickURI={this.findByURI}/>
                          </div>
                        )
                      }
                      if (item.type === 'knowledge') {
                        return (
                          <div key={index} className='fullwidth-block'>
                            <ResultQuestion data={item} />
                          </div>
                        )
                      }
                      return item;
                    })}
                  </div>
                )}
                <AskQuestionsSession questions={questions.slice(0, 6)} findTopicFollowAskQuestionSession={ this.findByURI } />
                <TopicsSession categories={categories} findTopicFollowTopicSession={this.findByURI} />
              </main>
              <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
