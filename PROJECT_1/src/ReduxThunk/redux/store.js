import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import postsReducer from '../features/posts/postsSlice'

export const store = createStore(postsReducer, applyMiddleware(thunk))
