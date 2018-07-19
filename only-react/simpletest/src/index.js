import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import Main from './components/Main'
import Describe from './components/Describe'
import counter from './reducers'
import { decrese, increase, loading} from './actions'
import { _fakeServerApi } from './_fakeServerApi';

//middleware
const logger = function(store){
  return function(next){
    return function(action){
      console.group('logger')
      console.log('currentState', store.getState())
      console.info('next action', action)
      next(action);
      console.log('currentState', store.getState())
      console.groupEnd('logger')
 
    }
  }
}

const crashReporter = function(store){
  return function(next){
    return function(action){
      try {
        next(action);
      } catch (error) {
        console.group('crashReporter')
        console.error('error happen with action == ', action)
        console.error(error)
        console.groupEnd('crashReporter')
      }

    }
  }
}

const thunk = function(dispatch, state){
  return function(next){
    return function(action){
      if(typeof action === 'function'){
        action(store.dispatch, store.getState());
      }
      else{
        next(action);
      }
    }
  }
}

var test = function(){
  store.dispatch(loading());
  _fakeServerApi.increaseCount(store.getState().result,
          function(data){
            store.dispatch(increase());
          }
        )
}


const store = createStore(counter, applyMiddleware(logger, crashReporter, thunk))
const rootEl = document.getElementById('root')


const render = () => ReactDOM.render(
  <Main
      value={store.getState().result}
      loading = {store.getState().loading}
      onIncrement={() => store.dispatch(increase())}
      onDecrement={() => store.dispatch(decrese())}
      onIncrementAsync={() => store.dispatch(test)}
  />,
  rootEl
)

render()
store.subscribe(render)