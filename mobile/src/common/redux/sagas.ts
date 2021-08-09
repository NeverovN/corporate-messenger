import { takeEvery, call, fork } from 'redux-saga/effects';
import { save, remove } from './reducers/savedMessage';
import { toggle, set } from './reducers/currentTheme';

function* watchMessageSave() {
  yield takeEvery('SAVE_MESSAGE', setMessageSave);
}

function* setMessageSave(action: any) {
  yield call(save, action);
}

function* watchMessageRemove() {
  yield takeEvery('REMOVE_MESSAGE', setMessageRemove);
}

function* setMessageRemove() {
  yield call(remove);
}

function* watchToggleTheme() {
  yield takeEvery('TOGGLE_THEME', setToggleTheme);
}

function* setToggleTheme() {
  yield call(toggle);
}

function* watchSetTheme() {
  yield takeEvery('SET_THEME', setSetTheme);
}

function* setSetTheme(action: 'light' | 'dark') {
  yield call(set, action);
}

export default function* rootSaga() {
  yield fork(watchMessageSave);
  yield fork(watchMessageRemove);
  yield fork(watchToggleTheme);
  yield fork(watchSetTheme);
}
