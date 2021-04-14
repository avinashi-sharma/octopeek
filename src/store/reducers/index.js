import { combineReducers } from 'redux';
import appReducer from './adminActions';
import LoginReducer from './loginReducer'
// import reducers from the reducers export all, making this as root reducer
// export default combineReducers({
// })
export default combineReducers({
    appReducer,
    LoginReducer
});