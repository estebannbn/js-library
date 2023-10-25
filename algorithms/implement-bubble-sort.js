function bubbleSort(array) {

  // bubble sort least to greatest

  for(let i=0; i< array.length; i++){
    for(let j=0; j< array.length; j++){
      if(array[j] > array[i]){
        let temp;
        temp = array[i];
        array[i] = array[j];
        array[j] = temp
      }
    }
  }

  return array;
}