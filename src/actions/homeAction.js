import { homeService } from './../services';

export const GET_HOME_DATA = 'GET_HOME_DATA';

export const fetchHomeData = () => {
    return (dispatch) => {
        homeService.get()
            .then(response => {
                dispatch({
                    type: GET_HOME_DATA,
                    payload: response
                })
            });
        };
};
