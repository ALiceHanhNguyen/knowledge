import { ADD_FETCHED_DATA_CATEGORY, SEARCH_QUESTION_DATA } from './../actions';
import { topicModel } from './../models';

export default function categoryReducer(state = [], action) {
    switch (action.type) {
        case ADD_FETCHED_DATA_CATEGORY: {
        	const data = action.payload.results.bindings;
            return topicModel(data);
        }
        case SEARCH_QUESTION_DATA: {
            return { ...state, answer: action.payload.results.bindings };
        }
        default:
            return state;
    }
}
