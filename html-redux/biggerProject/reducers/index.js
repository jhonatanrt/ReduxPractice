// step 2.2
function combineReducer(currentState, action) { // REDUCER
    var DEFAULT_STATE = {count:0, sum:3};
    console.group('REDUCER');
    var nextState = Object.assign({}, currentState);
    console.log('current STATE == ', currentState);
    
    nextState = {
        count   : counter(nextState.count, action),
        sum     : sum(nextState.sum, action)
    }
    return nextState
    
}
// ~end step 2.2