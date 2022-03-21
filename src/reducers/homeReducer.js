import { GET_HOME_DATA } from './../actions';
import { featureModel, knowledgeModel, categoryModel, groupCategoryByGrade } from './../models';

export default function homeReducer(state = [], action) {
    switch (action.type) {
        case GET_HOME_DATA: {
        	const data = action.payload;
            const categoriesRaw = categoryModel(data.categories);
            const features = featureModel(data.features);
            const questions = knowledgeModel(data.questions);
            const categories = groupCategoryByGrade(categoriesRaw);
            return { ...state, categories, features, questions };
        }
        default:
            return state;
    }
}
