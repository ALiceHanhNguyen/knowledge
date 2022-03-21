import { categoryService } from './../services';
import {removeAccents, URI} from '../const';


export const GET_CATEGORY_DATA = 'GET_CATEGORY_DATA';
export const SEARCH_QUESTION_DATA = 'SEARCH_QUESTION_DATA';

const groupNameByURI = (arr, uris) => {
    arr.map(elm => {
        const index = uris.findIndex(i => i.uri === elm.uri);
        if (index !== -1) {
            uris[index].names.push(elm.name);
        } else {
            uris.push({
                uri: elm.uri,
                names: new Array(elm.name)
            });
        }
        return elm;
    });
    uris.sort(function (a, b) {
        return b.names.length - a.names.length;
    });
    const result = (uris || []).map(i => i.uri);
    return result;
}

const searchKeywordToFindURI = (question, keywordList) => {
    const {keywords, questions} = keywordList;
    (keywords || []).map(i => {
        i.name = removeAccents(i.name);
        return i;
    });
    (questions || []).map(i => {
        i.name = removeAccents(i.name);
        return i;
    });
    let uris = [], uris1 = [], uris2 = [];
    const arr1 = (questions || []).filter(item => item.name.indexOf(question) !== -1 || question.indexOf(item.name) !== -1);
    if (arr1 && arr1.length > 0) {
        uris1 = groupNameByURI(arr1, uris);
    }
    const arr2 = (keywords || []).filter(item => question.indexOf(item.name) !== -1);
    if (arr2 && arr2.length > 0) {
        uris2 = groupNameByURI(arr2, uris);
        uris2 = uris2.length > 3 ? uris2.slice(0, 3) : uris2;
    }
    uris = uris1.concat(uris2);
    return [...new Set(uris)];
}

export const fetchCategoryData = () => {
  return (dispatch) => {
    categoryService.get()
      .then(response => {
          dispatch({
              type: GET_CATEGORY_DATA,
              payload: response
          })
      });
  };
};
export const searchQuestion = (question, keywordList, type) => {
    let uris = [];
    if (type === URI) {
        uris.push(question);
    } else {
        uris = searchKeywordToFindURI(removeAccents(question), keywordList);
    }
    return (dispatch) => {
        categoryService.getAnswerQuestion(uris)
            .then(response => {
                dispatch({
                    type: SEARCH_QUESTION_DATA,
                    payload: response
                });
            });
        };
}