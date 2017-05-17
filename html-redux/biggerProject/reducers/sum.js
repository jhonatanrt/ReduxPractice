function sum(currentState, action){
    var DEFAULT_STATE = 3;
     if(currentState === undefined){ // look at Note 1.1
        nextState = DEFAULT_STATE; // Note 1.2
        console.log('next STATE == ', nextState);
        console.groupEnd('REDUCER');
        return nextState;
    }

    switch(action.type){
        case 'SUM': // look at Note2.1
            nextState = parseInt(action.a) + parseInt(action.b);
            return nextState;// Note2.2
        default:
            nextState = currenState;
            return nextState;
    }
}