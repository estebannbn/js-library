function updateInventory(arr1, arr2) {

    //storing items in arr1
    arr1.forEach( curItem => {
        arr2.forEach( newItem => {
            // update current existing quantities
            if(curItem[1] === newItem[1]){
                curItem[0] += newItem[0]
            }
        })
    })
    // storing new items in arr1
    arr2.forEach( newItem => {
        let isIn = false
        arr1.forEach(curItem => {
            if(curItem[1]===newItem[1]){
                isIn = true
            }
            if(!(curItem[1]===newItem[1]) && !isIn && curItem === arr1[arr1.length-1]){
                arr1.push(newItem)
            }
        })
        if(arr1.length===0){
            arr1.push(newItem)
        }
    })

    // delete empty arrays
    function isEmpty(value){
        return value === [] ? true : false
    }
    arr1.filter(isEmpty)

    console.log(arr1)
    //order items in arr1
    function compareFunction(a,b){
        if(a[1]===b[1]){
            return 0
        }else{
            return a[1] < b[1] ? -1 : 1
        }
    }
    arr1.sort(compareFunction)
    console.log(arr1.length)
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);