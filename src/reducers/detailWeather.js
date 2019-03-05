const defaultState = { weatherArr: [], venueArr: [], isLoading: false, isError: false, errMsg: '' }

export default function (state = defaultState, action) {
    switch (action.type) {
        case 'GET_DETAIL_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_DETAIL_SUCCESS':
            return {
                ...state,
                isLoading: false,
                weatherArr: [...state.weatherArr,
                    {
                    weatherArr: action.payload.detailWeather,
                    city: action.payload.city
                }],
                venueArr: [...state.venueArr,
                    {
                    venueArr: action.payload.detailVenues,
                    city: action.payload.city
                }]
            }
        case 'GET_DETAIL_ERROR':
            return {
                ...state,
                isLoading: false,
                isError: true,
                errMsg: action.payload
            }
        default:
            return state
    }
}