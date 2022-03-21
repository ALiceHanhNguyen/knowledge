import { GET_HOME_DATA } from './../actions';
import { topicModel, featureModel, knowledgeModel, categoryModel, groupCategoryByGrade } from './../models';

export default function homeReducer(state = [], action) {
    switch (action.type) {
        case GET_HOME_DATA: {
        	const data = action.payload;
            const categoriesRaw = categoryModel(data[0].data.results.bindings);
            const features = featureModel(data[1].data.results.bindings);
            const questions = knowledgeModel(data[2].data.results.bindings);
            const topics = topicModel(data[3].data.results.bindings);
            const categories = groupCategoryByGrade(categoriesRaw);
            return { categories, features, questions, topics };
        }
        default:
            return state;
    }
}
