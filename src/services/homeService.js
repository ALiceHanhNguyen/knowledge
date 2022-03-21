import axios from 'axios';
import { returnSparqlUrl, getUrls } from './';

export const homeService = { get };

const urls = getUrls();

function get() {
   const requestOne = axios.get(returnSparqlUrl(urls.chuyenDeTheoKhoiLop));
   const requestTwo = axios.get(returnSparqlUrl(urls.tinhNang));
   const requestThree = axios.get(returnSparqlUrl(urls.cauHoiGoiY));

   return axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
      const results = {
         categories: responses[0].data.results.bindings,
         features: responses[1].data.results.bindings,
         questions: responses[2].data.results.bindings
      }
      return results;
   })).catch(errors => {
      console.log(errors);
   })
}
