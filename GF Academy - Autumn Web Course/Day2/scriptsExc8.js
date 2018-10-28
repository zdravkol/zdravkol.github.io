let NumOrder = [3,2,5,1,8];
console.log(NumOrder);
function myOrder() {
    NumOrder.sort(function(a, b){return a-b});
    NumOrder.forEach(cell => {
        console.log(cell)
    })
}
 console.log(myOrder());

