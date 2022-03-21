import React, {Component} from 'react';
import { connect } from 'react-redux';

import { searchQuestion } from './../../actions';

import Footer from './../components/global/Footer';
import TopHeader from './../components/global/TopHeader';

import SearchSession from './../components/SearchSession';
import TopicsSession from './../components/TopicsSession';
import AskQuestionsSession from './../components/AskQuestionsSession';
import ResultQuestion from './../components/ResultQuestion';
import TreeContent from './../components/TreeContent';

import { USERS } from './../const/role';
import {removeAccents, validateInput} from './../const/properties';

import banner from './../../public/static/images/banner.jpg';

const mapDispatchToProps = dispatch => ({
    searchQuestion: (question) => dispatch(searchQuestion(removeAccents(question)))
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
      this.state = {
        value: props.location.state ? props.location.state.question : ''
      };
      window.history.replaceState(null, '');
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.findTopicFollowKeyword = this.findTopicFollowKeyword.bind(this);
      this.findTopicFollowNavigation = this.findTopicFollowNavigation.bind(this);
    }
    componentDidMount() {
      if (this.props.location.state && this.props.location.state.question) {
        this.props.searchQuestion(removeAccents(this.props.location.state.question));
      }
    }
    handleChange(event) {
      this.setState({value: validateInput.test(event.target.value) ? '' : event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      if (this.state.value) {
        const { searchQuestion } = this.props;
        searchQuestion(removeAccents(this.state.value));
        window.scrollTo(0, 0);
      }
    }
    findTopicFollowKeyword(event, value) {
      event.preventDefault();
      if (value && value !== '/') {
        const { searchQuestion } = this.props;
        this.setState({ value });
        searchQuestion(removeAccents(value));
        window.scrollTo(0, 0);
      }
    }
    findTopicFollowNavigation(value) {
      if (value && value !== '/') {
        const { searchQuestion } = this.props;
        this.setState({ value });
        searchQuestion(removeAccents(value));
        window.scrollTo(0, 0);
      }
    }
    render() {
        const { data, globalData } = this.props;
        const { value } = this.state;
        if (data.length <= 0 || globalData.length <= 0) {
          return null;
        }
        const { answer} = data;
        const { questions, categories } = globalData;

        return (
            <div className="site-content-category">
              <div className='top-header-content'>
                <TopHeader categories={categories} findTopicFollowNavigation={ this.findTopicFollowNavigation } role={ USERS } />
              </div>
              <header className="hero">
                <div className="fullwidth-block footer-cta" style={{backgroundImage: "url(" + banner + ")"}}>
                  <SearchSession value={ value } handleSubmit={ this.handleSubmit } handleChange={ this.handleChange } />
                </div>
              </header>
              <main className="main-content container">
                <div class="dashboard-sidebar"><TreeContent setmodalObjectContent={null}/></div>
                <div className='fullwidth-block footer-cta'>
                  { (answer || []).map((i, inx) => (
                    <ResultQuestion answer={ i ? i : {} } key={inx} />
                  )) }
                </div>
                <AskQuestionsSession questions={questions} findTopicFollowAskQuestionSession={ this.findTopicFollowKeyword } />
                <TopicsSession categories={categories} findTopicFollowTopicSession={this.findTopicFollowKeyword} />
              </main>
              <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
