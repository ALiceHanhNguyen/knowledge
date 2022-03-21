import { categoryService } from './../services';

export const ADD_FETCHED_DATA_CATEGORY = 'ADD_FETCHED_DATA_CATEGORY';
export const SEARCH_QUESTION_DATA = 'SEARCH_QUESTION_DATA';

export const fetchCategoryData = () => {
  return (dispatch) => {
    categoryService.get()
      .then(response => {
          dispatch({
              type: ADD_FETCHED_DATA_CATEGORY,
              payload: response.data
          })
      });
  };
};
export const searchQuestion = (question) => {
    return (dispatch) => {
        categoryService.getAnswerQuestion(question)
            .then(response => {
                dispatch({
                    type: SEARCH_QUESTION_DATA,
                    payload: response.data
                });
            });
        };
}