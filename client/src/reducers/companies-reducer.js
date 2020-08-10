const initialState = {
    companies: null,
    status:"idle"
}

const companiesReducer = (state = initialState, action)=> {
    switch(action.type) {
        case 'REQUEST_COMPANIES' : {
            return { ...state, status: "loading" }
        }
        case 'RECEIVE_COMPANIES' : {
            return {
                ...state,
                items : action.companies,
                status: 'idle'
            }
        }
        case 'RECEIVE_COMPANIES_ERROR' : {
            return { ...state, status: "error" }
        }
        default: return state
    }
}

export default companiesReducer;

// helpers
// here the state refers to the global state with all the reducers combined
// get an array with all the companies
export const getCompaniesArray = (state) => state.companies.companies;
// get the status
export const getCompaniesArrayStatus = (state) => state.companies.status;