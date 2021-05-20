const ank = (arr) => {
    var c;
    var len = arr.length;
    var store = [];
    var obj = {};
    for(c=0 ; c<len ; c++){
        obj[arr[c]] = 0;
    }
    for(c in obj){
        store.push(c)
    }
    return store;
}

var my = [0,1,2,3,4,5,6,7,7,8,9,10,9,6,5,4,7,8,8,5,3,2,1,4,5,6,9,8,7,1,0,1,4,10,11,10,44,55,44,88,66,33,31,63,55,88,66,78,96,66,31];
console.log(ank(my));