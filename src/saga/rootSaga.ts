import { all } from "redux-saga/effects";

// корневая сага
export default function* rootSaga() {
    yield all([
		// сюда будем подключать саги
		// например:
		// someSaga(),
    ])
}