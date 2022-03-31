import { categoryService } from './../services';
import {removeAccents, URI, keyURIType} from '../const';


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
    uris = uris.filter(i => {
        return i.names && i.names.length > 2 ? i : null;
    });
    uris.sort(function (a, b) {
        return b.names.length - a.names.length;
    });
    const result = (uris || []).map(i => i.uri);
    return result;
}

const searchFullKey = (qs, array) => {
    const arr = (array || []).filter(item => item.name === qs);
    return arr && arr.length ? arr.map(i => i.uri) : null;
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
    let uris = [], results;
    const noiDungQs = questions.filter(i => i.uri.indexOf(keyURIType.noidung) !== -1);
    results = searchFullKey(question, noiDungQs);
    if (!results) {
        const hinhHocQs = questions.filter(i => i.uri.indexOf(keyURIType.hinhhoc) !== -1);
        results = searchFullKey(question, hinhHocQs);
        if (!results) {
            const khoiLopQs = questions.filter(i => i.uri.indexOf(keyURIType.khoilop) !== -1);
            results = searchFullKey(question, khoiLopQs);
            if (!results) {
                const chuyenDeQs = questions.filter(i => i.uri.indexOf(keyURIType.chuyende) !== -1);
                results = searchFullKey(question, chuyenDeQs);
                if (!results) {
                    const nhomKienThucQs = questions.filter(i => i.uri.indexOf(keyURIType.nhomkienthuc) !== -1);
                    results = searchFullKey(question, nhomKienThucQs);
                    if (!results) {
                        const kienThucQs = questions.filter(i => i.uri.indexOf(keyURIType.kienthuc) !== -1);
                        results = searchFullKey(question, kienThucQs);
                        if (!results) {
                            const arr2 = (keywords || []).filter(item => question.indexOf(item.name) !== -1);
                            if (arr2 && arr2.length > 0) {
                                results = groupNameByURI(arr2, uris);
                            }
                        }
                    }
                }
            }
        }
    }
    return [...new Set(results)];
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