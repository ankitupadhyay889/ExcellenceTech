// var nums = [0,0,1,1,0,0,0,1,0,0,1,1,1,0]
// var fi = function(nums = []) {
//     let suru = 0;
//     let chlnewala = 0;
//     for (let i = 0; i<nums.length; i++) {
//         if (nums[i] === 0) {
//             chlnewala = 0;
//         } else {
//             chlnewala++;
//         };
//         if (chlnewala > suru) suru = chlnewala;
//     };
//     return suru;
// };
// console.log(fi(nums));


var nums = [1,0,0,0,0,1,0,0,0,1]
var fi = function(nums = []) {
    let suru = 0;
    let chlnewala = 0;
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] === 0) {
            chlnewala = 0;
        } else {
            chlnewala++;
        };
        if (chlnewala > suru) suru = chlnewala;
    };
    return suru;
};
console.log(fi(nums));