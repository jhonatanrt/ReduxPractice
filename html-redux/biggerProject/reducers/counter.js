function counter(currentState, action){
    var DEFAULT_STATE = 0;
    if(currentState === undefined){ // look at Note 1.1
        nextState = DEFAULT_STATE; // Note 1.2
        console.log('next STATE == ', nextState);
        console.groupEnd('REDUCER');
        return nextState;
    }

    switch(action.type){
        case 'DECREMENT': // look at Note 2.1
            nextState = currentState - 1;
            console.log('next STATE == ', nextState)
            console.groupEnd('REDUCER')
            return nextState; // Note 2.2
        case 'INCREMENT': // look at Note 2.1
            nextState = currentState + 1;
            console.log('next STATE == ', nextState)
            console.groupEnd('REDUCER')
            return nextState; // Note 2.2
        default:
            nextState = currentState;
            return nextState;
    }
}