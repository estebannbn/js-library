// this program returns the symmetric diffference from two or more arrays
// the symetric difference is between SETS, but args on this program should be arrays
// one can put arrays with repeated elements in the args. Repeated elements are discounted
// if in the args, we put just one array, this returns the same array (symmetric difference between the array and the empty sets)

function sym(...args) {
  let numbers = [];
  let arrays = [];
  let symmetric = [];

  //get an array of all arrays
  args.forEach( arg => {
    arrays.push(arg)
  })

  // get numbers
  arrays.forEach( array => {
    array.forEach( value => {
      if(!numbers.includes(value)){
        numbers.push(value)
      }
    })
  })

  //for each number, check if is included in an array
  // if is true, push it into the "symmetric" array
  // if is true, but it was added previously into the "symmetric" array, delete it from there
  numbers.forEach( value => {
    arrays.forEach( array => {
      if(array.includes(value)){
        if(symmetric.includes(value)){
          symmetric.splice(symmetric.indexOf(value),1)
        }else{
          symmetric.push(value)
        }
      }
    })
  })

  // return symmetric array
  console.log(symmetric)
  return symmetric;
}

sym([1, 2, 3], [5, 2, 1, 4]);