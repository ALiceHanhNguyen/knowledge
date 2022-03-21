import axios from 'axios';
import { returnSparqlUrl, getKeywordUrls, getResultFinding } from './';

export const categoryService = { get, getAnswerQuestion };

const urls = getKeywordUrls();

function get() {
   const keywordRequest = axios.get(returnSparqlUrl(urls.tuKhoa));
   const questionRequest = axios.get(returnSparqlUrl(urls.cauHoiGoiY));

   return axios.all([keywordRequest, questionRequest]).then(axios.spread((...responses) => {
      const results = {
         keywords: responses[0].data.results.bindings,
         questions: responses[1].data.results.bindings
      }
      return results;
   })).catch(errors => {
      console.log(errors);
   });
}
function getAnswerQuestion(questions) {
   const requests = (questions || []).map(i => axios.get(returnSparqlUrl(getResultFinding(i))));
	return axios.all(requests).then(axios.spread((...responses) => {
      return responses;
   })).catch(errors => {
      console.log(errors);
   });
}