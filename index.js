// Your code here
const mapToNegativize = function(arr){
   let emptyArr = []
   arr.forEach(ar=>{
       emptyArr.push(ar*-1);

   })
   return emptyArr;
}
const mapToNoChange = function(arr){
  let emptyArr = []
  arr.forEach(ar=>{
      emptyArr.push(ar);

  })
  return emptyArr;
}
const mapToDouble = function(arr){
  let emptyArr = []
  arr.forEach(ar=>{
      emptyArr.push(ar*2);

  })
  return emptyArr;
}
const mapToSquare = function(arr){
  let emptyArr = []
  arr.forEach(ar=>{
      emptyArr.push(ar*ar);

  })
  return emptyArr;
}
const reduceToTotal = function(arr,t=0){
let em = []
arr.forEach(ar=>{
em.push(ar+ar);

})
return em[arr.length-1]+t;
}

const reduceToAllTrue = function(arry) {
  return arry.every(checked);
}
function checked(r){
  return r ? true: false;
}

const reduceToAnyTrue = function(arry) {
  return arry.some(checked);
}
function checked(r){
  return r ? true: false;
}
