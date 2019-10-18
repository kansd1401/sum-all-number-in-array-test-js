function sumItems(array) {
  let sum =0;
  for(num of array){
    if(Array.isArray(num)){
        sum+=sumItems(num)
    }
    else{
      sum+=num 
    }
  }
  return sum
}

module.exports = sumItems;