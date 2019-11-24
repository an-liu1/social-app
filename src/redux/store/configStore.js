import { createStore, applyMiddleware } from 'redux'
import rootReducers from '../reducers/index'
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
// import createSagaMiddleware from 'redux-saga'
// import mySaga from '../../saga/sagas'

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
)

// // create the saga middleware
// const sagaMiddleware = createSagaMiddleware()
// // mount it on the Store
// const store = createStore(
//     rootReducers,
//   applyMiddleware(sagaMiddleware)
// )

// // then run the saga
// sagaMiddleware.run(mySaga)
export default store;