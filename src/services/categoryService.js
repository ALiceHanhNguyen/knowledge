import axios from 'axios';
import { returnSparqlUrl, getUrls } from './';

export const categoryService = { get, getAnswerQuestion };

const urls = getUrls();

const urlOwl = returnSparqlUrl(urls.staticData);
function get() {
    return axios.get(urlOwl).then((response) => {
       return response;
    }).catch((err)=>{
       console.log(err);
    })
}
function getAnswerQuestion(question) {
	return axios.get(returnSparqlUrl(urls.phepDoiHinh)).then((response) => {
       return response;
    }).catch((err)=>{
       console.log(err);
    });
}