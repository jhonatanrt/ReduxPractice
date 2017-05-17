var decrease = function(){
    return {type: 'DECREMENT'};
}
var increase = function(){
    return {type: 'INCREMENT'};
}
var getSume = function(a,b){
    return { type: 'SUM', a:a , b:b};
}