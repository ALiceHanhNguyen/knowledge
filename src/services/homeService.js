import axios from 'axios';
import { returnSparqlUrl, getUrls } from './';

export const homeService = { get };

const urls = getUrls();

function get() {
   //  return axios.get(urlOwl).then((response) => {
   //     return response;
   //  }).catch((err)=>{
   //     console.log(err);
   //  })

   const requestOne = axios.get(returnSparqlUrl(urls.chuyenDeTheoKhoiLop));
   const requestTwo = axios.get(returnSparqlUrl(urls.tinhNang));
   const requestThree = axios.get(returnSparqlUrl(urls.cauHoiGoiY));
   const requestFour = axios.get(returnSparqlUrl(urls.staticData));

   return axios.all([requestOne, requestTwo, requestThree, requestFour]).then(axios.spread((...responses) => {
      return responses;
   })).catch(errors => {
      console.log(errors);
   })
}
