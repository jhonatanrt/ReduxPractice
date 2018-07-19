
export default (currentState, action) => {
  var DEFAULT_STATE = { data: [], loading: 'please click random images'};
  var nextState = Object.assign({}, currentState);
  if(currentState === undefined){
    nextState = DEFAULT_STATE;
    return nextState;
  }
  switch (action.type) {
    case 'IMAGES':
    // functionWithError();
      nextState.result = action.data;
      nextState.loading = false;
      return nextState;
    case 'IMAGES_LOADING':
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
