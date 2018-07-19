
export default (currentState, action) => {
  var DEFAULT_STATE = { result: 0, loading: false};
  var nextState = Object.assign({}, currentState);
  if(currentState === undefined){
    nextState = DEFAULT_STATE;
    return nextState;
  }
  switch (action.type) {
    case 'INCREMENT':
    // functionWithError();
      nextState.result = currentState.result + 1;
      nextState.loading = false;
      return nextState;
    case 'DECREMENT':
      nextState.result = currentState.result - 1;
      return nextState;
    case 'INCREMENT_LOADING':
      nextState.loading = true;
      return nextState;
    default:
      nextState.result = currentState;
      return nextState;
  }
}

function functionWithError(){
  throw Error('an error from sum')
}
