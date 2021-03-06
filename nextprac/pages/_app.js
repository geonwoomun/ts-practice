import React from "react";
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux'; 
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga"; // redux-saga를 생성하기 위한 라이브러리
import withReduxSaga from 'next-redux-saga'; // next와 redux-saga를 연결하기 위한 라이브러리
import rootSaga from '../sagas'; // sagas의 index.js를 가지고온다.

const Test = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Component/>
    </Provider>
  );
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware(); // 리덕스 사가 생성
  const middlewares = [sagaMiddleware]; // 미들웨어 연결
  const enhancer = process.env.NODE_ENV === 'production' ? 
    compose(applyMiddleware(...middlewares)) : 
        composeWithDevTools(
          applyMiddleware(...middlewares)
        );
  const store = createStore(reducer, initialState, enhancer); // enhancer에 넣어서 saga가 적용된 store 생성
  store.sagaTask = sagaMiddleware.run(rootSaga); // store에 rootSaga를 넣은 sagaMiddleware를 실행시켜준다.
  return store;

}
// export default withRedux(configureStore)(Test);를 아래와 같이 변경
// next가 redux 와 redux-saga가 적용되어 돌아가게 해준다.
export default withRedux(configureStore)(withReduxSaga(Test));

