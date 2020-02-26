import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_TVSHOW_REQUEST, loadTvShowSuccessAction, loadTvShowFailureAction } from '../reducers/tvShow';

function loadTvShowAPI(data) { //게시글 업로드
    return axios.get(`https://api.tvmaze.com/search/shows?q=${data}`)
};

function* loadTvShow(action) {
    try {
        const result = yield call(loadTvShowAPI, action.data);
        console.log(result);
        yield put(loadTvShowSuccessAction(result.data));
    }
    catch (e) {
        console.error(e);
        yield put(loadTvShowFailureAction(e));
    }
};

function* watchLoadTvShow() {
    yield takeLatest(LOAD_TVSHOW_REQUEST, loadTvShow);
};


export default function* tvShowSaga() {
    yield all([
        fork(watchLoadTvShow),
    ]);
};