import { takeEvery, call, fork } from 'redux-saga/effects';
import { save, remove } from './slices/savedMessage';

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

export default function* rootSaga() {
  yield fork(watchMessageSave);
  yield fork(watchMessageRemove);
}
