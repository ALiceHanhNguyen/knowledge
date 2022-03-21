import { GET_CATEGORY_DATA, SEARCH_QUESTION_DATA } from './../actions';
import {keywordAndQuestionModel, answerModel} from './../models';
export default function categoryReducer(state = [], action) {
    switch (action.type) {
        case GET_CATEGORY_DATA: {
        	const data = action.payload;
            const keywords = keywordAndQuestionModel(data.keywords);
            const questions = keywordAndQuestionModel(data.questions);
            return { ...state, keywords, questions };
        }
        case SEARCH_QUESTION_DATA: {
            let answers = (action.payload || []).map(i => answerModel(i.data));
            answers = answers.filter(function( element ) {
                return element !== undefined;
            });
            return {...state, answers};
        }
        default:
            return state;
    }
}
